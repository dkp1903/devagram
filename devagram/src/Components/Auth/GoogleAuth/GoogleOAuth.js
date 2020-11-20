import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../../actions";

import AuthButton from "./AuthButton"; // Some Button to change accordingly to whether the user is signed in or not 

// Google OAuth from console.developers.google.com
const GoogleAuth = (props) => {
  const onAuthChange = (isSignedIn) => {
    const auth = window.gapi.auth2.getAuthInstance();
    if (isSignedIn) {
      props.signIn(auth.currentUser.get().getId());
    } else {
      props.signOut();
    }
  };

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "clientID from google OAuth",
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();

          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  });

  const onSignInClick = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signIn();
  };

  const onSignOutClick = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signOut();
  };

  return (
    <div>
      <AuthButton
        isUserSignedIn={props.isSignedIn}
        signIn={onSignInClick}
        signOut={onSignOutClick}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
