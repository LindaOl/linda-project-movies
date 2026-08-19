import { useEffect, useState } from "react";
import { MovieList } from "../components/MoviePreview";
import { Link } from "react-router-dom";


export const Home = () => {
    /*state for movie list*/
    const [movies, setMovies] = useState([]);

    const movieListApi =
        "https://api.themoviedb.org/3/movie/popular?api_key=596de82380dc8db80cca1e89cfacbd51&language=en-US&page=1";


    /*fetching data from API*/
    const getDataFromApi = () => {
        console.log(movieListApi);

        fetch(movieListApi)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log("Show me:", data); /* Remove later*/
                setMovies(data.results);
            })
            .catch((err) => {
                console.error("Failed to fetch data", err);
            });
    };

    useEffect(() => {
        getDataFromApi();
    }, []);

    return (

        <section>
            <div className="CardWrapper">
                {movies.map((movie) => (
                    <article key={movie.id} className="MovieCard">
                        <Link to={`/movie/${movie.id}`}>
                            <MovieList
                                title={movie.title}
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                id={movie.id}
                                release={movie.release_date}
                            />
                        </Link>
                    </article>
                ))}
            </div>
        </section>

    )
}

