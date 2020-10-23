import React from "react";

import Title from "../Title/Title";
import Button from "../../Button/Button";
import useHandleChange from "../../Hooks/HandleInputChange";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";

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
        <div className={classes.field}>
          <span className={classes.label} id="label-email">
            Email
          </span>
          <input
            aria-labelledby="label-email"
            type="email"
            name="email"
            value={email}
            onChange={setEmail}
            required
          />
        </div>

        <div className={classes.field}>
          <span className={classes.label} id="label-fullname">
            Full Name
          </span>
          <input
            aria-labelledby="label-fullname"
            type="text"
            name="name"
            value={name}
            onChange={setName}
            required
          />
        </div>

        <div className={classes.field}>
          <span className={classes.label} id="label-username">
            Username
          </span>
          <input
            aria-labelledby="label-username"
            type="text"
            name="username"
            value={username}
            onChange={setUsername}
            required
          />
        </div>

        <div className={classes.field}>
          <span className={classes.label} id="label-password">
            Password
          </span>
          <input
            aria-labelledby="label-password"
            type="password"
            name="password"
            value={password}
            onChange={setPassword}
            required
          />
        </div>

        <Button type="submit" btnType="Primary">
          Sign Up
        </Button>
      </form>

      <h5 style={{ color: "#808080" }}>OR</h5>

      <Button type="button" btnType="Google">
        <FaGoogle style={{ marginRight: "0.2rem" }} />
        SignUp with Google
      </Button>

      <Link to="/login">Login Instead</Link>
    </div>
  );
};

export default Signup;
