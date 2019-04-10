import React from 'react';

export default function SingleMovie(props) {
    return(
        <div key={props.movie.id}>
            <h1>{props.movie.original_title}</h1>
            <p>{props.movie.overview}</p>
        </div>
    )
}

