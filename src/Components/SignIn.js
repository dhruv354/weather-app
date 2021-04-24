import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignIn() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitData = () => {
    if (id == "admin" && password == "123456789") {
      history.push("/tempcard");
    } else {
      alert("wrong password");
    }
  };

  return (
    <div class="container">
      <div className="signin-container">
        <input
          type="text"
          className="input-field"
          placeholder="user id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-button" onClick={() => submitData()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignIn;
