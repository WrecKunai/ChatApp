import React from "react";

import { useState } from "react";
import axios from "axios";
import { FaUpload, FaLocationArrow } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import "./register.css";
import { red } from "@mui/material/colors";

const Register = () => {
  const URL = process.env.REACT_APP_Url;
  const navigate = useNavigate();
  const [Registerdetails, setRegisterdetails] = useState({
    username: undefined,
    Firstname: undefined,
    Lastname: undefined,
    email: undefined,
    password: undefined,
    image: undefined,
  });
  const handleChange = (e) => {
    setRegisterdetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const fileChange = (e) => {
    setRegisterdetails((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const register = async (e) => {
    e.preventDefault();
    const formdata = new FormData();

    formdata.append("username", Registerdetails.username);
    formdata.append("Firstname", Registerdetails.Firstname);
    formdata.append("Lastname", Registerdetails.Lastname);
    formdata.append("email", Registerdetails.email);
    formdata.append("password", Registerdetails.password);
    formdata.append("image", Registerdetails.image);
    try {
      const res = await axios.post(URL + "/api/Auth/register", formdata);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register-container">
      <h1 className="log-h1">REGISTER</h1>
      <div className="register-form">
        <form
          className="reg-form"
          onSubmit={register}
          encType="multipart/form-data"
        >
          <input
            className="register-input"
            placeholder="Enter username"
            type="text"
            id="username"
            onChange={handleChange}
          />

          <input
            className="register-input"
            placeholder="Enter your First name"
            type="text"
            id="Firstname"
            onChange={handleChange}
          />

          <input
            className="register-input"
            placeholder="Enter your Last name"
            type="text"
            id="Lastname"
            onChange={handleChange}
          />

          <input
            className="register-input"
            placeholder="Enter your Email"
            type="email"
            id="email"
            onChange={handleChange}
          />

          <input
            className="register-input"
            placeholder="Enter password"
            type="text"
            id="password"
            onChange={handleChange}
          />

          <input
            className="upload-input"
            name="image"
            type="file"
            id="file"
            onChange={fileChange}
          />
          <label htmlFor="file">
            <FaUpload /> Upload Image
          </label>
          <button className="register-btn" type="submit">
            Register
          </button>
        </form>
        <div className="direct">
          Alread registered?{" "}
          <NavLink to={"/"}>
            <p> Login here</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
