import React, { useContext, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import UserContext from "../../Context/UserContext";

const Owned = () => {
  const { userData } = useContext(UserContext);
  const [owned, setOwned] = useState([]);

  const getTransactions = async function () {
    try {
      const ownedBikes = await axios.get(`/api/transaction/${userData.userId}`);
      console.log(ownedBikes);
      setOwned(ownedBikes.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(async () => {
    getTransactions();
  }, []);

  return (
    <div>
      {owned.map((bike, index) => (
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

export default Owned;
