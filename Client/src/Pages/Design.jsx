import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import FileUploader from "../Components/FileUploader";

const Design = () => {
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
              <NavLink to="/services"> Services</NavLink>
            </li>
            <li>Design Registration</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 text-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="https://media.licdn.com/dms/image/D5612AQEzBfnfpIQS2A/article-cover_image-shrink_600_2000/0/1699856745668?e=2147483647&v=beta&t=_Aap_0ugnEQEDWfhg7jdKw3RiXQUqhrBypN7upOfAFE"
                className="rounded-lg w-64 h-48"
                alt="Design Registration"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 ">
                Design Registration
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
                    <option value="MSME">MSME</option>
                    <option value="Regular">Regular</option>
                  </select>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Patent Search Card */}
                  {selectedOption === "MSME" && (
                    <div className="border rounded-md p-4 bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">MSME</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>One Article </li>
                        <li>Prepared by IPR Professionals </li>
                        <li>Representation sheets </li>
                        <li>Power of Attorney format </li>
                        <li>Filings on IPINDIA </li>
                        <li>Individuals & MSMEs </li>
                      </ul>
                    </div>
                  )}

                  {/* Provisional Filing Card */}
                  {selectedOption === "Regular" && (
                    <div className="border rounded-md p-4 bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">Regular</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>One Article </li>
                        <li>Prepared by IPR Professionals </li>
                        <li>Representation sheets </li>
                        <li>Power of Attorney format </li>
                        <li>Filings on IPINDIA </li>
                        <li>Non-MSMEs </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-row lg:flex-row justify-between items-center mt-4">
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
            <NavLink to="/DForm">
              <button className="w-48 text-black p-3 rounded-lg pulse-scale font-serif golden-gradient">
              Protect Your IP Now
              </button>
            </NavLink>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0 justify-start lg:space-x-10 bg-slate-900 text-white px-5 lg:px-20">
          <NavLink to="/designobjection">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="profile-image">
                    <img src="/trademark.png" className="mt-8 " alt="" />
                    <div className="name relative right-3">Design Objection</div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="Description">
                    <p className="description pt-8">
                    Design registration offers a shield for your unique design, classifying it as intellectual property and ensuring it's safe from imitation. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/designassignment">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="profile-image">
                    <img src="/trademark.png" className="mt-8 " alt="" />
                    <div className="name relative right-3">Design  Assignment</div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="Description">
                    <p className="description pt-8">
                    Design registration offers a shield for your unique design, classifying it as intellectual property and ensuring it's safe from imitation. 
                    </p>
                  </div>
                </div>
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
            Design Registration
          </motion.h1>
          {[
            `At House of IP, we offer comprehensive design registration services
        to help protect the visual aspects of your product. A registered
        design under the Designs Act, 2000 safeguards the unique shape,
        pattern, configuration, or ornamentation of your product, ensuring
        that others cannot replicate its appearance without permission.
        Whether you are a designer, manufacturer, or business owner,
        securing your product’s design is a crucial step in protecting your
        creative efforts.`,
            `Our team has extensive experience across a variety of industries,
        assisting clients in registering their designs and enforcing their
        rights in case of infringement. We make the process seamless, from
        filing to protection, ensuring that your design rights are fully
        secured.`,
          ].map((text, index) => (
            <motion.p
              key={index}
              className="pb-8  text-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              {text}
            </motion.p>
          ))}
        </div>
        <div className="bg-slate-900 text-white px-5 text-justify flex lg:px-20">
          <div className="w-full lg:w-3/4">
            <h1 className="text-start text-2xl  pb-4">Documents Required</h1>

            {/* Applicant's Details */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4">Applicant's Details</h1>
              <p className="pb-8  text-sm">
                Name and complete address of the applicant.
              </p>
            </div>

            {/* Applicant's Nature/Status */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl pb-4">
                Applicant's Nature/Status
              </h1>
              <p className="pb-8  text-sm">
                Clear indication of the status of the applicant, specifying
                whether the applicant is an individual, a company, etc.
              </p>
            </div>

            {/* Startup Certificate (if applicable) */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl pb-4">
                Startup Certificate (if applicable)
              </h1>
              <p className="pb-8  text-sm">
                Startups must provide a registration certificate.
              </p>
            </div>

            {/* Description of the Article */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl pb-4">
                Description of the Article
              </h1>
              <p className="pb-8 text-sm">
                A detailed description of the 'article' to which the design
                pertains, accompanied by its classification according to the
                prescribed categories.
              </p>
            </div>

            {/* Visual Representation */}
            <div className="pt-2 hover:pl-5 rounded-lg transform transition-all duration-300 ease-in-out hover:translate-x-2">
              <h1 className="text-start text-xl  pb-4">
                Visual Representation
              </h1>
              <p className="pb-8 text-sm">
                A minimum of four visuals (images or drawings) showing the
                article from all angles should be included with the application.
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/3 px-10 pl-16">
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
                      What types of designs can be registered with House of IP ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden pb-5 max-h-0 group-open:max-h-96 bg-gray-800 rounded-b-xl">
                    <p className="mt-2 px-4 text-white text-sm">
                      We assist with registering a wide range of product
                      designs, including but not limited to:
                    </p>
                    <ul className="mt-2 px-4 list-disc list-inside text-white text-sm">
                      <li>
                        <strong>Product shapes and configurations</strong>{" "}
                        (e.g., furniture, gadgets)
                      </li>
                      <li>
                        <strong>Surface patterns</strong> (e.g., textiles,
                        wallpaper)
                      </li>
                      <li>
                        <strong>Ornamentation</strong> (e.g., decorative
                        elements on products)
                      </li>
                    </ul>
                    <p className="mt-2 px-4 text-white text-sm">
                      Our expertise spans multiple industries, allowing us to
                      provide tailored solutions for your specific design
                      protection needs.
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      What is the process of registering a design with House of
                      IP?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 pb-5 bg-gray-800 rounded-b-xl group-open:max-h-96 px-12 text-justify text-black font-base overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      Our design registration process is straightforward and
                      includes:
                    </p>
                    <p className="mt-2 px-4 text-white text-sm">
                      <strong>1. Consultation and Design Assessment:</strong> We
                      start by understanding your product and its design
                      elements to ensure eligibility under the Designs Act,
                      2000.
                    </p>
                    <p className="mt-2 px-4 text-white text-sm">
                      <strong>2. Design Search:</strong> We conduct a search to
                      ensure that your design is unique and not already
                      registered by another entity.
                    </p>
                    <p className="mt-2 px-4 text-white text-sm">
                      <strong>3. Application Drafting:</strong> Our team
                      prepares and files the design application with the Indian
                      Patent Office, ensuring that all necessary documents are
                      in order.
                    </p>
                    <p className="mt-2 px-4 text-white text-sm">
                      <strong>4. Filing and Registration:</strong> We manage the
                      entire filing process, from submitting your application to
                      addressing any queries raised by the Design Office until
                      your design is successfully registered.
                    </p>
                    <p className="mt-2 px-4 text-white text-sm">
                      <strong>5. Post–Registration Support:</strong> Once your
                      design is registered, we provide support to help you
                      enforce your rights in case of infringement and assist
                      with renewals to keep your design protected.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      Prices & FeesWhat happens if someone copies my registered
                      design?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden pb-5 bg-gray-800 rounded-b-xl max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      At House of IP, we help you take swift action if your
                      registered design is copied. Our team assists in filing
                      design infringement cases, preparing documents, and
                      representing you in court to ensure your design rights are
                      upheld.
                    </p>
                  </div>
                </details>

                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      How can I monetize my registered design?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-gray-800 pb-5 rounded-b-xl max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      Registering your design not only protects it but also
                      allows you to explore commercialization opportunities. Our
                      experts at House of IP help you:
                    </p>
                    <ul className="mt-2 px-4 list-disc list-inside text-white">
                      <li>
                        License your design to other manufacturers or
                        businesses.
                      </li>
                      <li>Negotiate design rights transfer agreements.</li>
                      <li>
                        Maximize the commercial value of your design through
                        strategic partnerships.
                      </li>
                    </ul>
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

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify text-white lg:w-3/4">
              <h1 className="text-xl text-center text-white font-montserrat font-semibold lg:text-2xl">
                Registering a Design in India – A Simplified Process
              </h1>
              <p className="pt-5 text-sm">
                Securing the visual identity of your product through design
                registration is a valuable investment. Here’s a simplified
                breakdown of the process:
              </p>
              <h3 className="font-bold pt-3">
                1. Consultation & Design Search
              </h3>
              <p className="pt-2 text-sm">
                Before applying, it’s essential to determine if your design
                qualifies for protection under the Designs Act, 2000. We’ll
                assess your design and conduct a search to ensure that it hasn’t
                already been registered by someone else.
              </p>
              <h3 className="font-bold  pt-3">
                2.Drafting the Design Application
              </h3>
              <p className=" pt-2 text-sm">
                Once your design passes the eligibility check, we’ll prepare and
                file the application with the Indian Patent Office. This
                includes submitting illustrations and a detailed description of
                your design.
              </p>
              <h3 className="font-bold  pt-3">3. Filing the Application</h3>
              <p className=" pt-2 text-sm">
                After drafting, we submit the design application on your behalf,
                making sure all required documents and fees are in order.
              </p>
              <h3 className="font-bold  pt-3">4. Examination & Registration</h3>
              <p className=" pt-2 text-sm">
                The Design Office will review your application. If they have any
                objections, we’ll respond on your behalf, ensuring that your
                design gets registered smoothly.
              </p>
              <h3 className="font-bold  pt-3">
                5. Post–Registration Management
              </h3>
              <p className=" pt-2 text-sm">
                Once registered, your design is protected for 10 years, with the
                option to renew for an additional 5 years. We assist with
                managing renewals and handling any infringement issues that may
                arise.
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

export default Design;
