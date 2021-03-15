import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Listings = () => {

  // Listings Page Styling
  const listingsStyles = {
    btnGroup: {
      margin: "30px auto 10px auto",
    },

    listingsBtn: {
      width: "150px",
      marginLeft: "10px",
    }
  }

  // Get bike data from back end and set state
  const [bikes, setBikes] = useState([])

  const allBikeData = async function() {
    try {
      const allBikes = await axios.get("/api/bikes?color=Red");
      console.log(allBikes.filter())
      setBikes(allBikes.data)
    } catch (err) {
      console.log(err)
    }
  }
    
  // Data to display
  useEffect(async () => {
    allBikeData()
  }, [])

  // Functions for filtering bike data
  const handleAll = () => {
    alert('All Clicked')
  }

  const handleModel = (e) => {
    let modelSelection = e.target.id;
    console.log(modelSelection);
  }

  const handleZip = (e) => {
    let zipSelection = e.target.id;
    console.log(zipSelection);
  }

  const handlePrice = (e) => {
    let priceSelection = e.target.id;
    console.log(priceSelection);
  }

  const handleColor = (e) => {
    let colorSelection = e.target.id;
    console.log(colorSelection);
  }

  const handleWheels = (e) => {
    let wheelSelection = e.target.id;
    console.log(wheelSelection);
  }


  return (
    <div className = 'container'>
      <h1>Listings</h1>

      <h3>Filter Listings By:</h3>

      <div className="btn-group" style={listingsStyles.btnGroup}>
        <button onClick={()=> handleAll()} type="button" className="btn btn-outline-danger" style={listingsStyles.listingsBtn}>
          All Bikes
        </button>
  
        <button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={listingsStyles.listingsBtn}>
          Models
        </button>
        <ul className="dropdown-menu">
          {bikes.map(bike => (
            <li><a id = {bike.model} onClick={(e)=> handleModel(e)} className="dropdown-item" href="#">{bike.model}</a></li>
          ))}
        </ul>
  
        <button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={listingsStyles.listingsBtn}>
          Location
        </button>
        <ul className="dropdown-menu">
          {bikes.map(bike => (
            <li><a id = {bike.zip} onClick={(e)=> handleZip(e)} className="dropdown-item" href="#">{bike.zip}</a></li>
          ))}
        </ul>

        <button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={listingsStyles.listingsBtn}>
          Price
        </button>
        <ul className="dropdown-menu">
          {bikes.map(bike => (
            <li><a id = {bike.price} onClick={(e)=> handlePrice(e)} className="dropdown-item" href="#">{bike.price}</a></li>
          ))}
        </ul>
    
        <button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={listingsStyles.listingsBtn}>
          Color
        </button>
        <ul className="dropdown-menu">
          {bikes.map(bike => (
            <li><a id = {bike.color} onClick={(e)=> handleColor(e)} className="dropdown-item" href="#">{bike.color}</a></li>
          ))}
        </ul>
  
        <button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={listingsStyles.listingsBtn}>
          Num. Wheels
        </button>
        <ul className="dropdown-menu">
          {bikes.map(bike => (
            <li><a id = {bike.wheels} onClick={(e)=> handleWheels(e)} className="dropdown-item" href="#">{bike.wheels}</a></li>
          ))}
        </ul>

      </div>
      
      <div>
        {bikes.map(bike => (
          // <p>{bike.model}</p>
        <div className="card mt-2 mb-2">
          <div className="card-header">
            {bike.model}
          </div>
          <div className="card-body">
            <p className="card-text">Location: {bike.zip}</p>
            <p className="card-text">Price: {bike.price}</p>
            <p className="card-text">Color: {bike.color}</p>
            <p className="card-text">Num Wheels: {bike.wheels}</p>
            <a href="#" class="btn btn-outline-primary">Rent Bike!</a>
          </div>
        </div>
        ))}
      </div>

    </div>
  );
};

export default Listings;
