import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [param, setParam] = useState("");

  const onChange = (q) => {
    setParam(q);
    getQuery(q);
  };

  return (
    <section className="search-container">
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Enter Movie Name"
          value={param}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      </form>
      {/* <h1 className="nominated-title">Nominated</h1> */}
    </section>
  );
};

export default Search;
