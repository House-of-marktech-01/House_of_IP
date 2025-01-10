import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import FileUploader from "../Components/FileUploader";

const Trademark = () => {
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

  const [selectedOption, setSelectedOption] = useState("Individual & MSME");

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
            <li>Trademark Registration</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKc6eE_WPmaSRuSzcabfmXNHoIYn-GoGNAA&s"
                className="rounded-lg w-80"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 text-white">
                Trademark Registration
              </h2>

              <p className="prod_description text-sm text-white mt-2">
                Drafting and filing of rectification for applications marked
                Formalities Check Fail by Trademark Examiner. Exclusive pricing
                for trademark applications filed by House of IP. Inclusive of
                service tax.
              </p>
              <div className="container mx-auto p-4">
                {/* Dropdown toggler */}
                <div className="mb-4">
                  <select
                    className="w-full px-4 py-2 border rounded-md bg-slate-900 focus:outline-none text-white focus:ring focus:ring-blue-300"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="Individual & MSME">Individual & MSME</option>
                    <option value="Corporates & Foreigners">
                      Corporates & Foreigners
                    </option>
                  </select>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Patent Search Card */}
                  {selectedOption === "Individual & MSME" && (
                    <div className="border rounded-md p-4 bg-slate-900 text-white">
                      <h2 className="font-semibold text-lg mb-2">
                        Individual & MSME
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Trademark Filing </li>
                        <li>1 Trademark Class </li>
                        <li>Individuals & MSMEs </li>
                      </ul>
                    </div>
                  )}

                  {/* Regular Card */}
                  {selectedOption === "Corporates & Foreigners" && (
                    <div className="border rounded-md p-4 text-white bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">
                        Corporates & Foreigners
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Trademark Filing </li>
                        <li>1 Trademark Class </li>
                        <li>Full protection</li>
                        <li>Non-MSMEs </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-col lg:flex-row gap-4 mt-4 justify-between">
                  <RWebShare
                    data={{
                      url: "https://house-of-ip.vercel.app/trademark",
                      title: "Trademark",
                    }}
                    onClick={() => toast.success("shared successfully!")}
                  >
                    <button className="text-blue-500 hover:underline">
                      Share with friends
                    </button>
                  </RWebShare>
                  <p className="text-white text-center">
                    * excluding Government fees
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FileUploader formLink="/TMForm" />
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
            Trademark
          </motion.h1>
          {[
            `Trademark agents offers
        more than just protection. We deliver comprehensive business value
        by integrating industry insights, brand strategy, and global
        trademark registration services. Our approach begins with a deep
        understanding of your brand’s goals and conducting extensive
        trademark availability searches to ensure success.`,
            `We provide clear guidance on the feasibility of trademark
        registration across multiple regions while offering strategic advice
        to avoid potential conflicts. Our expertise also extends to securing
        domain names, hashtags, taglines, and social media handles, ensuring
        a seamless digital presence that aligns with your brand’s identity.`,
            `When it comes to filing, our in-depth knowledge of trademark
        classifications ensures optimal protection. Our experience in
        representing clients in disputes such as oppositions, cancellations,
        and rectifications allows us to defend your trademarks effectively
        with evidence-based arguments and expert responses to examination
        queries.`,
            `For trademark enforcement, we monitor both physical and online
        markets to detect potential infringement. We act swiftly by issuing
        cease-and-desist and take-down notices, and in cases where
        violations persist, we collaborate with authorities to confiscate
        counterfeit or infringing products.`,
            `Our success is driven by detailed documentation, well-constructed
        responses, and a commitment to resolving disputes amicably. This
        meticulous approach contributes to high approval rates for trademark
        applications. Beyond registration, we manage renewals, recordals,
        and monitor your brand for unauthorized use. Additionally, we
        provide guidance on trademark valuation during licensing, IP
        transfers, and mergers, empowering both startups and multinationals
        to leverage their trademarks effectively.`,
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
                Applicant's Name
              </h1>
              <p className="pb-8  text-sm">
                The name of the individual, company, or entity applying for the
                trademark registration.
              </p>
            </div>

            {/* Business Type */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Business Type
              </h1>
              <p className="pb-8  text-sm">
                Specify the type of business entity, such as sole
                proprietorship, partnership, private limited company, etc.
              </p>
            </div>

            {/* Business Objectives */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Business Objectives
              </h1>
              <p className="pb-8  text-sm">
                Provide a brief description of your business objectives or
                activities.
              </p>
            </div>

            {/* Brand/Logo/Slogan Name */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Brand/Logo/Slogan Name
              </h1>
              <p className="pb-8  text-sm">
                Clearly mention the name, logo, or slogan that you intend to
                trademark.
              </p>
            </div>

            {/* Registration Address */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Registration Address
              </h1>
              <p className="pb-8  text-sm">
                Furnish the official address of the entity applying for the
                trademark.
              </p>
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
          Trademark FAQ's
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
                      Why Choose House of IP for Trademark Registration?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-slate-800 text-white pb-6 rounded-b-xl ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-sm">
                      At House of IP, we go beyond protection by offering a
                      full-service solution that includes:
                    </p>
                    <ul className="mt-2 px-4 list-disc list-inside  text-sm">
                      <li>
                        Industry research and strategic brand development to
                        strengthen your trademark.
                      </li>
                      <li>
                        Alignment and registration capabilities across national
                        and international territories.
                      </li>
                      <li>
                        Expert advice on domain names, hashtags, and social
                        media handles for cohesive digital branding.
                      </li>
                    </ul>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      How Do We Ensure Successful Trademark Registration?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 rounded-b-xl bg-slate-800 pb-6 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      We begin by understanding your brand’s objectives,
                      followed by conducting comprehensive availability searches
                      to identify potential conflicts and evaluate registration
                      feasibility. Our thorough knowledge of trademark classes
                      enables strategic protection, and we have a proven track
                      record in oppositions, cancellations, and rectifications.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      What Are Our Success Rates for Trademark Approvals?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden rounded-b-xl bg-slate-800 pb-6 max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      With a meticulous process that includes well-prepared
                      applications, comprehensive examination responses, and
                      evidence-backed arguments, we consistently achieve high
                      approval rates for our clients.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      Support Beyond Registration
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-slate-800 rounded-b-xl pb-6 max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      Our 360-degree service doesn’t stop at registration. We
                      also manage renewals, recordals, and continuous monitoring
                      to safeguard your trademark. Additionally, we offer:
                    </p>
                    <ul className="mt-2 px-4 list-disc list-inside text-white">
                      <li>
                        Trademark valuation guidance for licensing agreements,
                        IP transfers, or mergers.
                      </li>
                      <li>
                        Strategic advice to help startups and established
                        businesses maximize the potential of their trademarks,
                        ensuring alignment with evolving brand objectives.
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify text-white lg:w-3/4">
              <h1 className="text-xl text-center text-white  font-montserrat font-semibold lg:text-2xl">
                Trademark Filing and Protection
              </h1>
              <p className=" pt-5 text-sm">
                Your brand represents your reputation and the trust of your
                customers. Here’s a streamlined process for registering a
                trademark in India:
              </p>
              <h3 className="font-bold pt-3">
                1. Trademark Search & Selection
              </h3>
              <p className=" pt-2 text-sm">
                A unique and registrable trademark is the cornerstone of a solid
                brand strategy. We conduct thorough searches to ensure your
                chosen mark is not already in use, avoiding potential conflicts
                for a smoother registration process.
              </p>
              <h3 className="font-bold  pt-3">
                2.Application Preparation & Filing
              </h3>
              <p className=" pt-2 text-sm">
                Once a suitable trademark is identified, we draft a detailed
                application for the Indian Trademark registry, defining the
                class of goods or services your mark will cover. We also guide
                you in selecting the most appropriate representation—be it a
                logo, wordmark, or a combination of both.
              </p>
              <h3 className="font-bold  pt-3">3. Examination & Response</h3>
              <p className=" pt-2 text-sm">
                The IPO will review your application, and we handle all
                communications on your behalf. Should any objections arise, we
                provide clear, ly sound responses to support your trademark’s
                registrability, backed by additional documentation and
                clarifications as needed.
              </p>
              <h3 className="font-bold  pt-3">4. Registration & Publication</h3>
              <p className=" pt-2 text-sm">
                After a successful examination, your trademark will be published
                in the Trademark Journal, allowing third parties to raise any
                objections within a specified period. If no objections are
                raised, your trademark will proceed to official registration.
              </p>
              <h3 className="font-bold  pt-3">
                5. Post-Registration Management
              </h3>
              <p className=" pt-2 text-sm">
                Congratulations! Your brand identity is now ly protected. House
                of IP will continue to support you by advising on renewal
                strategies, managing infringement disputes, and maintaining your
                trademark throughout its validity period.
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

export default Trademark;
