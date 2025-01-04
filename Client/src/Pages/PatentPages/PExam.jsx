import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";

const PExam = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isOpen, setIsOpen] = useState({
    patentRegistration: false,
    specifications: false,
    statementUndertaking: false,
    inventorsDeclaration: false,
    proofOfRight: false,
    powerOfAuthority: false,
    priorityDocuments: false,
    nationalBiodiversity: false,
    sourceBiologicalMaterial: false,
  });
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Percentage of the element visible to trigger
  });

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Initial state
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Visible state
  };
  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  const token = Cookies.get("jwtToken");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      } else {
        const data = await response.json();
        Cookies.set("jwtToken", data.token);
        alert("Login successful!");
        console.log("Response Data:", data);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred. Please try again.");
    }
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
  const [selectedOption, setSelectedOption] = useState("patent-search");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>House of IP - Patent</title>
      </Helmet>
      <div id="patent" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-slate-900 text-white pt-20 lg:pt-20">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Patent Examination</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 text-white lg:px-20">
          {/* Left Image Section */}
          <div className=" w-7/10 shrink-0 lg:sticky lg:top-20 flex justify-center items-center h-full">
            <div className="sticky top-0">
              <img
                src="https://www.intepat.com/wp-content/uploads/2017/01/Patent-Examination-Procedure-in-India.png"
                className="rounded-lg w-80"
                alt="Patent"
              />
            </div>
          </div>

          {/* Middle Content Section */}
          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4">
                Patent Examination
              </h2>
              <p className="prod_description text-sm  mt-2">
                Patent examination is a crucial stage in the Indian patent
                application process under the Patents Act, 1970 and the Patents
                Rules, 2003. It determines the patentability of the invention
                based on novelty, inventive step, and industrial applicability
              </p>
            </div>
          </div>

          {/* Right Uploader Section */}
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
        <div className="flex flex-row justify-start space-x-10 bg-slate-900 text-white px-5 lg:px-20">
          <NavLink to="/patent">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9Ngiq_F5HPP39UxsluGMvOiMx4-aZrO1vg&s"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Patent Filing</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/patentrenewal">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOMcw6FpptphcwgoIpixiqM4-0cVmR5-opA&s"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Patent Renewal</h2>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="bg-slate-900 text-white px-5 text-justify lg:px-20">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="parallax-bg bg-fixed bg-cover bg-center"
            style={{
              backgroundImage: "url('your-image-url.jpg')", // Replace with your image URL
            }}
          >
            <h1 className="text-center text-3xl text-white pb-4 pt-4">
              Patent Examination
            </h1>

            <p className="pb-8 text-sm">
              Patent examination is a crucial stage in the Indian patent
              application process under the Patents Act, 1970 and the Patents
              Rules, 2003. It determines the patentability of the invention
              based on novelty, inventive step, and industrial applicability.
            </p>

            <strong className="text-xl">
              Step-by-Step Process of Patent Examination
            </strong>

            <ol className="list-decimal list-inside mt-4">
              <li className="mb-6">
                <strong>Filing the Patent Application</strong>
                <ul className="list-disc list-inside pl-5 mt-2">
                  <li>
                    The applicant can file a patent application (Form-1) along
                    with a complete specification (Form-2).
                  </li>
                </ul>
              </li>

              <li className="mb-6">
                <strong>Publication of Application</strong>
                <ul className="list-disc list-inside pl-5 mt-2">
                  <li>
                    Applications are published in the Patent Office Journal
                    after 18 months from the filing date.
                  </li>
                </ul>
              </li>

              <li className="mb-6">
                <strong>Request for Examination (RFE)</strong>
                <ul className="list-disc list-inside pl-5 mt-2">
                  <li>
                    Submit Form-18 and the prescribed fee (₹4,000 for natural
                    persons, ₹20,000 for large entities).
                  </li>
                  <li>For expedited examination, file Form-18A.</li>
                </ul>
              </li>

              <li className="mb-6">
                <strong>Examination by the Patent Examiner</strong>
                <ul className="list-disc list-inside pl-5 mt-2">
                  <li>The application undergoes a thorough review based on:</li>
                  <ul className="list-disc list-inside pl-5 mt-2">
                    <li>Novelty/Uniqueness.</li>
                    <li>Inventiveness/non-obviousness.</li>
                    <li>Industrial applicability.</li>
                    <li>
                      Compliance with patentability requirements (e.g., no
                      claims for perpetual motion machines).
                    </li>
                  </ul>
                </ul>
              </li>

              <li className="mb-6">
                <strong>First Examination Report (FER)</strong>
                <ul className="list-disc list-inside pl-5 mt-2">
                  <li>
                    The examiner issues an FER listing objections, with a
                    timeline of six months for the applicant to respond.
                  </li>
                </ul>
              </li>

              <li className="mb-6">
                <strong>Hearing and Amendments</strong>
                <ul className="list-disc list-inside pl-5 mt-2">
                  <li>
                    If objections remain unresolved, a hearing is held. The
                    applicant may amend claims to address objections.
                  </li>
                </ul>
              </li>

              <li className="pb-10">
                <strong>Final Decision</strong>
                <ul className="list-disc list-inside pl-5 mt-2">
                  <li>A patent is either granted, refused, or abandoned.</li>
                  <li>The decision is communicated in writing.</li>
                </ul>
              </li>
            </ol>
          </motion.div>
        </div>

        

        <h1 className="text-center text-3xl text-white pb-4 bg-slate-900">
          Patent Examination FAQ's
        </h1>
        <div className="space-y-4 px-2 pt-8 bg-slate-900 lg:px-8">
          {/* FAQ Section */}
          <div className="flex-1">
            {/* Your FAQ Content */}
            <div className="flex flex-row">
              <div className="hidden lg:block w-3/4">
                <img
                  src="https://media.istockphoto.com/id/1180390158/photo/3d-rendering-of-hefty-stone-question-mark-standing-on-sounding-block-with-gavel-beside-on.jpg?s=612x612&w=0&k=20&c=Huhzii9Fk2_tYE5m_OxcA99wkGCJXueUXv870b-CLkM="
                  alt=""
                  className="hidden lg:block"
                />
              </div>
              <div className="space-y-4 pr-2 pt-4 h-full w-full bg-slate-900 pb-10 pl-2 rounded-md lg:bg-slate-900 lg:px-10">
                {/* FAQ Item 1 */}
                <details className="group overflow-hidden ">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                    How long does the patent examination process take?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 rounded-b-xl pb-5 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                    Typically, it takes 12-24 months, but expedited examination can reduce this timeline.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                    Can an application be revived if abandoned?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 pb-5 rounded-b-xl ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                    Yes, under Rule 137, a request for condonation of delay can be filed.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                    What is the cost of filing a patent application in India?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 pb-5 rounded-b-xl ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                    The cost varies based on the entity type: ₹1,600 for individuals, ₹4,000 for small entities, and ₹8,000 for large entities.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                    Is it mandatory to request an expedited examination?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 pb-5 rounded-b-xl ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                    No, it is optional. Standard examination follows the regular timeline, while expedited examination is available under specific criteria.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 5 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                    What happens if the patent examiner raises objections?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 pb-5 rounded-b-xl ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                    The applicant has six months to respond to the First Examination Report (FER) and address objections through arguments or amendments.
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

export default PExam;
