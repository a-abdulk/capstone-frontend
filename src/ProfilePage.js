import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="d-flex">
      <div className="sidebar p-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="material-icons">home</i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="material-icons">bar_chart</i> Data Trends
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="material-icons">settings</i> Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              <i className="material-icons">account_circle</i> Profile
            </a>
          </li>
        </ul>
      </div>
      <div className="content flex-grow-1">
        <div className="container">
          <h1>Profile</h1>
          <div className="profile-card mt-4">
            <div className="row">
              <div className="col-md-3">
                <i className="material-icons">account_circle</i>
              </div>
              <div className="col-md-9">
                <h2>John Doe</h2>
                <p>Last Activity: May 28, 2024, 2:39 PM</p>
                <button className="btn btn-dark">Edit Profile</button>
              </div>
            </div>
          </div>
          <div className="profile-card mt-4">
            <h3>Connected Devices</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                <div>
                  <i className="material-icons">settings_input_antenna</i>{" "}
                  Sensors
                </div>
                <span className="badge badge-dark badge-pill">49</span>
              </li>
              <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                <div>
                  <i className="material-icons">videocam</i> Cameras
                </div>
                <span className="badge badge-dark badge-pill">7</span>
              </li>
              <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                <div>
                  <i className="material-icons">thermostat</i> Thermostats
                </div>
                <span className="badge badge-dark badge-pill">13</span>
              </li>
              <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                <div>
                  <i className="material-icons">lock</i> Locks
                </div>
                <span className="badge badge-dark badge-pill">63</span>
              </li>
              <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                <div>
                  <i className="material-icons">wb_incandescent</i> Lights
                </div>
                <span className="badge badge-dark badge-pill">23</span>
              </li>
              <li className="list-group-item bg-transparent d-flex justify-content-between align-items-center">
                <div>
                  <i className="material-icons">toggle_off</i> Switches
                </div>
                <span className="badge badge-dark badge-pill">11</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
