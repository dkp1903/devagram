import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Title from "../Title/Title";
import classes from "./Login.module.css";
import Input from "../Input/Input";
import Button from "../../Button/Button";
import { FaFacebook } from "react-icons/fa";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import { authUser } from "../../../actions";
import Loader from "../../Loader/Loader";

const Login = ({ auth: { isAuth, loading, error }, loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    const formData = {
      emailOrUsername: email,
      password,
    };
    loginUser(formData);
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className={classes.Login}>
        <Title title="Devagram" />
        {error && (
          <p style={{ color: "red", textAlign: "center" }}> {error} </p>
        )}
        <form className="form" onSubmit={onLogin}>
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
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
            </Fragment>
          )}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (authData) => dispatch(authUser(authData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
