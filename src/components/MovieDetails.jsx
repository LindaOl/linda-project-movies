export const MovieDetails = ({ title, image, description, rating }) => {
    return (
        <article className="details-wrapper">
            <div className="movie-information">
                <img
                    className="cover-art"
                    src={image}
                    alt={`${title} poster`}
                />
                <div className="movie-text">
                    <h1>
                        <span className="title">
                            {title}
                        </span>
                        <span className="rating-container">
                            {rating}
                        </span>
                    </h1>
                    <p>{description}</p>
                </div>
            </div>
        </article>
    );
};
