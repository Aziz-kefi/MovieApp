import React from "react";
import Rate from "../Rate";
import "./Header.css";

const Header = ({ setInput, setRate, myRate }) => {
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setInput(e.target.value)}
        />
        <Rate rating={myRate} setRate={setRate} />
      </div>
    </div>
  );
};

export default Header;