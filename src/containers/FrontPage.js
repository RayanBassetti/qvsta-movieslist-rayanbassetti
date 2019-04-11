import React from 'react';
import './FrontPage.scss'

export default function FrontPage(props) {
    return (
        <div className="FrontPage">
            <form>
                    <p>Select a movie genre</p>
                    <select 
                        defaultValue="Select a genre"
                        genre="null" 
                        onClick={props.HandleSelect}
                    >
                        <option 
                            name="selectedGenre"
                            value="null"
                        >
                            Select a genre
                        </option>
                        {props.state.allGenres}
                    </select>
                    <p>Enter the year</p>
                    <input 
                        type="text" 
                        onChange={props.HandleSearch}
                        name="researchyear"
                        value={props.state.researchyear}
                    >
                    </input>
            </form>
            <h1>Most popular movies of : {props.state.researchyear}</h1>
            <div className="AllMovies">    
                {props.state.allMovies}
            </div>
        </div>
    )
}