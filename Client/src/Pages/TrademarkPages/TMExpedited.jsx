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

const TMExpedited = () => {
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

  




  const [selectedOption, setSelectedOption] = useState("MSME");

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
            <li>Expedited Trademark Registration</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="/expeditedtr.jpeg"
                className="rounded-lg w-80"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 text-white">
                Expedited Trademark Registration
              </h2>

              <p className="prod_description text-sm text-white mt-2">
                Expedited trademark filing under one class for individuals and
                small enterprises, inclusive and taxes.
              </p>
              <div className="container mx-auto p-4">
                {/* Dropdown toggler */}
                <div className="mb-4">
                  <select
                    className="w-full px-4 py-2 border rounded-md bg-slate-900 focus:outline-none text-white focus:ring focus:ring-blue-300"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="MSME">MSME</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Patent Search Card */}
                  {selectedOption === "MSME" && (
                    <div className="border rounded-md p-4 bg-slate-900 text-white">
                      <h2 className="font-semibold text-lg mb-2">MSME</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Fast Track Application Processing </li>
                        <li>Reduce Government Wait Time</li>
                        <li>Individuals & MSMEs</li>
                      </ul>
                    </div>
                  )}

                  {/* Provisional Filing Card */}
                  {selectedOption === "Corporate" && (
                    <div className="border rounded-md p-4 text-white bg-slate-900 ">
                      <h2 className="font-semibold text-lg mb-2">Corporate</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Fast Track Application Processing </li>
                        <li>Reduce Government Wait Time </li>
                        <li>Non-MSMEs </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center mt-4 justify-between">
                  <RWebShare
                    data={{
                      url: "https://house-of-ip.vercel.app//trademark",
                      title: "Trademark",
                    }}
                    onClick={() => toast.success("shared successfully!")}
                  >
                    <button className="text-blue-500 hover:underline">
                      Share with friends
                    </button>
                  </RWebShare>
                  <p>* excluding Government fees</p>
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
          <NavLink to="/trademarkrenewal">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://chithragupta.com/cdn/shop/products/TMrenewal-1280x720_2508be5a-7151-4758-a132-350c7fd39a1a.jpg?v=1594191997"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Trademark Renewal</h2>
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
                <h2 className="card-title text-lg">Trademark Registration</h2>
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
            Expedited Trademark Registration
          </motion.h1>
          {[
            `Introduced in 2018 as part of the government's initiative to streamline trademark registration, the expedited examination procedure for trademarks in India is commonly called the "Fast Track Examination" process. This innovative approach enables businesses to secure trademark registrations more expeditiously than the standard route.`,
            `The regular examination process traditionally entails 18-24 months for the Trademark Registry to scrutinize a trademark application. In contrast, the expedited examination process dramatically accelerates this timeline, with trademark applications undergoing examination within 3-4 months of filing. This expedited procedure empowers businesses to obtain trademark registration swiftly, providing enhanced safeguards for their brand identity and preempting unauthorized trademark use.`,
            <strong className="text-xl">
              Eligibility Criteria for Expedited Trademark Registration
            </strong>,
            `Anyone who has filed a trademark application in India can request an expedited examination. For expedited examination of trademarks in India, the applicant needs to meet specific eligibility criteria, as outlined below:`,
            <ul className="list-disc list-inside text-white pb-4">
              <li>Individuals</li>
              <li>Start-ups</li>
              <li>Small Enterprises</li>
              <li>Women Entrepreneurs</li>
              <li>MSMEs (Micro, Small, and Medium Enterprises)</li>
              <li>Educational Institutions</li>
              <li>Government Departments</li>
            </ul>,
            <strong className="text-xl">Online Filing</strong>,
            `Applicants must file their trademark application using the online filing facility provided by the Trademark Registry. This digital submission ensures efficient processing and tracking of applications.`,
            <strong className="text-xl">Expedited Examination Fee</strong>,
            `To opt for expedited examination, the applicant must pay an expedited examination fee. This fee is higher than the standard examination fee and is essential to expediting.`,
            <strong className="text-xl">
              Valid reasons for filing Expedited Trademark Registration
            </strong>,
            `The following are the good reasons for filing an expedited examination request for a trademark application in India:`,
            <ul className="list-disc list-inside text-white pb-4">
              <li>Potential trademark infringement or misrepresentation</li>
              <li>Ongoing legal disputes</li>
              <li>
                Necessity for registration to secure funding or investments
              </li>
              <li>
                Requirement for registration to engage in trade fairs or
                exhibitions
              </li>
              <li>Essential for licensing or franchising purposes</li>
            </ul>,
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

        <h1 className="text-center text-3xl text-white lg:font-semibold pb-4 bg-slate-900">
          Expedited Trademark Registration FAQ's
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
                      What is expedicted trademark registration?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-slate-800 text-white pb-6 rounded-b-xl ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-sm">
                      Expedited trademark registration is a service that allows
                      businesses to process their applications for trademark
                      registration quicker than the standard process. This
                      service allows businesses to register their trademarks
                      more quickly for an additional fee.
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      What are the benifits of expedited trademark registration?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 rounded-b-xl bg-slate-800 pb-6 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      Expedited trademark registration can help businesses
                      protect their valuable intellectual property faster and
                      more efficiently. Additionally, expedited trademark
                      registration can help businesses secure their trademarks
                      before competitors, ensuring they have exclusive rights to
                      them.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      How much does filing for an expedited trademark
                      registration cost ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden rounded-b-xl bg-slate-800 pb-6 max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      The cost to file for expedited trademark registration
                      varies depending on the type of application and other
                      factors. Generally, businesses can expect to pay an
                      additional fee for the expedited processing service.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      What is the difference between expedited and standard
                      trademark registration?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-slate-800 rounded-b-xl pb-6 max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      The main difference between the standard and expedited
                      trademark registration processes is the speed at which the
                      application is processed. The standard process can take
                      several months, while the expedited process can take as
                      little as 2-3 weeks.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify text-white lg:w-3/4">
              <h1 className="text-xl text-center text-white  font-montserrat font-semibold lg:text-2xl">
                Procedure for Expedited Trademark Registration in India
              </h1>
              <p className=" pt-5 text-sm">
                The process of expedited trademark registration begins with
                submitting a trademark application. Here's an overview of the
                steps involved:
              </p>
              <h3 className="font-bold pt-3">
                1. Trademark Application Submission:
              </h3>
              <p className=" pt-2 text-sm">
                The process commences with submitting a trademark application to
                the relevant authority, such as the Trademark Registry in India.{" "}
                <br />
                The application should include all necessary details about the
                trademark, its owner, and the goods or services it will be
                associated with.
              </p>
              <h3 className="font-bold  pt-3">2.Objection and Response:</h3>
              <p className=" pt-2 text-sm">
                After the application is filed, it goes through an examination
                process by a trademark examiner. <br />
                If objections or issues are raised during the examination, the
                applicant will receive an examination report outlining these
                concerns
              </p>
              <h3 className="font-bold  pt-3">
                3. Request for Expedited Examination:
              </h3>
              <p className=" pt-2 text-sm">
                If the applicant wishes to expedite the process due to specific
                circumstances, such as potentially irreparable harm, they can
                request expedited examination and the prescribed fee.
              </p>
              <h3 className="font-bold  pt-3">
                4. Examination Report and Response:
              </h3>
              <p className=" pt-2 text-sm">
                Once the request for expedited examination is filed, the
                examination report is typically issued within a month. <br />
                The applicant must then respond to the examination report within
                a month, addressing any objections raised.
              </p>
              <h3 className="font-bold  pt-3">
                5. Advertisement and Acceptance:
              </h3>
              <p className=" pt-2 text-sm">
                If the trademark is found acceptable after reviewing the
                response, it will be advertised in the trademark journal. <br />{" "}
                The advertisement allows third parties to raise objections, if
                any. <br />
                If no objections are raised or successfully resolved, the
                trademark can proceed to acceptance.
              </p>
              <h3 className="font-bold  pt-3">6. Hearing (If Necessary):</h3>
              <p className=" pt-2 text-sm">
                A hearing may be required during the expedited examination
                process in some instances. The applicant must attend the hearing
                and present their case before the trademark examiner.
              </p>
              <h3 className="font-bold  pt-3">
                7. Final Decision and Registration:
              </h3>
              <p className=" pt-2 text-sm">
                Following the hearing (if applicable) and considering all
                evidence presented, the trademark examiner issues a final
                decision. <br /> If the decision favors the applicant, the
                trademark is accepted for registration, and the registration
                certificate is issued.
                <br />
                The decision to opt for expedited examination depends on the
                applicant's specific circumstances and the need for swift
                trademark protection.
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

export default TMExpedited;
