import React, { Component } from 'react';
import SingleMovie from './SingleMovie.js';
import MoviesContainer from './MoviesContainer.js'
import MovieGenre from './MovieGenre.js';
import $ from 'jquery';


const API_KEY = `${process.env.REACT_APP_API_KEY}`; // storing the API KEY in an env file to secure it on GitHub

const apiMovieSearch = "https://api.themoviedb.org/3/search/movie?&api_key=" // example of a specific request to the API, a call on search for movies of the day
// const apiMovieGenres = "https://api.themoviedb.org/3/genre/movie/list?api_key="

const fullMovieSearch = apiMovieSearch + API_KEY; // adds the api key to the api url
// const fullMovieGenres = apiMovieGenres + API_KEY;

class Movies extends Component {
    constructor() {
        super()
        this.state = {
            movies: [], // creating a state which will store the movies from the API
            genres: [], // creating a state which will store the movies genres from the api 
            researchmovie: "", // creating a state to store the user input for a specific movie name
            researchyear: "", // creating a state to store the user inpit for a specific release year
            chosenGenre: ""

        }
        
        this.HandleMovieSearch = this.HandleMovieSearch.bind(this) // must be bind, or else we can't change the state inside the function
        this.launchSearch = this.launchSearch.bind(this)
        // this.HandleMovieGenre = this.HandleMovieGenre.bind(this)
        // this.showGenre = this.showGenre.bind(this)
    }

// HANDLERS FOR THE USER'S INPUT
    HandleMovieSearch(event) { // function that will change the parameter of the query according to what the user will input
        console.log(event.target.value) // quick test to display what's being typed in the input inside the console
        const {name, value} = event.target // storing the name and the value indicated in the render field
        this.setState({
            [name]: value // change the state to the input of the user
        })
        this.launchSearch(value)
    }

// FUNCTIONS TO ACCESS THE API AND INTERACT WiTH IT 
    launchSearch(value) {
        console.log("Performing research")
        const movieSearch = { // store all the querys I'm going to make inside an object
            "&primary_release_year=": value, // error for now : the parameter stays undefined in the year query, and replaces the name query when something is typed 
            "&query=": value,
        }
        // interact with the api...
        $.ajax({
            url: fullMovieSearch,
            data : JSON.stringify(movieSearch), //transform the querys into strings, added to the URL
            success: (trendingResults) => {
                console.log("Successfuly fetched data :" + fullMovieSearch)
                
                const results = trendingResults.results // reducing the parameter to a shorter one
                const moviesList = [] // creating an empty array where to push the data to
                results.forEach(movie => { // for each index, assign to a const the component SingleMovie, taking the movie data as a parameter to call
                    const singleMovie = <SingleMovie key={movie.id} movie={movie} />
                    moviesList.push(singleMovie) // push the data in the array created before
                });
                console.log(fullMovieSearch)
                console.log(this.state)

                this.setState({
                    movies: moviesList // set a new state of our previous state movies from moviesList
                })
            },
            error : (hrx, status, err) => {
                console.error("Failed to fetch data - movies search")
            }
        })
    }

    // showGenre(chosenGenre) {
    //     console.log("chosing genre")
    //     const movieGenre = fullMovieGenres

    //     $.ajax({
    //         url: movieGenre,
    //         success: (allMovieGenres) => {
    //             const genres = allMovieGenres.genres
    //             const genresList = []
    //             genres.forEach(genre => {
    //                 const movieGenre = <MovieGenre key={genre.id} genre={genre} />
    //                 genresList.push(movieGenre)
                    
    //             })
    //             console.log(genresList)
    //             console.log(movieGenre)
    //             this.setState({
    //                 genres: genresList
    //             })
    //         },
    //         error : (hrx, status, err) => {
    //             console.error("Failed to fetch data - movies genre")
    //         }
    //     })
    // }

    


    render() {
        
        return(
            <MoviesContainer 
                HandleMovieSearch={this.HandleMovieSearch} 
                state={this.state}
                consoleTest={this.consoleTest} 
            />
        )
    }
}

    
export default Movies