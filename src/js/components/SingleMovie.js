import React from 'react';

class SingleMovie extends React.Component {
    render() {
        return (
            <div className="singleMovie" key={this.props.movie.id}>
                <img alt="poster" width="200" src={"https://image.tmdb.org/t/p/w185" + this.props.movie.poster_path}></img>
                <div className="singleMovieText">
                    <h2 className="singleMovieTextTitle">{this.props.movie.title}{this.props.movie.original_name}</h2>
                    <p><span className="span">Year :</span> {this.props.movie.release_date}{this.props.movie.first_air_date}</p>
                    <p><span className="span">Rating :</span> {this.props.movie.vote_average}</p>
                    {/* <a href="www.google.fr">View</a> */}
                </div>
        </div>
        )
    }
}

export default SingleMovie