import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import Grid from "@material-ui/core/Grid";
import Header from "../layout/Header";

export default function UserProfile() {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <Grid direction="row" className="page">
      <Header />
      <nav className="auth-options">
        {!userData.user ? (
          <h2>
            <h1>You are not registered yet, so there is no profile here.</h1>
          </h2>
        ) : (
          <>
            <br></br>
            <h1>Hi {userData.user.displayName}!</h1> <br></br>
            <div>
              <h2>Welcome to the world changing tribe</h2>
              <h2>Here you can tell others about yourself!</h2>
              <h2>...and start ACTIONS!</h2>
            </div>
          </>
        )}
      </nav>
    </Grid>
  );
}
