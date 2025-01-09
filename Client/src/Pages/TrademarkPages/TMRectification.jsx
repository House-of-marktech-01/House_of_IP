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

const TMRectification = () => {
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

  




  const [selectedOption, setSelectedOption] = useState("Basic ");

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
            <li>Trademark Rectification</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="https://legaldev.in/assets/img/Trademark-Rectification.webp"
                className="rounded-lg w-80"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 text-white">
                Trademark Rectification
              </h2>

              <p className="prod_description text-sm text-white mt-2">
                Drafting and filing of rectification for applications marked
                Formalities Check Fail by Trademark Examiner. Exclusive pricing
                for trademark applications filed byHouse of IP. Inclusive of service tax.
              </p>
              <div className="container mx-auto p-4">
                {/* Dropdown toggler */}
                <div className="mb-4">
                  <select
                    className="w-full px-4 py-2 border rounded-md bg-slate-900 focus:outline-none text-white focus:ring focus:ring-blue-300"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="Basic ">Basic </option>
                    <option value="Standard "> Standard </option>
                  </select>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Patent Search Card */}
                  {selectedOption === "Basic " && (
                    <div className="border rounded-md p-4 bg-slate-900 text-white">
                      <h2 className="font-semibold text-lg mb-2">Basic</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Prepared by IPR Professionals </li>
                        <li>Filing on IPINDIA </li>
                        <li>Attorney Change </li>
                      </ul>
                    </div>
                  )}

                  {/* Provisional Filing Card */}
                  {selectedOption === "Standard " && (
                    <div className="border rounded-md p-4 text-white bg-slate-900 ">
                      <h2 className="font-semibold text-lg mb-2">Standard</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Prepared by IPR Professionals </li>
                        <li>Filing on IPINDIA </li>
                        <li>Rectification Filed </li>
                        <li>Attorney Change </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-col lg:flex-row gap-4 justify-betweenr mt-4">
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
            Trademark Rectification
          </motion.h1>
          {[
            `A trademark is a distinct symbol or emblem that sets one product apart, akin to an individual's unique birthmark. To establish the trademark's uniqueness and exclusivity, it must be registered by the regulations outlined in the Trademark Act and Rules. When applying for a trademark or even after its registration, if the applicant discovers minor errors or deems alterations necessary, they can initiate a rectification process with the Registrar to address these issues. AtHouse of IP, we offer comprehensive Trademark Rectification services to guide clients through this vital aspect of trademark management.`,
            `Take control of your trademark's accuracy and exclusivity today. Contact us for expert Trademark Rectification services.`,
            `Trademark Rectification involves correcting errors or omissions in the trademark register that occur after the initial registration of trademarks. This process addresses situations where a trademark may have been erroneously registered or remains in the register even after expiration. Such cases necessitate rectification, and the Indian Trademark Act contains provisions for this purpose. Chapter 7 of the Trademark Act of 1999 outlines these rectification provisions.`,
            `According to Section 57 of the Act, any individual associated with trademark registration or adversely affected has the right to seek rectification. It's important to note that not all situations are eligible for rectification, and in some cases, rectification can result in the cancellation of the trademark registration. Therefore, this process should be approached with caution.`,
            <strong className="text-lg">
              Who can File a Trademark Rectification Application?
            </strong>,
            `The following individuals or entities can file an application for Trademark Rectification as per the Trademark Act:`,
            <strong>Person Aggrieved</strong>,
            `Any individual who feels aggrieved by factors such as the similarity of the mark or the registration of a mark for malicious purposes is eligible to file for Trademark Rectification. This can be done at any office with the appropriate jurisdiction.`,
            <strong>Trademark Holder </strong>,
            `When the trademark holder identifies mistakes or omissions related to their own trademark, they have the right to address these issues and file for rectification. It's important to note that an aggrieved person is not the only one permitted to file for rectification under trademark law.`,
            <strong>Third Party</strong>,
            `Any third-party individual or entity, distinct from the trademark holder or the aggrieved person, can also initiate the process of Trademark Rectification. This is applicable in cases where there has been a misunderstanding or where the use of a trademark infringes upon societal interests or a part of society. It's essential to understand that entities can pursue rectification beyond just those who are directly affected or hold the trademark. A third party has the option to apply for rectification.`,
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
          Trademark Rectification FAQ's
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
                      What is trademark rectification?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-slate-800 text-white pb-6 rounded-b-xl ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-sm">
                      Trademark rectification is a legal process used to correct
                      errors or inaccuracies in a registered trademark, such as
                      a spelling mistake, incorrect information, or inadequate
                      specification of goods or services.
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      When should i consider trademark rectification?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 rounded-b-xl bg-slate-800 pb-6 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      You should consider trademark rectification when you
                      discover errors or inaccuracies in your registered
                      trademark that need correction. Its essential to maintain
                      the accuracy of your trademark registration to protect
                      your brand.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      What Are some common errors that require trademark
                      rectification ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden rounded-b-xl bg-slate-800 pb-6 max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      Common errors include spelling mistakes in the trademark,
                      incorrect details about the trademark owner, errors in the
                      specification of goods or services, and inaccuracies in
                      the graphical representation of the trademark.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      How do i initiate the trademark rectification process
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-slate-800 rounded-b-xl pb-6 max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      To initiate the trademark rectification process, you
                      typically need to file an application with the relevant
                      trademark office in your jurisdiction. Consult with a
                      trademark attorney or agent for guidance through this
                      process.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify text-white lg:w-3/4">
              <h1 className="text-xl text-center text-white  font-montserrat font-semibold lg:text-2xl">
                Trademark rectification process
              </h1>
              <p className=" pt-5 text-sm">
                Whether initiated by the proprietor or the registrar, the
                process for Trademark Rectification remains consistent and
                involves the following steps:
              </p>
              <h3 className="font-bold pt-3">1. Drafting of the Application</h3>
              <p className=" pt-2 text-sm">
                The applicant begins by carefully drafting the rectification
                application, ensuring all necessary information is included.
                Precision in this step is crucial, as any errors can result in
                application rejection.
              </p>
              <h3 className="font-bold  pt-3">2.Form Filing</h3>
              <p className=" pt-2 text-sm">
                After drafting the application, it is essential to file the
                requisite form with the Trademark Registrar, accompanied by the
                prescribed fees. This step is mandatory for initiating the
                rectification process.
              </p>
              <h3 className="font-bold  pt-3">3. Documents Submission</h3>
              <p className=" pt-2 text-sm">
                Following form submission, the applicant must provide the
                necessary documents for rectification, ensuring proper
                formatting and including proof, such as identity documents,
                address proof, or PAN details, where alterations are required.
              </p>
              <h3 className="font-bold  pt-3">4. Documents Verification</h3>
              <p className=" pt-2 text-sm">
                Once the documents are submitted, they undergo verification by
                the concerned authorities. If the verification is successful and
                satisfies the authorities, the process proceeds. However, if the
                verification is satisfactory, the application may be accepted.
              </p>
              <h3 className="font-bold  pt-3">5. Final Order</h3>
              <p className=" pt-2 text-sm">
                After hearing both parties and reviewing evidence, the Registrar
                or the Appellate Court issues an order following the
                verification process. This order can involve rectification,
                addition, variation, or substitution in the trademark register,
                as deemed appropriate.
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

export default TMRectification;
