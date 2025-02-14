import { useState } from "react";
import React from "react";

function BtnLikeOrDislike() {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  function handleClick() {
    if (isLiked) {
      setIsLiked(false);
      setLikes(likes - 1);
    } else {
      setIsLiked(true);
      setLikes(likes + 1);
    }
  }

  return (
    <div>
      <button className="emoji" onClick={handleClick}>
        {isLiked ? "👎 Dis like" : "👍 Like"}
      </button>
    </div>
  );
}

export default BtnLikeOrDislike;
