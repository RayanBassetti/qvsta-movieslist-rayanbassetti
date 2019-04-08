import React from 'react';

function MoviesContainer(props) {
    return(
        <div>
            <div className="searchSection">
                <div className="nameSearch">
                    <p>Name of the movie </p>
                    <input 
                        type="text" 
                        name="researchmovie"
                        value={props.state.researchmovie}
                        onChange={props.HandleMovieSearch}
                        onClick={props.consoleTest} 
                        placeholder="Search a movie by name"
                    >
                    </input>
                </div>
                <div className="yearSearch">
                    <p>Year of release </p>
                    <input 
                        type="text" 
                        name="researchyear"
                        value={props.state.researchyear}
                        onChange={props.HandleMovieSearch} 
                        placeholder="Search a movie by the year"
                    >
                    </input>
                </div>
            </div>
            {/* <div className="genreSection">
                {this.state.genres}
            </div> */}
            <div className="allMovies">
                {props.state.movies}
            </div>

        </div>
    )
}

export default MoviesContainer