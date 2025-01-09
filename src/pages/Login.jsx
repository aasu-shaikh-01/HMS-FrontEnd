import React, { useContext, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, url } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  console.log(isAuthenticated);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hms-backend-czxa.onrender.com/api/v1/user/login",
        // `${url}/api/v1/user/login`,
        {
          email,
          password,
          confirmPassword,
          role: "Patient",
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setIsAuthenticated(true);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) {
    return navigate("/");
  }

  return (
    <div className="flex justify-center items-center h-96 flex-col bg-slate-300">
      <h1 className="font-bold text-xl my-2">Sign In</h1>
      <p className="text-gray-600 p-2">Please Login To Continue</p>{" "}
      <form
        onSubmit={handleLogin}
        className="flex justify-center items-center flex-col gap-4 w-full"
      >
        <input
          className="p-2 w-96 border-black rounded-sm"
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="p-2 w-96 border-black rounded-sm"
          type="text"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="p-2 w-96 border-black rounded-sm"
          type="text"
          value={confirmPassword}
          placeholder="confirm password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <div className="flex justify-center items-center">
          <p className="text-gray-600 p-2">Not Registered?</p>
          <Link to={"/register"} className="text-blue-700">
            Register Now
          </Link>
        </div>
        <button
          type="submit"
          className="bg-black p-2 px-6 font-bold text-white rounded-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
