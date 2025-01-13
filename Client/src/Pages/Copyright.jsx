import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import FileUploader from "../Components/FileUploader";

const Copyright = () => {
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
  const [selectedOption, setSelectedOption] = useState("Book");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Helmet>
        <title>House of IP - Copyright Registration</title>
      </Helmet>
      <div id="copyright" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-slate-900 text-white pt-20 lg:pt-20">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Copyright Registration</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 text-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="https://blog.ipleaders.in/wp-content/uploads/2021/06/1_copyright-designs-and-patents-act-1988-1.jpg"
                className="rounded-lg w-80"
                alt="Copyright"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4">
                Copyright Registration
              </h2>

              <p className="prod_description text-sm  mt-2">
                Copyright is a entitlement granted to the owner of intellectual
                property. Copyright protection typically endures for the
                author’s lifetime plus an additional 60 years after the author’s
                death
              </p>
              <div className="container mx-auto p-4">
                {/* Dropdown toggler */}
                <div className="mb-4">
                  <select
                    className="w-full px-4 py-2 border rounded-md bg-slate-900  focus:outline-none"
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <option value="Software">Software</option>
                    <option value="Book">Book</option>
                    <option value="Video">Video</option>
                    <option value="Music">Music</option>
                    <option value="Logo">Logo</option>
                    <option value="Sound">Sound</option>
                  </select>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Patent Search Card */}
                  {selectedOption === "Book" && (
                    <div className="border rounded-md p-4 bg-slate-900  ">
                      <h2 className="font-semibold text-lg mb-2">Book</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Book Catalogues </li>
                        <li>Poems</li>
                        <li>Stories </li>
                        <li>Business plans</li>
                        <li>market strategies</li>
                      </ul>
                    </div>
                  )}

                  {/* Provisional Filing Card */}
                  {selectedOption === "Video" && (
                    <div className="border rounded-md p-4 text-white bg-slate-900 ">
                      <h2 className="font-semibold text-lg mb-2">Video</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Video</li>
                      </ul>
                    </div>
                  )}

                  {/* Regular Card */}
                  {selectedOption === "Software" && (
                    <div className="border rounded-md p-4 text-white bg-slate-900 ">
                      <h2 className="font-semibold text-lg mb-2">Software</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Mobile application</li>
                        <li>Computer application </li>
                        <li>Website</li>
                        <li>softwares</li>
                      </ul>
                    </div>
                  )}
                  {selectedOption === "Music" && (
                    <div className="border rounded-md p-4 text-white bg-slate-900 ">
                      <h2 className="font-semibold text-lg mb-2">Music</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Tunes</li>
                      </ul>
                    </div>
                  )}
                  {selectedOption === "Sound" && (
                    <div className="border rounded-md p-4 text-white bg-slate-900 ">
                      <h2 className="font-semibold text-lg mb-2">Sound</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Songs</li>
                        <li>Voice along with music </li>
                      </ul>
                    </div>
                  )}
                  {selectedOption === "Logo" && (
                    <div className="border rounded-md p-4 text-white bg-slate-900 ">
                      <h2 className="font-semibold text-lg mb-2">Logo</h2>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Logo</li>
                        <li>Device</li>
                        <li>Photographs</li>
                        <li>Architecture work</li>
                        <li>any kind of art forms </li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between mt-4">
                  <RWebShare
                    data={{
                      url: "https://house-of-ip.vercel.app/copyright",
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
          <div className="flex justify-center">
          <NavLink to="/CRForm">
            <button className="bg-green-500 w-28 text-black p-3 rounded-lg">
              Go to form
            </button>
          </NavLink>
          </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0 justify-start lg:space-x-10 bg-slate-900 text-white px-5 lg:px-20">
          <NavLink to="/copyrightobjection">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://static.wixstatic.com/media/7e8b4d_9029db34314e42fea21be8843a5db7c4~mv2.jpg/v1/crop/x_0,y_19,w_484,h_473/fill/w_240,h_235,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202023-08-14%20at%203_27_edited.jpg"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Copyright Objection</h2>
              </div>
            </div>
          </NavLink>
          <NavLink to="/copyrightassignment">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://media.licdn.com/dms/image/C4E12AQFtVpm-q_tQgg/article-cover_image-shrink_600_2000/0/1604215607381?e=2147483647&v=beta&t=MML4g7tg5BAie55Ika9VjJce0SRDduENyldDAF1PrS8"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Copyright Assignment</h2>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="bg-slate-900 text-white px-5 text-justify lg:px-20 grid grid-cols-1 lg:grid-cols-4">
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1
              className="text-center text-3xl font-semibold pb-4 pt-4"
              variants={fadeInUp}
            >
              Copyright Registration
            </motion.h1>

            {[
              `As the importance of safeguarding creative content continues to grow, House of IP provides comprehensive advisory and dispute management services tailored for copyright protection. Our highly regarded team of copyright attorneys supports authors, musicians, filmmakers, software developers, and media companies in defending their original creations and addressing infringement issues.`,
              `We specialize in a full suite of copyright services, including registration, licensing, assignment, enforcement, and dispute resolution, spanning various industries. Understanding the complexities brought by technology and the surge in copyright violations, we have effectively assisted clients in safeguarding custom software, architectural designs, literary works, and multimedia content.`,
            ].map((text, index) => (
              <motion.p
                key={index}
                className="pb-8  text-sm"
                variants={fadeInUp}
              >
                {text}
              </motion.p>
            ))}

            <motion.h2
              className="text-lg font-medium  pb-5"
              variants={fadeInUp}
            >
              Comprehensive Copyright Solutions
            </motion.h2>

            <motion.p className="pb-8  text-sm" variants={fadeInUp}>
              Our dedicated copyright registration team ensures rapid and
              thorough protection for your work, covering text, images, sound,
              and video documentation. We excel in representing clients before
              courts, employing strategic oral arguments, compelling evidence,
              and counterclaims. Additionally, we advise on best practices for
              using third-party content, helping clients avoid copyright
              pitfalls.
            </motion.p>

            <motion.h2 className="text-lg font-medium pb-5" variants={fadeInUp}>
              Our Expertise Includes:
            </motion.h2>

            <motion.p className="pb-8 text-sm" variants={fadeInUp}>
              <strong>• Determining Copyright Eligibility:</strong> We assess if
              your work qualifies for copyright protection under applicable
              laws. <br />
              <strong>• Resolving Evidence–Focused Disputes:</strong> Tackling
              copyright disputes with jurisdiction–specific approaches. <br />
              <strong>• Guiding Safer Content Usage:</strong> Offering clear
              guidelines to ensure secure use of third-party content.
            </motion.p>

            <motion.p className="pb-8 text-sm" variants={fadeInUp}>
              Whether you are an artist or a business, we advise on licensing,
              assignments, and permitted usage of copyrighted works. Our team
              monitors both online and offline spaces for unauthorized use of
              movies, music, books, software, and more. If necessary, we pursue
              action, including filing civil and criminal complaints and
              coordinating with cybercrime units to swiftly seize infringing
              materials.
            </motion.p>

            <motion.h2 className="text-lg font-medium pb-5" variants={fadeInUp}>
              Expert Representation in Copyright Disputes
            </motion.h2>

            <motion.p className="pb-8  text-sm" variants={fadeInUp}>
              Our experienced copyright attorneys represent clients in cases
              involving ownership disputes, royalty claims, co–authorship
              conflicts, and adaptation rights. For high–value copyrighted
              content, such as music, software, or literary works, we offer
              valuation services, assisting producers, publishers, and tech
              companies in funding rounds and M&A transactions. Our technical
              experts assess code quality, vulnerability metrics, and
              architecture strength for reliable valuation.
            </motion.p>
          </motion.div>

          <div className="hidden lg:block lg:col-span-1 lg:px-10 pl-16">
            <h2 className="font-medium text-2xl pb-5 bg-slate-900 pl-4 pt-4 rounded-t-xl rounded-b-xl">
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
                className="block text-white font-montserrat pb-4 hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Trademark
              </NavLink>
            </nav>
          </div>
        </div>

        <h1 className="text-center text-3xl text-white pb-4 bg-slate-900">
          Copyright FAQ's
        </h1>
        <div className="space-y-4 px-2 pt-8 bg-slate-900 text-white lg:px-8">
          {/* FAQ Section */}
          <div className="flex-1">
            {/* Your FAQ Content */}
            <div className="flex flex-row">
              <img
                src="https://media.istockphoto.com/id/1180390158/photo/3d-rendering-of-hefty-stone-question-mark-standing-on-sounding-block-with-gavel-beside-on.jpg?s=612x612&w=0&k=20&c=Huhzii9Fk2_tYE5m_OxcA99wkGCJXueUXv870b-CLkM="
                alt=""
                className="h-96 hidden lg:block"
              />
              <div className="space-y-4 pr-2 pt-4 h-full w-full bg-slate-900 pb-10 pl-2 rounded-md lg:bg-slate-900 lg:px-10">
                {/* FAQ Item 1 */}
                <details className="group overflow-hidden ">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      What Copyrighted Works Do We Protect?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-gray-800 pb-5 rounded-b-xl max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      House of IP safeguards a wide range of creative content:
                    </p>
                    <ul className="mt-2 px-4 list-disc list-inside text-white text-sm">
                      <li>
                        <strong>Software:</strong> Handling ownership
                        complexities and infringement issues in custom software.
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
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      How to Register Your Copyright?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-gray-800 pb-5 rounded-b-xl max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 text-white text-sm">
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
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      What if Your Copyright is Infringed?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out bg-gray-800 rounded-b-xl pb-5 overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                      House of IP has a proven track record in copyright dispute
                      resolution. We represent clients in court, using
                      compelling oral arguments, robust evidence, and strategic
                      counterclaims to protect your rights. We also assist in
                      recovering damages for copyright infringement.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 4 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      Using Copyrighted Content
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out bg-gray-800 rounded-b-xl pb-5 overflow-hidden max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      We provide guidance on the use of third–party copyrighted
                      material through licenses, assignments, or fair–use
                      guidelines. Our lawyers ensure you can leverage content ly
                      and ethically while minimizing risks.
                    </p>
                  </div>
                </details>
                <details className="group overflow-hidden pb-10">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                      Protecting High-Value Copyrighted Works
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 bg-gray-800 rounded-b-xl pb-5  ease-in-out overflow-hidden max-h-0 group-open:max-h-96 text-sm">
                    <p className="mt-2 px-4 text-white">
                      For high–value content, including music, software, and
                      literary works, offers comprehensive valuation services.
                      Our team of and technical experts evaluates the commercial
                      value of your content during investment, funding rounds,
                      or mergers and acquisitions.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-row text-white">
            <div className="px-2 text-justify lg:w-3/4 lg:pl-10">
              <h1 className="text-xl text-center  font-montserrat font-semibold lg:text-2xl">
                Your Copyright Registration Process – Simplified
              </h1>
              <p className=" pt-5 text-sm">
                Copyright protects your original creations, from literary works
                to artistic expressions. Here’s a step–by–step guide to the
                registration process in India:
              </p>
              <h3 className="font-bold  pt-3">1. Determine Eligibility:</h3>
              <p className=" pt-2 text-sm">
                Not every work qualifies for copyright. Our initial consultation
                will help determine if your work, whether literary, musical,
                dramatic, artistic, or cinematographic, meets the originality
                criteria for protection.
              </p>
              <h3 className="font-bold  pt-3">2. Application Preparation:</h3>
              <p className=" pt-2 text-sm">
                Once eligibility is established, we’ll assist you in completing
                the required forms, providing all necessary details about your
                work (title, creator information, format) to ensure a flawless
                application.
              </p>
              <h3 className="font-bold  pt-3">3. Submission & Examination:</h3>
              <p className=" pt-2 text-sm">
                The application is then submitted to the Copyright Office, along
                with any required fees and a copy of your work. The office will
                review the submission for accuracy and completeness.
              </p>
              <h3 className="font-bold  pt-3">
                4. Registration & Certification:
              </h3>
              <p className=" pt-2 text-sm">
                If no objections arise, your copyright will be officially
                registered, and you’ll receive a certificate of registration,
                serving as prima facie evidence of ownership.
              </p>
              <h3 className="font-bold  pt-3">
                5. Post–Registration Protection:
              </h3>
              <p className=" pt-2 text-sm">
                While registration is a crucial step, it is only the beginning.
                We offer ongoing advice on protecting your rights, issuing
                cease-and-desist notices, or pursuing action in case of
                infringement.
              </p>
            </div>

            {/* Card Section */}
            <div className="flex flex-col justify-center space-y-4 items-center space-x-3 lg:flex-col">
              {/* Card 1 */}
              <NavLink to="/patent">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKc6eE_WPmaSRuSzcabfmXNHoIYn-GoGNAA&s"
                      alt="Patent"
                      className="h-44 w-72"
                    />
                  </figure>
                  <div className="card-body bg-slate-800 text-white">
                    <h2 className="card-title">Trademark</h2>
                  </div>
                </div>
              </NavLink>

              {/* Card 2 */}
              <NavLink to="/patent">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9Ngiq_F5HPP39UxsluGMvOiMx4-aZrO1vg&s"
                      alt="Copyright"
                      className="h-44 w-full"
                    />
                  </figure>
                  <div className="card-body bg-slate-900 text-white">
                    <h2 className="card-title">Patent</h2>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/design">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://www.bdslegalserv.com/assets/img/design_registration.jpg"
                      alt="Design"
                      className="h-44 w-72"
                    />
                  </figure>
                  <div className="card-body bg-slate-900 text-white">
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

export default Copyright;
