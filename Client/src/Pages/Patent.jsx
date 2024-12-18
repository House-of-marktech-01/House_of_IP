import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";

const Patent = () => {
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

  return (
    <>
      <div id="patent" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-20 lg:pt-20">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Patent</li>
          </ul>
        </div>
        <div className="lg:flex gap-5 border p-3 bg-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center">
            <div className="sticky">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9Ngiq_F5HPP39UxsluGMvOiMx4-aZrO1vg&s"
                className="rounded-lg w-80"
                alt="Patent"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 text-gray-700 lg:mb-4">
                Patent
              </h2>

              <p className="prod_description text-sm text-gray-700 mt-2">
                Patents are pivotal in protecting the intellectual property
                rights of fresh innovations, be they products, services, or
                processes. In India, to ensure these rights are recognized and
                upheld, one must adhere to the Indian Patent Act of 1970 for
                patent registration.
              </p>

              <div className="flex items-center justify-between flex-wrap gap-2 border-y-2 mt-4 pt-4 pb-4 mb-5">
                <a className="btn btn-link flex-none" href="/">
                  Terms and conditions
                </a>
                <div className="flex -space-x-2 pl-5 lg:justify-end">
                  <div className="flex">
                    <RWebShare
                      data={{
                        url: "http://localhost:5173/copyright",
                        title: "Copyright",
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
          <h1 className="text-center text-3xl text-black pb-4 pt-4">Patents</h1>
          <p className="pb-8 text-gray-800 text-sm">
            As a premier Intellectual Property (IP) law firm, House of IP offers
            comprehensive patent filing and protection services tailored for
            companies and inventors across a wide array of industries. Our
            highly skilled team, comprising multi–domain experts, including
            patent agents, engineers, and researchers, ensures top–tier patent
            drafting, prosecution, and litigation support.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            Our patent drafting services are meticulously crafted to suit the
            uniqueness of each invention. This process involves conducting
            exhaustive prior art and landscape searches, followed by in–depth
            consultations with the inventor. We specialize in drafting both
            provisional and complete specifications for submission to the Indian
            Patent Office, as well as global filings through the Patent
            Cooperation Treaty (PCT) or direct routes. Our expertise spans
            multiple jurisdictions, including the Indian Patent Office, USPTO,
            and EPO, enabling us to successfully navigate the complexities of
            patent prosecution by addressing examiner objections with strong,
            legally sound arguments.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            For patent prosecution, our team excels in responding to examiner
            queries and building compelling cases that highlight the inventive
            merit of your application. We provide end-to-end guidance during
            patent office hearings, ensuring inventors are thoroughly briefed to
            navigate these critical moments confidently.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            On the litigation front, we analyse cited prior art in opposition
            and revocation cases, prepare robust written responses, affidavits,
            and deliver compelling arguments during oral hearings. We also
            handle patent appeals, counterclaims, and revocation proceedings
            across various High Courts, ensuring clients receive strategic
            representation. Our litigation support teams are experienced in
            nullifying opposition filings and revocation requests through solid
            evidence and courtroom advocacy.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            To maximize the value of your patents, our IP commercialization
            experts provide services such as landscape mapping, patent
            valuation, due diligence, and the development of monetization
            strategies through licensing or technology transfers. Trusted by
            leading companies, universities, and research institutions across
            India, we help secure and unlock the full potential of your
            intellectual property.
          </p>
        </div>
        <div className="bg-white px-5 text-justify flex lg:px-20 ">
          <div className="w-full lg:w-3/4">
            <h1 className="text-start text-2xl text-black pb-4">
              Documents Required
            </h1>

            {/* Patent Registration */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("patentRegistration")}
              >
                Patent Registration Application
              </h1>
              {isOpen.patentRegistration && (
                <p className="pb-8 text-white text-sm">Form-1.</p>
              )}
            </div>

            {/* Complete Specifications */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("specifications")}
              >
                Complete Specifications
              </h1>
              {isOpen.specifications && (
                <p className="pb-8 text-white text-sm">
                  Form-2. In the absence of complete specifications, a
                  provisional specification can be submitted.
                </p>
              )}
            </div>

            {/* Statement and Undertaking */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("statementUndertaking")}
              >
                Statement and Undertaking
              </h1>
              {isOpen.statementUndertaking && (
                <p className="pb-8 text-whitetext-sm">Form-3.</p>
              )}
            </div>

            {/* Inventor's Declaration */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("inventorsDeclaration")}
              >
                Inventor's Declaration
              </h1>
              {isOpen.inventorsDeclaration && (
                <p className="pb-8 text-white text-sm">
                  A declaration from the inventor clarifying the details of the
                  invention and its originality, provided in Form-5.
                </p>
              )}
            </div>

            {/* Proof of Right */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("proofOfRight")}
              >
                Proof of Right
              </h1>
              {isOpen.proofOfRight && (
                <p className="pb-8 text-white text-sm">
                  Documentation from the inventor confirming the applicant's
                  right to apply for the patent registration.
                </p>
              )}
            </div>

            {/* Power of Authority */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("powerOfAuthority")}
              >
                Power of Authority
              </h1>
              {isOpen.powerOfAuthority && (
                <p className="pb-8 text-white text-sm">
                  If a patent agent or legal representative is submitting the
                  patent application, then Form-26, a power of authority, is
                  required.
                </p>
              )}
            </div>

            {/* Priority Documents */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("priorityDocuments")}
              >
                Priority Documents
              </h1>
              {isOpen.priorityDocuments && (
                <p className="pb-8 text-white text-sm">
                  For convention applications (from the Paris Convention) or PCT
                  (Patent Cooperation Treaty) national phase applications, it's
                  imperative to present priority documents. These can be
                  provided with the initial submission or within 18 months from
                  the priority date.
                </p>
              )}
            </div>

            {/* Permission from National Biodiversity Authority */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("nationalBiodiversity")}
              >
                Permission from National Biodiversity Authority
              </h1>
              {isOpen.nationalBiodiversity && (
                <p className="pb-8 text-white text-sm">
                  If the application involves biological material sourced from
                  India, obtaining permission from the National Biodiversity
                  Authority is mandatory.
                </p>
              )}
            </div>

            {/* Source of Biological Material */}
            <div className="hover:bg-slate-900 pt-2 hover:pl-5 rounded-lg">
              <h1
                className="text-start text-xl text-black hover:text-white pb-4 cursor-pointer"
                onClick={() => toggleDropdown("sourceBiologicalMaterial")}
              >
                Source of Biological Material
              </h1>
              {isOpen.sourceBiologicalMaterial && (
                <p className="pb-8 text-white text-sm">
                  The patent application should specify the source or origin of
                  any biological material mentioned in the specifications.
                </p>
              )}
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/4 px-10 pl-16">
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
                className="block text-white font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Trademark
              </a>
            </nav>
          </div>
        </div>

        <h1 className="text-center text-3xl text-black pb-4 bg-white">
          Copyright FAQ's
        </h1>
        <div className="space-y-4 px-2 pt-8 bg-white lg:px-8">
          {/* FAQ Section */}
          <div className="flex-1">
            {/* Your FAQ Content */}
            <div className="space-y-4 pr-2 pt-4 h-full bg-slate-200 pb-10 pl-2 rounded-md lg:bg-white lg:px-10">
              {/* FAQ Item 1 */}
              <details className="group overflow-hidden ">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    What types of patents does House of IP handle?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    At House of IP, our multidisciplinary team of technical
                    experts and patent agents assists in drafting, prosecuting,
                    and litigating patents across a wide range of sectors,
                    including mechanical, electrical, software, and
                    biotechnology inventions.
                  </p>
                </div>
              </details>

              {/* Add the other FAQ items here */}
              {/* FAQ Item 2 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    What is the process of filing a patent with JustiSphereX
                    Legal?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                  <p className="mt-2 px-4 text-black text-sm">
                    Our patent filing process is comprehensive and includes:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black text-sm">
                    <li>
                      <strong>Prior art search and landscape analysis:</strong>
                      We conduct thorough research on existing patents and
                      technologies relevant to your invention.
                    </li>
                    <li>
                      <strong>Inventor consultations:</strong> We collaborate
                      with you to understand every technical aspect of your
                      invention.
                    </li>
                    <li>
                      <strong>Drafting</strong> We prepare provisional and
                      complete patent specifications tailored to your needs.
                    </li>
                    <li>
                      <strong>Filing</strong> We manage the filing process at
                      the Indian Patent Office, USPTO, EPO, or other
                      jurisdictions via PCT or direct routes.
                    </li>
                    <li>
                      <strong>Prosecution</strong> We handle communication with
                      patent offices, addressing examiner queries to ensure a
                      smooth progression of your application.
                    </li>
                  </ul>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    What happens if my patent application is challenged?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    At House of IP, our dedicated litigation team is well–versed
                    in handling patent disputes. We thoroughly analyse the
                    challenge, prepare strong counter–arguments supported by
                    evidence, and represent you during oral hearings to defend
                    your patent’s validity.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    How can I monetize my patent?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96 text-sm">
                  <p className="mt-2 px-4 text-black">
                    Our IP commercialization team provides expert services,
                    including:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black text-sm">
                    <li>
                      <strong> Landscape mapping: </strong>
                      Identifying markets and competitors for your patent.
                    </li>
                    <li>
                      <strong>Patent valuation:</strong> Determining the
                      commercial potential of your invention.
                    </li>
                    <li>
                      <strong>Due diligence:</strong> Conducting risk
                      assessments to ensure informed decision–making.
                    </li>
                    <li>
                      <strong>Monetization strategies: </strong> Crafting
                      tailored strategies for licensing or technology transfer
                      to maximize your patent’s value.
                    </li>
                  </ul>
                </div>
              </details>
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    How do I know if House of IP is the right patent law firm
                    for me?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    House of IP is a distinguished IP law firm with a proven
                    track record of securing and leveraging patents for
                    businesses, academic institutions, and research
                    organizations across India. Our multidisciplinary team of
                    experts offers personalized services and extensive
                    jurisdictional experience to support you through every step
                    of the patent process, from filing to commercialization.
                  </p>
                </div>
              </details>
            </div>
          </div>
          <div className="lg:flex flex-row">
            <div className="px-2 text-justify lg:w-3/4 lg:pl-10">
              <h1 className="text-xl text-center text-black font-montserrat font-semibold lg:text-2xl">
                Securing a Patent in India – A Step-by-Step Guide
              </h1>
              <p className="text-gray-800 pt-5 text-sm">
                Protecting your innovation with a patent is a vital process.
                Here’s a streamlined overview of the patent filing process in
                India:
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                1. Prior Art Search & Disclosure
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Before filing, it’s essential to conduct a thorough search to
                identify similar patents that could affect yours. This ensures
                that your invention meets the criteria for novelty and
                non–obviousness. We’ll also guide you on whether to keep your
                invention confidential before filing.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                2. Drafting the Patent Application
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Our team will work closely with you to capture the technical
                details of your invention, preparing a clear and concise patent
                specification with detailed descriptions and illustrations.
                Depending on your needs, we’ll determine whether a provisional
                or complete specification is best.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                3. Filing at the Indian Patent Office (IPO)
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                We handle the entire filing process on your behalf at the IPO
                through our expert patent agents team, ensuring the timely
                submission of all necessary documents and payment of required
                fees.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                4. Patent Prosecution & Examination
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                After filing, your application will be examined by the IPO. Our
                experts manage all communications with the examiner, addressing
                any objections and making amendments to ensure a smooth approval
                process.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                5. Grant & Post–Grant Management
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Once your patent is granted, we provide ongoing support in
                maintaining it, including payment of renewal fees and addressing
                any infringement issues that may arise. Each invention is
                unique, and our expert team will provide a personalized roadmap
                to ensure your intellectual property is fully protected.
              </p>
            </div>

            {/* Card Section */}
            <div className="flex flex-col justify-center space-y-4 items-center space-x-3 lg:flex-col">
              {/* Card 1 */}
              <a href="/trademark">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKc6eE_WPmaSRuSzcabfmXNHoIYn-GoGNAA&s"
                      alt="Patent"
                      className="h-44 w-72"
                    />
                  </figure>
                  <div className="card-body bg-white text-black">
                    <h2 className="card-title">Trademark</h2>
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
                      className="h-44 w-72"
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

export default Patent;
