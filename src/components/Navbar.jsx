import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
// import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated, url } = useContext(Context);

  const handleLogout = async () => {
    await axios
      // .get("http://localhost:4000/api/v1/user/patient/logout", {
      .get(`${url}/api/v1/user/patient/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const Navigate = useNavigate();
  const gotoLogin = () => {
    Navigate("/login");
  };

  return (
    <nav className="flex justify-center items-center px-5">
      <div className="flex justify-between">
        <img src="logo.png" alt="logo" className="h-16 w-52" />
      </div>
      <div
        className={`${
          show ? "navLinks showmenu" : "navLinks"
        } ml-80 flex w-full justify-between`}
      >
        <div className="flex justify-center items-center">
          <Link to={"/"} className="mx-6">
            HOME
          </Link>
          <Link to={"/appointment"} className="mx-6">
            APPOINTMENT
          </Link>
          <Link to={"/about"} className="mx-6">
            ABOUT US
          </Link>
        </div>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-blue-950 text-white text-sm font-bold p-2 px-4 rounded-full shadow-2xl"
          >
            LOGOUT
          </button>
        ) : (
          <button
            onClick={gotoLogin}
            className="bg-blue-950 text-white text-sm font-bold p-2 px-4 rounded-full shadow-2xl"
          >
            LOGIN
          </button>
        )}
      </div>
      <div
        className=""
        onClick={() => {
          setShow(!show);
        }}
      >
        {/* <GiHamburgerMenu /> */}
      </div>
    </nav>
  );
};

export default Navbar;
