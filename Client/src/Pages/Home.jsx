import React from "react";
import Hero from "../Components/Hero";
import MainAbout from "../Components/MainAbout";
import Stats from "../Components/Stats";
import OurStory from "../Components/Story";
import ContactForm from "../Components/ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <MainAbout />
      <Stats/>
      <OurStory/>
      <ContactForm/>
    </>
  );
};

export default Home;
