import { Link } from "react-router-dom";
import "../Styling/DataTrends.scss";
import NavBar from "../Components/navbar";
//import React, { useState } from "react";

const DataTrends = () => {
  return (
    <div className="d-flex">
      <div className="sidebar p-3 bg-dark">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">
              <i className="material-icons">home</i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">
              <i className="material-icons">bar_chart</i> Data Trends
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">
              <i className="material-icons">settings</i> Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#">
              <i className="material-icons">account_circle</i> Profile
            </Link>
          </li>
        </ul>
      </div>

      <div className="content flex-grow-1">
        <div className="container">
          <h1>Data Trends</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  Total Devices
                  <i className="material-icons">filter_list</i>
                </div>
                <div className="card-body">
                  <h2>20</h2>
                  <button className="btn btn-dark">Add device</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  Device Status
                  <i className="material-icons">group</i>
                </div>
                <div className="card-body">
                  <h2>10</h2>
                  <button className="btn btn-dark">Add status</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  Total Device Usage
                  <select
                    className="form-control form-control-sm"
                    style={{ width: "auto" }}
                  >
                    <option>Day</option>
                    <option>Week</option>
                    <option>Month</option>
                  </select>
                </div>
                <div className="card-body">
                  <p>Avg hrs./day</p>
                  <div>Chart here</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  Device Power Consumption
                  <select
                    className="form-control form-control-sm"
                    style={{ width: "auto" }}
                  >
                    <option>Year</option>
                    <option>Month</option>
                    <option>Week</option>
                  </select>
                </div>
                <div className="card-body">
                  <p>Avg. (idk.)</p>
                  <div>Chart here</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card mb-4">
                <div className="card-header">Device Connectivity</div>
                <div className="card-body">
                  <div>Chart here</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  Device Categories
                  <Link to="#" className="float-right">
                    See all
                  </Link>
                </div>
                <div className="card-body">
                  <div className="row text-center">
                    <div className="col-md-3">
                      <i className="material-icons">settings_input_antenna</i>
                      <p>Sensors</p>
                    </div>
                    <div className="col-md-3">
                      <i className="material-icons">videocam</i>
                      <p>Cameras</p>
                    </div>
                    <div className="col-md-3">
                      <i className="material-icons">settings</i>
                      <p>Settings</p>
                    </div>
                    <div className="col-md-3">
                      <i className="material-icons">group</i>
                      <p>Users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTrends;
