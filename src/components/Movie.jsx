import React, {useState,  useEffect, forwardRef, useImperativeHandle } from "react";
import axios from "axios";
import Default from "../img/default-image-620x600.jpg"
import Star from "../img/star.png"


const Movie = (props) => {
  const [awarded, setAwarded] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&t=${props.movie.Title}`
      );
      // console.log(result.data);
      setMovie(result.data);
      console.log(movie);
    };

    fetchData();
  }, []);

  const manageAward = () => {
    props.getAward(props.movie);
    setAwarded(true);
  }

  const addDefaultSrc = (e) => {
    e.target.src = Default
  }

  const handleNominateButton = () => {
    if(props.awarded){
      return (
      <button class="nominate-button n awarded"  onClick={() => manageAward()}>
        Nominated
      </button>
      )
    }else {
      return (
        <button class="nominate-button n"  onClick={() => manageAward()}>
          Nominate
        </button>
      )
    }
  }

  const handleMovieDetails = () => {
    if(movie != null && movie.Response === "True"){
      return  <div className="movie">
      <img className={`movie-poster image-resize ${awarded}`} onError={(e) => addDefaultSrc(e)} src={props.movie.Poster} />
      <div className="movie-info-wrapper">
        <div className="movie-info">
        <div className="title-block">
          <h1 className="movie-title">{props.movie.Title}</h1>
        <div className="imdb-rating">
          <img className="star" src={Star}/>
          <div className="rating">
            <p>{movie.imdbRating}/10</p>
            <p>{movie.imdbVotes}</p>
          </div>
        </div>
        </div>
        <h2 className="movie-type">{movie.Runtime} | {movie.Genre} | {movie.Type}({props.movie.Year})</h2>
        <div className="movie-details">
          <p>{movie.Plot}</p>
        </div>
        </div>
        {handleNominateButton()}
      </div>
  </div>
    }
  }



  return (<div>{handleMovieDetails()}</div>);
};

export default Movie;
