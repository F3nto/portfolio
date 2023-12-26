import React from "react";
import { useTheme  } from "@emotion/react";

const Contact = () => {
const theme = useTheme();

  return (
    <div name="Contact" className={`w-full h-auto md:h-[100vh] p-4 
    ${
      theme.palette.mode === "dark"
        ? " bg-gradient-to-b from-[#141B2D] to-[#00538a]"
        : "bg-white"
    }`}>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center md:text-start">
          <p className="font-body text-4xl inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 ">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form 
          method="POST"
          action="https://getform.io/f/3f6d0710-605b-42fb-a089-f2b189f7212c" 
          className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="Enter your name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none font-body"
            />

            <input
              type="email"
              name="Email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none font-body"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none font-body"
            ></textarea>

            <button
              className="mt-4 bg-gradient-to-r from-primary to-[#016275] px-4 py-2 rounded-md
            hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
