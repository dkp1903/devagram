import React from "react";

import Title from "../Title/Title";
import Button from "../../Button/Button";
import Input from "../Input/Input";
import useHandleChange from "../../Hooks/HandleInputChange";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

const Signup = () => {
  const [email, setEmail] = useHandleChange();
  const [name, setName] = useHandleChange();
  const [username, setUsername] = useHandleChange();
  const [password, setPassword] = useHandleChange();

  const handleSubmit = (e) => {
    /* To make the api call to post the user data once submitted */

    e.preventDefault();
    const formData = {
      email: email,
      fullname: name,
      username: username,
      password: password,
    };

    console.log(formData);

    setEmail("");
    setName("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className={classes["signup-container"]}>
      <Title title="Devagram" />

      <p className={classes.desc}>Sign up to experience the Developer Hub.</p>

      <form className={classes["signup-form"]} onSubmit={handleSubmit}>
        <Input
          aria-labelledby="label-email"
          type="email"
          name="email"
          value={email}
          onChange={setEmail}
          required
        />
        <Input
          aria-labelledby="label-fullname"
          type="text"
          name="name"
          value={name}
          onChange={setName}
          required
        />
        <Input
          aria-labelledby="label-username"
          type="text"
          name="username"
          value={username}
          onChange={setUsername}
          required
        />
        <Input
          aria-labelledby="label-password"
          type="password"
          name="password"
          value={password}
          onChange={setPassword}
          required
        />
        <Button
          type="submit"
          btnType="Primary"
          disabled={!(email && name && username && password)}
        >
          Sign Up
        </Button>
      </form>

      <h5 style={{ color: "#808080" }}>OR</h5>

      <GoogleAuth />

      <Link to="/login">Login Instead</Link>
    </div>
  );
};

export default Signup;
