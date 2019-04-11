import React from 'react';

export default function SingleGenre(props) {
    return(
        
            <option 
                value={props.genre.id}
            >
            {props.genre.name}
            </option>
    )
}