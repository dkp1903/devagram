import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

import Title from "../Title/Title";
import classes from "./Login.module.css";
import Input from "../Input/Input";
import Button from "../../Button/Button";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuth, setAuth] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    if (email === "app@devagram.com" && password === "devagram2020") {
      setAuth(true);
    } else {
      setError("Invalid credentials");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    setEmail("");
    setPassword("");
  };

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className={classes.Login}>
        <Title title="Devagram" />
        {error && (
          <p style={{ color: "red", textAlign: "center" }}> {error} </p>
        )}
        <form className="form" onSubmit={onLogin}>
          <Input
            type="email"
            value={email}
            change={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter Username or Email"
          />
          <Input
            type="password"
            value={password}
            change={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Enter password"
          />
          <Button type="submit" btnType="Primary">
            Login
          </Button>
        </form>
        <div className="social-logins">
          <Button type="button" btnType="Google">
            <FaGoogle style={{ marginRight: "0.2rem" }} />
            Login with Google
          </Button>
          <Button type="button" btnType="Facebook">
            <FaFacebook style={{ marginRight: "0.2rem" }} />
            Login with Facebook
          </Button>
        </div>
      </div>
      <section>
        Already have Account ? <Link to="/signup">Signup</Link>
      </section>
    </Fragment>
  );
};

export default Login;
