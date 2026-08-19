import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SelectedMovie } from "../components/MovieDetails";

export const Details = () => {
    const [currentMovie, setCurrentMovie] = useState(null);
    const { id } = useParams();

    console.log("Selected movie ID:", id);


    const currentMovieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=596de82380dc8db80cca1e89cfacbd51&language=en-US`;

    /*fetching data from API*/
    const getCurrentApi = () => {
        fetch(currentMovieApi)
            .then((res) => { return res.json(); })
            .then((data) => {
                setCurrentMovie(data);
                console.log("Show me:", data); /* Remove later*/

                console.log("API:", currentMovieApi);
            })
            .catch((err) => {
                console.error("Failed to fetch data", err);
            });
    };

    useEffect(() => {
        getCurrentApi();
    }, [id]);

    if (!currentMovie) {
        return <h2>Loading...</h2>;
    }

    return (
        <section className="DetailsCard" style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/w1280${currentMovie.backdrop_path}`})` }}>

            <button onClick={() => window.history.back()}>
                Movies
            </button>

            <SelectedMovie
                title={currentMovie.title}
                rating={currentMovie.vote_average.toFixed(1)}
                image={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
                description={currentMovie.overview}
            />
        </section>
    );
};
