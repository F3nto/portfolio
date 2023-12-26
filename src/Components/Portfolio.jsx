import React from "react";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const theme = useTheme();

  const portArr = [
    {
      id: 1,
      src: require("../Assets/scent-spe.png"),
      link : "https://github.com/F3nto/scent-sense"
    },

    {
      id: 2,
      src: require("../Assets/plant-spe.png"),
      link : "https://github.com/F3nto/plant-frontend"
    },
  ];

  return (
    <div
      name="Portfolio"
      className={`w-full h-auto md:h-[100vh] ${
        theme.palette.mode === "dark"
          ? " bg-gradient-to-b from-[#141B2D] to-[#00538a]"
          : "bg-white"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center mt-20">
        <div className="text-center md:text-start">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portArr.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                className="hover:scale-105 duration-200 rounded-tl-md rounded-tr-md"
                alt=""
              />
              <div className="flex items-center justify-center">
                <Link to={link} target="_blank" rel="noopener noreferrer">
                  <button className=" px-6 py-2 rounded-md text-white bg-gradient-to-r from-primary to-[#016275] m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
