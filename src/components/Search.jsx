import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [param, setParam] = useState("");

  const onChange = (q) => {
    setParam(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form"
          placeholder="Enter Movie Name"
          value={param}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      </form>
    </section>
  );
};

export default Search;
