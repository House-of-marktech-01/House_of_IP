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
import ScrollProgress from "./Components/ScrollProgress";
import ScrolltoTop from "./Components/ScrolltoTop";
import TMOpposition from "./Pages/TrademarkPages/TMOpposition";
import { Helmet } from "react-helmet";
import TMHearing from "./Pages/TrademarkPages/TMHearing";
import TMObjection from "./Pages/TrademarkPages/TMObjection";
import TMRectification from "./Pages/TrademarkPages/TMRectification";
import TMRenewal from "./Pages/TrademarkPages/TMRenewal";
import TMAssignment from "./Pages/TrademarkPages/TMAssignment";
import TMExpedited from "./Pages/TrademarkPages/TMExpedited";
import TMInter from "./Pages/TrademarkPages/TMInter";
import CRObjection from "./Pages/CopyrightPages/CRObjection";
import DRObjection from "./Pages/DesignPages/DRObjection";
import CRAssignment from "./Pages/CopyrightPages/CRAssignment";
import DRAssignment from "./Pages/DesignPages/DRAssignment";
import PRenewal from "./Pages/PatentPages/PRenewal";
import Welcome from "./Components/Welcome";
import Trademarkfrom from "./Components/Trademarkfrom";
import CopyrightForm from "./Components/CopyrightForm"
import DesignForm from "./Components/DesignForm";
import PaymentPage from "./Pages/PaymentPage"

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
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        }
      >
        <Helmet>
          <title>House of IP</title>
        </Helmet>
        <Router>
          <ScrolltoTop />
          <ToastContainer />
          <Navbar />
          {/* Suspense component to handle loading state */}
          <ScrollProgress />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Practice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/copyright" element={<Copyright />} />
            <Route path="/design" element={<Design />} />
            <Route path="/patent" element={<Patent />} />
            <Route path="/trademark" element={<Trademark />} />
            <Route path="/trademarkopposition" element={<TMOpposition/>} />
            <Route path="/trademarkhearing" element={<TMHearing/>} />
            <Route path="/trademarkobjection" element={<TMObjection/>} />
            <Route path="/trademarkrectification" element={<TMRectification/>} />
            <Route path="/trademarkrenewal" element={<TMRenewal/>} />
            <Route path="/trademarkassignment" element={<TMAssignment/>} />
            <Route path="/expeditedtm" element={<TMExpedited/>} />
            <Route path="/intertm" element={<TMInter/>} />
            <Route path="/copyrightobjection" element={<CRObjection/>} />
            <Route path="/copyrightassignment" element={<CRAssignment/>} />
            <Route path="/designobjection" element={<DRObjection/>} />
            <Route path="/designassignment" element={<DRAssignment/>} />
            <Route path="/patentrenewal" element={<PRenewal/>} />
            <Route path="/TMForm" element={<Trademarkfrom/>} />
            <Route path="/CRForm" element={<CopyrightForm/>} />
            <Route path="/DForm" element={<DesignForm/>} />
            <Route path="/payment" element={<PaymentPage/>} />
            <Route />
          </Routes>
          <ScrollToTopButton />
          <Chatbot />
          <Footer />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
