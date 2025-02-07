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

const TMInter = () => {
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

  




  const [selectedOption, setSelectedOption] = useState(
    "US Trademark - SOU Filings "
  );

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
              <NavLink to="/services"> Services</NavLink>
            </li>
            <li>International Trademark</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="https://5.imimg.com/data5/HJ/WL/BV/SELLER-3211152/international-trademark-registration.jpg"
                className="rounded-lg w-80"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 text-white">
                International Trademark
              </h2>

              <p className="prod_description text-sm text-white mt-2">
                Trademark filing can help protect a brand, business name or logo
                in a country from being copied by others. File a trademark
                application in one or more countries online.
              </p>
              <div className="container mx-auto p-4">
                {/* Dropdown toggler */}
                <div className="mb-4">
                  <select
                    className="w-full px-4 py-2 border rounded-md bg-slate-900 focus:outline-none text-white focus:ring focus:ring-blue-300"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="US Trademark - SOU Filings ">
                      US Trademark - SOU Filings{" "}
                    </option>
                    <option value="USA Trademark ">USA Trademark </option>
                    <option value="Malaysia Trademark ">
                      Malaysia Trademark{" "}
                    </option>
                    <option value="Canada Trademark ">Canada Trademark </option>
                    <option value="Singapore Trademark ">
                      Singapore Trademark
                    </option>
                    <option value="UK Trademark ">UK Trademark </option>
                    <option value="Europe Trademark ">Europe Trademark </option>
                    <option value="UAE Trademark ">UAE Trademark</option>
                    <option value="Australia Trademark ">
                      Australia Trademark
                    </option>
                  </select>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Patent Search Card */}
                  {selectedOption === "US Trademark - SOU Filings " && (
                    <div className="border rounded-md p-4 bg-slate-900 text-white">
                      <h2 className="font-semibold text-lg mb-2">
                        US Trademark - SOU Filings
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Statement of Use </li>
                        <li>USPTO Filings </li>
                      </ul>
                    </div>
                  )}

                  {/* Provisional Filing Card */}
                  {selectedOption === "USA Trademark " && (
                    <div className="border rounded-md p-4 text-white bg-slate-900 ">
                      <h2 className="font-semibold text-lg mb-2">
                        USA Trademark
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>USPTO Trademark Filing </li>
                        <li>1 Class - Existing Classification</li>
                        <li>US Trademark Search </li>
                        <li>US Attorney Consultation </li>
                      </ul>
                    </div>
                  )}

                  {/* Regular Card */}
                  {selectedOption === "Malaysia Trademark " && (
                    <div className="border rounded-md p-4 text-white bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">
                        Malaysia Trademark
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Trademark Filing </li>
                        <li>Application Preparation </li>
                        <li>Filing Under 1 Class </li>
                      </ul>
                    </div>
                  )}
                  {selectedOption === "Canada Trademark " && (
                    <div className="border rounded-md p-4 text-white bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">
                        Canada Trademark
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Application Preparation</li>
                        <li>Trademark Filing </li>
                        <li>Filing Under 1 Class </li>
                      </ul>
                    </div>
                  )}
                  {selectedOption === "Australia Trademark " && (
                    <div className="border rounded-md p-4 text-white bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">
                        Australia Trademark
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Application Preparation</li>
                        <li>Trademark Filing </li>
                        <li>Filing Under 1 Class </li>
                      </ul>
                    </div>
                  )}
                  {selectedOption === "Singapore Trademark " && (
                    <div className="border rounded-md p-4 text-white bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">
                        Singapore Trademark
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Application Preparation</li>
                        <li>Trademark Filing </li>
                        <li>Filing Under 1 Class </li>
                      </ul>
                    </div>
                  )}
                  {selectedOption === "UK Trademark " && (
                    <div className="border rounded-md p-4 text-white bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">
                        UK Trademark
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Application Preparation</li>
                        <li>Trademark Filing </li>
                        <li>Filing Under 1 Class </li>
                      </ul>
                    </div>
                  )}
                  {selectedOption === "Europe Trademark " && (
                    <div className="border rounded-md p-4 text-white bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">
                        Europe Trademark
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Application Preparation</li>
                        <li>Trademark Filing </li>
                        <li>Filing Under 1 Class </li>
                      </ul>
                    </div>
                  )}
                  {selectedOption === "UAE Trademark " && (
                    <div className="border rounded-md p-4 text-white bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">
                        UAE Trademark
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Application Preparation</li>
                        <li>Trademark Filing </li>
                        <li>Filing Under 1 Class </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-row items-center justify-between mt-4">
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
                  <p className="text-white">* excluding Government fees</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <NavLink to="/TMForm">
              <button className="w-48 text-black p-3 rounded-lg pulse-scale font-serif golden-gradient">
                Protect Your IP Now
              </button>
            </NavLink>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-5 p-3 bg-slate-900 lg:px-20 place-items-center">

          <NavLink to="/trademarkobjection">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="profile-image">
                    <img src="/trademark.png" className="mt-8 " alt="" />
                    <div className="name relative right-3">Trademark Objection</div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="Description">
                    <p className="description pt-8">
                      Drafting and filing of reply for objection raised by Trademark Examiner. Exclusive pricing for trademark applications filed by House of IP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademarkopposition">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="profile-image">
                    <img src="/trademark.png" className="mt-8 " alt="" />
                    <div className="name relative right-3">Trademark Opposition</div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="Description">
                    <p className="description pt-8">
                      Drafting and filing of opposition notice. Exclusive pricing for trademark applications filed by House of IP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademarkhearing">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="profile-image">
                    <img src="/trademark.png" className="mt-8 " alt="" />
                    <div className="name relative right-3">Trademark Hearing </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="Description">
                    <p className="description pt-8">
                     Trademark hearing appearance by an experienced attorney before the Trademark Register.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          
          <NavLink to="/trademarkrectification">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="profile-image">
                    <img src="/trademark.png" className="mt-8 " alt="" />
                    <div className="name relative right-3">Trademark Rectification </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="Description">
                    <p className="description pt-8">
                     Drafting and filing of rectification for applications marked Formalities Check Fail by Trademark Examiner. Exclusive pricing for trademark applications filed byHouse of IP. Inclusive of service tax.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademarkrenewal">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="profile-image">
                    <img src="/trademark.png" className="mt-8 " alt="" />
                    <div className="name relative right-3">Trademark Renewal </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="Description">
                    <p className="description pt-8">
                     Drafting and filing of trademark renewal application. For individuals, proprietorship's, registered SMEs and registered Startups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademarkassignment">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="profile-image">
                    <img src="/trademark.png" className="mt-8 " alt="" />
                    <div className="name relative right-3">Trademark Assignment </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="Description">
                    <p className="description pt-8">
                     Transfer of trademark ownership rights to another party.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/expeditedtm">
           <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="profile-image">
                    <img src="/trademark.png" className="mt-8 " alt="" />
                    <div className="name relative right-3">Expedited Trademark  </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="Description">
                    <p className="description pt-8">
                    Expedited trademark filing under one class for individuals and small enterprises, inclusive and taxes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademark">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="profile-image">
                    <img src="/trademark.png" className="mt-8 " alt="" />
                    <div className="name relative right-3">Trademark Registration </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="Description">
                    <p className="description pt-8">
                      Drafting and filing of rectification for applications marked Formalities Check Fail by Trademark Examiner. Exclusive pricing for trademark applications filed by House of IP. Inclusive of service tax.
                    </p>
                  </div>
                </div>
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
            International Trademark Registration
          </motion.h1>
          {[
            `Looking to safeguard your brand on a global scale? International trademark registration is crucial for businesses aiming to extend their reach beyond domestic markets. This process secures exclusive rights to your brand in multiple countries, protecting it from unauthorised use and maintaining its unique identity worldwide.`,
            `WithHouse of IP, the complexities of international trademark filing are effortlessly managed. Our expert team offers thorough guidance and extensive support, ensuring robust protection of your brand worldwide and facilitating its international expansion.`,
            `International trademark registration offers a unified solution for securing trademark protection in multiple countries through a centralised application system. This system enables both businesses and individuals to protect their trademarks not only in their home country but also in various international jurisdictions. It promotes global brand recognition and consistency, crucial for expanding market reach.`,
            `A primary tool in international trademark registration is the Madrid System, managed by the World Intellectual Property Organization (WIPO). The Madrid System allows trademark holders to protect their mark in over 120 member countries by submitting a single application and paying one fee. This efficient and cost-effective approach simplifies securing trademark rights across multiple countries, enhancing the ease of global branding efforts.`,
            `A trademark is a type of intellectual property that includes any recognisable sign, design, or expression that differentiates the products or services of one source from those of others. Trademarks can be owned by individuals, businesses, or any legal entity and are commonly seen on packages, labels, or directly on products. For services, they are often used in advertising to help identify the service provider.`,
            <strong className="text-xl">Types of Trademark Protection</strong>,
            `To ensure your trademark is safeguarded effectively, there are different protection strategies available at both national and international levels:`,
            <strong>Securing Your Trademark Nationally</strong>,
            `National protection of your trademark begins with the registration process. This involves submitting an application and the required fees to your local trademark office. Once registered, your trademark receives legal recognition and protection within that jurisdiction, which allows you to enforce your trademark rights effectively.`,
            <strong>Protecting Your Trademark Internationally</strong>,
            `Direct Filing in Each Country: For international protection, you can file a trademark application directly in each country where you want protection. This method requires you to comply with each country's trademark office's unique legal requirements and procedures, which can vary widely.`,
            `Utilising the WIPO's Madrid System: The World Intellectual Property Organization's Madrid System offers a more streamlined approach. By submitting a single application, you can seek protection in over 120 countries simultaneously, greatly simplifying the process of international trademark registration. This system allows for centralised management of your trademark registrations in multiple jurisdictions, reducing complexity and potentially lowering costs.`,
            <strong className="text-xl">
              Benefits of Global Trademark Registration
            </strong>,
            {
              isList: true,
              items: [
                `By securing trademark rights in multiple countries, you ensure your brand's comprehensive global protection across all key markets.`,
                `Utilizing systems like the Madrid Protocol facilitates trademark registration in multiple jurisdictions simultaneously, eliminating the need for separate applications in each country and simplifying the process.`,
                `Filing a single application for international registration can be more cost-effective than submitting multiple national applications. This approach can lead to significant savings in both filing fees and administrative efforts.`,
                `International registration provides a centralised system for managing trademark rights across various countries, making it easier to maintain and enforce your trademarks globally through a single administrative process.`,
                `Holding an internationally registered trademark strengthens your legal position to take action against infringement and counterfeit activities across multiple jurisdictions.`,
                `Securing international trademark protection is essential for businesses planning to enter new markets. It ensures that your brand is legally protected as you expand, helping to prevent conflicts and establish your presence.`,
                `A trademark protected internationally increases your brand's overall value. It becomes more attractive for licensing, franchising, and business partnerships, facilitating easier access to broader markets and potential revenue streams.`,
              ],
            },
          ].map((content, index) => {
            if (typeof content === "string" || React.isValidElement(content)) {
              return (
                <motion.p
                  key={index}
                  className="pb-8 text-white text-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                >
                  {content}
                </motion.p>
              );
            }
            if (content.isList) {
              return (
                <motion.ul
                  key={index}
                  className="list-disc list-inside pb-8 text-white text-sm space-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                >
                  {content.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </motion.ul>
              );
            }
            return null;
          })}
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
                      What is international trademark registration ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-slate-800 text-white pb-6 rounded-b-xl ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-sm">
                      International trademark registration secures exclusive
                      rights to your brand in multiple countries, protecting it
                      from unauthorized use and maintaining its unique identity
                      worldwide.
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      What types of trademarks can be registered ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 rounded-b-xl bg-slate-800 pb-6 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      Trademarks can include words, phrases, logos, symbols,
                      three-dimensional shapes, colors, sounds, and fragrances,
                      each uniquely identifying and distinguishing products or
                      services.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      Why is trademark registration important ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden rounded-b-xl bg-slate-800 pb-6 max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      Trademark registration legally protects a brand, ensures
                      market position, aids in quality assurance, and enhances
                      marketing efforts by building brand recognition and
                      loyalty.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      How do i register a trademark internationally
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-slate-800 rounded-b-xl pb-6 max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      You can register a trademark internationally through
                      direct filings in each country or by using the Madrid
                      System, which streamlines the process through a single
                      application for multiple countries.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify text-white lg:w-3/4">
              <h1 className="text-xl text-center text-white  font-montserrat font-semibold lg:text-2xl">
                International trademark registration procedure
              </h1>
              <p className=" pt-5 text-sm">
                The international trademark registration process primarily
                utilises the Madrid System, offering a streamlined and
                cost-effective approach for registering and managing trademarks
                globally. Here is a detailed overview of the international
                trademark registration procedure:
              </p>
              <h3 className="font-bold pt-3">1. Global Trademark Search</h3>
              <p className=" pt-2 text-sm">
                Before applying for international trademark registration, the
                applicant must perform a global trademark search. This can be
                done using the WIPO’s Global Brand Database to check for similar
                or identical trademarks that are already registered. It's
                essential to ensure that no conflicting trademarks exist in the
                Madrid Protocol countries where the trademark registration is
                intended. If a conflicting trademark is found, the application
                may be rejected.
              </p>
              <h3 className="font-bold  pt-3">
                2.Basic Application or Registration
              </h3>
              <p className=" pt-2 text-sm">
                You must first have an existing trademark application or
                registration (the basic mark) in your home country's trademark
                office. This acts as the foundation for your international
                application.
              </p>
              <h3 className="font-bold  pt-3">3. International Application</h3>
              <p className=" pt-2 text-sm">
                You can file a single international application through the
                World Intellectual Property Organization (WIPO). This
                application allows you to choose the member countries of the
                Madrid System where you wish to protect your trademark.
                Depending on local regulations, you can submit this application
                directly to WIPO or through your national or regional trademark
                office.
              </p>
              <h3 className="font-bold  pt-3">4. Designation of Countries</h3>
              <p className=" pt-2 text-sm">
                In the international application, specify the Madrid System
                member countries where you seek trademark protection. These
                designations indicate where you plan to use your trademark
                actively.
              </p>
              <h3 className="font-bold  pt-3">5. Payment of Fees</h3>
              <p className=" pt-2 text-sm">
                The fees for international registration include a basic fee and
                additional fees for each country you designate. These fees may
                vary depending on whether your trademark application is for a
                black-and-white or colour mark and how many classes of goods or
                services you are registering.
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

export default TMInter;
