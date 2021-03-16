import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Nav from "./Components/Nav/Nav";
import Login from "./Pages/Login";
import Account from "./Pages/Account";
import Listings from "./Pages/Listings";
import Post from "./Pages/Post";
import Footer from "./Components/Footer/Footer";

function App() {
  const [bikes, setbikes] = useState({ list: [] });

  const getBikes = async function () {
    try {
      const bikes = await axios.get("/api/bikes");
      console.log(bikes.data);
      setbikes({ list: bikes.data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBikes();
  }, []);

  return (
    <div className="App">
      <Router>
        <Link to={"/"}>Home</Link> <Link to={"/signup"}>Signup</Link>{" "}
        <Link to={"/login"}>Login</Link> <Link to={"/account"}>My Account</Link>{" "}
        <Link to={"/listings"}>Listings</Link> <Link to={"/post"}>Post</Link>
        <Switch>
          <Route path={"/signup"} component={Signup} />
          <Route path={"/login"} component={Login} />
          <Route path={"/account"} component={Account} />
          <Route path={"/listings"} component={Listings} />
          <Route path={"/post"} component={Post} />
          <Route path={"/"} component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
