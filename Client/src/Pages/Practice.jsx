import React from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import { FocusCardsDemo } from "../Components/FocusCards";
const Practice = () => {
  return (
    <>
      <div>
        {/* Breadcrumbs */}
        <div className="breadcrumbs text-sm pl-6 bg-white text-black pt-20">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>Practice Areas</li> {/* Updated this breadcrumb for clarity */}
          </ul>
        </div>
      </div>
      <p className="bg-white px-12 py-4 pt-10 text-black font-montserrat">
        House of ip offers a comprehensive suite of legal services across key
        areas catering to the evolving needs of inventors, creators and
        businesses. Our core specialization lies in Intellectual Property
        protection, litigation and licensing across patents, trademarks,
        copyrights, designs leveraging in-house technical experts
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
        approach, House of ip strives to deliver legal excellence with
        responsibility.
      </p>
      <FocusCardsDemo />
    </>
  );
};

export default Practice;
