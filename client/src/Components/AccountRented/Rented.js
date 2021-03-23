import React, { useContext, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import UserContext from "../../Context/UserContext";

const Rented = () => {
  const { userData } = useContext(UserContext);

  const [rented, setRented] = useState([]);
  //   const [bikes, setBikes] = useState([]);

  const getTransactions = async function () {
    try {
      const rentedBikes = await axios.get(
        `/api/transaction/${userData.userId}`
      );
      console.log(rentedBikes);
      setRented(rentedBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    getTransactions();
    // allBikeData()
  }, []);

  // api request for all bikes
  // const allBikeData = async function () {
  //     let rentId = rented.renterId;
  //     console.log(rentId);
  //     try {
  //         const allBikes = await axios.get(`/api/bikes/${rentId}`);
  //         console.log(allBikes);
  //         setBikes(allBikes.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  // };

  return (
    <div>
      {rented.map((bike, index) => (
        <div key={index} className="card mt-2 mb-2">
          <div className="card-header">{bike.ownerId}</div>
          <div className="card-body">
            <p className="card-text">Location: {bike.bikeId}</p>
            <p className="card-text">Price: {bike.renterId}</p>
            <p className="card-text">Color: {bike.color}</p>
            <p className="card-text">Num Wheels: {bike.wheels}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rented;
