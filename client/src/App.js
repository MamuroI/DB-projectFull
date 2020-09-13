import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Cookie from "js-cookie";
import GlobalState from "./Components/Utils/GlobalState";
import Navbar from "./Components/Sub/Navbar";
import Route from "./Components/Routes/Routes";
import { GetUserAPI } from "./Components/API/AuthAPI";

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  const GetUser = () => {};

  const isAuth = async () => {
    if (Cookie.get("id")) {
      setAuth(true);
      const res = await GetUserAPI(Cookie.get("id"));
      console.log();
      setUser(res.data);
    }
  };

  useEffect(() => {
    isAuth();
  }, [auth]);

  return (
    <GlobalState.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
      }}
    >
      <Router>
        <div className="body">
          <Navbar />
          <Route />
        </div>
      </Router>
    </GlobalState.Provider>
  );
}

export default App;
