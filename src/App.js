import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import Search from "./components/Search";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&s=${query}`
      );
      // console.log(result.data);
      setMovies(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  console.log(query);
  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <MovieGrid isLoading={isLoading} movies={movies} query={query} />
    </div>
  );
};

export default App;