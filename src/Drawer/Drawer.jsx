import React from "react";
import { Home, Info, Work, Business, Mail } from "@mui/icons-material";
import { Link } from "react-scroll";
import { useTheme } from "@mui/material";

const navItems = [
  { id: 1, to: "Home", icon: <Home />, text: "Home" },
  { id: 2, to: "About", icon: <Info />, text: "About" },
  { id: 3, to: "Portfolio", icon: <Work />, text: "Portfolio" },
  { id: 4, to: "Experience", icon: <Business />, text: "Experience" },
  { id: 5, to: "Contact", icon: <Mail />, text: "Contact" },
];

const Drawer = ({ onClose, isOpen }) => {

  const theme = useTheme();

  return (
    <div
      className={`fixed inset-0 z-20 bg-gray-800 bg-opacity-50 transition-opacity
      ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-y-0 right-0 top-24 w-60 bg-[#141B2D] shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }
        ${
          theme.palette.mode === "dark"
          ? " bg-gradient-to-b from-[#141B2D] to-[#00538a]"
          : "bg-white"
        }
        `}
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="p-4">
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold">Menu</span>
            <button className="ml-auto focus:outline-none" onClick={onClose}>
              Close
            </button>
          </div>
          {navItems.map((item) => (
            <Link key={item.id} to={item.to} onClick={onClose} smooth duration={500}>
              <NavItem icon={item.icon} text={item.text} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text }) => (
  <div className="flex items-center ml-6 mt-6 space-x-4 mb-4 hover:text-blue-500 cursor-pointer">
    {icon}
    <span className="text-lg">{text}</span>
  </div>
);

export default Drawer;