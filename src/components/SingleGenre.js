import React from 'react';

export default function SingleGenre(props) {
    return(
            <option 
                value={props.genre.id}
                onClick={event => props.OnSelect(event)}
            >
            {props.genre.name}
            </option>
    )
}