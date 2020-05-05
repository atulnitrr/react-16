import React, { useState } from "react";

export default function LikeArea() {
  const [like, setLike] = useState(0);
  const [dislikne, setDislike] = useState(0);
  const likeHand = (event) => {
    setLike((prev) => setLike(prev + 1));
  };
  return (
    <>
      <h2>
        This page is liked {like} disLike {dislikne}
      </h2>
      <button onClick={likeHand}>Like</button>
      <button
        onClick={(event) =>
          setDislike((prev) => (prev > -10 ? setDislike(prev - 1) : 0))
        }
      >
        Dslike
      </button>
    </>
  );
}
