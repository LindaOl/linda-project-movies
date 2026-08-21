import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MoviePreview } from "../components/MoviePreview";

export const Home = () => {
    /*state to create the movie list*/
    const [movies, setMovies] = useState([]);

    const movieListApi =
        "https://api.themoviedb.org/3/movie/popular?api_key=596de82380dc8db80cca1e89cfacbd51&language=en-US&page=1";

    const getPopularMovies = () => {
        fetch(movieListApi)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setMovies(data.results);
            })
            .catch((err) => {
                console.error("Failed to fetch data", err);
            });
    };

    useEffect(() => {
        getPopularMovies();
    }, []);

    return (

        <section>
            <div className="card-wrapper">
                {movies.map((movie) => (
                    <article key={movie.id} className="movie-card">
                        <Link
                            className="movie-link"
                            to={`/movie/${movie.id}`}
                        >
                            <MoviePreview
                                title={movie.title}
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                release={movie.release_date}
                            />
                        </Link>
                    </article>
                ))}
            </div>
        </section>

    )
}

