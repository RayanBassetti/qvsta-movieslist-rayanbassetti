import React from 'react';
import './FrontPage.scss'

import textUserInput from './textUserInput.js'

export default function FrontPage(props) {
    return (
        <div className="FrontPage">
            <form>  
                    {/* user input for the movie genre  */}
                    <div className="selectInputUser">
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
                    </div>
                    <textUserInput />
                    <input type="button" className="launchSearch" onTouch={props.ConfigureSearch} onClick={props.ConfigureSearch} value="Search"></input> 
                    
            </form>
            <h2>20 most popular movies of chosen movie genre, between {props.state.researchyear1} and {props.state.researchyear2}</h2>
            <div className="AllMovies">    
                {props.state.allMovies}
            </div>
        </div>
    )
}