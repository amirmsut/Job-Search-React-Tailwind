import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navBar flex justify-between items-center p-[3rem]">
        <div className="logoDiv">
          <h1 className="logo text-[25px] red text-blueColor">
            <strong>Job</strong>Search
          </h1>
        </div>
        <div className="menu flex gap-8">
          <li className="menu-list text-[#6f6f6f] hover:text-blueColor">Job</li>
          <li className="menu-list text-[#6f6f6f] hover:text-blueColor">
            Companies
          </li>
          <li className="menu-list text-[#6f6f6f] hover:text-blueColor">
            About
          </li>
          <li className="menu-list text-[#6f6f6f] hover:text-blueColor">
            Contact
          </li>
          <li className="menu-list text-[#6f6f6f] hover:text-blueColor">
            Blog
          </li>
          <li className="menu-list text-[#6f6f6f] hover:text-blueColor">
            Login
          </li>
          <li className="menu-list text-[#6f6f6f] hover:text-blueColor">
            Register
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
