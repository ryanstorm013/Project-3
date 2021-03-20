import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import myBikes from './AccountPages/myBikes';
import './SideNav.css';
import { Nav } from 'react-bootstrap';



const SideNav = () => {
    return (
        <div>
            <div className= 'vertNav'>
            <Nav className="flex-column">
              <Nav.Link href="/myBikes">My Bikes</Nav.Link>
              <Nav.Link href="/settings">Settings</Nav.Link>
              <Nav.Link href="/log-out">Log-out</Nav.Link>
              <Nav.Link href="/my-history">My History</Nav.Link>
              <Nav.Link href="/balance">Balance</Nav.Link>
            </Nav>
            </div>

            <Router>
                <Link to = "./myBikes"></Link>
                <Switch>
                    <Route path = {"/myBikes"} />
                    <Route path = {"/setting"} />
                    <Route path = {"/log-out"} />
                    <Route path = {"/my-history"} />
                    <Route path = {"/balance"} />
                </Switch>
            </Router>
        </div>
        )
    };

export default SideNav
