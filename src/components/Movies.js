import React from 'react';
import axios from 'axios';

import SingleMovie from './SingleMovie.js';
import SingleGenre from './SingleGenre.js'


const API_KEY = `${process.env.REACT_APP_API_KEY}`

class Movies extends React.Component {
    constructor() {
        super()
        this.state = {
            researchmovie: "",
            selectedGenre: "",
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
        this.setState({
            selectedGenre: event.target.value
        })
        console.log(this.state.selectedGenre)
        const selectedGenreId = this.state.selectedGenre
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
        const selectedGenre = this.state.selectedGenre
        axios
            .post(`https://api.themoviedb.org/3/discover/movie?api_key=435ab096a795a0a39c4e7bca5f71fd75&sort_by=popularity.desc&primary_release_year=${value}&with_genres=28`)
            .then(response => {
                const results = response.data.results
                const moviesList = []
                results.forEach(movie => {
                    const singleMovie = <SingleMovie key={movie.id} movie={movie} />
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
                    <select 
                        defaultValue="Select a genre" 
                        onClick={event => this.OnSelect(event)}
                    >
                        <option value="null">
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