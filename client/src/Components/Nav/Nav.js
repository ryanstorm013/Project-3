import React from "react";
import "./styles.css";
import {Navbar, Nav} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "../Footer/Footer"; 

const Navi = (props) => {
  return( 
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          
          <a className="navbar-brand" href="/">
            {/* <Link to={"/"} style={{ textDecoration: 'none' }}>Home</Link>  */}
            Home
          </a>
        {/* <div  className="collapse navbar-collapse"> */}
        
          <ul className="navbar-nav mr-auto">
            <li class="nav-item">
              <a className="nav-link " href="/listings">
                Listings
              </a>
            </li>
          </ul>
          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link " href="/signup">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/post">
                Post
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/account" id="navbarDropdown">
                My Account
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/account">Settings</a>
                <a class="dropdown-item" href="/account">Rented</a>
                <a class="dropdown-item" href="/account">Owned</a>
                <a class="dropdown-item" href="/account">Log Out</a>
              </div>
            </li>
          </ul>  
          
        {/* </div> */}
          
        
        
        {/* <Link to={"/listings"}>Listings</Link> 
        <Link to={"/post"}>Post</Link>  */}
      </nav>
    </div>);
};

export default Navi;
