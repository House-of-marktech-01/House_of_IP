import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import FileUploader from "../../Components/FileUploader";

const TMRenewal = () => {
  const [token, setToken] = useState(Cookies.get("jwtToken"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const [isOpen, setIsOpen] = useState({
    businessType: false,
    businessObjectives: false,
    applicantsName: false,
    brandLogoSloganName: false,
    registrationAddress: false,
  });
  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  




  const [selectedOption, setSelectedOption] = useState("Basic");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title>House of IP - Trademark</title>
      </Helmet>
      <div id="trademark" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-slate-900 text-white pt-20 lg:pt-20">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Trademark Renewal</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="https://chithragupta.com/cdn/shop/products/TMrenewal-1280x720_2508be5a-7151-4758-a132-350c7fd39a1a.jpg?v=1594191997"
                className="rounded-lg w-80"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 text-white">
                Trademark Renewal
              </h2>

              <p className="prod_description text-sm text-white mt-2">
                Drafting and filing of trademark renewal application. For
                individuals, proprietorship's, registered SMEs and registered
                Startups.
              </p>
              <div className="container mx-auto p-4">
                {/* Dropdown toggler */}
                <div className="mb-4">
                  <select
                    className="w-full px-4 py-2 border rounded-md bg-slate-900 focus:outline-none text-white focus:ring focus:ring-blue-300"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="Basic">Basic</option>
                  </select>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Patent Search Card */}
                  {selectedOption === "Basic" && (
                    <div className="border rounded-md p-4 bg-slate-900 text-white">
                      <h2 className="font-semibold text-lg mb-2">Basic</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Filing Renewal Application </li>
                        <li>10 Year Validity Extension </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-row justify-between lg:flex-row gap-4 mt-4">
                  <RWebShare
                    data={{
                      url: "https://house-of-ip.vercel.app//trademarkrenewal",
                      title: "Trademark",
                    }}
                    onClick={() => toast.success("shared successfully!")}
                  >
                    <button className="text-blue-500 hover:underline">
                      Share with friends
                    </button>
                  </RWebShare>
                  <p className="text-white">* excluding Government fees</p>
                </div>
              </div>
            </div>
          </div>
          <FileUploader formLink="https://forms.gle/dKZi1HWZvrSsskdF6"/>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5 p-3 bg-slate-900 lg:px-20">
          <NavLink to="/trademarkobjection">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyEMHz465Z22QNVCNiNRbrImjH2qZ-gjYOg&s"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Trademark Objection</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademarkopposition">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://www.abbayattorneys.co.tz/wp-content/uploads/2019/05/captura-de-pantalla-2017-11-06-a-las-13-15-49-1-750x215.png"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Trademark Opposition</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademarkhearing">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://legaldev.in/assets/img/Trademark-Hearing.webp"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Trademark Hearing</h2>
              </div>
            </div>
          </NavLink>
          
          <NavLink to="/trademarkrectification">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://legaldev.in/assets/img/Trademark-Rectification.webp"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Trademark Rectification</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademark">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKc6eE_WPmaSRuSzcabfmXNHoIYn-GoGNAA&s"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Trademark Registration</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademarkassignment">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1i9d-m1W0AMmxXX6lWL0DcpdGNW1WS7BQw&s"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Trademark Assignment</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/expeditedtm">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="/expeditedtr.jpeg"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title text-lg">
                  Expedited TM Registration
                </h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/intertm">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://5.imimg.com/data5/HJ/WL/BV/SELLER-3211152/international-trademark-registration.jpg"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">International Trademark</h2>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="bg-slate-900 px-5 text-justify lg:px-20">
          <motion.h1
            className="text-center text-3xl text-white lg:font-semibold pb-4 pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Trademark Renewal
          </motion.h1>
          {[
            `In the dynamic business world, having a trademark sets your brand apart and ensures its distinct identity. Once your trademark is officially registered, it's pivotal to remain vigilant about its ongoing validity and protection. This is where the importance of trademark renewal comes in. By updating your trademark within the designated time frames, you preserve your brand's exclusivity, uphold its legal status, and reinforce its place in the market.`,
            `Whether you are a seasoned entrepreneur or a new business owner, understanding the significance of trademark renewal is fundamental to preserving the reputation and endurance of your brand in the market.`,
            `Trademark owners have the privilege to extend their trademark's validity every decade. Before the end of these ten years, the Registrar offers a six-month grace period, during which the trademark holder can renew their mark and retain its advantages. If the renewal doesn't occur, the Registrar will announce the trademark's removal in the Trademark Journal.`,
            <strong className="text-xl">
              Deletion of Registered Trademark Due to Non-Renewal (Section 25)
            </strong>,
            `Before a trademark's registration expiration, the Registrar must notify the trademark owner about the impending expiry and the terms for its renewal. If these renewal terms aren't met within the designated time frame, the Registrar possesses the right to strike the trademark off the register.`,
            ` However, the Act does allow a grace period of six months post the expiration date. During this window, the trademark owner can still renew their mark by settling a surcharge in addition to the regular renewal fee.  `,
            `Moreover, in cases where a trademark has been delisted due to the non-settlement of the renewal charge, the trademark holder can request a reinstatement within a year from the last registration's end date. Upon receiving this application and the stipulated fee, the Registrar can reinstate and renew the trademark, potentially with specific conditions or limitations attached.`,
            <strong className="text-xl">Restoring Your Trademark</strong>,
            `Should a trademark lapse after ten years, the holder isn't out of options. They can opt for trademark restoration. This process mirrors the renewal procedure but with an added catch: the holder needs to pay an extra penalty for surpassing the expiration date`,
          ].map((text, index) => (
            <motion.p
              key={index}
              className="pb-8 text-white text-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              {text}
            </motion.p>
          ))}
        </div>
        <div className="bg-slate-900 text-white px-5 text-justify flex lg:px-20 ">
          <div className="lg:w-3/4">
            <h1 className="text-start text-2xl pb-4">Documents Required</h1>

            {/* Applicant's Name */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                A certified copy of the original trademark registration
                certificate.
              </h1>
            </div>

            {/* Business Type */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                A certified copy of the TM-A form used during the initial
                trademark registration.
              </h1>
            </div>

            {/* Business Objectives */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Identification proof of the applicant.
              </h1>
            </div>

            {/* Brand/Logo/Slogan Name */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Residence proof of the applicant.
              </h1>
            </div>

            {/* Registration Address */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                A Power of Attorney is required if the applicant is representing
                the trademark owner.
              </h1>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/4 px-10 pl-16">
            <h2 className=" font-medium text-2xl pb-5 bg-slate-900 pl-4 pt-4 rounded-t-xl rounded-b-xl">
              Related Links
            </h2>
            <nav className="space-y-4 sticky top-24 bg-slate-800 pl-4 rounded-xl mt-5 pt-5">
              <NavLink
                to="/patent"
                className="block text-white font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Patent
              </NavLink>
              <NavLink
                to="/design"
                className="block text-white font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Design
              </NavLink>
              <NavLink
                to="/copyright"
                className="block text-white font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Copyright
              </NavLink>
              <NavLink
                to="#trademark"
                className="block text-white pb-5 font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Trademark
              </NavLink>
            </nav>
          </div>
        </div>

        <h1 className="text-center text-3xl text-white lg:font-semibold pb-4 bg-slate-900">
          Trademark Renewal FAQ's
        </h1>
        <div className="space-y-4 px-2 pt-8 bg-slate-900 lg:px-10">
          {/* FAQ Section */}
          <div className="flex-1">
            {/* Your FAQ Content */}
            <div className="flex flex-row">
              <img
                src="https://media.istockphoto.com/id/1180390158/photo/3d-rendering-of-hefty-stone-question-mark-standing-on-sounding-block-with-gavel-beside-on.jpg?s=612x612&w=0&k=20&c=Huhzii9Fk2_tYE5m_OxcA99wkGCJXueUXv870b-CLkM="
                alt=""
                className="h-80 hidden lg:block"
              />
              <div className="space-y-4 pr-2 pt-4 w-full h-full bg-slate-900 pb-10 pl-2 rounded-md lg:bg-slate-900 lg:px-10">
                {/* FAQ Item 1 */}
                <details className="group overflow-hidden ">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      Why is trademark renewal important?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-slate-800 text-white pb-6 rounded-b-xl ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-sm">
                      Trademark renewal ensures the continued protection of the
                      brand's unique identity in the market. Without renewal,
                      the rights to the trademark can be lost, meaning others
                      could potentially use the trademark without facing any
                      legal consequences. Renewal preserves the brand's
                      exclusivity, legal status, and market position.
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      How often do i need to renew my trademark?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 rounded-b-xl bg-slate-800 pb-6 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      Trademarks need to be renewed every ten years. It's
                      important to note the expiration date of your trademark to
                      avoid lapses in protection.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      Is there a grace period for trademark renewal?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden rounded-b-xl bg-slate-800 pb-6 max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      Yes, there is a six-month grace period after the initial
                      ten-year validity during which the owner can still renew
                      the trademark. This offers flexibility and a safety net
                      for trademark owners who might miss the initial deadline.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      How can i initiate the renewal process?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-slate-800 rounded-b-xl pb-6 max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      To renew, you need to submit a formal application to the
                      Registrar of Trademarks. This application must adhere to
                      the set guidelines, be submitted within the given time
                      frame, and be accompanied by the necessary renewal fee.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify text-white lg:w-3/4">
              <h1 className="text-xl text-center text-white  font-montserrat font-semibold lg:text-2xl">
                Trademark Renewal Procedure In India
              </h1>
              <p className=" pt-5 text-sm">
                The trademark renewal process in India is comprehensive,
                ensuring enduring protection for your trademark. Here's a
                concise overview of the steps involved and the accompanying
                documentation:
              </p>
              <h3 className="font-bold pt-3">1. Submitting the Application</h3>
              <p className=" pt-2 text-sm">
                Fill out and submit Form TM-R to the Trademark Registry. Include
                details such as:
              </p>
              <ul className="mt-2 px-4 list-disc list-inside text-white">
                <li>Trademark registration number</li>
                <li>Current trademark status</li>
                <li>Applicant's contact details </li>
              </ul>
              <h3 className="font-bold  pt-3">2.Scrutiny and Review</h3>
              <p className=" pt-2 text-sm">
                Renewal eligibility is determined based on the trademark's
                remaining validity and adherence to renewal prerequisites. If
                discrepancies arise, the Registry will voice its concerns,
                prompting the applicant to respond within a set timeframe.
              </p>
              <h3 className="font-bold  pt-3">
                3. Announcement in the Trademark Journal
              </h3>
              <p className=" pt-2 text-sm">
                Once any concerns are addressed, details concerning the renewed
                trademark are publicized in the Trademark Journal for 4 months.
                This period allows third parties to express any objections.
              </p>
              <p className="font-bold pt-3">
                Should objections surface, the applicant must provide a timely
                response. A hearing may be organized to clarify and settle the
                matter if not addressed.
              </p>
              <h3 className="font-bold  pt-3">
                4. Granting the Renewal Certificate
              </h3>
              <p className=" pt-2 text-sm">
                After the designated publication duration and the amicable
                resolution of potential disputes, the Registry presents the
                Trademark Renewal Certificate. This document affirms the renewed
                status of your trademark, valid for another decade.
              </p>
            </div>

            {/* Card Section */}
            <div className="flex flex-col justify-center space-y-4 items-center space-x-3 lg:flex-col">
              {/* Card 1 */}
              <NavLink to="/patent">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://thelawcodes.com/wp-content/uploads/2023/10/What-is-Patent-Basics-Overview.webp"
                      alt="Patent"
                      className="h-44 w-full"
                    />
                  </figure>
                  <div className="card-body bg-slate-800 text-white">
                    <h2 className="card-title">Patent</h2>
                  </div>
                </div>
              </NavLink>

              {/* Card 2 */}
              <NavLink to="/copyright">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://blog.ipleaders.in/wp-content/uploads/2021/06/1_copyright-designs-and-patents-act-1988-1.jpg"
                      alt="Copyright"
                      className="h-44 w-full"
                    />
                  </figure>
                  <div className="card-body bg-slate-800 text-white">
                    <h2 className="card-title">Copyright</h2>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/design">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEaE-xi5291DEKz_fKdeE3LxPyxsovjgdojg&s"
                      alt="Design"
                      className="h-44 w-full"
                    />
                  </figure>
                  <div className="card-body bg-slate-800 text-white">
                    <h2 className="card-title">Design</h2>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TMRenewal;
