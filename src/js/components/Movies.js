import React, { Component } from 'react';
import SingleMovie from './SingleMovie.js'
import $ from 'jquery';

export const API_KEY = `${process.env.REACT_APP_API_KEY}`;
export const baseUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=";
export const movieTrends = baseUrl + API_KEY;

class Movies extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }



    componentDidMount() {
        // fetch(baseUrl + "/3/trending/all/day?api_key=" + API_KEY)
        //     .then(response => response.json())
        //     .then(data => this.setState({
        //         movies: data
        //     }))

        $.ajax({
            url: movieTrends,
            success: (trendingResults) => {
                console.log("Successfuly fetched data")
                const results = trendingResults.results
                const moviesList = []

                results.forEach(movie => {
                    const singleMovie = <SingleMovie key={movie.id} movie={movie} />
                    moviesList.push(singleMovie)
                });

                this.setState({
                    movies: moviesList
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
                {this.state.movies}
            </div>
        )
    }
}

    
export default Movies