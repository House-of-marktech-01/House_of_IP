import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Design = () => {
  return (
    <>
      <div className="w-full" style={{ position: "relative" }}>
        <div className="relative w-full h-[200px] sm:h-[315px] overflow-hidden">
          <img
            src="https://www.jsalaw.com/wp-content/uploads/2022/07/Contact-Us-1200x315.jpg"
            alt="Design"
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="font-montserrat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl font-light text-center">
            Design
          </div>
        </div>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-3 sm:pt-5">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Design</li>
          </ul>
        </div>
        <div className="pt-8 px-4 sm:pt-16 sm:pl-16 bg-white pb-8">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-normal tracking-normal text-yellow-400">
            Design
            <span className="block h-px w-24 sm:w-40 bg-[#8c6f46] mt-1"></span>
          </h3>

          {/* Paragraphs */}
          <p className="pt-4 sm:pt-8 text-black font-montserrat text-sm sm:text-base text-justify sm:pr-20">
            At JustiSphereX Legal, we offer comprehensive design registration
            services to help protect the visual aspects of your product. A
            registered design under the Designs Act, 2000 safeguards the unique
            shape, pattern, configuration, or ornamentation of your product,
            ensuring that others cannot replicate its appearance without
            permission. Whether you are a designer, manufacturer, or business
            owner, securing your product’s design is a crucial step in
            protecting your creative efforts.
          </p>

          <p className="pt-4 sm:pt-8 text-black font-montserrat text-sm sm:text-base text-justify sm:pr-20">
            Our team has extensive experience across a variety of industries,
            assisting clients in registering their designs and enforcing their
            rights in case of infringement. We make the process seamless, from
            filing to protection, ensuring that your design rights are fully
            secured.
          </p>
        </div>
        {/* faq section */}
        <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 gap-8">
          {/* Left Side Image */}

          <div className="w-full md:w-1/2">
            <motion.img
              src="https://media.istockphoto.com/id/1150783053/photo/gavel-with-question-mark-on-chalkboard-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=efEMnNLKYvzEkGiFMU6a4-oCLgrLmiCPQE0HVRDbBxA="
              alt="Trademark Illustration"
              className="rounded-lg w-full object-cover"
              // Animation Props
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Right Side FAQ Section */}
          <div className="w-full md:w-1/2">
            {/* Title */}
            <h2 className="text-3xl font-bold text-yellow-500">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mt-2 mb-6">
              Let us answer your doubts here
            </p>

            {/* FAQ Section */}
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-yellow-100 rounded-lg transition">
                  <span className="font-medium text-yellow-700">
                    What types of designs can be registered with JustiSphereX
                    Legal?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-gray-700">
                    We assist with registering a wide range of product designs,
                    including but not limited to:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-gray-700">
                    <li>
                      Product shapes and configurations (e.g., furniture,
                      gadgets)
                    </li>
                    <li>Surface patterns (e.g., textiles, wallpaper)</li>
                    <li>
                      Ornamentation (e.g., decorative elements on products)
                    </li>
                  </ul>
                  <p className="mt-2 px-4 text-gray-700">
                    Our expertise spans multiple industries, allowing us to
                    provide tailored solutions for your specific design
                    protection needs.
                  </p>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-yellow-100 rounded-lg transition">
                  <span className="font-medium text-yellow-700">
                    What is the process of registering a design with
                    JustiSphereX Legal?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                  <p className="mt-2 px-4 text-black">
                    Our design registration process is straightforward and
                    includes:
                  </p>
                  <ol>
                    <li className="pt-4">
                      <strong>1. Consultation and Design Assessment: </strong>
                      We start by understanding your product and its design
                      elements to ensure eligibility under the Designs Act,
                      2000.
                    </li>
                    <li className="pt-4">
                      <strong>2. Design Search:</strong> We conduct a search to
                      ensure that your design is unique and not already
                      registered by another entity.
                    </li>
                    <li className="pt-4">
                      <strong>3. Application Drafting:</strong> Our team
                      prepares and files the design application with the Indian
                      Patent Office, ensuring that all necessary documents are
                      in order.
                    </li>
                    <li className="pt-4">
                      <strong>4. Filing and Registration: </strong> We manage
                      the entire filing process, from submitting your
                      application to addressing any queries raised by the Design
                      Office until your design is successfully registered.
                    </li>
                    <li className="pt-4">
                      <strong>5. Post–Registration Support: </strong>Once your
                      design is registered, we provide support to help you
                      enforce your rights in case of infringement and assist
                      with renewals to keep your design protected.
                    </li>
                  </ol>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-yellow-100 rounded-lg transition">
                  <span className="font-medium text-yellow-700">
                    Prices & FeesWhat happens if someone copies my registered
                    design?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black">
                    At JustiSphereX Legal, we help you take swift legal action
                    if your registered design is copied. Our team assists in
                    filing design infringement cases, preparing legal documents,
                    and representing you in court to ensure your design rights
                    are upheld.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-yellow-100 rounded-lg transition">
                  <span className="font-medium text-yellow-700">
                    How can I monetize my registered design?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-gray-700">
                    Registering your design not only protects it but also allows
                    you to explore commercialization opportunities. Our experts
                    at JustiSphereX Legal help you:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-gray-700">
                    <li>
                      License your design to other manufacturers or businesses.
                    </li>
                    <li>Negotiate design rights transfer agreements.</li>
                    <li>
                      Maximize the commercial value of your design through
                      strategic partnerships.
                    </li>
                  </ul>
                </div>
              </details>
              {/* FAQ item 5 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-yellow-100 rounded-lg transition">
                  <span className="font-medium text-yellow-700">
                    How do I know if JustiSphereX Legal is the right firm for
                    design protection?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-gray-700">
                    With a proven track record in IP law and extensive
                    experience in design protection, JustiSphereXLegal is a
                    trusted partner for securing your product’s design. Our
                    dedicated team of experts provides personalized guidance
                    through every step of the design registration process,
                    ensuring that your creative work is safeguarded and
                    leveraged for its full potential.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
        {/* extrainfo section */}
        <div className="bg-white w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <h1 className="text-2xl md:text-4xl text-yellow-400 mb-4 font-montserrat font-thin">
            Registering a Design in India – A Simplified Process
          </h1>
          <p className="text-gray-600 text-sm md:text-base font-montserrat">
            Securing the visual identity of your product through design
            registration is a valuable investment. Here’s a simplified breakdown
            of the process:
          </p>

          {/* Steps Section */}
          <div className="mt-8 space-y-6">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-4 px-10">
              <div className="flex-shrink-0 text-lg font-bold text-gray-800 font-montserrat pr-6 text-justify">
                1. Consultation & Design Search
              </div>
              <div className="text-gray-600 text-sm md:text-base font-montserrat text-justify">
                Before applying, it’s essential to determine if your design
                qualifies for protection under the Designs Act, 2000. We’ll
                assess your design and conduct a search to ensure that it hasn’t
                already been registered by someone else.
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-4 pt-5 px-10">
              <div className="flex-shrink-0 text-lg font-bold text-gray-800 font-montserrat">
                2. Drafting the Design Application
              </div>
              <div className="text-gray-600 text-sm md:text-base font-montserrat text-justify">
                Once your design passes the eligibility check, we’ll prepare and
                file the application with the Indian Patent Office. This
                includes submitting illustrations and a detailed description of
                your design.
              </div>
            </div>
            {/* step3 */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-4 pt-5 px-10">
              <div className="flex-shrink-0 text-lg font-bold text-gray-800 font-montserrat pr-24">
                3. Filing the Application
              </div>
              <div className="text-gray-600 text-sm md:text-base font-montserrat text-justify">
                After drafting, we submit the design application on your behalf,
                making sure all required documents and fees are in order.
              </div>
            </div>
            {/* step 4 */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-4 pt-5 text-justify px-10">
              <div className="flex-shrink-0 text-lg font-bold text-gray-800 font-montserrat pr-10">
                4. Examination & Registration
              </div>
              <div className="text-gray-600 text-sm md:text-base font-montserrat text-justify">
                The Design Office will review your application. If they have any
                objections, we’ll respond on your behalf, ensuring that your
                design gets registered smoothly.
              </div>
            </div>
            {/* step 5 */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-4 pt-5 text-justify px-10">
              <div className="flex-shrink-0 text-lg font-bold text-gray-800 font-montserrat">
                5. Post–Registration Management
              </div>
              <div className="text-gray-600 text-sm md:text-base font-montserrat text-justify">
                Once registered, your design is protected for 10 years, with the
                option to renew for an additional 5 years. We assist with
                managing renewals and handling any infringement issues that may
                arise.
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
