import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
// import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  console.log(isAuthenticated);

  const handleLogout = async () => {
    await axios
      .get("https://hms-backend-czxa.onrender.com/api/v1/user/patient/logout", {
        // .get(`${url}/api/v1/user/patient/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
        // setUser("");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  // setIsAuthenticated(false);

  const Navigate = useNavigate();
  const gotoLogin = () => {
    Navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-5 sticky top-0 bg-slate-300 z-50">
      <Link to={"/"} className="flex justify-between">
        <img src="logo.png" alt="logo" className="h-16 w-52" />
      </Link>
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
          <a href="https://hms-admins-dashboard.netlify.app" target="_blank">
            DASHBOARD
          </a>
        </div>
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
      {/* <div
        className=""
        onClick={() => {
          setShow(!show);
        }}
      >
        <GiHamburgerMenu />
      </div> */}
    </nav>
  );
};

export default Navbar;
