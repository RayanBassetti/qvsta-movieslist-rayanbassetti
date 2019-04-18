import React from 'react';
import './FrontPage.scss'

export default function FrontPage(props) {
    return (
        <div className="FrontPage">
            <form>  
                    {/* user input for the movie genre  */}
                    <div className="selectInputUser">
                        <p className="descriptionText">Movie Genre</p>
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
                    {/* user input for the years  */}
                    <div className="textInputUser"> 
                        <p className="descriptionText">Years</p>
                            <div className="inputs">
                                <input
                                    placeholder="Between 1990..." 
                                    type="text" 
                                    onChange={props.HandleSearch}
                                    name="researchyear1"
                                    defaultValue={props.state.researchyear1}
                                >
                                </input>
                                <input 
                                    placeholder="... and today." 
                                    type="text" 
                                    onChange={props.HandleSearch}
                                    name="researchyear2"
                                    defaultValue={props.state.researchyear2}
                                >
                                </input> 
                            </div>
                    </div>
                    {/* user input for the ratings  */}
                    <div className="textInputUser">
                            <p className="descriptionText">Ratings</p>
                            <div className="inputs">
                                <input
                                    placeholder="From 0..." 
                                    type="text" 
                                    onChange={props.HandleSearch}
                                    name="researchrating1"
                                    defaultValue={props.state.researchrating1}
                                >
                                </input>
                                <input 
                                    placeholder="... to 10." 
                                    type="text" 
                                    onChange={props.HandleSearch}
                                    name="researchrating2"
                                    defaultValue={props.state.researchrating2}
                                >
                                </input> 
                            </div>
                    </div>
                    {/* user input for the runtime  */}
                    <div className="textInputUser">
                        <p className="descriptionText">Runtimes</p>
                            <div className="inputs">
                                <input
                                    placeholder="Between 60..." 
                                    type="text" 
                                    onChange={props.HandleSearch}
                                    name="researchruntime1"
                                    defaultValue={props.state.researchruntime1}
                                >
                                </input>
                                <input 
                                    placeholder="... and 240." 
                                    type="text" 
                                    onChange={props.HandleSearch}
                                    name="researchruntime2"
                                    defaultValue={props.state.researchruntime2}
                                >
                                </input> 
                            </div>
                    </div>
                    <input type="button" className="launchSearch" onTouch={props.ConfigureSearch} onClick={props.ConfigureSearch} value="Search"></input> 
                    
            </form>
            <h2>20 most popular movies of chosen movie genre, between {props.state.researchyear1} and {props.state.researchyear2}</h2>
            <div className="AllMovies">    
                {props.state.allMovies}
            </div>
        </div>
    )
}