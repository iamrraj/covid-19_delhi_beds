import React, { useEffect, useState } from "react";
import "./Header.css";
import $ from "jquery";
import {
  FaHome,
  FaArrowLeft,
  FaArrowRight,
  FaBed,
  FaSun,
  FaRegMoon,
} from "react-icons/fa";

function Header() {
  const [small, setSmall] = useState(false);
  const [moon, setMoon] = useState(false);
  useEffect(() => {
    toggle();
  }, []);
  const toggle = () => {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  };

  const setSize = () => {
    setSmall(!small);
    window.localStorage.setItem("navBar", small);
  };
  const setTheme = () => {
    setMoon(!moon);
    window.localStorage.setItem("themeValue", moon);
  };
  let iconStyles = {
    color: "black",
    fontSize: "1.2em",
  };

  let iconStylesSmall = {
    color: "black",
    fontSize: "1.3em",
    marginLeft: "-1px",
  };
  let leftRight = {
    color: "black",
    fontSize: "1.4em",
  };

  const small1 = JSON.parse(window.localStorage.getItem("navBar"));
  const style = small1 ? iconStylesSmall : iconStyles;

  const themeData = JSON.parse(window.localStorage.getItem("themeValue"));
  const sunMoon = themeData ? (
    <>
      <span className="icon_dark">
        {" "}
        <FaRegMoon style={style} />
      </span>
      &nbsp; &nbsp; Dark
    </>
  ) : (
    <>
      <span className="icon">
        <FaSun style={style} />{" "}
      </span>
      &nbsp; &nbsp; Day
    </>
  );

  return (
    <div className={themeData ? "Dark_theme" : "day_theme"}>
      <div className={small1 ? "MainDiv1" : "MainDiv"}>
        <div className="d-flex" id="wrapper">
          <div
            className={small1 ? "border-right fix" : "border-right"}
            id="sidebar-wrapper"
          >
            <div className="sidebar-heading font-weight-bold text-center">
              {" "}
              {small1 ? "BEDS" : "DELHI BEDS"}
            </div>
            <span className="icon-decider" onClick={setSize}>
              {" "}
              {small1 ? (
                <span className="left">
                  <FaArrowRight style={leftRight} />
                </span>
              ) : (
                <span className="right">
                  {" "}
                  <FaArrowLeft style={leftRight} />
                </span>
              )}
            </span>

            <hr></hr>

            <div className="list-group list-group-flush">
              <a
                href="/"
                className="list-group-item list-group-item-action"
                title="Dashboard"
              >
                <span className="icon">
                  <FaHome style={style} />{" "}
                </span>{" "}
                &nbsp; &nbsp; Dashboard
              </a>
              <a
                href="/beds/"
                className="list-group-item list-group-item-action "
              >
                <span className="icon">
                  <FaBed style={style} />{" "}
                </span>{" "}
                &nbsp; &nbsp; Beds
              </a>

              <a
                href="# "
                onClick={setTheme}
                className="list-group-item list-group-item-action"
              >
                {sunMoon}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
