import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="main-div">
        <div className="logo mx-auto sm:mx-0 ">CodeWithSadam</div>
        <ul className="flex space-x-3 justify-center sm:justify-normal">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
