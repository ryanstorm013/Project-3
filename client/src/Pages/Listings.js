import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Listings = () => {

  const [bikes, setBikes] = useState([])

  const allBikeData = async function() {
    try {
      await axios.get("/api/bikes");
      setBikes(allBikeData.data)
      console.log(bikes)
    } catch (err) {
      console.log(err)
    }
  }
    
  useEffect(async () => {
    allBikeData()
  }, [])

  return (
    <div>
      <h1>Listings</h1>

    </div>
  );
};

export default Listings;
