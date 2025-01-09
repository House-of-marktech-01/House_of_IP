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

const PRenewal = () => {
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
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Patent Renewal</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 text-white lg:px-20">
          {/* Left Image Section */}
          <div className=" w-7/10 shrink-0 lg:sticky lg:top-20 flex justify-center items-center h-full">
            <div className="sticky top-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOMcw6FpptphcwgoIpixiqM4-0cVmR5-opA&s"
                className="rounded-lg w-80"
                alt="Patent"
              />
            </div>
          </div>

          {/* Middle Content Section */}
          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4">
                Patent Renewal
              </h2>
              <p className="prod_description text-sm  mt-2">
                Patent renewal refers to the payment of periodic fees to
                maintain a granted patent in force. Under the Indian patent
                system, patents must be renewed annually after they are granted
              </p>
            </div>
            <div className="flex flex-row lg:flex-row justify-between items-center mt-4">
              <RWebShare
                data={{
                  text: "Check out this amazing patent filing service at House of IP!",
                  url: window.location.href,
                  title: "House of IP - Patent Filing",
                }}
                onClick={() => console.log("Shared successfully!")}
              >
                <button className="text-blue-500 hover:underline pt-2 pl-2">
                  Refer a friend
                </button>
              </RWebShare>
              <p className="text-white">* excluding Government fees</p>
            </div>
          </div>

          {/* Right Uploader Section */}
        </div>
        <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0 justify-start lg:space-x-10 bg-slate-900 text-white px-5 lg:px-20">
          <NavLink to="/patentexam">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://www.intepat.com/wp-content/uploads/2017/01/Patent-Examination-Procedure-in-India.png"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Patent Examination</h2>
              </div>
            </div>
          </NavLink>
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
            <h2 className="text-center text-3xl text-white pb-4 pt-4">
              Patent Renewal
            </h2>
            <p>
              Patent renewal refers to the payment of periodic fees to maintain
              a granted patent in force. Under the Indian patent system, patents
              must be renewed annually after they are granted.
            </p>
            <h1 className="text-start text-xl text-white pb-4 pt-4">
              Step-by-Step Process of Patent Renewal
            </h1>

            <p className="pb-6 text-sm">
              <strong>1. Understanding Renewal Requirements</strong>
              <br />• Renewal fees are required starting from the third year of
              the patent term (calculated from the filing date).
            </p>

            <p className="pb-6 text-sm">
              <strong>2. Filing of Renewal Application</strong>
              <br />• Use Form-27 and pay the prescribed fee.
              <br />• Submit the renewal before the due date or within the
              six-month grace period (with a late fee).
            </p>

            <p className="pb-6 text-sm">
              <strong>3. Calculation of Fees</strong>
              <br />• Renewal fees increase progressively from the third year.
              <br />• Fees depend on the applicant type (individual, SME, or
              large entity).
            </p>

            <p className="pb-6 text-sm">
              <strong>4. Impact of Non-Renewal</strong>
              <br />• Failure to renew results in the lapse of the patent.
              <br />• A request for restoration can be filed within 18 months of
              lapse.
            </p>
          </motion.div>
        </div>

        <div
          id="docs"
          className="bg-slate-900 text-white px-5 text-justify flex lg:px-20"
        >
          <div className="w-full lg:w-3/4">
            <h1 className="text-start text-2xl pb-4">
              Documents Required for Patent Renewal
            </h1>

            {/* Renewal Application */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl pb-4">Renewal Application</h1>
              <p className="pb-8 text-sm">
                Form-27: A renewal application form to be filed with the
                relevant patent office.
              </p>
            </div>

            {/* Proof of Payment */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl pb-4">Proof of Payment</h1>
              <p className="pb-8 text-sm">
                A receipt of payment for the renewal fees must be provided.
              </p>
            </div>

            {/* Statement Regarding Working of the Patent */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl pb-4">
                Statement Regarding Working of the Patent
              </h1>
              <p className="pb-8 text-sm">
                Form-27: A statement detailing the working of the patent in
                India during the preceding year.
              </p>
            </div>

            {/* Power of Authority (if applicable) */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl pb-4">Power of Authority</h1>
              <p className="pb-8 text-sm">
                If a patent agent or representative is filing the renewal, a
                power of authority (Form-26) must be provided.
              </p>
            </div>

            {/* Proof of Right (if applicable) */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl pb-4">Proof of Right</h1>
              <p className="pb-8 text-sm">
                Documentation confirming the applicant's right to renew the
                patent may be required in certain cases.
              </p>
            </div>

            {/* National Biodiversity Authority Permission (if applicable) */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl pb-4">
                National Biodiversity Authority Permission
              </h1>
              <p className="pb-8 text-sm">
                If the patent involves biological material sourced from India,
                permission from the National Biodiversity Authority is
                mandatory.
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/3 px-10 pl-16">
            <h2 className="text-white font-medium text-2xl pb-5 bg-slate-900 pl-4 pt-4 rounded-t-xl rounded-b-xl">
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

        <h1 className="text-center text-3xl text-white pb-4 bg-slate-900">
          Patent FAQ's
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
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      Is there a fee concession for individuals and SMEs?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 rounded-b-xl pb-5 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      Yes, reduced fees apply to individuals and SMEs.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      Can a patent be restored after the 18-month period?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 pb-5 rounded-b-xl ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      No, restoration is not allowed after 18 months of lapse.
                      If a patent is not renewed within the stipulated time, the
                      patent will lapse permanently.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      What happens if the renewal fee is not paid on time?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 rounded-b-xl pb-5 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      If the renewal fee is not paid on time, the patent will
                      lapse. However, there is a grace period of six months
                      during which a late fee can be paid for renewal. After
                      this period, the patent will no longer be valid.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      Can I request an extension for the patent renewal
                      deadline?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 rounded-b-xl pb-5 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      No, there is no option for requesting an extension for the
                      patent renewal deadline. It is important to submit the
                      renewal application within the due date or within the
                      six-month grace period to avoid the patent lapse.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 5 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      What documents are required for patent renewal?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 pb-5 rounded-b-xl ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      The documents required for patent renewal include Form-27
                      (renewal application), proof of payment for the renewal
                      fee, and a statement regarding the working of the patent
                      (Form-27). If a patent agent is filing the renewal,
                      Form-26 (Power of Authority) is also required.
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

export default PRenewal;
