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
                    <p className="launchSearch" onClick={props.LaunchSearch}>Wait for it...</p>
            </form>
            <h2>20 most popular movies of chosen genre in {props.state.researchyear}</h2>
            <div className="AllMovies">    
                {props.state.allMovies}
            </div>
        </div>
    )
}