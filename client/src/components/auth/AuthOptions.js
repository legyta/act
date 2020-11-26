import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import Grid from "@material-ui/core/Grid";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <Grid direction="row" className="page">
      <nav className="auth-options">
        {userData.user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <button onClick={register}>Start action</button>
            <button onClick={login}>Join us</button>
          </>
        )}
      </nav>
    </Grid>
  );
}
