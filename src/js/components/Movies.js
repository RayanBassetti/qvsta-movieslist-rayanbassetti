import React, { Component } from 'react';
import SingleMovie from './SingleMovie.js'
import $ from 'jquery';

export const API_KEY = `${process.env.REACT_APP_API_KEY}`; // storing the API KEY in an env file to secure it on GitHub
export const apiMovieSearch = "https://api.themoviedb.org/3/search/movie?api_key=" // example of a specific request to the API, a call on search for movies of the day
export const allIn = apiMovieSearch + API_KEY; // adds the api key to the api url

class Movies extends Component {
    constructor() {
        super()
        this.state = {
            movies: [], // creating a state which will store the data from the API
            research: ""

        }
        
        this.HandleChange = this.HandleChange.bind(this) // must be bind, or else we can't change the state inside the HandleChange function
    }


    HandleChange(event) { // function that will change the parameter of the query according to what the user will input
        console.log(event.target.value) // quick test to display what's being typed in the input inside the console
        this.setState({
            research: event.target.value // change the state to the input of the user
        })
        this.launchSearch(this.state.research) // apply to the function the state
    }

    launchSearch(searchedMovie) {
        // fetch(baseUrl + "/3/trending/all/day?api_key=" + API_KEY)
        //     .then(response => response.json())
        //     .then(data => this.setState({
        //         movies: data
        //     }))
        console.log("Performing research")
        const movieSearch = allIn + "&query=" + searchedMovie 

        $.ajax({
            url: movieSearch,
            success: (trendingResults) => {
                console.log("Successfuly fetched data")
                const results = trendingResults.results // reducing the parameter to a shorter one
                const moviesList = [] // creating an empty array where to push the data to
                results.forEach(movie => { // for each index, assign to a const the component SingleMovie, taking the movie data as a parameter to call
                    const singleMovie = <SingleMovie key={movie.id} movie={movie} />
                    moviesList.push(singleMovie) // push the data in the array created before
                });

                this.setState({
                    movies: moviesList // set a new state of our previous state movies from moviesList
                })
            },
            error : (hrx, status, err) => {
                console.error("Failed to fetch data")
            }
        })
    }

    render() {
        
        return(
            <div>
                <div className="searchBar">
                    <input type="text" onChange={this.HandleChange}>
                    </input>
                </div>
                <div className="allMovies">
                    {this.state.movies}
                </div>
            </div>
        )
    }
}

    
export default Movies