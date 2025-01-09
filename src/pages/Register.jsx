import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated, url } = useContext(Context);
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
        "https://hms-backend-czxa.onrender.com/api/v1/user/patient/register",
        // `${url}/api/v1/user/patient/register`,
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
    // <div className="flex justify-center items-center min-h-96 flex-col bg-slate-300">
    //   <h1 className="font-bold text-xl my-2">Sign Up</h1>
    //   <p className="text-gray-600 p-2">Please Register To Continue</p>{" "}
    //   <form
    //     onSubmit={handleRegister}
    //     className="flex flex-wrap justify-center items-center gap-4 w-[30rem]"
    //   >
    //     <input
    //       className="p-2 w-[35rem] border-black rounded-sm"
    //       type="text"
    //       value={firstName}
    //       placeholder="firstName"
    //       onChange={(e) => {
    //         setFirstName(e.target.value);
    //       }}
    //     />
    //     <input
    //       className="p-2 w-[35rem] border-black rounded-sm"
    //       type="text"
    //       value={lastName}
    //       placeholder="lastName"
    //       onChange={(e) => {
    //         setLastName(e.target.value);
    //       }}
    //     />
    //     <input
    //       className="p-2 w-[35rem] border-black rounded-sm"
    //       type="email"
    //       value={email}
    //       placeholder="email"
    //       onChange={(e) => {
    //         setEmail(e.target.value);
    //       }}
    //     />
    //     {/* <input
    //       className="p-2 w-[35rem] border-black rounded-sm"
    //       type="text"
    //       value={role}
    //       placeholder="role"
    //       onChange={(e) => {
    //         setEmail(e.target.value);
    //       }}
    //     /> */}
    //     <input
    //       className="p-2 w-[35rem] border-black rounded-sm"
    //       type="number"
    //       value={phone}
    //       placeholder="phone"
    //       onChange={(e) => {
    //         setPhone(e.target.value);
    //       }}
    //     />
    //     <input
    //       className="p-2 w-[35rem] border-black rounded-sm"
    //       type="number"
    //       value={nic}
    //       placeholder="nic"
    //       onChange={(e) => {
    //         setNic(e.target.value);
    //       }}
    //     />
    //     <input
    //       className="p-2 w-[35rem] border-black rounded-sm"
    //       type="date"
    //       value={dob}
    //       placeholder="dob"
    //       onChange={(e) => {
    //         setDob(e.target.value);
    //       }}
    //     />
    //     <select
    //       className="w-60 h-10 rounded-sm p-1"
    //       onChange={(e) => {
    //         setGender(e.target.value);
    //       }}
    //     >
    //       <option value="">Select Gender</option>
    //       <option value="Male">Male</option>
    //       <option value="Female">Female</option>
    //     </select>
    //     <input
    //       className="p-2 w-[35rem] border-black rounded-sm"
    //       type="password"
    //       value={password}
    //       placeholder="password"
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //     />
    //     {/* <input
    //       className="p-2 w-[35rem] border-black rounded-sm"
    //       type="text"
    //       value={confirmPassword}
    //       placeholder="confirm password"
    //       onChange={(e) => {
    //         setConfirmPassword(e.target.value);
    //       }}
    //     /> */}
    //     <div className="flex justify-center items-center">
    //       <p className="text-gray-600 p-2">Already Registered?</p>
    //       <Link to={"/login"} className="text-blue-700">
    //         Login Now
    //       </Link>
    //     </div>
    //     <div className="w-1/2 bg-slate-300 flex justify-center">
    //       <button
    //         type="submit"
    //         className="bg-black p-2 px-6 font-bold text-white rounded-full w-[35rem]"
    //       >
    //         Register
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r p-6">
      <div className="w-full rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Create Your Account</h1>
        <p className="text-center text-gray-600 mb-6">Join us for a better experience!</p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid-cols-1 gap-4 flex flex-wrap justify-center">
            <input
              className="p-3 w-[30rem] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="p-3 w-[30rem] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              className="p-3 w-[30rem] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="p-3 w-[30rem] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              type="number"
              value={phone}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className="p-3 w-[30rem] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              type="number"
              value={nic}
              placeholder="NIC"
              onChange={(e) => setNic(e.target.value)}
              required
            />
            <input
              className="p-3 w-[30rem] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              type="date"
              value={dob}
              placeholder="Date of Birth"
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <select
              className="p-3 w-[30rem] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              className="p-3 w-[30rem] border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg w-[30rem] font-semibold hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already Registered?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login Now
            </Link>
          </p>
          <p className="text-gray-600">
            Not Registered?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>
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
