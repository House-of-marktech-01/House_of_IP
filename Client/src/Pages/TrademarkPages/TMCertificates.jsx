import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const TMCertificates = () => {
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
  const [selectedOption, setSelectedOption] = useState("Certificate Only");

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
            <li>Trademark Certificate</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="https://img.indiafilings.com/catalog/Trademark-Certificate-Brand-Monitoring.png"
                className="rounded-lg w-80"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 text-white">
                Trademark Certificate
              </h2>

              <p className="prod_description text-sm text-white mt-2">
                Get a authorized trademark registration certificate from the
                Government.
              </p>
              <div className="container mx-auto p-4">
                {/* Dropdown toggler */}
                <div className="mb-4">
                  <select
                    className="w-full px-4 py-2 border rounded-md bg-slate-900 focus:outline-none text-white focus:ring focus:ring-blue-300"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="Certificate Only">Certificate Only</option>
                    <option value="Certificate & Software">
                      Certificate & Software
                    </option>
                  </select>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Certificate Only Card */}
                  {selectedOption === "Certificate Only" && (
                    <div className="border rounded-md p-4 bg-slate-900 text-white">
                      <h2 className="font-semibold text-lg mb-2">
                        Certificate Only
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Trademark Certificate</li>
                        <li>Legal Hard copy</li>
                        <li>Courier to your Address</li>
                      </ul>
                    </div>
                  )}

                  {/* Certificate & Software Card */}
                  {selectedOption === "Certificate & Software" && (
                    <div className="border rounded-md p-4 text-white bg-slate-900">
                      <h2 className="font-semibold text-lg mb-2">
                        Certificate & Software
                      </h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Trademark Certificate</li>
                        <li>Legal Hard copy</li>
                        <li>Courier to your Address</li>
                        <li>LEDGERS Brand Monitoring</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <RWebShare
                    data={{
                      url: "https://house-of-ip.vercel.app//trademarkcertificates",
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
            Trademark Registration Certificate
          </motion.h1>
          {[
            `A Trademark Registration Certificate is a legal document issued by the Indian Trademark Registry that certifies the successful registration of a trademark in India. The trademark certificate is proof of the exclusive ownership of the trademark and grants the trademark owner the absolute right to use the trademark for its goods and services. The certificate also shows the trademark’s official registration date, class of goods and services and the geographical region where the trademark is registered. The Trademark Registration Certificate is a valuable asset to the trademark owner and must be renewed to ensure its validity.`,
            `Trademark registration is the process of registering a trademark with the government to protect it from being used without permission. A trademark is a identifiable symbol or expression which identifies a source's products or services from those of others. Trademark registration in India is governed by the Trademarks Act 1999 and is administered by the Controller General of Patents, Designs, and Trademarks.`,
            `Trademark registration and obtaining a trademark certificate is an important part of protecting a business’s intellectual property. It helps to prevent others from using a similar or identical trademark without permission. The registration process also serves to notify the public that a business owns a particular trademark, which can help deter infringement.`,
            <strong className="text-lg">
              Benefits of Trademark Registration Certificate
            </strong>,
            `A trademark registration certificate is a powerful tool for brand protection and helps avoid future costly disputes. It also offers a variety of benefits, such as exclusive rights to use the trademark, the ability to file a suit for trademark infringement and statutory damages for trademark infringement. Furthermore, it allows for a broader scope of protection for the trademark, including foreign countries.`,
            `Protection of Unique Brand Name`,
            `Registering a trademark provides you with exclusive rights to use the mark on goods and services in the class it is registered. This means that no other person or entity can use the same mark or any confusingly similar mark on similar goods and services. This trademark certificate provides strong legal protection for the uniqueness of your brand name or logo.`,
            `Prevent Unauthorized Use`,
            `Once the trademark is registered, it can be used to prevent any third party from using it without authorization. This is especially important when someone tries to pass off their goods or services as those of the registered trademark owner. In such cases, the trademark owner can take legal action against the infringer and protect their rights.`,
            `Ability to License and Franchise`,
            `One of the significant benefits of registering a trademark is that it allows the trademark owner to license and franchise their mark to third parties. This means the trademark owner can enter into commercial agreements with other parties, allowing them to use the mark in return for payment. It is a great way to monetize the trademark and grow the business.`,
            `Increased Brand Value`,
            `A registered trademark can help increase the value of a brand. This is because it gives the brand a unique identity and makes it easier for customers to identify the brand and its products and services. This can help increase the brand’s recognition and create a loyal customer base.`,
            `Increased Investment Opportunities`,
            `A registered trademark can be used as an asset to attract investors. This is because investors are more likely to invest in a business with a registered trademark, indicating that the company has taken steps to protect its intellectual property.`,
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
                      What is trademark registration certificate ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-slate-800 text-white pb-6 rounded-b-xl ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-sm">
                      A Trademark Registration Certificate is a document issued
                      by the Indian Trademark Registry (TMR) that confirms a
                      trademark has been successfully registered in India. It
                      serves as proof of the trademark holders ownership and
                      protects the trademark against unauthorised use.
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      How much does it cost to register for a trademark ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 rounded-b-xl bg-slate-800 pb-6 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 px-4 text-white text-sm">
                      The cost of registering a trademark in India depends on
                      the type of application, the number of classes and the
                      goods or services being registered.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      What information does a trademark Registration certificate
                      include ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden rounded-b-xl bg-slate-800 pb-6 max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      The Trademark Registration Certificate includes the
                      trademark name, registration number, registration date,
                      the goods and services covered by the registration, the
                      trademark owners name and address, and the duration of
                      protection.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg rounded-b-sm transition">
                    <span className="font-medium text-white">
                      How long does it take to obtain a trademark registration
                      certificates ?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-slate-800 rounded-b-xl pb-6 max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      The time frame for obtaining a Trademark Registration
                      Certificate varies depending on the applications
                      complexity and the time it takes for the TMR to process
                      the application. On average, it usually takes 6 months to
                      1 year for the application to be processed and the
                      certificate issued.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify text-white lg:w-3/4">
              <h1 className="text-xl text-center text-white  font-montserrat font-semibold lg:text-2xl">
                How House of IPcan help you get Trademark Registration
                Certificate
              </h1>
              <p className=" pt-5 text-sm">
                House of IPcan help customers with trademark registration
                certificate by providing them with up-to-date information about
                the process and the necessary documents that need to be
                submitted. Our team of experts guide our customers through each
                step of the registration process and ensures they clearly
                understand what is required. Our experts can review documents,
                provide feedback on any potential issues, and help resolve any
                conflicts that may arise. Additionally, we can help customers to
                understand the implications of registering a trademark and the
                potential legal problems that may occur.
              </p>
              <p className="pt-5 text-sm">
                We also provide comprehensive services to help ensure that
                customers have a successful trademark registration. Our team can
                help customers to create an effective trademark that meets all
                the criteria set by the Indian Trademark Office, and we can
                provide advice on how to protect their trademark from
                infringement. Once the application is complete, our team will
                ensure that the application to ensure it is complete and
                accurate and will provide any necessary guidance to the
                customer.
              </p>
              <p className="pt-5 text-sm">
                AtHouse of IP, we understand the importance of having a
                secure, reliable trademark registration and are committed to
                helping our customers to achieve this goal. We strive to provide
                the best customer service and guidance to ensure our customers
                can register their trademarks without hassle.
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

export default TMCertificates;
