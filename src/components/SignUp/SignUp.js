import React, { useRef, useState } from "react";
import "./SignUp.css";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleAction = (id) => {
    id.preventDefault();
    const authentication = getAuth();

    createUserWithEmailAndPassword(authentication, email, password).then(
      navigate("/")
    );
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bgcolor">
        <div className="w-100 max-w-md text-center bg-white p-4 rounded ">
          <h4 className="p-2">Create your account</h4>
          <p>Sign up with your email address and password.</p>
          <div className="forms d-flex flex-column">
            <label
              htmlFor="test"
              className="text-gray-700 mt-2 d-flex justify-content-start"
            >
              Email
            </label>
            <input
              type="email"
              className="mt-2 border p-2 rounded-3"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
            <label
              htmlFor="test"
              className="text-gray-700 mt-3 d-flex justify-content-start "
            >
              Password
            </label>
            <input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="mt-2 border p-2 rounded-3"
              required
            />
            <label className="text-left small opacity-75 p-1">
              Your password must be at least 8 characters with a mix of upper
              and lower case letters, numbers, and symbols.
            </label>
            <button
              type="button"
              className="btn btn-base btn-primary w-full p-2 mt-4"
              onClick={handleAction}
            >
              Sign Up
            </button>
            <p className="d-flex mt-2 p-1 justify-content-end">
              Already have an account?{" "}
              <Link to="/" className="mx-2">
                {" "}
                Log in now.
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
