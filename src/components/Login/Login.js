import { useEffect, useState } from "react";
import google from "./google-icon.svg";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./Login.css";
import Swal from "sweetalert2";

import logo from "../../logo.png";

const Login = ({ isAuth, setIsAuth }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let navigate = useNavigate();

  const logged = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      localStorage.setItem("isAuth", true);
      setIsAuth(true);

      const grat = () => {
        navigate("/");
      };
      setTimeout(grat, 1500);

      toast(`Successfully logged in! Loading...`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
        pauseOnHover: true,
        draggable: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);

      toast(`Successfully logged in! Loading...`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
        pauseOnHover: true,
        draggable: false,
      });
      setIsAuth(true);

      const grat = () => {
        navigate("/");
      };
      setTimeout(grat, 1500);
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bgcolor">
        <img src={logo} className=" dom" />

        <div className="w-100 max-w-md text-center bg-white p-4 rounded ">
          <h4 className="p-2">Sign in to your account</h4>
          <button
            className="w-100 border bg-white p-1 rounded-pill"
            type="button"
            onClick={signIn}
          >
            <div className="d-flex justify-content-center align-items-center py-2 px-4 cas signup-button">
              <img src={google} id="google" />{" "}
              <span className="sign-google">Sign in with Google</span>
            </div>
          </button>
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
                setLoginEmail(event.target.value);
              }}
              required
            />
            <label
              htmlFor="test"
              className="text-gray-700 mt-4 d-flex justify-content-start"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              className="mt-2 border p-2 rounded-3"
              required
            />
            <button
              type="button"
              className="btn btn-base btn-primary w-full p-2 mt-4  "
              onClick={logged}
            >
              Login
            </button>
            <p className="d-flex justify-content-end mt-2">
              Don't have an account?{" "}
              <Link to="/signup" className="mx-2">
                Sign up now.
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
