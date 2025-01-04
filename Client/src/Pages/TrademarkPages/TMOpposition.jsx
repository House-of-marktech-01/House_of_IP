import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const TMOpposition = () => {
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

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf, .doc, .docx, .txt", // Additional file types if needed
    onDrop: (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0]);
    },
  });

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a document to upload!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); // Append the file
    formData.append("upload_preset", "houseofip"); // Replace with your preset
    formData.append("cloud_name", "dqkzwt6oe"); // Replace with your Cloudinary cloud name
    formData.append("folder", "documents"); // Optional: specify a folder in Cloudinary

    try {
      setIsUploading(true);
      setUploadStatus("");

      // Make POST request to Cloudinary API
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqkzwt6oe/raw/upload", // Endpoint for uploading raw files
        formData
      );

      const uploadedUrl = response.data.secure_url; // URL of the uploaded document
      toast.success("Document uploaded successfully");
      setSelectedFile(null);
      console.log("Uploaded Document URL:", uploadedUrl);

      // Optionally send the uploaded URL to your backend
      // await axios.post("http://localhost:5000/api/users/save-doc-url", { url: uploadedUrl });

      await axios.post("http://localhost:5000/api/users/upload-url", {
        url: uploadedUrl, // The Cloudinary URL
      });
    } catch (error) {
      setUploadStatus("Failed to upload document.");
      console.error("Error uploading document:", error);
    } finally {
      setIsUploading(false);
    }
  };
  const [selectedOption, setSelectedOption] = useState("Individual & MSME");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title>House of IP - Trademark Opposition</title>
      </Helmet>
      <div id="trademark" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-slate-900 text-white pt-20 lg:pt-20">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Trademark Opposition</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="https://www.abbayattorneys.co.tz/wp-content/uploads/2019/05/captura-de-pantalla-2017-11-06-a-las-13-15-49-1-750x215.png"
                className="rounded-lg w-80"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 text-white">
                Trademark Opposition
              </h2>

              <p className="prod_description text-sm text-white mt-2">
                Drafting and filing of reply for objection raised by Trademark
                Examiner. Exclusive pricing for trademark applications filed by
                House of IP.
              </p>
              <div className="container mx-auto p-4">
                {/* Dropdown toggler */}

                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Patent Search Card */}

                  <RWebShare
                    data={{
                      url: "https://house-of-ip.vercel.app//trademarkopposition",
                      title: "Trademark Opposition",
                    }}
                    onClick={() => toast.success("shared successfully!")}
                  >
                    <button className="text-blue-500 hover:underline">
                      Share with friends
                    </button>
                  </RWebShare>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-lg mx-auto p-6 bg-slate-800 rounded-lg shadow-md h-full sticky top-20">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Upload Document
            </h2>

            <div
              {...getRootProps()}
              className="border-2 border-dashed border-slate-700 p-6 mb-4 text-center cursor-pointer bg-state-700 rounded-md"
            >
              <input {...getInputProps()} />
              <p className="text-gray-200">
                Drag & drop a document here, or click to select a file
              </p>
              {selectedFile && (
                <p className="mt-2 text-gray-100">
                  Selected File: {selectedFile.name}
                </p>
              )}
            </div>

            <button
              onClick={handleUpload}
              disabled={isUploading}
              className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-slate-700 rounded-md group w-full"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-900 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-900 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-slate-900 rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                {isUploading ? "Uploading..." : "Upload Document"}
              </span>
            </button>

            {uploadStatus && (
              <p className="mt-4 text-center text-gray-700">{uploadStatus}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5 p-3 bg-slate-900 lg:px-20">
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
            Trademark Opposition
          </motion.h1>
          {[
            `In India, the trademark objection step is significant during the process of registering a trademark. At this point, the officer carefully checks your chosen brand name to ensure it meets all the rules. If there are any problems or issues, they will let you know. It's essential to fix these issues to ensure your brand name gets registered without problems. This ensures your brand name follows the trademark law and isn't too similar to other brand names. With help fromHouse of IP, dealing with these issues is easier, helping you get your trademark registered smoothly..`,
            `As mentioned above, Upon submitting a trademark application to the Indian Trademark Office, it undergoes a rigorous examination. If the officer identifies inconsistencies or potential overlaps with existing trademarks during this scrutiny, they will issue an objection. In the business context, it's essential to understand that an objection isn't a denial but a request for clarification or adjustment. Addressing this promptly and adequately is vital for ensuring smooth trademark registration.`,
            `The Indian Trademark Office might object to a trademark application based on specific grounds detailed in Section 9 and Section 11 of the Indian Trademarks Act. The primary reasons are when the submitted trademarks lack uniqueness, are too descriptive and generic, or clash with previously registered or pending trademarks.`,
            `The reviewing officer must confirm that the trademark application meets all necessary standards and regulations. If it doesn't, the applicant will receive a notification, prompting a response within 30 days. The application may be denied if the response does not meet the expected standards. However, the applicant can appeal to the Intellectual Property Appellate Board if rejected.`,
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
                Advertisement Copy
              </h1>
            </div>

            {/* Business Type */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Product Images
              </h1>
            </div>

            {/* Business Objectives */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Sales Invoice
              </h1>
            </div>

            {/* Brand/Logo/Slogan Name */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Domain Registration copy
              </h1>
            </div>

            {/* Registration Address */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Website Screenshot
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
          Trademark Objection FAQ's
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
                      Why is the trademark objection step crucial in India?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-slate-800 text-white pb-6 rounded-b-xl ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-sm">
                      The trademark objection step is pivotal during the
                      trademark registration process. It involves an officer
                      meticulously checking the chosen brand name to ensure
                      compliance with all rules. Objections indicate issues or
                      conflicts, which need rectification for successful
                      registration.
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      What are objection under sectio 11?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 rounded-b-xl bg-slate-800 pb-6 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      Section 11 objections relate to the similarity between the
                      proposed trademark and existing ones. These can be due to
                      identical marks, similar sounds, or shared concepts among
                      trademarks.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      What are objection under section 9?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden rounded-b-xl bg-slate-800 pb-6 max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      Section 9 deals with objections raised due to trademarks
                      that are too descriptive, lack distinctiveness, or are
                      potentially misleading to consumers.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      How does one respond to trademark objection online?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-slate-800 rounded-b-xl pb-6 max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      If the trademark application fails to meet standards, a
                      notification is sent to the applicant. They must respond
                      within 30 days, addressing the concerns raised. Failure to
                      satisfy the standards may result in application denial,
                      though appeals can be made to the Intellectual Property
                      Appellate Board.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TMOpposition;
