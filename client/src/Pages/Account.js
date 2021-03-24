import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { Nav, Row } from 'react-bootstrap';
import Logout from '../Components/AccountLogout/Logout';
import Owned from '../Components/AccountOwned/Owned';
import Rented from '../Components/AccountRented/Rented';
import Settings from '../Components/AccountSettings/Settings';
import UserContext from "../Context/UserContext"


const Account = () => {
  const history = useHistory();
  const { userData } = useContext(UserContext);

  const [components, setComponents] = useState({
    showRented: false,
    showLogout: false,
    showOwned: false,
    showSettings: false,
  })

  const onLoad = function() {
    setComponents({showRented: true})
  }


  const checkLogin = function () {
    try {
      const login = localStorage.getItem("auth-token");
      if (login === "" || login !== userData.userId) {
        history.push("/login")
      }
    } catch (err) {
      console.log(err);
    }
  }

  const accountStyles = {
    vertNav: {
      border: "2px solid gray",
      borderRadius: "12px",
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
    },
    contentSection: {
      marginTop: "40px",
    }
  }

  useEffect(async () => {
    onLoad();
    checkLogin();
  }, [])

  return (
    <>
      <h1 style={accountStyles.accountHeading}>My Account</h1>

      <Row>
        <div className="col-md-3">
          <div className='vertNav' style={accountStyles.vertNav}>
            <Nav className="flex-column">
              <button className="btn btn-outline-secondary" onClick={() => setComponents({ showSettings: true })} style={accountStyles.accountBtn}>Settings</button>
              <button className="btn btn-outline-secondary" onClick={() => setComponents({ showOwned: true })} style={accountStyles.accountBtn}>Owned</button>
              <button className="btn btn-outline-secondary" onClick={() => setComponents({ showRented: true })} style={accountStyles.accountBtn}>Rented</button>
              <button className="btn btn-outline-secondary" onClick={() => setComponents({ showLogout: true })} style={accountStyles.accountBtn}>Logout</button>
            </Nav>
          </div>
        </div>

        <div className="col-md-9" style={accountStyles.contentSection}>
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