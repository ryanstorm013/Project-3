import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "../Components/Container";
import Col from "../Components/Col";
import Row from "../Components/Row";
import axios from "axios";
import UserContext from "../Context/UserContext"

import "../Pages/login.css";

const Login = () => {
  const { setUserData } = useContext(UserContext)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.get(`/api/users/email/${email}`);
      if (password === user.data.password) {
        localStorage.setItem("auth-token", user.data._id);
        setUserData({ userId: user.data._id });
        history.push("/listings");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>

          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
      </form>
    </div>
  );
};

export default Login;
