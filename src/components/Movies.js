import React from 'react';
import axios from 'axios';
import $ from "jquery";

import SingleMovie from './SingleMovie.js';
import SingleGenre from './SingleGenre.js'
// import axios from 'axios';


const API_KEY = `${process.env.REACT_APP_API_KEY}`

class Movies extends React.Component {
    constructor() {
        super()
        this.state = {
            researchmovie: "",
            allMovies: [],
            allGenres: []
        }

        this.HandleSearch = this.HandleSearch.bind(this)
        this.LaunchSearch = this.LaunchSearch.bind(this)
        this.OnSelect = this.OnSelect.bind(this)
    }

    HandleSearch(event) {
        console.log(event.target.value)
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        this.LaunchSearch(value)
    }

    OnSelect(event) {
        console.log(event.target.value)
    }

    LaunchSearch(value) {
        axios
            // const allGenres = this.state.allGenres
            // allGenres.forEach(genre => {
            //     if (genre === selectedGenreId) {
            //         this.setState({
            //             selectedGenre: genre
            //         })
            //     }
            // })
            .post(`https://api.themoviedb.org/3/discover/movie?api_key=435ab096a795a0a39c4e7bca5f71fd75&sort_by=popularity.desc&primary_release_year=${value}`)
            .then(response => {
                const results = response.data.results
                const moviesList = []
                results.forEach(movie => {
                    console.log(movie.original_title)
                    const singleMovie = <SingleMovie key={movie.key} movie={movie} />
                    moviesList.push(singleMovie)
                });

                this.setState({
                    allMovies: moviesList
                })
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
            <div>
                <form>
                    Enter the year
                    <input 
                        type="text" 
                        onChange={this.HandleSearch}
                    >
                    </input>
                    <select defaultValue="Select a genre">
                        <option>
                            Select a genre
                        </option>
                        {this.state.allGenres}
                    </select>
                </form>
                {this.state.allMovies}
            </div>
        )
    }
}

export default Movies