import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";

const Post = () => {
  const { userData } = useContext(UserContext);
  const [form, setForm] = useState({
    model: "",
    zip: -1,
    price: -1,
    color: "",
    wheels: -1,
    ownerId: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPost = async (e) => {
    e.preventDefault();
    try {
      const newPost = await axios.post("/api/bikes", form);
      console.log(newPost);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setForm({ ...form, ownerId: userData.userId });
  }, []);

  return (
    <div style={{ color: "grey" }}>
      <div className="jumbotron">
        <h1 className="display-4">Post a new bike:</h1>
      </div>
      <div className="container">
        <form onSubmit={submitPost}>
          <div className="form-group">
            <label>Model</label>
            <input
              className="form-control"
              onChange={onChange}
              type="text"
              name="model"
            />
          </div>
          <div className="form-group">
            <label>Zip</label>
            <input
              className="form-control"
              onChange={onChange}
              type="number"
              name="zip"
            />
          </div>
          <div className="form-group">
            <label>Price/h</label>
            <input
              className="form-control"
              onChange={onChange}
              type="number"
              name="price"
            />
          </div>
          <div className="form-group">
            <label>Color</label>
            <input
              className="form-control"
              onChange={onChange}
              type="text"
              name="color"
            />
          </div>
          <div className="form-group">
            <label># of Wheels</label>
            <input
              className="form-control"
              onChange={onChange}
              type="number"
              name="wheels"
            />
          </div>
          <hr />
          <button type="submit" className="btn btn-secondary">
            Post My Bike
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
