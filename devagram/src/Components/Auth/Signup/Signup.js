import React, { useState } from "react";

import Title from "../Title/Title";
import Button from "../../Button/Button";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

const INITIAL_STATE_FORM_STATE = {
  email: "",
  name: "",
  username: "",
  password: "",
};

const Signup = () => {
  
  const [formValues, setFormValues] = useState({ ...INITIAL_STATE_FORM_STATE });

  // Handles changes to each input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handles Submit Function
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents refresh

    console.log(formValues);  

    setFormValues({ ...INITIAL_STATE_FORM_STATE }); // back to empty form
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
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <Input
          aria-labelledby="label-fullname"
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        <Input
          aria-labelledby="label-username"
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          required
        />
        <Input
          aria-labelledby="label-password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          btnType="Primary"
          disabled={
            !(
              formValues.email &&
              formValues.name &&
              formValues.username &&
              formValues.password
            )
          }
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
