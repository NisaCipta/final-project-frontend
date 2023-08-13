import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        <div className="logo">
          <Link to="/">
            <img src="logo.png" alt="Logo" className="w-12 h-12" />
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." className="px-2 py-1 rounded-lg border" />
        </div>
        <div className="profile flex items-center space-x-2">
          <img src="profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
          <span className="text-white font-semibold">John Doe</span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
