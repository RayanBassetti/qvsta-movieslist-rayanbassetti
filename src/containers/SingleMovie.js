import React from 'react'
import './SingleMovie.scss';

export default function SingleMovie(props) {

    return(
        <div className="singleMovie" key={props.movie.id}>
            <img alt="poster" width="185" src={"https://image.tmdb.org/t/p/w185" + props.movie.poster_path}></img>
            <div className="singleMovieText">
                <h2 className="singleMovieTextTitle">{props.movie.title}{props.movie.original_name}</h2> {/*we display title and original_name, since some movies have one and some the other*/ }
                <p><span className="span">Year :</span> {props.movie.release_date}{props.movie.first_air_date}</p> {/*same with the release date*/ }
                <p><span className="span">Rating :</span> {props.movie.vote_average}</p>
                <a target="_blank" onClick={props.HandleClick}>View</a>
            </div>
        </div>
    )
}
