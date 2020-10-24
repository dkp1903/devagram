import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Title from "../Title/Title";
import classes from "./Login.module.css";
import Input from "../Input/Input";
import Button from "../../Button/Button";
import { FaFacebook } from "react-icons/fa";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import useHandleChange from "../../Hooks/HandleInputChange";

const Login = () => {
  const [email, setEmail] = useHandleChange();
  const [password, setPassword] = useHandleChange();
  const [error, setError] = useState("");
  const [isAuth, setAuth] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);

    setEmail("");
    setPassword("");

    /**
     * To make the api call to post the user data once submitted
     * below is example of success and failure cases
     */

    if (email === "app@devagram.com" && password === "devagram2020") {
      setAuth(true);
    } else {
      setError("Invalid credentials");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
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
            onChange={setEmail}
            name="email"
            required
            aria-labelledby="label-email"
          />
          <Input
            type="password"
            value={password}
            onChange={setPassword}
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
      <section>
        Already have Account ? <Link to="/signup">Signup</Link>
      </section>
    </Fragment>
  );
};

export default Login;
