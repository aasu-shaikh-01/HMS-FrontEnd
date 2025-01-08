import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];
  return (
    <>
      <footer>
        <hr className="h-4 border-black w-5/6 mx-auto" />
        <div className="flex justify-between items-center px-8 py-2">
          <div className="">
            <img src="logo.png" alt="logo" className="h-24 w-52" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Quick Links</h1>
            <Link to={"/"}>Home</Link>
            <Link to={"/appointment"}>Appointment</Link>
            <Link to={"/about"}>About</Link>
          </div>
          <div>
            {hours.map((e, i) => {
              return (
                <li key={i}>
                  <span>{e.day}</span> <span>{e.time}</span>
                </li>
              );
            })}
          </div>
          <div>
            <span className="flex gap-2 items-center">
              <FaPhone /> 800 289 5833
            </span>
            <span className="flex gap-2 items-center">
              <MdEmail /> absarraza@gmail.com
            </span>
            <span className="flex gap-2 items-center">
              <FaLocationArrow /> Purnea, India
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
