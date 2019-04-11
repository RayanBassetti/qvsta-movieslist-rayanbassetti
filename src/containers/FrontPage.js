import React from 'react';
import './FrontPage.scss'

export default function FrontPage(props) {
    return (
        <div className="FrontPage">
            <form>
                    <p>1) Select a movie genre</p>
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
                    <p>2) Enter the min year</p>
                    <input 
                        type="text" 
                        onChange={props.HandleSearch}
                        name="researchyear1"
                        value={props.state.researchyear1}
                    >
                    </input>
                    <p>3) Enter the max year</p>
                    <input 
                        type="text" 
                        onChange={props.HandleSearch}
                        name="researchyear2"
                        value={props.state.researchyear2}
                    >
                    </input>
                    {/* <p className="launchSearch" onClick={props.LaunchSearch}>Wait for it...</p> */}
            </form>
            <h2>20 most popular movies of chosen genre between {props.state.researchyear1} and {props.state.researchyear2}</h2>
            <div className="AllMovies">    
                {props.state.allMovies}
            </div>
        </div>
    )
}