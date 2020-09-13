import React from "react";
import Cookie from "js-cookie";
import navbar from "reactstrap";

import GlobalState from "../Utils/GlobalState";

const Navbar = () => {
  const { auth, user } = React.useContext(GlobalState);

  const handleLogout = () => {
    Cookie.remove("id");
    window.location.reload();
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <a id="Brandname" className="navbar-brand" href="/home">
                YACHT OMAKASE
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                  {!auth ? (
                    <li className="nav-item">
                      <a className="nav-link" href="/signin">
                        SignIn / SignUp
                      </a>
                    </li>
                  ) : (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="/reservation">
                          Reserve
                        </a>
                      </li>
                      <li className="nav-item dropdown dropdown-menu-right">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {user.C_Name}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          {Cookie.get("id") === "1" ? (
                            <a
                              className="dropdown-item"
                              href="/edit_reservation"
                            >
                              Edit Reservation
                            </a>
                          ) : (
                            <></>
                          )}
                          <a
                            className="dropdown-item"
                            href="/account_management"
                          >
                            Account
                          </a>
                          <a className="dropdown-item" onClick={handleLogout}>
                            LogOut
                          </a>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
