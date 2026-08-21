export const MoviePreview = ({ title, image, release }) => {
    return (
        <div className="list-card-wrapper">
            <img
                className="cover-image"
                src={image}
                alt={`${title} poster`}
            />

            <div className="preview-title">
                <h1>{title}</h1>
                <p>Released {release}</p>
            </div>
        </div>
    );
};
