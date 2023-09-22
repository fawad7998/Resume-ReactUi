import React from "react";
import Nav from "../Components/Nav";
import Edu from "../Components/Edu";
import Aboutme from "../Components/aboutme";
import Skills from "../Components/skills";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="mx-52 py-10 ">
        <div className=" flex">
          <div className="w-1/2 ">
            <Edu />
          </div>
          <div className="pl-7">
            <Aboutme />
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
