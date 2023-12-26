import React from "react";
import Header from "../Components/Header";
import Intro from "../Components/Intro";
import SocialLinks from "../Components/SocialLinks";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Experiences from "../Components/Experiences";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Portfolio />
      <Experiences />
      <Contact />
      <SocialLinks />
    </>
  );
};

export default Home;
