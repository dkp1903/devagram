import React from "react";
import { GoogleLogin } from "react-google-login";

import Button from "../../Button/Button";
import { FaGoogle } from "react-icons/fa";

const GoogleAuth = (props) => {
  const successResponse = (response) => {
    /**
     * This will return google data of user like emailId, name, fullname, profileUrl, GoogleId idToken etc.
     * Make backend api call according and add authType as google
     */

    console.log(response);
  };

  const failureResponse = (response) => {
    /**
     * Return error if something went wrong
     * Handle error accordingly
     */

    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
      buttonText="SignIn wih google"
      onSuccess={successResponse}
      onFailure={failureResponse}
      cookiePolicy={"single_host_origin"}
      theme={"dark"}
      render={(props) => (
        <Button
          type="button"
          btnType="Google"
          disabled={props.disabled}
          onClick={props.onClick}
        >
          <FaGoogle style={{ marginRight: "0.2rem" }} />
          Login with Google
        </Button>
      )}
    />
  );
};

export default GoogleAuth;
