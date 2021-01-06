import React, { useState, useRef } from "react";
import Movie from "./Movie";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Awards from "./Awards";

const MovieGrid = ({ movies, isLoading, query }) => {
  const [awards, setAward] = useState([]);
  const [appear, setAppear] = useState("disappear");
  const [thank, setThank] = useState("Please Select 5");

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
  };

  const handleResponse = () => {
    if (movies.Response == "True") {
      const moviesArr = movies.Search;
      return (
        <div className="movie-grid">
            <SimpleBar style={{ maxHeight: 833 }}>
              {moviesArr.map((movie, movieId) => (
                <Movie
                  key={movieId}
                  movie={movie}
                  getAward={(a) => handleAwards(a)}
                  awards={awards}
                  awarded={awards.includes(movie)}
                />
              ))}
            </SimpleBar>
        </div>
      );
    } else {
      return <h1 className="error-msg">{movies.Error}</h1>;
    }
  };

  const handleSubmit = () => {
    setAppear("")
    if(awards.length === 5){
      return setThank("Thank You!")
    } else {
      return setThank("Please Select 5")
    }
  }
  
  return (
    <div className="main-container">
      <div className="movie-container">
        {handleResponse()}
      </div>
      <div className="award-container">
        {awards.map((award, id) => (
          <Awards
            award={award}
            key={id}
            getDeletedAward={(a) => removeAward(a)}
          />
        ))}
         <button class="nominate-button submit" onClick={()=>handleSubmit()}>
            Submit
        </button>
    </div>
    <div className={`popup ${appear}`}>
      <div className="popup-window">
        <div className="x" onClick={() => setAppear("disappear")}><h2>x</h2></div>
        <h1>{thank}</h1>
      </div>
    </div>
  </div>
  );
};

export default MovieGrid;
