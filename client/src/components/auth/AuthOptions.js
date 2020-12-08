import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

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
    history.push("/");
  };

  return (
    <Box>
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
    </Box>
  );
}
