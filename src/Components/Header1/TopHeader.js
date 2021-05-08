import React from "react";
import { FaHome, FaBed } from "react-icons/fa";

function TopHeader() {
  return (
    <div id="page-content-wrapper" className="Visibale_data">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button class="btn" id="menu-toggle">
          DELHI BEDS
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0" >
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/beds/">
                Beds
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div>
        <div class="topnav" id="myTopnav">
          <span className="float-left">DELHI BEDS</span>
          <a href="/beds/" className=" bg-light">
            {" "}
            <FaBed /> Beds
          </a>
          <a href="/" class="active">
            <FaHome /> Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
