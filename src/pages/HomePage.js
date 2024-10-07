import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/HomePage.css";

const HomePage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src="logo.png" alt="IoT Central Logo" height="30" /> IoT Central
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Monitor IoT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-dark" href="#">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="hero-section mt-5 text-left">
          <h1>Control Your IoT Devices With Ease & Security.</h1>
          <p>
            Want to securely manage all IoT device data? Stay connected and in
            control with IoT Central!
          </p>
          <div>
            <button className="btn btn-dark mr-3">Explore</button>
            <button className="btn btn-dark">Live demo</button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-3">
            <div className="stat-card">
              <i className="material-icons">devices</i>
              <p>Connected devices</p>
              <p>5+</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <i className="material-icons">storage</i>
              <p>Data managed</p>
              <p>1mb+</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <i className="material-icons">swap_vert</i>
              <p>Data transmitted</p>
              <p>2B+</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <i className="material-icons">settings</i>
              <p>Customize settings</p>
              <p>Control</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer mt-5 p-3 text-center">
        <p>&copy; 2024 IoT Central. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
