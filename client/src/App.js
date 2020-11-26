import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/layout/Header";
import Index from "./components/pages/Index";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./components/context/UserContext";
import global from "./components/styling/global.css";

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
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "auth-token": token } }
      );
      if (tokenResponse.data) {
        const userResponse = await Axios.get("http://localhost:5000/users/", {
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
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
