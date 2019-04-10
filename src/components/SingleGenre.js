import React from 'react';

export default function SingleGenre(props) {
    return(
            <option 
                value={props.genre.id}
                onClick={props.OnSelect}
            >
            {props.genre.name}
            </option>
    )
}