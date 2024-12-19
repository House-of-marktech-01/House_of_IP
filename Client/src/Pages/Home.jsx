import React from "react";
import Hero from "../Components/Hero";
import MainAbout from "../Components/MainAbout";
import Stats from "../Components/Stats";
import OurStory from "../Components/Story";
import ContactForm from "../Components/ContactForm";
import FunFact from "../Components/Funfacts";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats/>
      <OurStory/>
      <MainAbout />
      <FunFact/>
      <ContactForm/>
    </>
  );
};

export default Home;
