import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };

  return (
    <div className="container mt-5">
      <h1>Signin</h1>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          className="form-control"
          id="username"
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          className="form-control"
          id="password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
      </div>
      <button className="btn btn-primary mt-4" onClick={signin}>Signin</button>
    </div>
  );
}

export default Signin;
