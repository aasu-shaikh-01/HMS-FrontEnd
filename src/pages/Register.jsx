import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/patient/register",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          password,
          role: "Patient",
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const navigate = useNavigate();
  if (isAuthenticated) {
    return navigate("/");
  }
  return (
    <div className="flex justify-center items-center min-h-96 flex-col bg-slate-300">
      <h1 className="font-bold text-xl my-2">Sign Up</h1>
      <p className="text-gray-600 p-2">Please Register To Continue</p>{" "}
      <form
        onSubmit={handleRegister}
        className="flex flex-wrap justify-center items-center gap-4 w-full"
      >
        <input
          className="p-2 w-64 border-black rounded-sm"
          type="text"
          value={firstName}
          placeholder="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          className="p-2 w-64 border-black rounded-sm"
          type="text"
          value={lastName}
          placeholder="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          className="p-2 w-64 border-black rounded-sm"
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {/* <input
          className="p-2 w-64 border-black rounded-sm"
          type="text"
          value={role}
          placeholder="role"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        /> */}
        <input
          className="p-2 w-64 border-black rounded-sm"
          type="number"
          value={phone}
          placeholder="phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          className="p-2 w-64 border-black rounded-sm"
          type="number"
          value={nic}
          placeholder="nic"
          onChange={(e) => {
            setNic(e.target.value);
          }}
        />
        <input
          className="p-2 w-64 border-black rounded-sm"
          type="date"
          value={dob}
          placeholder="dob"
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <select
          className="w-60 h-10 rounded-sm p-1"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          className="p-2 w-64 border-black rounded-sm"
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {/* <input
          className="p-2 w-64 border-black rounded-sm"
          type="text"
          value={confirmPassword}
          placeholder="confirm password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        /> */}
        <div className="flex justify-center items-center">
          <p className="text-gray-600 p-2">Already Registered?</p>
          <Link to={"/login"} className="text-blue-700">
            Login Now
          </Link>
        </div>
        <div className="w-full bg-slate-300 flex justify-center">
          <button
            type="submit"
            className="bg-black p-2 px-6 font-bold text-white rounded-full w-64"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
// {
//   "firstName": "Asif",
//   "lastName": "Raza",
//   "email": "aasu@gmail.com",
//   "password": "12345678",
//   "confirmPassword": "12345678",
//   "role": "Patient",
//   "phone": "12345678912",
//   "nic": "12345678975",
//   "dob": "1/2/3",
//   "gender": "Male",
//   "password": "12345678",
//   "role": "Patient"
// }
{
  /* <div className="flex justify-center items-center">
  <p className="text-gray-600 p-2">Not Registered?</p>
  <Link to={"/register"} className="text-blue-700">
    Register Now
  </Link>
</div>; */
}
