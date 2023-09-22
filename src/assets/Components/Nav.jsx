import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="bg-blue-400 w-full h-20 flex items-center ">
        <nav className="container mx-24 flex justify-between items-center">
          <div className="text-white  text-3xl font-bold">My Resmue</div>
          <div>
            <Link to='/'>

            <a href="" className="text-white text-x px-2">
              <span>
                <i className="fa-solid fa-house px-1"></i>
              </span>
              Home
            </a>
            </Link>
            <Link to="/skills">
              <a href="" className="text-white text-x px-2">
                <span>
                  <i className="fa-solid fa-scroll px-1"></i>
                </span>
                Skills
              </a>
            </Link>
            <a href="" className="text-white text-x px-2">
              <span>
                <i className="fa-solid fa-address-card px-1"></i>
              </span>
              Exprience
            </a>

            <Link to="/edu">
              <a href="" className="text-white text-x px-2">
                <span>
                  <i className="fa-solid fa-graduation-cap px-1"></i>
                </span>
                Education
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
