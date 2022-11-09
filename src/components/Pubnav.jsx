import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  useLocation,
} from "react-router-dom";
import ContactUs from "./ContactUs";

class Pubnav extends Component {
  render() {
    return (
      <Router forceRefresh>
        <div id="navigation-wrap">
          <div className="nav-logo">
            <NavLink to="/">
              <img
                src={require("./assets/img/camacop-footer.png")}
                alt="camacop"
                width="80"
                height="80"
              />
            </NavLink>
          </div>
          <div className="menu-container">
            <ul id="menu-link">
              <li>
                <NavLink
                  reloadDocument
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloadDocument
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/Events"
                >
                  events
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloadDocument
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/Reports"
                >
                  reports
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloadDocument
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/ContactUs"
                >
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>


      </Router>
    );
  }
}

export default Pubnav;
