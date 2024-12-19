import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollTop";
import Chatbot from "./Components/Chatbot";
import CustomCursor from "./Components/Cursor";

// Lazy load the page components
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Practice = lazy(() => import("./Pages/Practice"));
const Appointment = lazy(() => import("./Pages/Appointment"));
const Copyright = lazy(() => import("./Pages/Copyright"));
const Patent = lazy(() => import("./Pages/Patent"));
const Design = lazy(() => import("./Pages/Design"));
const Trademark = lazy(() => import("./Pages/Trademark"));

function App() {
  return (
    <>
      <CustomCursor/>
      <Router>
        <ToastContainer />
        <Navbar />
        {/* Suspense component to handle loading state */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <span className="loading loading-infinity loading-lg"></span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/copyright" element={<Copyright />} />
            <Route path="/design" element={<Design />} />
            <Route path="/patent" element={<Patent />} />
            <Route path="/trademark" element={<Trademark />} />
          </Routes>
        </Suspense>
        <ScrollToTopButton />
        <Chatbot />
        <Footer />
      </Router>
    </>
  );
}

export default App;
