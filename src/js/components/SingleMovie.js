import React from 'react';

class SingleMovie extends React.Component {
    render() {
        return (
            <div className="singleMovie" key={this.props.movie.id}>
                <h1>{this.props.movie.title}{this.props.movie.original_name}</h1>
                <img alt="poster" width="120" src={"https://image.tmdb.org/t/p/w185" + this.props.movie.poster_path}></img>
                <p>{this.props.movie.overview}</p>
                <a href="www.google.fr">View</a>
        </div>
        )
    }
}

export default SingleMovie