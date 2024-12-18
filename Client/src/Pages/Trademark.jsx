import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";

const Trademark = () => {
  const [token, setToken] = useState(Cookies.get("jwtToken"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

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

      await axios.post('http://localhost:5000/api/users/upload-url', {
        url: uploadedUrl, // The Cloudinary URL
      });

    } catch (error) {
      setUploadStatus("Failed to upload document.");
      console.error("Error uploading document:", error);
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <>
      <div id="trademark" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-20 lg:pt-20">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Trademark</li>
          </ul>
        </div>
        <div className="lg:flex gap-5 border p-3 bg-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center">
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
              <h2 className="text-base font-black mb-2 lg:mb-4 text-gray-800">
                Trademark
              </h2>

              <p className="prod_description text-sm text-gray-700 mt-2">
                Drafting and filing of rectification for applications marked
                Formalities Check Fail by Trademark Examiner. Exclusive pricing
                for trademark applications filed by IndiaFilings. Inclusive of
                government fee and service tax.
              </p>

              <div className="flex items-center justify-between flex-wrap gap-2 border-y-2 mt-4 pt-4 pb-4 mb-5">
                <a className="btn btn-link flex-none" href="/">
                  Terms and conditions
                </a>
                <div className="flex -space-x-2 pl-5 lg:justify-end">
                  <div className="flex">
                    <RWebShare
                      data={{
                        url: "http://localhost:5173/trademark",
                        title: "Trademark",
                      }}
                      onClick={() => console.log("shared successfully!")}
                    >
                      <button className="text-blue-500 hover:underline">
                        Share with friends 🔗
                      </button>
                    </RWebShare>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {token ? (
            <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Upload Document
              </h2>

              <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-400 p-6 mb-4 text-center cursor-pointer bg-white rounded-md"
              >
                <input {...getInputProps()} />
                <p className="text-gray-600">
                  Drag & drop a document here, or click to select a file
                </p>
                {selectedFile && (
                  <p className="mt-2 text-gray-800">
                    Selected File: {selectedFile.name}
                  </p>
                )}
              </div>

              <button
                onClick={handleUpload}
                disabled={isUploading}
                className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group w-full"
              >
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                  {isUploading ? "Uploading..." : "Upload Document"}
                </span>
              </button>

              {uploadStatus && (
                <p className="mt-4 text-center text-gray-700">{uploadStatus}</p>
              )}
            </div>
          ) : (
            <div className="hidden sm:flex flex-col w-2/10 justify-center items-center bg-gray-100">
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                  Login
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 p-2 w-full border bg-gray-300 text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="mt-1 p-2 w-full border bg-gray-300 text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white px-5 text-justify lg:px-20">
          <h1 className="text-center text-3xl text-black pb-4 pt-4">
            Trademark
          </h1>
          <p className="pb-8 text-gray-800 text-sm">
            At House of IP, our dedicated team of trademark attorneys offers
            more than just legal protection. We deliver comprehensive business
            value by integrating industry insights, brand strategy, and global
            trademark registration services. Our approach begins with a deep
            understanding of your brand’s goals and conducting extensive
            trademark availability searches to ensure success.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            We provide clear guidance on the feasibility of trademark
            registration across multiple regions while offering strategic advice
            to avoid potential conflicts. Our expertise also extends to securing
            domain names, hashtags, taglines, and social media handles, ensuring
            a seamless digital presence that aligns with your brand’s identity.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            When it comes to filing, our in-depth knowledge of trademark
            classifications ensures optimal protection. Our experience in
            representing clients in disputes such as oppositions, cancellations,
            and rectifications allows us to defend your trademarks effectively
            with evidence-based arguments and expert responses to examination
            queries.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            For trademark enforcement, we monitor both physical and online
            markets to detect potential infringement. We act swiftly by issuing
            cease-and-desist and take-down notices, and in cases where
            violations persist, we collaborate with authorities to confiscate
            counterfeit or infringing products.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            Our success is driven by detailed documentation, well-constructed
            legal responses, and a commitment to resolving disputes amicably.
            This meticulous approach contributes to high approval rates for
            trademark applications. Beyond registration, we manage renewals,
            recordals, and monitor your brand for unauthorized use.
            Additionally, we provide guidance on trademark valuation during
            licensing, IP transfers, and mergers, empowering both startups and
            multinationals to leverage their trademarks effectively.
          </p>
        </div>
        <div className="bg-white px-5 text-justify flex lg:px-20 ">
          <div className="lg:w-2/3">
            <h1 className="text-start text-2xl text-black pb-4">
              Documents Required
            </h1>

            {/* Applicant's Name */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("applicantsName")}
              >
                Applicant's Name
              </h1>
              {isOpen.applicantsName && (
                <p className="pb-8 text-white text-sm">
                  The name of the individual, company, or entity applying for
                  the trademark registration.
                </p>
              )}
            </div>

            {/* Business Type */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("businessType")}
              >
                Business Type
              </h1>
              {isOpen.businessType && (
                <p className="pb-8 text-white text-sm">
                  Specify the type of business entity, such as sole
                  proprietorship, partnership, private limited company, etc.
                </p>
              )}
            </div>

            {/* Business Objectives */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("businessObjectives")}
              >
                Business Objectives
              </h1>
              {isOpen.businessObjectives && (
                <p className="pb-8 text-white text-sm">
                  Provide a brief description of your business objectives or
                  activities.
                </p>
              )}
            </div>

            {/* Brand/Logo/Slogan Name */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("brandLogoSloganName")}
              >
                Brand/Logo/Slogan Name
              </h1>
              {isOpen.brandLogoSloganName && (
                <p className="pb-8 text-white text-sm">
                  Clearly mention the name, logo, or slogan that you intend to
                  trademark.
                </p>
              )}
            </div>

            {/* Registration Address */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("registrationAddress")}
              >
                Registration Address
              </h1>
              {isOpen.registrationAddress && (
                <p className="pb-8 text-white text-sm">
                  Furnish the official address of the entity applying for the
                  trademark.
                </p>
              )}
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/3 px-10 pl-16">
            <h2 className="text-slate-900 font-medium text-2xl pb-5 bg-white pl-4 pt-4 rounded-t-xl rounded-b-xl">
              Related Links
            </h2>
            <nav className="space-y-4 sticky top-24 bg-slate-900 pl-4 rounded-xl mt-5 pt-5">
              <a
                href="/patent"
                className="block text-white font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Patent
              </a>
              <a
                href="/design"
                className="block text-white font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Design
              </a>
              <a
                href="/copyright"
                className="block text-white font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Copyright
              </a>
              <a
                href="#trademark"
                className="block text-white pb-5 font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Trademark
              </a>
            </nav>
          </div>
        </div>

        <h1 className="text-center text-3xl text-black pb-4 bg-white">
          Trademark FAQ's
        </h1>
        <div className="space-y-4 px-2 pt-8 bg-white lg:px-10">
          {/* FAQ Section */}
          <div className="flex-1">
            {/* Your FAQ Content */}
            <div className="space-y-4 pr-2 pt-4 h-full bg-slate-200 pb-10 pl-2 rounded-md lg:bg-white lg:px-10">
              {/* FAQ Item 1 */}
              <details className="group overflow-hidden ">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    Why Choose House of IP for Trademark Registration?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    At House of IP, we go beyond legal protection by offering a
                    full-service solution that includes:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black text-sm">
                    <li>
                      Industry research and strategic brand development to
                      strengthen your trademark.
                    </li>
                    <li>
                      Alignment and registration capabilities across national
                      and international territories.
                    </li>
                    <li>
                      Expert advice on domain names, hashtags, and social media
                      handles for cohesive digital branding.
                    </li>
                  </ul>
                </div>
              </details>

              {/* Add the other FAQ items here */}
              {/* FAQ Item 2 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    How Do We Ensure Successful Trademark Registration?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                  <p className="mt-2 px-4 text-black text-sm">
                    We begin by understanding your brand’s objectives, followed
                    by conducting comprehensive availability searches to
                    identify potential conflicts and evaluate registration
                    feasibility. Our thorough knowledge of trademark classes
                    enables strategic protection, and we have a proven track
                    record in oppositions, cancellations, and rectifications.
                  </p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    What Are Our Success Rates for Trademark Approvals?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    With a meticulous process that includes well-prepared
                    applications, comprehensive examination responses, and
                    evidence-backed arguments, we consistently achieve high
                    approval rates for our clients.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group overflow-hidden pb-10">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    Support Beyond Registration
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96 text-sm">
                  <p className="mt-2 px-4 text-black">
                    Our 360-degree service doesn’t stop at registration. We also
                    manage renewals, recordals, and continuous monitoring to
                    safeguard your trademark. Additionally, we offer:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black">
                    <li>
                      Trademark valuation guidance for licensing agreements, IP
                      transfers, or mergers.
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

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify lg:w-3/4">
              <h1 className="text-xl text-center text-black font-montserrat font-semibold lg:text-2xl">
                Trademark Filing and Protection
              </h1>
              <p className="text-gray-800 pt-5 text-sm">
                Your brand represents your reputation and the trust of your
                customers. Here’s a streamlined process for registering a
                trademark in India:
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                1. Trademark Search & Selection
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                A unique and registrable trademark is the cornerstone of a solid
                brand strategy. We conduct thorough searches to ensure your
                chosen mark is not already in use, avoiding potential conflicts
                for a smoother registration process.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                2.Application Preparation & Filing
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Once a suitable trademark is identified, we draft a detailed
                application for the Indian Trademark registry, defining the
                class of goods or services your mark will cover. We also guide
                you in selecting the most appropriate representation—be it a
                logo, wordmark, or a combination of both.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                3. Examination & Response
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                The IPO will review your application, and we handle all
                communications on your behalf. Should any objections arise, we
                provide clear, legally sound responses to support your
                trademark’s registrability, backed by additional documentation
                and clarifications as needed.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                4. Registration & Publication
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                After a successful examination, your trademark will be published
                in the Trademark Journal, allowing third parties to raise any
                objections within a specified period. If no objections are
                raised, your trademark will proceed to official registration.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                5. Post-Registration Management
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Congratulations! Your brand identity is now legally protected.
                House of IP will continue to support you by advising on renewal
                strategies, managing infringement disputes, and maintaining your
                trademark throughout its validity period.
              </p>
            </div>

            {/* Card Section */}
            <div className="flex flex-col justify-center space-y-4 items-center space-x-3 lg:flex-col">
              {/* Card 1 */}
              <a href="/patent">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://thelawcodes.com/wp-content/uploads/2023/10/What-is-Patent-Basics-Overview.webp"
                      alt="Patent"
                      className="h-44 w-52"
                    />
                  </figure>
                  <div className="card-body bg-white text-black">
                    <h2 className="card-title">Patent</h2>
                  </div>
                </div>
              </a>

              {/* Card 2 */}
              <a href="/copyright">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://legalvidhiya.com/wp-content/uploads/2023/10/image-34.png"
                      alt="Copyright"
                      className="h-44"
                    />
                  </figure>
                  <div className="card-body bg-white text-black">
                    <h2 className="card-title">Copyright</h2>
                  </div>
                </div>
              </a>
              <a href="/design">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEaE-xi5291DEKz_fKdeE3LxPyxsovjgdojg&s"
                      alt="Design"
                      className="h-44"
                    />
                  </figure>
                  <div className="card-body bg-white text-black">
                    <h2 className="card-title">Design</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trademark;
