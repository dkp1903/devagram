import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Title from "../Title/Title";
import classes from "./Login.module.css";
import Input from "../Input/Input";
import Button from "../../Button/Button";
import { FaFacebook } from "react-icons/fa";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuth, setAuth] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);

    /**
     * To make the api call to post the user data once submitted
     * below is example of success and failure cases
     */

    if (email === "app@devagram.com" && password === "devagram2020") {
      setAuth(true);
      setEmail("");
      setPassword("");
    } else {
      setError("Invalid credentials");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <div className={classes.Login}>
        <Title title="Devagram" />
        {error && (
          <p style={{ color: "red", textAlign: "center" }}> {error} </p>
        )}
        <form className="form" onSubmit={onLogin}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
            aria-labelledby="label-email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
            aria-labelledby="label-password"
          />
          <Button
            type="submit"
            btnType="Primary"
            disabled={!(email && password)}
          >
            Login
          </Button>
        </form>
        <div className="social-logins">
          <GoogleAuth />
          <Button type="button" btnType="Facebook">
            <FaFacebook style={{ marginRight: "0.2rem" }} />
            Login with Facebook
          </Button>
        </div>
      </div>
      <section className="section-bar">
        Create new account ? <Link to="/signup">Signup</Link>
      </section>
    </>
  );
};

export default Login;
