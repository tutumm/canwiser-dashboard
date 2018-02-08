import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import styled from 'styled-components';

import Profile from './img/profile.jpg';

const Nav = styled.div`

font-family: 'Montserrat', sans-serif;

.bg-dark {
  background-color: #43bfc7 !important;
}

#mainNav.navbar-dark .navbar-collapse .navbar-sidenav {
  background: #43bfc7;
}

.nav-link-text {
  color: white !important;
}

.fa {
  color: white;
}

#mainNav.fixed-top.navbar-dark .sidenav-toggler {
  background-color: #43bfc7;
}

.fa-angle-left {
  color: transparent !important;
}

.fa-angle-right {
  color: white !important;
}

.profile-img img{
  width: 60%;
}

.profile-img {
  text-align: center;
}
`

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <a className="navbar-brand" href="/">CanWiser</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">

            <li className="nav-item profile-img" data-toggle="tooltip" data-placement="right" title="Dashboard">
                <img className="rounded-circle" alt="profile" src={Profile} />
            </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                <Link className="nav-link" to="/dashboard">
                  <i className="fa fa-fw fa-dashboard"></i>
                  <span className="nav-link-text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                <Link className="nav-link" to="/upload">
                  <i className="fa fa-fw fa-area-chart"></i>
                  <span className="nav-link-text">Upload</span>
                </Link>
              </li>
              <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                <Link className="nav-link" to="/prediction">
                  <i className="fa fa-fw fa-table"></i>
                  <span className="nav-link-text">Prediction</span>
                </Link>
              </li>
              
            </ul>
            <ul className="navbar-nav sidenav-toggler">
              <li className="nav-item">
                <a className="nav-link text-center" id="sidenavToggler">
                  <i className="fa fa-fw fa-angle-left"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-fw fa-envelope"></i>
                <span class="d-lg-none">Messages
              <span class="badge badge-pill badge-primary">12 New</span>
                </span>
                <span class="indicator text-primary d-none d-lg-block">
                  <i class="fa fa-fw fa-circle"></i>
                </span>
              </a>
              <div class="dropdown-menu" aria-labelledby="messagesDropdown">
                <h6 class="dropdown-header">New Messages:</h6>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <strong>David Miller</strong>
                  <span class="small float-right text-muted">11:21 AM</span>
                  <div class="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <strong>Jane Smith</strong>
                  <span class="small float-right text-muted">11:21 AM</span>
                  <div class="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <strong>John Doe</strong>
                  <span class="small float-right text-muted">11:21 AM</span>
                  <div class="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item small" href="#">View all messages</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-fw fa-bell"></i>
                <span class="d-lg-none">Alerts
              <span class="badge badge-pill badge-warning">6 New</span>
                </span>
                <span class="indicator text-warning d-none d-lg-block">
                  <i class="fa fa-fw fa-circle"></i>
                </span>
              </a>
              <div class="dropdown-menu" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">New Alerts:</h6>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <span class="text-success">
                    <strong>
                      <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                  </span>
                  <span class="small float-right text-muted">11:21 AM</span>
                  <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <span class="text-danger">
                    <strong>
                      <i class="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
                  </span>
                  <span class="small float-right text-muted">11:21 AM</span>
                  <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  <span class="text-success">
                    <strong>
                      <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
                  </span>
                  <span class="small float-right text-muted">11:21 AM</span>
                  <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item small" href="#">View all alerts</a>
              </div>
            </li> */}
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                  <i className="fa fa-fw fa-sign-out"></i>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </Nav>
    )
  }
}

export default Navbar