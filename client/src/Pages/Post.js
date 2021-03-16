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
    <div>
      <form onSubmit={submitPost}>
        <input onChange={onChange} type="text" name="model" />
        <input onChange={onChange} type="number" name="zip" />
        <input onChange={onChange} type="number" name="price" />
        <input onChange={onChange} type="text" name="color" />
        <input onChange={onChange} type="number" name="wheels" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Post;
