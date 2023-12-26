import React from "react";
import { ChevronRightOutlined } from "@mui/icons-material";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div
      name="Home"
      className="flex items-center flex-col md:flex-row justify-center h-auto md:h-[100vh] mt-20 md:mt-0"
    >
      <div className="max-w-screen-lg p-8 shadow-md rounded-md w-full md:w-1/2 ml-0 md:ml-20 text-center md:text-start">
        <h2 className="font-body text-3xl mb-4">Fento's here, a front-end developer</h2>
        <p className="font-body">
          Hello, I'm Fento, a front-end developer passionate about creating
          beautiful and responsive user interfaces. I specialize in the MERN
          (MongoDB, Express.js, React, Node.js) stack. I believe in the joy of
          coding, where each line contributes to a positive and enjoyable
          development process.
        </p>
        <div className="mt-6 flex md:flex-none justify-center md:justify-normal items-center">
          <Link to="Portfolio" smooth duration={500} className="flex items-center cursor-pointer text-white bg-gradient-to-r from-primary to-[#016275] px-4 py-2 rounded-md">
            <text className="font-body tracking-wider">Portfolio</text>
            <ChevronRightOutlined />
          </Link>
        </div>
      </div>

      <div className="relative flex justify-center items-center rounded-tr-md rounded-tl-md group">
        <img
          src={require(`../Assets/profile.png`)}
          alt=""
          className={`object-cover z-10`}
        />
        <div className="rounded-full w-64 h-64 bg-gradient-to-r from-primary to-[#016275] absolute" />
      </div>
    </div>
  );
};

export default Intro;
