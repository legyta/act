import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function ForgotPassword() {
  const [email, setEmail] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const { history } = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const forgotPassword = { email };

      await Axios.post(
        `${BASE_API_URL}/users/forgot-password`,
        forgotPassword
      );

      window.location = "/login";
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
        <h1>Forgot Password</h1>
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}

        <form className="reset-password-form" onSubmit={submit}>
          <label htmlFor="forgot-email">Email</label>
          <input
            id="forgot-email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
          >
            Reset Password
          </Button>
        </form>
      </div>
    </Grid>
  );
}
