import React, { useState } from 'react';
import Container from "../../Components/Container";
import Col from "../../Components/Col";
import Row from "../../Components/Row";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayName, setDisplayName] = useState();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("email is" + email);
    console.log("DisplayName is " + displayName);
    console.log("password is " + password);
    
    try {
    const userPost = await axios.post("/api/users", {email, password, displayName});
      console.log(userPost);
    } catch (err) {
      console.log(err)
    };
  };



  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">

          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Displayname"
                name="Displayname"
                onChange={e => setDisplayName(e.target.value)}
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
}

export default Signup;
