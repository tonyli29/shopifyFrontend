import React, {useState} from "react";
import Movie from "./Movie";
import Default from "../img/default-image-620x600.jpg"

const Awards = ({ award, getDeletedAward }) => {
  const [appear, setAppear] = useState("disappear");
  const addDefaultSrc = (e) => {
    e.target.src = Default
  }

  return (
    <div className="awards" onClick={() => getDeletedAward(award)}>
      <div className="award-remove"
                onMouseEnter={() => setAppear("appear")} 
                onMouseLeave={() => setAppear("disappear")} 
      >
        <img className="image-resize2" 
          src={award.Poster} 
          onError={(e) => addDefaultSrc(e)}/>
        <div className={`remove-wrapper ${appear}`}>
          <h1 className="remove">Remove</h1>
        </div>
      </div>
    </div>
  );
};

export default Awards;
