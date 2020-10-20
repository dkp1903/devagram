import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Title from "../Title/Title";
import classes from "./Login.module.css";
import Input from "../Input/Input";
import Button from "../../Button/Button";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <Fragment>
      <div className={classes.Login}>
        <Title title="Devagram" />
        <form className="form">
          <Input type="text" placeholder="Enter Username or Email" />
          <Input type="password" placeholder="Enter password" />
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
