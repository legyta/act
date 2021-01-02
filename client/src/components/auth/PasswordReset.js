import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function PasswordReset() {
  const [email, setEmail] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const { history } = useHistory();

  const sendEmail = async (e) => {
    e.preventDefault();
    const passwordResetEmail = { email };
    //  const email = email;
    console.log(passwordResetEmail);
    try {
      // const passwordResetEmail = { email };
      // const email = email;
      //console.log(email);
      const response = await Axios.post(
        "http://localhost:5000/users/password-reset",
        {
          passwordResetEmail,
        }
        //  forgotPassword
      );
      console.log(response.data);
      //   window.location = "/login";
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

        <form className="reset-password-form" onSubmit={sendEmail}>
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
