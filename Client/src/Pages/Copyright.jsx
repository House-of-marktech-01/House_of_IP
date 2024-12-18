import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const Copyright = () => {
  const [token, setToken] = useState(Cookies.get("jwtToken"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

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
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf, .doc, .docx", // Accepted file formats
    onDrop: (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0]);
    },
  });

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a document to upload!");
      return;
    }

    const formData = new FormData();
    formData.append("document", selectedFile); // Append file to form data

    try {
      setIsUploading(true);
      setUploadStatus("");

      // Make POST request to your backend
      const response = await axios.post(
        "http://localhost:5000/api/users/send-doc", // Your backend endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadStatus("Document uploaded successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      setUploadStatus("Failed to upload document.");
      console.error("Error uploading document:", error);
    } finally {
      setIsUploading(false);
    }
  };
  return (
    <>
      <div id="copyright" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-20 lg:pt-20">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Copyright</li>
          </ul>
        </div>
        <div className="lg:flex gap-5 border p-3 bg-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center">
            <div className="sticky">
              <img
                src="https://legalvidhiya.com/wp-content/uploads/2023/10/image-34.png"
                className="rounded-lg w-80"
                alt="Copyright"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 text-gray-700 lg:mb-4">
                Copyright
              </h2>

              <p className="prod_description text-sm text-gray-700 mt-2">
                Copyright is a legal entitlement granted to the owner of
                intellectual property. Copyright protection typically endures
                for the author’s lifetime plus an additional 60 years after the
                author’s death
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

        <div className="bg-white px-5 text-justify lg:px-20 grid grid-cols-1 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <h1 className="text-center text-3xl text-black pb-4 pt-4">
              Copyright
            </h1>
            <p className="pb-8 text-gray-800 text-sm">
              As the importance of safeguarding creative content continues to
              grow, House of IP provides comprehensive advisory and dispute
              management services tailored for copyright protection. Our highly
              regarded team of copyright attorneys supports authors, musicians,
              filmmakers, software developers, and media companies in defending
              their original creations and addressing infringement issues.
            </p>
            <p className="pb-8 text-gray-800 text-sm">
              We specialize in a full suite of copyright services, including
              registration, licensing, assignment, enforcement, and dispute
              resolution, spanning various industries. Understanding the
              complexities brought by technology and the surge in copyright
              violations, we have effectively assisted clients in safeguarding
              custom software, architectural designs, literary works, and
              multimedia content.
            </p>
            <h2 className="text-lg font-medium text-black pb-5">
              Comprehensive Copyright Solutions
            </h2>
            <p className="pb-8 text-gray-800 text-sm">
              Our dedicated copyright registration team ensures rapid and
              thorough protection for your work, covering text, images, sound,
              and video documentation. We excel in representing clients before
              courts, employing strategic oral arguments, compelling evidence,
              and counterclaims. Additionally, we advise on legal best practices
              for using third-party content, helping clients avoid copyright
              pitfalls.
            </p>
            <h2 className="text-lg font-medium text-black pb-5">
              Our Expertise Includes:
            </h2>
            <p className="pb-8 text-gray-800 text-sm">
              <strong>• Determining Copyright Eligibility:</strong> We assess if
              your work qualifies for copyright protection under applicable
              laws. <br />{" "}
              <strong>• Resolving Evidence–Focused Disputes:</strong> Tackling
              copyright disputes with jurisdiction–specific approaches. <br />{" "}
              <strong>• Guiding Safer Content Usage:</strong> Offering clear
              guidelines to ensure legal and secure use of third-party content.
            </p>
            <p className="pb-8 text-gray-800 text-sm">
              Whether you are an artist or a business, we advise on licensing,
              assignments, and permitted usage of copyrighted works. Our team
              monitors both online and offline spaces for unauthorized use of
              movies, music, books, software, and more. If necessary, we pursue
              legal action, including filing civil and criminal complaints and
              coordinating with cybercrime units to swiftly seize infringing
              materials.
            </p>
            <h2 className="text-lg font-medium text-black pb-5">
              Expert Representation in Copyright Disputes
            </h2>
            <p className="pb-8 text-gray-800 text-sm">
              Our experienced copyright attorneys represent clients in cases
              involving ownership disputes, royalty claims, co–authorship
              conflicts, and adaptation rights. For high–value copyrighted
              content, such as music, software, or literary works, we offer
              valuation services, assisting producers, publishers, and tech
              companies in funding rounds and M&A transactions. Our technical
              experts assess code quality, vulnerability metrics, and
              architecture strength for reliable valuation.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-1 lg:px-10 pl-16">
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
                    What Copyrighted Works Do We Protect?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    House of IP safeguards a wide range of creative content:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black text-sm">
                    <li>
                      <strong>Software:</strong> Handling ownership complexities
                      and infringement issues in custom software.
                    </li>
                    <li>
                      <strong>Architectural Works:</strong> Defending
                      architects’ and designers’ rights to their original
                      creations.
                    </li>
                    <li>
                      <strong>Literary Works:</strong> Assisting authors,
                      publishers, and stakeholders in protecting their written
                      works.
                    </li>
                    <li>
                      <strong>Multimedia Content:</strong> Managing copyright
                      matters related to music, films, videos, and more.
                    </li>
                  </ul>
                </div>
              </details>

              {/* Add the other FAQ items here */}
              {/* FAQ Item 2 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    How to Register Your Copyright?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                  <p className="mt-2 px-4 text-black text-sm">
                    Our expert team guides you through the copyright
                    registration process, ensuring that your work is quickly
                    protected in the appropriate category—whether it’s text,
                    image, sound, or video. We handle the documentation and
                    filing efficiently, so you can focus on your creativity.
                  </p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    What if Your Copyright is Infringed?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    House of IP has a proven track record in copyright dispute
                    resolution. We represent clients in court, using compelling
                    oral arguments, robust evidence, and strategic counterclaims
                    to protect your rights. We also assist in recovering damages
                    for copyright infringement.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    Legally Using Copyrighted Content
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96 text-sm">
                  <p className="mt-2 px-4 text-black">
                    We provide legal guidance on the use of third–party
                    copyrighted material through licenses, assignments, or
                    fair–use guidelines. Our lawyers ensure you can leverage
                    content legally and ethically while minimizing risks.
                  </p>
                </div>
              </details>
              <details className="group overflow-hidden pb-10">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    Protecting High-Value Copyrighted Works
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96 text-sm">
                  <p className="mt-2 px-4 text-black">
                    For high–value content, including music, software, and
                    literary works, offers comprehensive valuation services. Our
                    team of legal and technical experts evaluates the commercial
                    value of your content during investment, funding rounds, or
                    mergers and acquisitions.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="lg:flex flex-row">
            <div className="px-2 text-justify lg:w-3/4 lg:pl-10">
              <h1 className="text-xl text-center text-black font-montserrat font-semibold lg:text-2xl">
                Your Copyright Registration Process – Simplified
              </h1>
              <p className="text-gray-800 pt-5 text-sm">
                Copyright protects your original creations, from literary works
                to artistic expressions. Here’s a step–by–step guide to the
                registration process in India:
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                1. Determine Eligibility:
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Not every work qualifies for copyright. Our initial consultation
                will help determine if your work, whether literary, musical,
                dramatic, artistic, or cinematographic, meets the originality
                criteria for protection.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                2. Application Preparation:
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Once eligibility is established, we’ll assist you in completing
                the required forms, providing all necessary details about your
                work (title, creator information, format) to ensure a flawless
                application.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                3. Submission & Examination:
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                The application is then submitted to the Copyright Office, along
                with any required fees and a copy of your work. The office will
                review the submission for accuracy and completeness.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                4. Registration & Certification:
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                If no objections arise, your copyright will be officially
                registered, and you’ll receive a certificate of registration,
                serving as prima facie evidence of ownership.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                5. Post–Registration Protection:
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                While registration is a crucial step, it is only the beginning.
                We offer ongoing advice on protecting your rights, issuing
                cease-and-desist notices, or pursuing legal action in case of
                infringement.
              </p>
            </div>

            {/* Card Section */}
            <div className="flex flex-col justify-center space-y-4 items-center space-x-3 lg:flex-col">
              {/* Card 1 */}
              <a href="/patent">
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
              <a href="/patent">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9Ngiq_F5HPP39UxsluGMvOiMx4-aZrO1vg&s"
                      alt="Copyright"
                      className="h-44"
                    />
                  </figure>
                  <div className="card-body bg-white text-black">
                    <h2 className="card-title">Patent</h2>
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

export default Copyright;
