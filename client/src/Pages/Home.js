import React from "react";
import { useHistory } from "react-router-dom";
import "../Pages/home.css";

const Home = () => {
  const history = useHistory();

  const handleRentClick = () => {
    let path = "/signup";
    history.push(path);
  };

  const handleReturnClick = () => {
    let path = "/login";
    history.push(path);
  };

  return (
    <div>
      <div className="parallax text-center">
        <p id="text-jumbo">Rent My Ride</p>
      </div>
      <div className="btn-div">
        <button onClick={handleRentClick} className="btn btn-dark">
          Rent
        </button>
        <button onClick={handleReturnClick} className="btn btn-dark">
          Return
        </button>
      </div>
      <div className="welcome-div">
        <p>Grab a ride here, so you can get around quick out there.</p>
      </div>
    </div>
  );
};

export default Home;
