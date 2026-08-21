import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MovieDetails } from "../components/MovieDetails";

export const Details = () => {
    const [currentMovie, setCurrentMovie] = useState(null);
    const { id } = useParams();

    const currentMovieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=596de82380dc8db80cca1e89cfacbd51&language=en-US`;

    const getCurrentMovie = () => {
        fetch(currentMovieApi)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCurrentMovie(data);
            })
            .catch((err) => {
                console.error("Failed to fetch data", err);
            });
    };

    useEffect(() => {
        getCurrentMovie();
    }, [id]);

    if (!currentMovie) {
        return <h2>Loading...</h2>;
    }

    return (
        <section
            className="details-card"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${currentMovie.backdrop_path})`
            }}
        >

            <button onClick={() => window.history.back()}>
                Movies
            </button>

            <MovieDetails
                title={currentMovie.title}
                rating={currentMovie.vote_average.toFixed(1)}
                image={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
                description={currentMovie.overview}
            />
        </section>
    );
};
