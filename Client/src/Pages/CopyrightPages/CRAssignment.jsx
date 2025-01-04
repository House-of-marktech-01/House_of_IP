import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import FileUploader from "../../Components/FileUploader";

const CRAssignment = () => {
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
            <li>Copyright Assignment</li>
          </ul>
        </div>
        <div className="lg:flex gap-5  p-3 bg-slate-900 text-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center h-full lg:sticky lg:top-20">
            <div className="sticky">
              <img
                src="https://media.licdn.com/dms/image/C4E12AQFtVpm-q_tQgg/article-cover_image-shrink_600_2000/0/1604215607381?e=2147483647&v=beta&t=MML4g7tg5BAie55Ika9VjJce0SRDduENyldDAF1PrS8"
                className="rounded-lg w-80"
                alt="Copyright"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4">
                Copyright Assignment
              </h2>

              <p className="prod_description text-sm  mt-2">
                A copyright assignment is a legal agreement that transfers the
                copyright of a work from the copyright owner to another party.
                The assignment can be for all or part of the copyright, and can
                be temporary or permanent.
              </p>
              <div className="container mx-auto p-4">
                <div className="flex flex-row space-y-4 justify-between">
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

          <FileUploader formLink="https://forms.gle/d7PsGBXWrFXBZPVq6"/>
        </div>

        <div className="flex flex-row justify-start space-x-10 bg-slate-900 text-white px-5 lg:px-20">
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
          <NavLink to="/copyright">
            <div className="card card-compact bg-base-100 w-72 shadow-xl">
              <figure>
                <img
                  src="https://blog.ipleaders.in/wp-content/uploads/2021/06/1_copyright-designs-and-patents-act-1988-1.jpg"
                  alt="Patent"
                  className="h-44 w-full"
                />
              </figure>
              <div className="card-body bg-slate-800 rounded-b-xl text-white">
                <h2 className="card-title">Copyright Registrations</h2>
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
              Copyright Assignment
            </motion.h1>

            {[
              `Copyright assignment refers to the transfer of the ownership of copyright from the original owner (assignor) to another party (assignee). Under Indian law, copyright assignment is governed by the Copyright Act, 1957 and the amendments made to it.`,
              <strong className="text-xl">
                Understanding Copyright in India
              </strong>,
              `Copyright provides exclusive rights to creators for their intellectual and creative works. These rights include reproduction, distribution, broadcasting, and translation of the work. Copyright can be assigned wholly or partially, depending on the agreement between the assignor and the assignee.`,
              <strong className="text-xl">
                Step-by-Step Process of Copyright Assignment
              </strong>,
              <ul className="list-disc list-inside text-sm space-y-6">
                <li>
                  <strong>Eligibility/Pre-conditions</strong>
                  <ul className="list-disc list-inside pl-5 space-y-3">
                    <li>
                      The work must be original, and copyright must subsist in
                      the work.
                    </li>
                    <li>
                      The assignor must hold the copyright or have the authority
                      to assign the rights.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Preparation of an Assignment Agreement</strong>
                  <ul className="list-disc list-inside pl-5 space-y-3">
                    <li>
                      Draft the Copyright Assignment Agreement specifying:
                    </li>
                    <ul className="list-disc list-inside pl-10 space-y-2">
                      <li>
                        The rights being assigned (e.g., right to reproduce,
                        right to distribute).
                      </li>
                      <li>The territorial extent of the assignment.</li>
                      <li>The duration of the assignment.</li>
                      <li>The consideration (payment) for the assignment.</li>
                    </ul>
                    <li>
                      Ensure the agreement complies with Section 18 and related
                      provisions of the Copyright Act, 1957.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Execution of the Agreement</strong>
                  <ul className="list-disc list-inside pl-5 space-y-3">
                    <li>
                      Both parties (assignor and assignee) must sign the
                      agreement in the presence of witnesses.
                    </li>
                    <li>
                      The agreement can include clauses for dispute resolution,
                      indemnity, and confidentiality.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Registration of the Assignment (Optional)</strong>
                  <ul className="list-disc list-inside pl-5 space-y-3">
                    <li>
                      Though copyright assignment does not require mandatory
                      registration, parties may choose to register the agreement
                      with the Copyright Office to avoid potential disputes.
                    </li>
                    <li>
                      Submit Form XIV along with the prescribed fee (₹500 for
                      each work).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Documentation Required</strong>
                  <ul className="list-disc list-inside pl-5 space-y-3">
                    <li>Assignment Agreement (duly executed).</li>
                    <li>
                      Proof of copyright ownership or authorization to assign.
                    </li>
                    <li>Identification documents of both parties.</li>
                    <li>
                      Details of the work (e.g., title, description, and
                      format).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Submission and Acknowledgment</strong>
                  <ul className="list-disc list-inside pl-5 space-y-3">
                    <li>
                      Once the agreement is executed, provide a copy to both
                      parties.
                    </li>
                    <li>
                      Registration (if opted) will be acknowledged by the
                      Copyright Office.
                    </li>
                  </ul>
                </li>
              </ul>,
            ].map((text, index) => (
              <motion.p
                key={index}
                className="pb-8 text-sm"
                variants={fadeInUp}
              >
                {text}
              </motion.p>
            ))}
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
                    Can copyright assignment be revoked?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-gray-800 pb-5 rounded-b-xl max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                    Yes, under Section 19 of the Copyright Act, if the assignee fails to exercise rights within a
                    year of assignment or breaches the agreement, it can be revoked.
                    </p>
                  </div>
                </details>

                {/* Add the other FAQ items here */}
                {/* FAQ Item 2 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                    Does copyright assignment cover future works?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out overflow-hidden bg-gray-800 pb-5 rounded-b-xl max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                    <p className="mt-2 text-white text-sm">
                    No, assignment for future works is invalid unless specifically mentioned in the agreement.
                    </p>
                  </div>
                </details>

                {/* FAQ Item 3 */}
                <details className="group overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-800 rounded-t-lg transition">
                    <span className="font-medium text-white">
                    What happens if no duration is specified in the assignment?
                    </span>
                    <span className="transition-transform group-open:rotate-180">
                      &#9660;
                    </span>
                  </summary>
                  <div className="transition-all duration-300 ease-in-out bg-gray-800 rounded-b-xl pb-5 overflow-hidden max-h-0 group-open:max-h-96">
                    <p className="mt-2 px-4 text-white text-sm">
                    The duration is considered five years by default, as per Section 19.
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

        </div>
      </div>
    </>
  );
};

export default CRAssignment;
