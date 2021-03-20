import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Settings from './Account/AccountPages/Settings';
import MyBikes from './Account/AccountPages/myBikes';
import { Grid, Row, Col, Container } from "react-bootstrap";
import SideNav from './Account/SideNav';


const Account = () => {
  return (
    <div style={{color: "grey"}}> 
      <div className="jumbotron">
        <h1>My Account</h1>
        
      </div>
      <Container>
        <Row>
          <Col>
            <SideNav/>
          </Col>
        <Col sm={8}>
          <Settings></Settings>
        </Col>
          <MyBikes></MyBikes>
        </Row>

      
      </Container>
    </div>
    
  );
};

export default Account;
