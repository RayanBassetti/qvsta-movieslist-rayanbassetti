import React from 'react';
import axios from 'axios';

import SingleMovie from './SingleMovie.js';
import SingleGenre from './SingleGenre.js'
import FrontPage from './FrontPage.js'

const API_KEY = process.env.REACT_APP_API_KEY


class Movies extends React.Component {
    constructor() {
        super()
        this.state = {
            researchyear1: "",
            researchyear2: "",
            researchgenre: "",
            allMovies: [],
            allGenres: []
        }

        this.HandleSearch = this.HandleSearch.bind(this) // binding the function allows me to this setState in it
        this.HandleSelect = this.HandleSelect.bind(this)
        this.ConfigureSearch = this.ConfigureSearch.bind(this)
        this.LaunchSearch = this.LaunchSearch.bind(this)
    }

    HandleSearch(event) { // gets the 2 years selected by the user
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    HandleSelect(event) { // gets the movie genre selected by the user
        this.setState({
            researchgenre: event.target.value
        })
    }
    

    ConfigureSearch() {
        const myParams = { // since we have a lot of parameters that we're going to pass in the URL, I did an object
            "researchyear1": this.state.researchyear1,
            "researchyear2": this.state.researchyear2,
            "researchgenre": this.state.researchgenre,
        }

        console.log(this.state)
        const fullURL = `https://api.themoviedb.org/3/discover/movie?api_key=435ab096a795a0a39c4e7bca5f71fd75&sort_by=popularity.desc&primary_release_date.gte=${myParams.researchyear1}&primary_release_date.lte=${myParams.researchyear2}&with_genres=${myParams.researchgenre}`
        console.log(fullURL)
        this.LaunchSearch(fullURL)
        
    }

    LaunchSearch(fullURL) { // post request to the API, to show the movies according to the user's inputs
        axios
            .post(`${fullURL}`)
            .then(response => {
                const results = response.data.results
                const moviesList = []
                results.forEach(movie => {
                    const singleMovie = <SingleMovie key={movie.id} movie={movie} state={this.state} />
                    moviesList.push(singleMovie)
                });

                this.setState({
                    allMovies: moviesList
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
              })
    }
    
    componentDidMount() { // launch of a GET at the moment the page is loaded to have the list of movies genres ready in the select form
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=435ab096a795a0a39c4e7bca5f71fd75&language=en-US`)
            .then(response => {
                const results = response.data.genres
                const genresList = [] // we create an empty array in which we'll push each genre
                results.forEach(genre => {
                    const singleGenre = <SingleGenre 
                                            key={genre.id} 
                                            genre={genre}
                                        />
                    genresList.push(singleGenre)
                })

                this.setState({
                    allGenres: genresList // we assign to the allGenres state the array now full
                })
                
            })
    }

    render() {
        return(
            <FrontPage 
                state={this.state}
                HandleSearch={this.HandleSearch}
                HandleSelect={this.HandleSelect}
                LaunchSearch={this.LaunchSearch}
                ConfigureSearch={this.ConfigureSearch}
            />
        )
    }
}

export default Movies