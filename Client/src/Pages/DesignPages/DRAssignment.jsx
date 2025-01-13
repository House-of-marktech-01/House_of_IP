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

const DRAssignment = () => {
  const [token, setToken] = useState(Cookies.get("jwtToken"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

  const [isOpen, setIsOpen] = useState({
    applicantsDetails: false,
    applicantsNatureStatus: false,
    startupCertificate: false,
    descriptionOfArticle: false,
    visualRepresentation: false,
  });

  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

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
      alert("An error occurred. Please try again.");
    }
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
  const [selectedOption, setSelectedOption] = useState("MSME");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>House of IP - Design</title>
      </Helmet>
      <div id="design" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-slate-900 text-white pt-20 lg:pt-20">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Design Assignment</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 text-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="/designassign.png"
                className="rounded-lg w-56"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 ">
                Design Assignment
              </h2>

              <p className="prod_description text-sm  mt-2">
                Design registration offers a shield for your unique design,
                classifying it as intellectual property and ensuring it's safe
                from imitation. It grants the creator exclusive rights to use
                the design for a decade, possibly extending it for an additional
                five years.
              </p>
              <div className="mt-4">
                <div className="flex flex-row lg:flex-row lg:justify-between">
                  <RWebShare
                    data={{
                      url: "https://house-of-ip.vercel.app/designassignment",
                      title: "design assignment",
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

          <NavLink to="/DForm">
            <button className="bg-green-500 w-28 text-black p-3 rounded-lg">
              Go to form
            </button>
          </NavLink>
        </div>

        <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0 justify-start lg:space-x-10 bg-slate-900 text-white px-5 lg:px-20">
          <NavLink to="/designobjection">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="designobj.webp"
                  alt="design objection"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Design Objection</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/design">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://www.bdslegalserv.com/assets/img/design_registration.jpg"
                  alt="design registration"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Design Registration</h2>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="bg-slate-900 text-white px-5 text-justify lg:px-20">
          <motion.h1
            className="text-center text-3xl lg:font-semibold pb-4 pt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Design Assignment
          </motion.h1>
          {[
            `Design assignment involves the transfer of ownership of a registered design under
the Designs Act, 2000 and the Design Rules, 2001. A design refers to the shape,
configuration, pattern, or ornamentation of an article that is registered for industrial
application.`,
            <strong className="text-xl">
              Key Provisions for Design Assignment
            </strong>,
            <ul className="list-disc list-inside mb-8">
              <li>
                The assignor must either be the registered proprietor of the
                design or authorized to assign it.
              </li>
              <li>
                Assignment must comply with Section 30 of the Designs Act, 2000.
              </li>
            </ul>,
            <strong className="text-xl">
              Step-by-Step Process of Design Assignment
            </strong>,
            <ol className="list-decimal list-inside mb-8">
              <li className="mb-4">
                <strong>Eligibility for Assignment</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>
                    The design must be registered under the Designs Act, 2000.
                  </li>
                  <li>
                    The assignor has the legal right to transfer ownership.
                  </li>
                </ul>
              </li>
              <li className="mb-4">
                <strong>Agreement Drafting</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>Prepare a Deed of Assignment including:</li>
                  <ul className="list-disc list-inside pl-5">
                    <li>
                      Details of the registered design (registration number,
                      date).
                    </li>
                    <li>Parties involved in the assignment.</li>
                    <li>
                      Scope, duration, and territorial extent of the assignment.
                    </li>
                    <li>Financial consideration (payment terms).</li>
                  </ul>
                </ul>
              </li>
              <li className="mb-4">
                <strong>Execution and Witnessing</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>Sign the deed in the presence of two witnesses.</li>
                </ul>
              </li>
              <li className="mb-4">
                <strong>Application for Registration of Assignment</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>
                    File Form-10 with the Controller of Designs within six
                    months of the assignment.
                  </li>
                  <li>The period may be extended by three months.</li>
                </ul>
              </li>
              <li className="mb-4">
                <strong>Payment of Prescribed Fees</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>
                    Prescribed fees for Form-10: ₹1,000 for natural persons and
                    ₹4,000 for others.
                  </li>
                </ul>
              </li>
              <li className="mb-4">
                <strong>Documentation Required</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>Original Assignment Deed.</li>
                  <li>Proof of ownership of the design.</li>
                  <li>Identification documents.</li>
                </ul>
              </li>
              <li className="mb-4">
                <strong>Review by the Controller</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>
                    The Controller examines the application and ensures there
                    are no conflicts or pending disputes.
                  </li>
                </ul>
              </li>
              <li className="mb-4">
                <strong>Entry in the Register of Designs</strong>
                <ul className="list-disc list-inside pl-5">
                  <li>
                    Upon approval, the assignment is recorded in the Register of
                    Designs, and ownership is updated.
                  </li>
                </ul>
              </li>
            </ol>,
          ].map((text, index) => (
            <motion.p
              key={index}
              className="pb-8 text-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <h1 className="text-center text-3xl text-white pb-4 bg-slate-900">
          Design FAQ's
        </h1>
        <div className="space-y-4 px-2 pt-8 bg-slate-900 lg:px-10">
          {/* FAQ Section */}
          <div className="flex-1">
            {/* Your FAQ Content */}
            <div className="flex flex-row">
              <img
                src="https://media.istockphoto.com/id/1180390158/photo/3d-rendering-of-hefty-stone-question-mark-standing-on-sounding-block-with-gavel-beside-on.jpg?s=612x612&w=0&k=20&c=Huhzii9Fk2_tYE5m_OxcA99wkGCJXueUXv870b-CLkM="
                alt=""
                className="h-96 hidden lg:block"
              />
              <div className="space-y-4 pr-2 pt-4 w-full h-full bg-slate-900 pb-10 pl-2 rounded-md lg:bg-slate-900 lg:px-10">
                {/* FAQ Item 1 */}
                <details className="group overflow-hidden ">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      Can an unregistered design be assigned?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden pb-5 max-h-0 group-open:max-h-96 bg-gray-800 rounded-b-xl">
                    <p className="mt-2 px-4 text-white text-sm">
                      No, only registered designs can be assigned under the
                      Designs Act
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      Is public notice of assignment mandatory?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 pb-5 bg-gray-800 rounded-b-xl group-open:max-h-96 px-12 text-justify text-black font-base overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      Yes, under Section 30(3), a public notice of the
                      assignment must be given
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      Can multiple assignees be included?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden pb-5 bg-gray-800 rounded-b-xl max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      Yes, assignment can be made jointly to multiple parties.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      How do I know if House of IP is the right firm for design
                      protection?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-gray-800 pb-5 rounded-b-xl max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      With a proven track record in IP law and extensive
                      experience in design protection, House of IP is a trusted
                      partner for securing your product’s design. Our dedicated
                      team of experts provides personalized guidance through
                      every step of the design registration process, ensuring
                      that your creative work is safeguarded and leveraged for
                      its full potential.
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

export default DRAssignment;
