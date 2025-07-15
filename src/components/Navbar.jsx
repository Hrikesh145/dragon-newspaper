import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import button from "daisyui/components/button";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex items-center gap-3 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-2">
        <img src={userIcon} alt="" />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-primary py-3 px-10 text-base-100"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-primary py-3 px-10 text-base-100"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
