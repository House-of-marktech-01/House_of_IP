import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";

const Trademark = () => {
  const [token, setToken] = useState(Cookies.get("jwtToken"));
  return (
    <>
      <div id="trademark" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-20 lg:pt-20">
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
        <div className="lg:flex gap-5 border p-3 bg-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center">
            <div className="sticky">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKc6eE_WPmaSRuSzcabfmXNHoIYn-GoGNAA&s"
                className="rounded-lg w-80"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 text-gray-800">
                Trademark
              </h2>

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
                <div className="flex -space-x-2 pl-5 lg:justify-end">
                  <div className="flex">
                    <RWebShare
                      data={{
                        url: "http://localhost:5173/trademark",
                        title: "Trademark",
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
            <button className="btn btn-active bg-slate-900 my-auto ml-5">Make a Payment</button>
          ) : (
            <div className="hidden sm:flex flex-col w-2/10 justify-center items-center bg-gray-100">
              <div className="bg-white p-8 rounded-lg ">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                  Login
                </h2>
                <form>
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
          )}
        </div>

        <div className="bg-white px-5 text-justify lg:px-20">
          <h1 className="text-center text-3xl text-black pb-4 pt-4">
            Trademark
          </h1>
          <p className="pb-8 text-gray-800 text-sm">
            At JustiSphereX Legal, our dedicated team of trademark attorneys
            offers more than just legal protection. We deliver comprehensive
            business value by integrating industry insights, brand strategy, and
            global trademark registration services. Our approach begins with a
            deep understanding of your brand’s goals and conducting extensive
            trademark availability searches to ensure success.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            We provide clear guidance on the feasibility of trademark
            registration across multiple regions while offering strategic advice
            to avoid potential conflicts. Our expertise also extends to securing
            domain names, hashtags, taglines, and social media handles, ensuring
            a seamless digital presence that aligns with your brand’s identity.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            When it comes to filing, our in-depth knowledge of trademark
            classifications ensures optimal protection. Our experience in
            representing clients in disputes such as oppositions, cancellations,
            and rectifications allows us to defend your trademarks effectively
            with evidence-based arguments and expert responses to examination
            queries.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            For trademark enforcement, we monitor both physical and online
            markets to detect potential infringement. We act swiftly by issuing
            cease-and-desist and take-down notices, and in cases where
            violations persist, we collaborate with authorities to confiscate
            counterfeit or infringing products.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
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
        <div className="bg-white px-5 text-justify flex lg:px-20">
          <div>
            <h1 className="text-start text-2xl text-black pb-4">
              Documents Required
            </h1>
            <h1 className="text-start text-xl text-black pb-4">Doc 1 name</h1>
            <p className="pb-8 text-gray-800 text-sm">
              Doc 1 info Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Harum fugit iure veniam? Sint quasi labore pariatur,
              molestias odit vitae aspernatur fuga repudiandae nulla autem nihil
              dolore suscipit expedita placeat facere quod excepturi animi
              atque.
            </p>
            <h1 className="text-start text-xl text-black pb-4">Doc 2 name</h1>
            <p className="pb-8 text-gray-800 text-sm">
              doc 2 info Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Amet nam dicta aut excepturi rerum ut quos fugiat quas
              magnam. Assumenda minus aliquid placeat vero odio velit veniam
              officiis sit eius!
            </p>
            <h1 className="text-start text-xl text-black pb-4">Doc 3 name</h1>
            <p className="pb-8 text-gray-800 text-sm">
              Doc 3 info Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Exercitationem perspiciatis reiciendis quae provident, sit
              atque nam culpa minus doloribus praesentium ex voluptatum.
              Deserunt ipsa excepturi voluptas porro?
            </p>
          </div>

          <div className="hidden lg:block lg:w-1/2 p-10 pl-16">
            <h2 className="text-black font-normal pb-5">Related Links</h2>
            <nav className="space-y-4 sticky top-24">
              <a
                href="/patent"
                className="block text-gray-700 font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Patent
              </a>
              <a
                href="/design"
                className="block text-gray-700 font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Design
              </a>
              <a
                href="/copyright"
                className="block text-gray-700 font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Copyright
              </a>
              <a
                href="#trademark"
                className="block text-gray-700 font-montserrat hover:text-blue-800 hover:underline text-lg font-medium"
              >
                Trademark
              </a>
            </nav>
          </div>
        </div>

        <h1 className="text-center text-3xl text-black pb-4 bg-white">
          Trademark FAQ's
        </h1>
        <div className="space-y-4 px-2 pt-8 bg-white lg:px-10">
          {/* FAQ Section */}
          <div className="flex-1">
            {/* Your FAQ Content */}
            <div className="space-y-4 pr-2 pt-4 h-full bg-slate-200 pb-10 pl-2 rounded-md lg:bg-white lg:px-10">
              {/* FAQ Item 1 */}
              <details className="group overflow-hidden ">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    Why Choose JustiSphereX Legal for Trademark Registration?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    At JustiSphereX Legal, we go beyond legal protection by
                    offering a full-service solution that includes:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black text-sm">
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
                  <p className="mt-2 px-4 text-black text-sm">
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
                  <p className="mt-2 px-4 text-black text-sm">
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
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96 text-sm">
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

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify lg:w-3/4">
              <h1 className="text-xl text-center text-black font-montserrat font-semibold lg:text-2xl">
                Trademark Filing and Protection
              </h1>
              <p className="text-gray-800 pt-5 text-sm">
                Your brand represents your reputation and the trust of your
                customers. Here’s a streamlined process for registering a
                trademark in India:
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                1. Trademark Search & Selection
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                A unique and registrable trademark is the cornerstone of a solid
                brand strategy. We conduct thorough searches to ensure your
                chosen mark is not already in use, avoiding potential conflicts
                for a smoother registration process.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                2.Application Preparation & Filing
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Once a suitable trademark is identified, we draft a detailed
                application for the Indian Trademark registry, defining the
                class of goods or services your mark will cover. We also guide
                you in selecting the most appropriate representation—be it a
                logo, wordmark, or a combination of both.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                3. Examination & Response
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                The IPO will review your application, and we handle all
                communications on your behalf. Should any objections arise, we
                provide clear, legally sound responses to support your
                trademark’s registrability, backed by additional documentation
                and clarifications as needed.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                4. Registration & Publication
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                After a successful examination, your trademark will be published
                in the Trademark Journal, allowing third parties to raise any
                objections within a specified period. If no objections are
                raised, your trademark will proceed to official registration.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                5. Post-Registration Management
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Congratulations! Your brand identity is now legally protected.
                JustiSphereX Legal will continue to support you by advising on
                renewal strategies, managing infringement disputes, and
                maintaining your trademark throughout its validity period.
              </p>
            </div>

            {/* Card Section */}
            <div className="flex flex-col justify-center space-y-4 items-center space-x-3 lg:flex-col">
              {/* Card 1 */}
              <a href="/patent">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://thelawcodes.com/wp-content/uploads/2023/10/What-is-Patent-Basics-Overview.webp"
                      alt="Patent"
                      className="h-44 w-52"
                    />
                  </figure>
                  <div className="card-body bg-white text-black">
                    <h2 className="card-title">Patent</h2>
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
                      className="h-44"
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

export default Trademark;
