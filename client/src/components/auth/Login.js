import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const { history } = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const loginUser = {
        email,
        password,
      };
      const loginResponse = await Axios.post(
        `${BASE_API_URL}/users/login`,
        loginUser
      );
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      //  history.push("/profile");
      window.location = "/profile";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="left"
      className="page"
    >
      <div className="page">
        <h1>Login</h1>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}

        <form className="login-form" onSubmit={submit}>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
          >
            Login
          </Button>
          <a href="/password-reset">Forgot password?</a>
        </form>
      </div>
    </Grid>
  );
}
