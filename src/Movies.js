import React, { Component } from 'react';

class Movies extends Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=435ab096a795a0a39c4e7bca5f71fd75")
            .then(response => response.json())
            .then(data => this.setState({
                movies: data
            })
            )
    }

    render() {
        return(
            <div>
                {this.state.movies.result.original_title}
            </div>
        )
    }
}

    
export default Movies