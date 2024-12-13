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
        <div className="flex gap-5 border rounded-lg p-3 bg-white">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center">
            <div className="sticky">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKc6eE_WPmaSRuSzcabfmXNHoIYn-GoGNAA&s"
                className="rounded-lg w-80"
                alt="Trademark Rectification"
              />
            </div>
          </div>
          <div className="flex flex-col w-2/3">
            <div className="align-middle">
              <h2 className="text-base font-black mb-2 lg:mb-4">Trademark</h2>

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
                <div className="flex -space-x-2 lg:justify-end">
                  <div className="flex">
                    <a href="/">
                      <h2 className="text-gray-600 font-medium text-sm">
                        Refer a Friend
                      </h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-3/10 justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

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
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
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
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
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
