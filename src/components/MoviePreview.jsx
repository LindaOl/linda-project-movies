// https://api.themoviedb.org/3/movie/popular?api_key=596de82380dc8db80cca1e89cfacbd51&language=en-US&page=1 My api link
// 

import React from "react";


export const MovieList = ({ title, image, id, release }) => {

    return (

        <article>
            <div key={id} className="ListCardWrapper">
                <img
                    className="CoverImage"
                    src={image}
                    alt={`${title} poster`}
                />

                <div className="PreviewTitle">
                    <h2>{title}</h2>
                    <h3>{release}</h3>
                </div>

            </div>

        </article>

    )
}
