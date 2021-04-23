import React from "react";
import SearchBar from "./Components/SearchBar";
import Content from "./Components/Content";

import "./App.css";

function App() {
  return (
    <div className="box">
      <SearchBar />
      <Content />
      <div class="wave-image" />
    </div>
  );
}

export default App;
