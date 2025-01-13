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

const DRObjection = () => {
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
  const [selectedOption, setSelectedOption] = useState("Basic ");

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
            <li>Design Objection</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 text-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="/designobj.webp"
                className="rounded-lg w-56"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 ">
                Design Objection
              </h2>

              <p className="prod_description text-sm  mt-2">
                Design registration offers a shield for your unique design,
                classifying it as intellectual property and ensuring it's safe
                from imitation. It grants the creator exclusive rights to use
                the design for a decade, possibly extending it for an additional
                five years.
              </p>
              <div className="container mx-auto p-4">
                {/* Dropdown toggler */}
                <div className="mb-4">
                  <select
                    className="w-full px-4 py-2 border rounded-md bg-slate-900 focus:outline-none "
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="Basic ">Basic </option>
                  </select>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Patent Search Card */}
                  {selectedOption === "Basic " && (
                    <div className="border rounded-md p-4 bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">Basic </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Prepared by IPR Professionals </li>
                        <li>Reply to Design Objection</li>
                        <li>Filings on IPINDIA </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-row justify-between space-y-4 ">
                  <RWebShare
                    data={{
                      url: "https://house-of-ip.vercel.app//designobjection",
                      title: "Trademark",
                    }}
                    onClick={() => toast.success("shared successfully!")}
                    trademark
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
          <NavLink to="/design">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://www.bdslegalserv.com/assets/img/design_registration.jpg"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Design Registration</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/designassignment">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="/designassign.png"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Design Assignment</h2>
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
            Design Objection
          </motion.h1>

          {[
            `During the Design registration process in India, facing a design objection is a critical stage where the examiner assesses your submitted design against specific criteria to ensure its originality and conformity to the Designs Act. If any issues arise, such as similarities to existing designs or non-compliance with the legal definitions of a design, these objections must be addressed promptly and effectively. Resolving these objections is essential for successfully registering your design, ensuring it is protected under intellectual property laws.`,
            `With the support of House of IPexperts, navigating through and resolving design objections becomes more manageable, facilitating a smoother path towards securing your Design Registration.`,
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

          <motion.h2
            className="text-lg font-medium pb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Grounds for Design Application Objections
          </motion.h2>

          <motion.p
            className="pb-8 text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            Objections to a design application by the examination officer can
            arise from various grounds, primarily focusing on ensuring the
            design's uniqueness and adherence to procedural requirements. Some
            common reasons for objections include:
          </motion.p>

          <motion.ul
            className="pl-5 pb-8 text-sm list-disc"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <li>
              <strong>Lack of Novelty:</strong> The design may be deemed not new
              or original, meaning it may closely resemble existing designs
              already in the public domain, thus lacking the uniqueness required
              for protection.
            </li>
            <li>
              <strong>Improper Documentation:</strong> The submitted documents
              and representations might not meet the standards or formats
              required by the Patent Office, leading to objections regarding
              their acceptability.
            </li>
            <li>
              <strong>Unclear Visuals:</strong> The photos or sketches attached
              to the application might be unclear, improperly presented, or fail
              to adequately represent the design, making it difficult for the
              examination officer to assess its distinctiveness and originality.
            </li>
            <li>
              <strong>Non-Submission of Power of Attorney:</strong> If the
              application is filed by an agent or a representative on behalf of
              the designer, the failure to submit a Power of Attorney can lead
              to objections, as this document authorises the representative to
              act on behalf of the applicant.
            </li>
          </motion.ul>

          <motion.h2
            className="text-lg font-medium pb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            How to File a Reply to Design Objection
          </motion.h2>

          <motion.ol
            className="pl-5 pb-8 text-sm list-decimal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <li>
              <strong>Review the Objection Notice:</strong> Carefully read
              through the objection notice issued by the Patent Office, ensuring
              a clear understanding of the raised concerns.
            </li>
            <li>
              <strong>Assess the Objections:</strong> Evaluate each objection
              mentioned in the notice, noting specific points that must be
              addressed in your response.
            </li>
            <li>
              <strong>Gather Supporting Documents:</strong> Collect all relevant
              documents, evidence, and information that support your response to
              each objection.
            </li>
            <li>
              <strong>Draft Your Response:</strong> Prepare a detailed and
              comprehensive reply addressing each objection individually.
              Clearly articulate how you intend to rectify or counter each
              objection, providing explanations and evidence where necessary.
            </li>
            <li>
              <strong>Submit Your Reply:</strong> Submit your response to the
              Patent Office within the specified timeframe mentioned in the
              objection notice.
            </li>
          </motion.ol>
        </div>

        <h1 className="text-center text-3xl text-white pb-4 bg-slate-900">
          Design Objection FAQ's
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
                      What is design Objection?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden pb-5 max-h-0 group-open:max-h-96 bg-gray-800 rounded-b-xl">
                    <p className="mt-2 px-4 text-white text-sm">
                      Design objection refers to concerns or issues raised
                      during the review process of a design application, related
                      to aspects like originality, documentation clarity, or
                      compliance with standards.
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      What is the design registration process at House of IP?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 pb-5 bg-gray-800 rounded-b-xl group-open:max-h-96 px-12 text-justify text-black font-base overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      The design registration process in India involves
                      meticulous examination to meet standards. Approved designs
                      receive confirmation, a registration certificate, and
                      publication in the Patent Office's journal.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      When to reply to design Objection?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden pb-5 bg-gray-800 rounded-b-xl max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      Applicants have a six-month window from receiving the
                      objection notice, extendable by three months upon request
                      submission, to address concerns. Failure to do so may
                      result in application abandonment.
                    </p>
                  </div>
                </details>

                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      How to file a reply to design objection?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-gray-800 pb-5 rounded-b-xl max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      Steps include reviewing the objection notice, assessing
                      objections, gathering supporting documents, drafting a
                      response, and timely submission to the Patent Office.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      What is design according to design act 2001
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-gray-800 pb-5 rounded-b-xl max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      A design encompasses visual aspects like shape, pattern,
                      or ornamentation applied to any article, excluding
                      functional aspects and purely mechanical elements.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify text-white lg:w-3/4">
              <h1 className="text-xl text-center text-white font-montserrat font-semibold lg:text-2xl">
                Procedure After Filing a Reply to Design Objection
              </h1>
              <p className="pt-5 text-sm">
                After submitting a reply to a design objection, the subsequent
                procedure entails the following steps:
              </p>
              <h3 className="font-bold pt-3">1. Review of Response</h3>
              <p className="pt-2 text-sm">
                The Patent Office carefully examines the applicant's response to
                the objection notice to assess its adequacy in addressing raised
                concerns.
              </p>
              <h3 className="font-bold  pt-3">2.Assessment of Response</h3>
              <p className=" pt-2 text-sm">
                Each point of objection is evaluated against the provided
                response to determine if the concerns have been satisfactorily
                resolved. The response is scrutinised for clarity, completeness,
                and compliance with regulatory requirements.
              </p>
              <h3 className="font-bold  pt-3">
                3. Registration and Publication
              </h3>
              <p className=" pt-2 text-sm">
                Once all issues highlighted in the Examination Report are
                addressed and the Controller is satisfied that the design is
                indeed new and/or original, they will instruct the registration
                and subsequent publication of the design details. This includes
                a representation of the article that best showcases the design.
                Following acceptance, the Patent Office issues a registration
                certificate and announces the registration in its journal.
              </p>
              <h3 className="font-bold  pt-3">
                4. Hearing and Public Inspection
              </h3>
              <p className=" pt-2 text-sm">
                If the objections are not adequately resolved, the applicant is
                granted a personal hearing to discuss the application further.
                Post-hearing, the Controller decides on whether the application
                should proceed. Registered designs become available for public
                inspection after publication in the official gazette, which can
                be accessed upon payment of a specified fee and submission of a
                formal request.
              </p>
              <h3 className="font-bold  pt-3">5. Term of Protection</h3>
              <p className=" pt-2 text-sm">
                In India, design registration is protected for ten years from
                the design's registration date. This initial term can be
                extended for an additional five years, subject to the submission
                of an extension application along with the requisite fee,
                ensuring continued protection of the design under Indian
                intellectual property laws.
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
              <NavLink to="/trademark">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKc6eE_WPmaSRuSzcabfmXNHoIYn-GoGNAA&s"
                      alt="Design"
                      className="h-44 w-full"
                    />
                  </figure>
                  <div className="card-body bg-slate-800 text-white">
                    <h2 className="card-title">Trademark</h2>
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

export default DRObjection;
