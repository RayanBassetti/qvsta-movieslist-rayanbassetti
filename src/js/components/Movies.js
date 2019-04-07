import React, { Component } from 'react';
import SingleMovie from './SingleMovie.js';
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
        // this.HandleMovieGenre = this.HandleMovieGenre.bind(this)
        // this.showGenre = this.showGenre.bind(this)
        this.consoleTest = this.consoleTest.bind(this)
    }

    // Handlers for the users input 
    HandleMovieSearch(event) { // function that will change the parameter of the query according to what the user will input
        console.log(event.target.value) // quick test to display what's being typed in the input inside the console
        const {name, value} = event.target // storing the name and the value indicated in the render field
        this.setState({
            [name]: value // change the state to the input of the user
        })
        this.launchSearch(value)
    }

    // HandleMovieGenre(event) {
    //     console.log(event.target.value)
    //     this.setState({
    //         chosenGenre: event.target.value
    //     })

    //     this.showGenre(this.state.chosenGenre)
    // }


    // Functions to access the data
    launchSearch(researchmovie, researchyear) {
        console.log("Performing research")
        const movieSearch = { // store all the querys I'm going to make in an object
            "&primary_release_year=": researchyear,
            "&query=": researchmovie,
        }
        // console.log(researchmovie)
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

    consoleTest() {
        console.log(this.state)
        console.log(fullMovieSearch)
    }

    render() {
        
        return(
            <div>
                <div className="searchSection" onLoad={this.consoleTest.bind(this)}>
                    <p>Name of the movie </p>
                    <input 
                        type="text" 
                        name="researchmovie"
                        value={this.state.researchmovie}
                        onChange={this.HandleMovieSearch}
                        onClick={this.consoleTest} 
                        placeholder="Search a movie by name"
                    >
                    </input>
                    <p>Year of release </p>
                    <input 
                        type="text" 
                        name="researchyear"
                        value={this.state.researchyear}
                        onChange={this.HandleMovieSearch} 
                        placeholder="Search a movie by the year"
                    >
                    </input>
                </div>
                {/* <div className="genreSection">
                    {this.state.genres}
                </div> */}
                <div className="allMovies">
                    {this.state.movies}
                </div>

            </div>
        )
    }
}

    
export default Movies