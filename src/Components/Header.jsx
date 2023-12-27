import React, { useState, useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-scroll";
import { ColorModeContext } from "../Theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import Drawer from "../Drawer/Drawer";

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const [isClickMenu, setIsClickMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const links = useMemo(
    () => [
      {
        id: 1,
        link: "Home",
      },
      {
        id: 2,
        link: "About",
      },
      {
        id: 3,
        link: "Portfolio",
      },
      {
        id: 4,
        link: "Experience",
      },
      {
        id: 5,
        link: "Contact",
      },
    ],
    []
  );

  const handleClickMenu = () => {
    setIsClickMenu((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsClickMenu(false);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        className={`mx-12 rounded-bl-md rounded-br-md ${
          theme.palette.mode === "dark" ? "bg-[#141B2D]" : "bg-white"
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box className="font-sign text-5xl font-bold">Fento</Box>
        <Box className="" display="flex">
          <ul className="hidden md:flex justify-center items-center space-x-3 mr-4">
            {links.map((link) => (
              <li
                key={link.id}
                className={`px-4 cursor-pointer capitalize font-body font-medium ${
                  activeLink === link.link
                    ? "text-primary"
                    : "text-gray-500 hover:scale-105 duration-200 hover:text-primary"
                }`}
              >
                <Link
                  to={link.link}
                  smooth
                  duration={500}
                  onClick={() => setActiveLink(link.link)}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex md:sm:hidden mr-5 ml-5 sm:ml-0">
            <button
              onClick={() => handleClickMenu()}
              className="humbuger-menu flex flex-col items-end p-4 focus:outline-none"
            >
              <div
                className={`h-1 w-7 my-0.5 rounded-md bg-primary transition-transform duration-500 ease-in-out
            ${isClickMenu ? "transform rotate-45 translate-y-2" : ""}`}
              ></div>

              <div
                className={`h-1 w-7 my-0.5 rounded-md bg-primary transition-opacity duration-700 ease-in-out
            ${isClickMenu ? "opacity-0" : "opacity-100"}`}
              ></div>

              <div
                className={`h-1 w-7 my-0.5 rounded-md bg-primary transition-transform duration-500 ease-in-out
            ${isClickMenu ? "transform -rotate-45 -translate-y-2" : ""}`}
              ></div>
            </button>
          </div>

          <div
            className={`rounded-full w-12 h-12 flex justify-center items-center cursor-pointer ${
              theme.palette.mode === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-primary hover:text-white transition-all duration-300`}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </div>
        </Box>
      </Box>
      {isClickMenu ? (
        <Drawer isOpen={() => isClickMenu(true)} onClose={() => closeDrawer()} />
      ) : null}
    </>
  );
};

export default Header;