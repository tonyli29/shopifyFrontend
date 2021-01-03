import React from "react";

const Movie = (props) => {
  //   console.log(props.movie);
  return (
    <div className="movie" onClick={() => props.getAward(props.movie)}>
      {/* <h1>{props.movie.Title}</h1> */}
      <div className="movie-poster-wrapper">
        <img className="movie-poster" src={props.movie.Poster} />
      </div>
    </div>
  );
};

export default Movie;
