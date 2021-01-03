import React from "react";
import Movie from "./Movie";

const Awards = ({ award, getDeletedAward }) => {
  return (
    <div className="awards" onClick={() => getDeletedAward(award)}>
      {award.Title}
    </div>
  );
};

export default Awards;
