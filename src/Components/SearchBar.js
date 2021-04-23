import React, { useState } from "react";
import "../Css/SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <input type="search" className="search-input" placeholder="place" />
    </div>
  );
}

export default SearchBar;
