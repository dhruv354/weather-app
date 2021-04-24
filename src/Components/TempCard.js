import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../Css/SearchBar.css";

function SearchBar() {
  const [place, setPlace] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=20edbaa6922a0aa67a1c27ba62fdd0f7`
      )
      .then((response) => {
        console.log(response.data.main);
        setSearch(response.data.main);
      })
      .catch((err) => {
        console.log(err);
        setSearch("");
      });
  }, [place, search]);

  const { temp, temp_max, temp_min } = search;
  return (
    <>
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>

      <div className="content-container">
        <div className="place-name">
          <span>
            <i className="fas fa-street-view"></i>
          </span>
          <span>
            <h2>{place}</h2>
          </span>
        </div>
        <div className="temp-info">
          <h3>{search ? temp : "invalid"}</h3>
          <span>
            <p>
              Min: {search ? temp_min : "invalid"} | Max:{" "}
              {search ? temp_max : "invalid"}
            </p>
          </span>
        </div>
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
      </div>
    </>
  );
}

export default SearchBar;
