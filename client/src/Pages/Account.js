import React, { useState } from 'react'
import { Nav, Row } from 'react-bootstrap';
import Logout from '../Components/AccountLogout/Logout';
import Owned from '../Components/AccountOwned/Owned';
import Rented from '../Components/AccountRented/Rented';
import Settings from '../Components/AccountSettings/Settings';


const Account = () => {

    const [components, setComponents] = useState({
    showLogout: false,
    showOwned: false,
    showRented: false,
    showSettings: false,
  })

  const accountStyles = {
    vertNav: {
      border: "2px solid gray",
      width: "250px",
      margin: "40px 0px 0px 25px",
      padding: "30px"
    },
    accountBtn: {
      marginLeft: "auto",
      marginRight: "auto",
      color: "white",
      fontWeight: "bold",
    },
    accountHeading: {
      color: "white",
    }
  }
  
  return (
    <>
        <h1 style={accountStyles.accountHeading}>My Account</h1>

          <Row>
          <div className="col-md-3">
            <div className= 'vertNav' style={accountStyles.vertNav}>
              <Nav className="flex-column">
                      <button className = "btn btn-outline-secondary" onClick={() => setComponents({showSettings: true})} style={accountStyles.accountBtn}>Settings</button>
                      <button className = "btn btn-outline-secondary" onClick={() => setComponents({showOwned: true})} style={accountStyles.accountBtn}>Owned</button>
                      <button className = "btn btn-outline-secondary" onClick={() => setComponents({showRented: true})} style={accountStyles.accountBtn}>Rented</button>
                      <button className = "btn btn-outline-secondary" onClick={() => setComponents({showLogout: true})} style={accountStyles.accountBtn}>Logout</button>
              </Nav>
            </div>
          </div>

          <div className="col-md-9">
            <div>
              {components.showRented && <Rented />}
              {components.showSettings && <Settings />}
              {components.showOwned && <Owned />}
              {components.showLogout && <Logout />}
            </div>
          </div>
          </Row>
 
      </>
    
  )
}

export default Account


// import React from "react";
// // import Settings from './Account/AccountPages/Settings';
// import MyBikes from './Account/AccountPages/myBikes';
// import { Grid, Row, Col, Container } from "react-bootstrap";
// import SideNav from './Account/SideNav';
// import Logout from "../Components/AccountLogout/Logout";
// import Owned from "../Components/AccountOwned/Owned";
// import Rented from "../Components/AccountRented/Rented";
// import Settings from "../Components/AccountSettings/Settings";
// import { useState } from "react";


// const Account = () => {

//   const [components, setComponents] = useState({
//     showLogout: false,
//     showOwned: false,
//     showRented: false,
//     showSettings: false,
//   })

//   const showComponent = () => {
//     const componentToShow = showOwned;
//     setComponents({componentToShow: true})
//   }




//   return (
//     <div style={{color: "grey"}}> 
//       <div className="jumbotron">
//         <h1>My Account</h1>
        
//       </div>

// <Logout />
// <Owned />
// <Rented />
// <Settings />

//       <Container>
//         <Row>
//           <Col>
//             <SideNav/>
//           </Col>
//         <Col sm={8}>
//           <Settings></Settings>
//         </Col>
//           <MyBikes></MyBikes>
//         </Row>

      
//       </Container>
//     </div>
    
//   );
// };

// export default Account;
