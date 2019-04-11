import React from 'react';
import axios from 'axios';

import SingleMovie from './SingleMovie.js';
import SingleGenre from './SingleGenre.js'
import FrontPage from './FrontPage.js'


// const API_KEY = `${process.env.REACT_APP_API_KEY}`

// Problème actuel : selectedGenre reste undefined

class Movies extends React.Component {
    constructor() {
        super()
        this.state = {
            researchyear: "",
            researchgenre: "salaud",
            allMovies: [],
            allGenres: []
        }

        this.HandleSearch = this.HandleSearch.bind(this)
        this.HandleSelect = this.HandleSelect.bind(this)

        this.LaunchSearch = this.LaunchSearch.bind(this)
    }

    HandleSearch(event) {
        console.log(event.target.value)
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        this.LaunchSearch(value)
    }

    HandleSelect(event) {
        this.setState({
            researchgenre: event.target.value
        })
        const selectedGenreId = this.state.researchgenre
        this.LaunchSearch(selectedGenreId)
    }

    LaunchSearch(value, selectedGenreId) {
        this.state.allGenres.forEach(genre => {
            if (selectedGenreId === genre.id) {
                this.setState({
                    selectedGenre: selectedGenreId
                })
            }
        })
        const selectedGenre = this.state.researchgenre
        const fullURL = `https://api.themoviedb.org/3/discover/movie?api_key=435ab096a795a0a39c4e7bca5f71fd75&sort_by=popularity.desc&primary_release_year=${value}&with_genres=${selectedGenre}`
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
    
    componentDidMount() {
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=435ab096a795a0a39c4e7bca5f71fd75&language=en-US`)
            .then(response => {
                const results = response.data.genres
                const genresList = []
                results.forEach(genre => {
                    const singleGenre = <SingleGenre 
                                            key={genre.id} 
                                            genre={genre}
                                            onSelect={this.OnSelect} 
                                        />
                    genresList.push(singleGenre)
                })

                this.setState({
                    allGenres: genresList
                })
                
            })
    }

    render() {
        return(
            <FrontPage 
                state={this.state}
                HandleSearch={this.HandleSearch}
                HandleSelect={this.HandleSelect}
            />
        )
    }
}

export default Movies