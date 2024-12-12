import React from "react";
import { NavLink } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import { motion } from "framer-motion";

const Copyright = () => {
  return (
    <>
      <div className="w-full" style={{ position: "relative" }}>
        <div className="relative w-full h-[200px] sm:h-[315px] overflow-hidden">
          <img
            src="https://www.jsalaw.com/wp-content/uploads/2022/07/Contact-Us-1200x315.jpg"
            alt="Copyright"
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="font-montserrat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl font-light text-center">
            Copyright
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
            <li>Copyright</li>
          </ul>
        </div>
        {/* copyright starting content  */}
        <div className="pt-8 px-4 sm:pt-16 sm:pl-16 bg-white pb-8">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-normal tracking-normal text-yellow-400">
            Trademarks
            <span className="block h-px w-24 sm:w-40 bg-[#8c6f46] mt-1"></span>
          </h3>

          {/* Paragraphs */}
          <p className="pt-4 sm:pt-8 text-black font-montserrat text-sm sm:text-base text-justify sm:pr-20">
            At JustiSphereX Legal, our dedicated team of trademark attorneys
            offers more than just legal protection. We deliver comprehensive
            business value by integrating industry insights, brand strategy, and
            global trademark registration services. Our approach begins with a
            deep understanding of your brand’s goals and conducting extensive
            trademark availability searches to ensure success.
          </p>

          <p className="pt-4 sm:pt-8 text-black font-montserrat text-sm sm:text-base text-justify sm:pr-20">
            We provide clear guidance on the feasibility of trademark
            registration across multiple regions while offering strategic advice
            to avoid potential conflicts. Our expertise also extends to securing
            domain names, hashtags, taglines, and social media handles, ensuring
            a seamless digital presence that aligns with your brand’s identity.
          </p>

          <p className="pt-4 sm:pt-8 text-black font-montserrat text-sm sm:text-base text-justify sm:pr-20">
            When it comes to filing, our in-depth knowledge of trademark
            classifications ensures optimal protection. Our experience in
            representing clients in disputes such as oppositions, cancellations,
            and rectifications allows us to defend your trademarks effectively
            with evidence-based arguments and expert responses to examination
            queries.
          </p>

          <p className="pt-4 sm:pt-8 text-black font-montserrat text-sm sm:text-base text-justify sm:pr-20">
            For trademark enforcement, we monitor both physical and online
            markets to detect potential infringement. We act swiftly by issuing
            cease-and-desist and take-down notices, and in cases where
            violations persist, we collaborate with authorities to confiscate
            counterfeit or infringing products.
          </p>

          <p className="pt-4 sm:pt-8 text-black font-montserrat text-sm sm:text-base text-justify sm:pr-20">
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
                    Why Choose JustiSphereX Legal for Trademark Registration?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-gray-700">
                    At JustiSphereX Legal, we go beyond legal protection by
                    offering a full-service solution that includes:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-gray-700">
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

              {/* FAQ Item 2 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-yellow-100 rounded-lg transition">
                  <span className="font-medium text-yellow-700">
                    How Do We Ensure Successful Trademark Registration?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black">
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
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-yellow-100 rounded-lg transition">
                  <span className="font-medium text-yellow-700">
                    What Are Our Success Rates for Trademark Approvals?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black">
                    With a meticulous process that includes well-prepared
                    applications, comprehensive examination responses, and
                    evidence-backed arguments, we consistently achieve high
                    approval rates for our clients.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-yellow-100 rounded-lg transition">
                  <span className="font-medium text-yellow-700">
                    Support Beyond Registration
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-gray-700">
                    Our 360-degree service doesn’t stop at registration. We also
                    manage renewals, recordals, and continuous monitoring to
                    safeguard your trademark. Additionally, we offer:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-gray-700">
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
        </div>
        {/* extrainfo section */}
        <div className="bg-white w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <h1 className="text-2xl md:text-4xl text-yellow-400 mb-4 font-montserrat font-thin">
            Trademarks Filing And Protection
          </h1>
          <p className="text-gray-600 text-sm md:text-base font-montserrat">
            Your brand is more than just a name; it's the embodiment of your
            reputation and customer trust. Here's a simplified breakdown of the
            process for registering a trademark in India:
          </p>

          {/* Steps Section */}
          <div className="mt-8 space-y-6">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-4 px-10">
              <div className="flex-shrink-0 text-lg font-bold text-gray-800 font-montserrat pr-6 text-justify">
                1. Trademark Search & Selection
              </div>
              <div className="text-gray-600 text-sm md:text-base font-montserrat text-justify">
                The foundation of a strong trademark strategy lies in choosing a
                unique and registrable mark. We’ll conduct a thorough search to
                ensure your chosen name isn’t already in use by another business
                in your industry. This helps avoid potential conflicts and paves
                the way for a smooth registration process.
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-4 pt-5 px-10">
              <div className="flex-shrink-0 text-lg font-bold text-gray-800 font-montserrat">
                2. Application Preparation & Filing
              </div>
              <div className="text-gray-600 text-sm md:text-base font-montserrat text-justify">
                Once we’ve identified a suitable trademark, we’ll draft a
                comprehensive application for the Indian Trademark Office (IPO).
                This involves defining the specific class of goods or services
                your trademark will be associated with. We’ll also guide you on
                choosing the most appropriate representation, whether it’s a
                logo, wordmark, or a combination.
              </div>
            </div>
            {/* step3 */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-4 pt-5 px-10">
              <div className="flex-shrink-0 text-lg font-bold text-gray-800 font-montserrat pr-16">
                3. Examination & Response
              </div>
              <div className="text-gray-600 text-sm md:text-base font-montserrat text-justify">
                The IPO will review your application, and we handle all
                communications on your behalf. Should any objections arise, we
                provide clear, legally sound responses to support your
                trademark’s registrability, backed by additional documentation
                and clarifications as needed.
              </div>
            </div>
            {/* step 4 */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-4 pt-5 text-justify px-10">
              <div className="flex-shrink-0 text-lg font-bold text-gray-800 font-montserrat pr-12">
                4. Registration & Publication
              </div>
              <div className="text-gray-600 text-sm md:text-base font-montserrat text-justify">
                After a successful examination, your trademark will be published
                in the Trademark Journal, allowing third parties to raise any
                objections within a specified period. If no objections are
                raised, your trademark will proceed to official registration.
              </div>
            </div>
            {/* step 5 */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-4 pt-5 text-justify px-10">
              <div className="flex-shrink-0 text-lg font-bold text-gray-800 font-montserrat">
                5. Post-Registration Management
              </div>
              <div className="text-gray-600 text-sm md:text-base font-montserrat text-justify">
                Congratulations! Your brand identity is now legally protected.
                JustiSphereX Legal will continue to support you by advising on
                renewal strategies, managing infringement disputes, and
                maintaining your trademark throughout its validity period.
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Copyright;
