import React from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import { FocusCardsDemo } from "../Components/FocusCards";
const Practice = () => {
  return (
    <>
      <div className="w-full relative">
        {/* Image with responsive styles */}
        <img
          src="https://media.istockphoto.com/id/1449334081/photo/statue-of-lady-justice-on-desk-of-a-judge-or-lawyer.jpg?s=612x612&w=0&k=20&c=139ZS1ycMRXBqnPEWV3l08zBLNe40WPiAudVnmeQrl8="
          alt="Practice Areas"
          className="w-full h-auto object-cover" // Ensures the image maintains aspect ratio and covers the area
          style={{
            maxHeight: "315px", // Restricts max height
            width: "100%",
          }}
        />

        {/* Text overlay */}
        <div
          className="centered-text font-montserrat"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "40px",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          Practice Areas
          <p className="font-thin text-base">Our Expertice</p>
        </div>

        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm pl-6 bg-white text-black pt-5">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>Practice Areas</li> {/* Updated this breadcrumb for clarity */}
          </ul>
        </div>
      </div>
      <p className="bg-white px-12 py-4 pt-10 text-black font-montserrat">
        House of ip offers a comprehensive suite of legal services across key areas
        catering to the evolving needs of inventors, creators and businesses.
        Our core specialization lies in Intellectual Property protection,
        litigation and licensing across patents, trademarks, copyrights, designs
        leveraging in-house technical experts
      </p>
      <p className="bg-white px-12 py-4 text-black font-montserrat">
        Further, we provide allied corporate and commercial advisory
        encompassing dispute resolution, regulatory compliance, entity
        structuring and transactions support. For personal clients, we offer
        specialized assistance in family disputes, inheritance matters and
        immigration needs.
      </p>
      <p className="bg-white px-12 py-4 text-black font-montserrat">
        Having handled over 2200+ cases, our seasoned lawyers provide litigation
        assistance across criminal, civil and commercial conflicts. We also
        cover alternative resolution mechanisms including seamless arbitration
        and mediation services. With diverse competencies and client-first
        approach, House of ip strives to deliver legal excellence with responsibility.
      </p>
      <FocusCardsDemo />
    </>
  );
};

export default Practice;
