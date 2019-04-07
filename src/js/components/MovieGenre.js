import React from 'react';

function MovieGenre(props) {
        return (
            <div>
                <h1>{props.genre.name}</h1>
                <p>{props.genre.id}</p>
            </div>

        )
}

export default MovieGenre