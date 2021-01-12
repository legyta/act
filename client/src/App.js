import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import UserContext from "./components/context/UserContext";
import Header from "./components/layout/Header";
import Index from "./components/pages/Index";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Vision from "./components/pages/Vision";
import UserProfile from "./components/pages/UserProfile";
import PasswordReset from "./components/auth/PasswordReset";
import global from "./components/styling/global.css";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await Axios.post(
        `${BASE_API_URL}/users/tokenIsValid`,
        null,
        { headers: { "auth-token": token } }
      );
      if (tokenResponse.data) {
        const userResponse = await Axios.get(`${BASE_API_URL}/users/`, {
          headers: { "auth-token": token },
        });
        setUserData({
          token,
          user: userResponse.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          {/* <Header /> */}
          <Header />
          <div className="container">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route exact path="/" component={Index} />
              <Route path="/vision" component={Vision} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/password-reset" component={PasswordReset} />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
