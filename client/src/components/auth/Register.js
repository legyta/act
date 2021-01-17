import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Header from "../layout/Header";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post(`${BASE_API_URL}/users/register`, newUser);
      const loginResponse = await Axios.post(`${BASE_API_URL}/users/login`, {
        email,
        password,
      });
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      history.push("/profile");
    } catch (err) {
      // err.response.data.msg && setError(err.response.data.msg);
      console.log(err);
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
      <Header />
      <Box className="register-page">
        <h1>Register</h1>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}
        <form className="register-form" onSubmit={submit}>
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="register-verify-password">Verify password</label>
          <input
            type="password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />

          <label htmlFor="register-display-name">Display name</label>
          <input
            id="register-display-name"
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
          >
            Go
          </Button>
        </form>
      </Box>
    </Grid>
  );
}
