import React from "react";
import { NavLink } from "react-router-dom";

const Trademark = () => {
  return (
    <>
      <div className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-3 sm:pt-5 lg:pt-20">
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
        <div className="bg-white px-14 text-justify">
          <h1 className="text-center text-3xl text-black pb-4">Trademark</h1>
          <p className="pb-8 text-gray-800">
            At JustiSphereX Legal, our dedicated team of trademark attorneys
            offers more than just legal protection. We deliver comprehensive
            business value by integrating industry insights, brand strategy, and
            global trademark registration services. Our approach begins with a
            deep understanding of your brand’s goals and conducting extensive
            trademark availability searches to ensure success.
          </p>
          <p className="pb-8 text-gray-800">
            We provide clear guidance on the feasibility of trademark
            registration across multiple regions while offering strategic advice
            to avoid potential conflicts. Our expertise also extends to securing
            domain names, hashtags, taglines, and social media handles, ensuring
            a seamless digital presence that aligns with your brand’s identity.
          </p>
          <p className="pb-8 text-gray-800">
            When it comes to filing, our in-depth knowledge of trademark
            classifications ensures optimal protection. Our experience in
            representing clients in disputes such as oppositions, cancellations,
            and rectifications allows us to defend your trademarks effectively
            with evidence-based arguments and expert responses to examination
            queries.
          </p>
          <p className="pb-8 text-gray-800">
            For trademark enforcement, we monitor both physical and online
            markets to detect potential infringement. We act swiftly by issuing
            cease-and-desist and take-down notices, and in cases where
            violations persist, we collaborate with authorities to confiscate
            counterfeit or infringing products.
          </p>
          <p className="pb-8 text-gray-800">
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
        <h1 className="text-center text-3xl text-black pb-4 bg-white">
          Trademark FAQ's
        </h1>
        <div className="flex flex-wrap space-y-4 px-14 pt-8 bg-white">
          {/* FAQ Section */}
          <div className="flex-1">
            {/* Your FAQ Content */}
            <div className="space-y-4 pr-10 pt-4 h-full bg-slate-200 pb-10 pl-2 rounded-md">
              {/* FAQ Item 1 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    Why Choose JustiSphereX Legal for Trademark Registration?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black">
                    At JustiSphereX Legal, we go beyond legal protection by
                    offering a full-service solution that includes:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black">
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
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
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
              <details className="group overflow-hidden pb-10">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    Support Beyond Registration
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
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

          {/* Card Section */}
          <div className="flex flex-col space-y-4 items-center">
            {/* Card 1 */}
            <NavLink to="/patent">
              <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                    src="https://blog.ipleaders.in/wp-content/uploads/2021/06/patent-law-book-gavel-1.jpg"
                    alt="Patent"
                  />
                </figure>
                <div className="card-body bg-white text-black">
                  <h2 className="card-title">Patent</h2>
                </div>
              </div>
            </NavLink>

            {/* Card 2 */}
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trademark;
