import React from "react";
import { useTheme } from "@mui/material";

const Experiences = () => {
 
  const theme = useTheme();

  let exp = [
    {
      id: 1,
      src: require("../Assets/html.png"),
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: require("../Assets/css-3.png"),
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: require("../Assets/js.png"),
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: require("../Assets/science.png"),
      title: "React",
      style: "shadow-blue-500",
    },

    {
      id: 5,
      src: require("../Assets/Tailwind CSS.png"),
      title: "Tailwind Css",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: require("../Assets/nodejs.png"),
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: require("../Assets/mongodb.png"),
      title: "Mongo DB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: require("../Assets/github.png"),
      title: "GitHub",
      style: "shadow-black",
    },
    {
      id: 9,
      src: require("../Assets/docker.png"),
      title: "Docker",
      style: "shadow-black",
    },
  ];

  return (
    <div
      name="Experience"
      className={`${
        theme.palette.mode === "dark"
          ? " bg-gradient-to-b from-[#141B2D] to-[#00538a]"
          : "bg-white"
      } w-full h-auto md:h-[100vh]`}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center mt-10 ">
        <div className="text-center md:text-start">
          <p className="text-4xl font-bold font-body border-b-4 border-gray-500 p-2 inline">
            Experiences
          </p>
          <p className="py-6 ">
            Embarked upon a journey through the realms of innovation
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {exp.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105  duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
