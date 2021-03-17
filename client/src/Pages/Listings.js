import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Listings = () => {
  const [bikes, setBikes] = useState([]);
  const [options, setOptions] = useState([]);

  // Data to display
  useEffect(async () => {
    optionData();
    allBikeData();
  }, []);

  // api request for all bikes
  const allBikeData = async function () {
    try {
      const allBikes = await axios.get("/api/bikes");
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  // api request for option menu of bikes called useEffect
  const optionData = async function () {
    try {
      const optionList = await axios.get("/api/bikes");
      console.log(optionList);
      setOptions(optionList.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Listings Page Styling
  const listingsStyles = {
    btnGroup: {
      margin: "30px auto 10px auto",
    },

    listingsBtn: {
      width: "150px",
      marginLeft: "10px",
    },
  };

  // const reset = {
  //   setBikes([])
  //   setModel([])
  //   setColor([])
  // }

  // Functions for filtering bike data
  const handleAll = () => {
    alert("All Clicked");
  };

  //handling model selection
  const handleModel = async function (e) {
    let modelSelection = e.target.id;

    try {
      const allBikes = await axios.get(`/api/bikes/${modelSelection}`);
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  // (e) => {
  //   let modelSelection = e.target;
  //   console.log(modelSelection);
  //   setBikes(modelSelection);
  // };

  const handleZip = async function (e) {
    let zipSelection = e.target.id;
    console.log(zipSelection);
    try {
      const allBikes = await axios.get(`/api/bikes/zip/${zipSelection}`);
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePrice = async function (e) {

    var priceSelection = 0;
    console.log(priceSelection);

    if (e.target.id == '<=5') {
      priceSelection = 5;

    } else if (e.target.id == '<=10') {
      priceSelection = 10;

    } else if (e.target.id == '<=15') {
      priceSelection = 15;

    } else if (e.target.id == '<=20') {
      priceSelection = 20;

    } else if (e.target.id == '<=25') {
      priceSelection = 25;

    } else {
      priceSelection = 1000000;

    }
    try {
      const allBikes = await axios.get(`/api/bikes/price/${priceSelection}`);
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };



  const handleWheels = async function (e) {
    let wheelSelection = e.target.id;
    console.log(wheelSelection);
    try {
      const allBikes = await axios.get(`/api/bikes/wheels/${wheelSelection}`);
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleColor = async function (e) {
    let colorSelection = e.target.id;
    console.log(colorSelection);
    try {
      const allBikes = await axios.get(`/api/bikes/color/${colorSelection}`);
      console.log(allBikes);
      setBikes(allBikes.data);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="container">
      <h1>Listings</h1>

      <h3>Filter Listings By:</h3>

      <div className="btn-group" style={listingsStyles.btnGroup}>
        <button
          onClick={() => handleAll()}
          type="button"
          className="btn btn-outline-secondary"
          style={listingsStyles.listingsBtn}
        >
          All Bikes
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={listingsStyles.listingsBtn}
        >
          Models
        </button>
        <ul className="dropdown-menu">
          {options.map((options) => (
            <li>
              <a
                id={options.model}
                onClick={(e) => handleModel(e)}
                className="dropdown-item"
                href="#"
              >
                {options.model}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={listingsStyles.listingsBtn}
        >
          Location
        </button>
        <ul className="dropdown-menu">
          {options.map((options) => (
            <li>
              <a
                id={options.zip}
                onClick={(e) => handleZip(e)}
                className="dropdown-item"
                href="#"
              >
                {options.zip}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={listingsStyles.listingsBtn}
        >
          Price
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              id="<=5"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              $0-5/hr
            </a>
          </li>
          <li>
            <a
              id="<=10"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              $6-10/hr
            </a>
          </li>
          <li>
            <a
              id="<=15"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              $11-15/hr
            </a>
          </li>
          <li>
            <a
              id="<=20"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              $16-20/hr
            </a>
          </li>
          <li>
            <a
              id="<=25"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              $20-25/hr
            </a>
          </li>
          <li>
            <a
              id=">=26"
              onClick={(e) => handlePrice(e)}
              className="dropdown-item"
              href="#"
            >
              $26+/hr
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={listingsStyles.listingsBtn}
        >
          Color
        </button>
        <ul className="dropdown-menu">
          {options.map((options) => (
            <li>
              <a
                id={options.color}
                onClick={(e) => handleColor(e)}
                className="dropdown-item"
                href="#"
              >
                {options.color}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={listingsStyles.listingsBtn}
        >
          Num. Wheels
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              id="1"
              onClick={(e) => handleWheels(e)}
              className="dropdown-item"
              href="#"
            >
              1
            </a>
          </li>
          <li>
            <a
              id="2"
              onClick={(e) => handleWheels(e)}
              className="dropdown-item"
              href="#"
            >
              2
            </a>
          </li>
          <li>
            <a
              id="3"
              onClick={(e) => handleWheels(e)}
              className="dropdown-item"
              href="#"
            >
              3
            </a>
          </li>
          <li>
            <a
              id="4"
              onClick={(e) => handleWheels(e)}
              className="dropdown-item"
              href="#"
            >
              4
            </a>
          </li>
          <li>
            <a
              id="5"
              onClick={(e) => handleWheels(e)}
              className="dropdown-item"
              href="#"
            >
              5+
            </a>
          </li>
        </ul>
      </div>

      <div>
        {bikes.map((bike) => (
          <div className="card mt-2 mb-2">
            <div className="card-header">{bike.model}</div>
            <div className="card-body">
              <p className="card-text">Location: {bike.zip}</p>
              <p className="card-text">Price: {bike.price}</p>
              <p className="card-text">Color: {bike.color}</p>
              <p className="card-text">Num Wheels: {bike.wheels}</p>
              <a href="#" className="btn btn-outline-primary">
                Rent Bike!
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
