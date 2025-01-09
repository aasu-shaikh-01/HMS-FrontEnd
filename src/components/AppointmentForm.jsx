import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const { isAuthenticated, setIsAuthenticated, url } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const [department, setDepartment] = useState("");

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Radiology",
    "Oncology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "https://hms-backend-czxa.onrender.com/api/v1/user/doctors",
        // `${url}/api/v1/user/doctors`,
        { withCredentials: true }
      );

      setDoctors(Array.isArray(data.doctors) ? data.doctors : [data.doctors]);
      // setDoctors(data.doctors);
      // console.log(data);
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "https://hms-backend-czxa.onrender.com/api/v1/appointment/post",
        // `${url}/api/v1/appointment/post`,
        {
          firstName,
          lastName,
          email,
          phone,
          dob,
          nic,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          address,
          hasVisited: hasVisitedBool,
        },
        {
          withCredentials: true,
          // headers: {
          //   "Content-Type": "application/json",
          // },
        }
      );
      toast.success(data.message);
      // console.log(data);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-96 flex-col bg-slate-300 mt-24">
    //   <h1 className="font-bold text-xl my-2">Appointment</h1>
    //   <form
    //     onSubmit={handleAppointment}
    //     className="flex flex-wrap justify-center items-center gap-4 w-full"
    //   >
    //     <input
    //       className="p-2 w-64 border-black rounded-sm"
    //       type="text"
    //       value={firstName}
    //       placeholder="firstName"
    //       onChange={(e) => {
    //         setFirstName(e.target.value);
    //       }}
    //     />
    //     <input
    //       className="p-2 w-64 border-black rounded-sm"
    //       type="text"
    //       value={lastName}
    //       placeholder="lastName"
    //       onChange={(e) => {
    //         setLastName(e.target.value);
    //       }}
    //     />
    //     <input
    //       className="p-2 w-64 border-black rounded-sm"
    //       type="email"
    //       value={email}
    //       placeholder="email"
    //       onChange={(e) => {
    //         setEmail(e.target.value);
    //       }}
    //     />
    //     <input
    //       className="p-2 w-64 border-black rounded-sm"
    //       type="number"
    //       value={phone}
    //       placeholder="phone"
    //       onChange={(e) => {
    //         setPhone(e.target.value);
    //       }}
    //     />
    //     <input
    //       className="p-2 w-64 border-black rounded-sm"
    //       type="number"
    //       value={nic}
    //       placeholder="nic"
    //       onChange={(e) => {
    //         setNic(e.target.value);
    //       }}
    //     />
    //     <label>select dob:</label>
    //     <input
    //       className="p-2 w-64 border-black rounded-sm"
    //       type="date"
    //       value={dob}
    //       placeholder="dob"
    //       onChange={(e) => {
    //         setDob(e.target.value);
    //       }}
    //     />
    //     <label>select appointmentDate:</label>
    //     <input
    //       className="p-2 w-64 border-black rounded-sm"
    //       type="date"
    //       value={appointmentDate}
    //       placeholder="Appointment Date"
    //       onChange={(e) => {
    //         setAppointmentDate(e.target.value);
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

    //     <select
    //       className="p-2 w-64 border-black rounded-sm"
    //       value={department}
    //       onChange={(e) => {
    //         setDepartment(e.target.value);
    //         setDoctorFirstName("");
    //         setDoctorLastName("");
    //       }}
    //     >
    //       {departmentsArray.map((depart, index) => {
    //         return (
    //           <option key={index} value={depart}>
    //             {depart}
    //           </option>
    //         );
    //       })}
    //     </select>

    //     <select
    //       className="p-2 w-64 border-black rounded-sm"
    //       value={`${doctorFirstName} ${doctorLastName}`}
    //       onChange={(e) => {
    //         const [firstName, lastName] = e.target.value.split(" ");
    //         setDoctorFirstName(firstName);
    //         setDoctorLastName(lastName);
    //       }}
    //       disabled={!department}
    //     >
    //       <option value="">Select Doctor</option>
    //       {doctors
    //         .filter((doctor) => doctor.doctorDepartment === department)
    //         .map((doctor, index) => (
    //           <option
    //             value={`${doctor.firstName} ${doctor.lastName}`}
    //             key={index}
    //           >
    //             {doctor.firstName} {doctor.lastName}
    //             {/* {console.log(doctor.firstName)} */}
    //           </option>
    //         ))}
    //     </select>

    //     <textarea
    //       className="w-full mx-14 p-4"
    //       rows={10}
    //       value={address}
    //       onChange={(e) => {
    //         setAddress(e.target.value);
    //       }}
    //       placeholder="Address"
    //     />

    //     <div className="w-full">
    //       <div className="flex justify-end items-center mx-14 -mt-3">
    //         <p className="text-gray-600 p-2">Have you visited before?</p>
    //         <input
    //           type="checkbox"
    //           checked={hasVisited}
    //           onChange={(e) => {
    //             setHasVisited(e.target.checked);
    //           }}
    //         />
    //       </div>
    //     </div>
    //     <div className="w-full bg-slate-300 flex justify-center">
    //       <button
    //         type="submit"
    //         className="bg-black p-2 -mt-8 mb-4 px-6 font-bold text-white rounded-full w-64"
    //       >
    //         Get Appointment
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div className="flex justify-center items-center min-h-screen flex-col bg-gradient-to-br py-12 px-4">
      <h1 className="font-bold text-2xl my-6 text-gray-800">
        Book Your Appointment
      </h1>
      <form
        onSubmit={handleAppointment}
        className="flex flex-wrap justify-center items-start gap-6 shadow-lg rounded-lg p-8 w-full"
      >
        <input
          className="p-3 w-full sm:w-[32rem] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="p-3 w-full sm:w-[32rem] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="p-3 w-full sm:w-[32rem] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-3 w-full sm:w-[32rem] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          type="tel"
          value={phone}
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="p-3 w-full sm:w-[32rem] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          type="text"
          value={nic}
          placeholder="NIC"
          onChange={(e) => setNic(e.target.value)}
        />
        <label className="w-full sm:w-[32rem] text-gray-600">
          Select DOB:
          <input
            className="p-3 w-full sm:w-[32rem] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <label className="w-full sm:w-[32rem] text-gray-600">
          Select Appointment Date:
          <input
            className="p-3 w-full sm:w-[32rem] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </label>
        <select
          className="p-3 w-full sm:w-[32rem] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          className="p-3 w-full sm:w-[32rem] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            setDoctorFirstName("");
            setDoctorLastName("");
          }}
        >
          <option value="">Select Department</option>
          {departmentsArray.map((depart, index) => (
            <option key={index} value={depart}>
              {depart}
            </option>
          ))}
        </select>
        <select
          className="p-3 w-full sm:w-[32rem] border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          value={`${doctorFirstName} ${doctorLastName}`}
          onChange={(e) => {
            const [firstName, lastName] = e.target.value.split(" ");
            setDoctorFirstName(firstName);
            setDoctorLastName(lastName);
          }}
          disabled={!department}
        >
          <option value="">Select Doctor</option>
          {doctors
            .filter((doctor) => doctor.doctorDepartment === department)
            .map((doctor, index) => (
              <option
                key={index}
                value={`${doctor.firstName} ${doctor.lastName}`}
              >
                {doctor.firstName} {doctor.lastName}
              </option>
            ))}
        </select>
        <textarea
          className="w-[65.5rem] p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          rows={5}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <div className="w-full flex gap-2 items-center">
          <label className="text-gray-600">Have you visited before?</label>
          <input
            type="checkbox"
            checked={hasVisited}
            onChange={(e) => setHasVisited(e.target.checked)}
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Get Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
