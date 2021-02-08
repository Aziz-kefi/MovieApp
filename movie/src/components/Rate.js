import React from "react";

const Rate = ({ rating, setRate }) => {
  let arr = [];
  for (let i = 0; i <5; i++) {
    if (i < rating) {
      arr.push(
        <span key={i}
          className="rating"
          style={{ cursor: "pointer" }}
          onClick={() => setRate(i + 1)}
        >
          ★
        </span>
      );
    } else {
      arr.push(
        <span key={i}
          className="rating"
          style={{ cursor: "pointer" }}
          onClick={() => setRate(i + 1)}
        >
          ☆
        </span>
      );
    }
  }

  return <div>{arr}</div>;
};

export default Rate;