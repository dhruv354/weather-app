import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TempCard from "./Components/TempCard";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route path="/tempcard">
        <div className="box">
          <TempCard />
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
