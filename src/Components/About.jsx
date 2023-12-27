import React, { useState } from 'react';
import { useTheme } from "@mui/material";
import Skills from './Skills';
import Education from './Education';
import Project from './Project';


const About = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("Skills")

  const handleClickTab = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch(activeTab) {
      case "Skills":
      return <Skills />;

      case "Education":
      return <Education />;

      case "Project":
      return <Project />;

      default:
      return null;
    }
  }
  

  return (
    <div name="About" className={`w-full h-auto md:lg:h-[120vh] mt-10 md:mt-0 ${
      theme.palette.mode === "dark"
        ? " bg-gradient-to-b from-[rgb(20,27,45)] to-[#00538a]"
        : "bg-white"
    }`}>
      
      <div className="flex items-center justify-center space-x-8 mx-4 sm:mx-0">
        <button
          onClick={() => handleClickTab("Skills")}
          className={`p-2 w-32 rounded ${
            activeTab === "Skills"
              ? "bg-gradient-to-r from-[#003366] to-[#00588B] shadow-[#7fd0ff] shadow-md text-white"
              : "bg-gradient-to-r from-[rgb(20,27,45)] to-[#0b293d] text-white"
          }`}
        >
          <span className="font-fontbody">Skills</span>
        </button>
        <button
          onClick={() => handleClickTab("Education")}
          className={`p-2 w-32 rounded ${
            activeTab === "Education"
            ? "bg-gradient-to-r from-[#003366] to-[#00588B] shadow-[#7fd0ff] shadow-md text-white"
            : "bg-gradient-to-r from-[rgb(20,27,45)] to-[#0b293d] text-white"
          }`}
        >
          <span className="font-fontbody">Education</span>
        </button>
        <button
          onClick={() => handleClickTab("Project")}
          className={`p-2 w-32 rounded ${
            activeTab === "Project"
            ? "bg-gradient-to-r from-[#003366] to-[#00588B] shadow-[#7fd0ff] shadow-md text-white"
              : "bg-gradient-to-r from-[rgb(20,27,45)] to-[#0b293d] text-white"
          }`} 
        >
          <span className="font-fontbody">Projects</span>
        </button>
     
      </div>
    
      {renderContent()}
    
    </div>
  );
};

export default About;