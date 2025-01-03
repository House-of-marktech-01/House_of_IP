import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const TMAssignent = () => {
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
        setToken(data.token);
        alert("Login successful!");
        console.log("Response Data:", data);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Trademark Assignment</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1i9d-m1W0AMmxXX6lWL0DcpdGNW1WS7BQw&s"
                className="rounded-lg w-80"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 text-white">
                Trademark Assignment
              </h2>

              <p className="prod_description text-sm text-white mt-2">
                Transfer of trademark ownership rights to another party.
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
                        <li>Attorney Prepared </li>
                        <li>Filing on IP India </li>
                        <li>Assignment Deed </li>
                        <li>Ownership change </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div>
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
          <NavLink to="/trademarkobjection">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://compliancecalendar.s3.ap-south-1.amazonaws.com/website_pages_assets/banners/241018104121562997-Trademark-Objection.png"
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
                  src="https://compliancecalendar.s3.ap-south-1.amazonaws.com/website_pages_assets/banners/241018110836111944-Trademark-Opposition.png"
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
                  src="https://compliancecalendar.s3.ap-south-1.amazonaws.com/website_pages_assets/banners/241018104243462750-Trademark-hearing.png"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Trademark Hearing</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademarkcertificates">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://img.indiafilings.com/catalog/Trademark-Certificate-Brand-Monitoring.png"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Trademark Certificates</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/trademarkrectification">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://ebizfiling.com/wp-content/uploads/2023/07/Trademark-rectification-and-its-legal-aspects.png"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYFNxRJiRJDaxsBvSRWbMjzYCZcbu5ZfupQ&s"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Trademark Renewal</h2>
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
          <NavLink to="/expeditedtm">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNoypW3-e0pyQR2WbS0NB4dyNhcJZB2o1_g&s"
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
                  src="https://img.indiafilings.com/catalog/International-Trademark.jpg"
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
            Trademark Assignment
          </motion.h1>
          {[
            `Trademark Transfer, also known as Trademark Assignment, is a legal procedure encompassing the transfer of trademark rights from one entity to another. It is a pivotal component of intellectual property administration, enabling businesses to utilize their trademarks or facilitate the seamless transfer of trademark ownership.`,
            `AtHouse of IP, we understand the importance of safeguarding and managing your intellectual property, particularly regarding trademarks. Whether you are an individual or a business entity looking to transfer your trademark rights to another party, we are here to streamline the process for you. Our expert team is well-versed in the complexities of trademark transfers in India, ensuring that your rights are protected and the transfer is executed seamlessly. WithHouse of IP, you can confidently embark on your trademark transfer journey, knowing that your brand is in capable hands.`,
            `A trademark, whether a unique symbol, word, or phrase, serves as the identifier that sets a company's products or services apart from those of others in the market. Trademarks are the cornerstone of establishing brand recognition, fostering consumer confidence, and enhancing competitiveness within the marketplace. Nevertheless, situations can arise where businesses or individuals need to transfer their trademark rights to another entity, and during these moments, the process of Trademark Assignment becomes pivotal.`,
            <strong className="text-xl">
              Benefits of Trademark Assignment
            </strong>,
            `Trademark assignment offers several advantages:`,
            `It enables the trademark owner to realize the value of their brand.`,
            `The assignee gains rights to an established brand through the assignment.`,
            `Both the assignor and assignee can expand their respective businesses.`,
            `In disputes, the trademark assignment agreement establishes legal rights for both parties.`,
            <strong className="text-xl">Types of Trademark Assignment</strong>,
            `There are four primary types of trademark assignments:`,
            `Partial Assignment:In a partial assignment, the assignor transfers limited ownership rights about specific products or services.`,
            `Complete Assignment: A complete assignment involves the assignor transferring all rights related to the registered trademark to the assignee.`,
            `Assignment with Goodwill: In an assignment with goodwill, the assignor transfers the trademark rights and conveys the intrinsic value and reputation associated with the trademark to the assignee.`,
            `Gross Assignment or Assignment without Goodwill: In this trademark assignment, the assignor restricts the buyer's usage rights. Specifically, the assignor prevents the buyer from using a product brand already used by the assignor. In essence, the goodwill linked to the brand is not transferred to the assignee`,
            `House of IPcan provide invaluable assistance when it comes to filing a Trademark Assignment. Our expert team is well-versed in the intricate processes and legalities involved in trademark transfer in India. We ensure that all documentation is prepared meticulously, adhering to legal requirements and guidelines. From drafting the Trademark Assignment Agreement to navigating the paperwork required for registration with the Registrar of Trademarks, House of IPsimplifies the entire process, ensuring a hassle-free and efficient experience for both assignors and assignees.`,
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
                Trademark Assignment Agreement
              </h1>
            </div>

            {/* Business Type */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Trademark Certificate
              </h1>
            </div>

            {/* Business Objectives */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                No Objection Certificate (NOC) from the assignor
              </h1>
            </div>

            {/* Brand/Logo/Slogan Name */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4 cursor-pointer">
                Identification documents of both the assignor and assignee
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
                      What is trademark transfer?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-slate-800 text-white pb-6 rounded-b-xl ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-sm">
                      A trademark transfer, also known as Trademark Assignment,
                      is the legal process of transferring trademark rights from
                      one entity to another.
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      Why is trademark transfer is important?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 rounded-b-xl bg-slate-800 pb-6 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      Trademark transfer is crucial for protecting and managing
                      intellectual property rights, allowing businesses to
                      utilize trademarks effectively and facilitate ownership
                      changes.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      How is trademark assignment defined in indian law?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden rounded-b-xl bg-slate-800 pb-6 max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      Trademark Assignment is defined in Section 37 of the
                      Trademark Act 1999 as the transfer of a trademark owner's
                      rights, interests, and title to another individual or
                      entity.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      What are the common scenarios for transferring trademark
                      ownership?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-slate-800 rounded-b-xl pb-6 max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      Common scenarios include succession planning, business
                      sales, standalone trademark sales, corporate
                      restructuring, name changes, structural modifications,
                      legal mandates, and business acquisitions.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify text-white lg:w-3/4">
              <h1 className="text-xl text-center text-white  font-montserrat font-semibold lg:text-2xl">
                Process of Trademark Transfer /Assignment
              </h1>
              <p className=" pt-5 text-sm">
                The process of trademark assignment in India involves the
                following steps:
              </p>
              <h3 className="font-bold pt-3">
                1.Trademark Assignment Agreement
              </h3>
              <p className=" pt-2 text-sm">
                The assignor (owner of the trademark) assigns their rights in
                the trademark to the assignee through a trademark assignment
                agreement.
              </p>
              <h3 className="font-bold  pt-3">2.Application Submission</h3>
              <p className=" pt-2 text-sm">
                The assignor, assignee, or both can jointly apply to register
                the assignment by submitting a trademark application in Form
                TM-24 or Form TM-23 to the Registrar of Trademarks.
              </p>
              <h3 className="font-bold  pt-3">3. Form TM- P</h3>
              <p className=" pt-2 text-sm">
                To submit your trademark assignment application to the
                Registrar, you must fulfill the requirements outlined in Form
                TM-P and make the necessary payment. <br />
                Form TM-P must be filed within six months from the date of the
                assignment. While filing after six months is possible, the fees
                may vary accordingly.
              </p>
              <h3 className="font-bold  pt-3">4. Advertisement</h3>
              <p className=" pt-2 text-sm">
                The assignment must be advertised as directed by the Registrar
                of Trademarks within the specified timeframe.
              </p>
              <h3 className="font-bold  pt-3">5. Registrar's Office</h3>
              <p className=" pt-2 text-sm">
                Provide a copy of the advertisement and the Registrar's
                directions to the Registrar of Trademarks.
              </p>
              <h3 className="font-bold  pt-3">6. Registration</h3>
              <p className="pt-2 text-sm">
                Upon receipt of the trademark assignment application (Form TM-P)
                and the necessary documents, the Registrar of Trademarks will
                register the assignee as the new owner of the trademark and
                record the assignment details in the register.
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

export default TMAssignent;
