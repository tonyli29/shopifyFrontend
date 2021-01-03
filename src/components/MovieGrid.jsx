import React, { useState } from "react";
import Movie from "./Movie";
import Slider from "react-slick";
import Awards from "./Awards";

const MovieGrid = ({ movies, isLoading, query }) => {
  const [awards, setAward] = useState([]);

  //   console.log(movies);
  const handleAwards = (a) => {
    if (awards.length == 5) {
      return;
    }
    if (awards.includes(a)) {
      return;
    } else {
      setAward([...awards, a]);
      return;
    }
  };
  const removeAward = (a) => {
    const newList = [...awards];
    const i = awards.indexOf(a);
    if (i !== -1) {
      newList.splice(i, 1);
    }
    setAward(newList);
    console.log(a);
    console.log(awards);
  };
  //   console.log(awards);
  const handleResponse = () => {
    if (movies.Response == "True") {
      const moviesArr = movies.Search;
      return (
        <div className="movie-grid">
          {moviesArr.map((movie, movieId) => (
            <Movie
              key={movieId}
              movie={movie}
              getAward={(a) => handleAwards(a)}
            />
          ))}
        </div>
      );
    } else {
      return <h1 className="error-msg">{movies.Error}</h1>;
    }
  };
  return (
    <div className="movie-container">
      {awards.map((award, id) => (
        <Awards
          award={award}
          key={id}
          getDeletedAward={(a) => removeAward(a)}
        />
      ))}
      {handleResponse()}
    </div>
  );
};

export default MovieGrid;
