import React from "react";
import { LinkedIn, GitHub, ContactPage } from "@mui/icons-material";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "Linkedin",
      icon: <LinkedIn style={{ width: "40px", height: "40px" }} />,
      href: "https://www.linkedin.com/in/pyae-sone-tun-4a42bb277/",
      style: "rounded-br-md",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <GitHub style={{ width: "40px", height: "40px" }} />,
      href: "https://github.com/F3nto",
      style: "rounded-br-md",
    },

    {
      id: 3,
      name: "Resume",
      icon: <ContactPage style={{ width: "40px", height: "40px" }} />,
      href: "/pyaesonetun(cv).pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, name, icon, href, style, download }) => (
          <li
            key={id}
            className={
              `flex justify-between items-center opacity-35 md:opacity-100 hover:opacity-100 w-36 h-14 ml-[-90px] hover:ml-[-10px] bg-gray-500 hover:rounded-md group` +
              `` +
              style
            }
          >
            <a
              href={href}
              download={download}
              target="_blank"
              rel = "noreferrer"
              className="flex justify-between items-center w-full text-[#fff] px-3"
            >
             
              <span className="opacity-100 transition-opacity duration-300 ease-in-out">
                {name}
              </span>
             
              <span className="">{icon}</span>
              
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
