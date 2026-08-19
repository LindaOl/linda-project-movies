import React from "react";

export const SelectedMovie = ({ title, image, id, bg, description, rating }) => {

    return (

        <article className="DetailsWrapper">

            <div key={id} className="MovieInformation">

                <img
                    className="CoverArt"
                    src={image}
                    alt={`${title} poster`}
                />
                <h1><span className="title">{title}</span>
                    <span className="ratingContainer">
                        {rating}
                    </span>
                </h1>

                <p>{description}</p>

            </div>

        </article>

    )
}
