import React, { useContext, useState } from "react";
import Button from "../../components/button/Button";
import { UserContext } from "../../context/userContext";
import "./login.css";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const { users, setLoggedInUser } = useContext(UserContext);
  const onSubmit = () => {
    const user = users.find(({ email }) => email === username);
    if (user?.password === password) {
      setLoggedInUser(user);
    }
  };
  return (
    <div className="login">
      <h1 className="welcome-text">Welcome</h1>
      <input
        className="username"
        type="text"
        placeholder="Enter your email"
        value={username}
        onChange={({ target }) => {
          setUserName(target.value);
        }}
      />
      <input
        className="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={({ target }) => {
          setPassword(target.value);
        }}
      />
      <Button onClick={onSubmit} className="login-button">
        Login
      </Button>
    </div>
  );
};

export default Login;
