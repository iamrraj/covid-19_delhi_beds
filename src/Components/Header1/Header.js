import React, { useEffect, useState } from "react";
import "./Header.css";
import $ from "jquery";
import { FaHome, FaArrowLeft, FaArrowRight, FaBed } from "react-icons/fa";

function Header() {
  const [small, setSmall] = useState(false);
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

  const style = small ? iconStylesSmall : iconStyles;

  return (
    <div className={small ? "MainDiv1" : "MainDiv"}>
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading font-weight-bold text-center">
            {" "}
            {small ? "BEDS" : "DELHI BEDS"}
          </div>
          <span className="icon-decider" onClick={setSize}>
            {" "}
            {small ? (
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
              className="list-group-item list-group-item-action bg-light"
              title="Dashboard"
            >
              <span className="icon">
                <FaHome style={style} />{" "}
              </span>{" "}
              &nbsp; &nbsp; Dashboard
            </a>
            <a
              href="/beds/"
              className="list-group-item list-group-item-action bg-light"
            >
              <span className="icon">
                <FaBed style={style} />{" "}
              </span>{" "}
              &nbsp; &nbsp; Beds
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
