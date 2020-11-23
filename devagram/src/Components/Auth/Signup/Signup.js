import React, { useState } from "react";

import Title from "../Title/Title";
import Button from "../../Button/Button";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import classes from "./Signup.module.css";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import { connect } from "react-redux";
import { authUser } from "../../../actions";

const INITIAL_STATE_FORM_STATE = {
  email: "",
  name: "",
  username: "",
  password: "",
};

const Signup = ({ auth: { error, isAuth, loading }, registerUser }) => {
  const [formValues, setFormValues] = useState({ ...INITIAL_STATE_FORM_STATE });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    registerUser(formValues, true);
    setFormValues({ ...INITIAL_STATE_FORM_STATE });
  };

  return (
    <div className={classes["signup-container"]}>
      <Title title="Devagram" />

      <p className={classes.desc}>
        {error ? error : "Sign up to experience the Developer Hub."}
      </p>

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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (authData, isSignup) => dispatch(authUser(authData, isSignup)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
