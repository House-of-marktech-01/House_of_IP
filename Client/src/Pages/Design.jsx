import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

const Design = () => {
  const [token, setToken] = useState(Cookies.get("jwtToken"));
  return (
    <>
      <div id="design" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-20 lg:pt-20">
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
        <div className="lg:flex gap-5 border p-3 bg-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center">
            <div className="sticky">
              <img
                src="https://img.indiafilings.com/catalog/design-registration.png"
                className="rounded-lg w-56"
                alt="Trademark Rectification"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 lg:mb-4 text-gray-800">
                Design
              </h2>

              <p className="prod_description text-sm text-gray-700 mt-2">
                Design registration offers a shield for your unique design,
                classifying it as intellectual property and ensuring it's safe
                from imitation. It grants the creator exclusive rights to use
                the design for a decade, possibly extending it for an additional
                five years.
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
            <button className="btn btn-active bg-slate-900 my-auto ml-5">
              Make a Payment
            </button>
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
          <h1 className="text-center text-3xl text-black pb-4 pt-4">Design</h1>
          <p className="pb-8 text-gray-800 text-sm">
            At JustiSphereX Legal, we offer comprehensive design registration
            services to help protect the visual aspects of your product. A
            registered design under the Designs Act, 2000 safeguards the unique
            shape, pattern, configuration, or ornamentation of your product,
            ensuring that others cannot replicate its appearance without
            permission. Whether you are a designer, manufacturer, or business
            owner, securing your product’s design is a crucial step in
            protecting your creative efforts.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            Our team has extensive experience across a variety of industries,
            assisting clients in registering their designs and enforcing their
            rights in case of infringement. We make the process seamless, from
            filing to protection, ensuring that your design rights are fully
            secured.
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
            <h2 className="text-black font-normal pb-5">Practice Areas</h2>
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
          Design FAQ's
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
                    What types of designs can be registered with JustiSphereX
                    Legal?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    We assist with registering a wide range of product designs,
                    including but not limited to:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black text-sm">
                    <li>
                      <strong>Product shapes and configurations</strong> (e.g.,
                      furniture, gadgets)
                    </li>
                    <li>
                      <strong>Surface patterns</strong> (e.g., textiles,
                      wallpaper)
                    </li>
                    <li>
                      <strong>Ornamentation</strong> (e.g., decorative elements
                      on products)
                    </li>
                  </ul>
                  <p className="mt-2 px-4 text-black text-sm">
                    Our expertise spans multiple industries, allowing us to
                    provide tailored solutions for your specific design
                    protection needs.
                  </p>
                </div>
              </details>

              {/* Add the other FAQ items here */}
              {/* FAQ Item 2 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    What is the process of registering a design with
                    JustiSphereX Legal?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                  <p className="mt-2 px-4 text-black text-sm">
                    Our design registration process is straightforward and
                    includes:
                  </p>
                  <p className="mt-2 px-4 text-black text-sm">
                    <strong>1. Consultation and Design Assessment:</strong> We
                    start by understanding your product and its design elements
                    to ensure eligibility under the Designs Act, 2000.
                  </p>
                  <p className="mt-2 px-4 text-black text-sm">
                    <strong>2. Design Search:</strong> We conduct a search to
                    ensure that your design is unique and not already registered
                    by another entity.
                  </p>
                  <p className="mt-2 px-4 text-black text-sm">
                    <strong>3. Application Drafting:</strong> Our team prepares
                    and files the design application with the Indian Patent
                    Office, ensuring that all necessary documents are in order.
                  </p>
                  <p className="mt-2 px-4 text-black text-sm">
                    <strong>4. Filing and Registration:</strong> We manage the
                    entire filing process, from submitting your application to
                    addressing any queries raised by the Design Office until
                    your design is successfully registered.
                  </p>
                  <p className="mt-2 px-4 text-black text-sm">
                    <strong>5. Post–Registration Support:</strong> Once your
                    design is registered, we provide support to help you enforce
                    your rights in case of infringement and assist with renewals
                    to keep your design protected.
                  </p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    Prices & FeesWhat happens if someone copies my registered
                    design?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    At JustiSphereX Legal, we help you take swift legal action
                    if your registered design is copied. Our team assists in
                    filing design infringement cases, preparing legal documents,
                    and representing you in court to ensure your design rights
                    are upheld.
                  </p>
                </div>
              </details>

              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    How can I monetize my registered design?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96 text-sm">
                  <p className="mt-2 px-4 text-black">
                    Registering your design not only protects it but also allows
                    you to explore commercialization opportunities. Our experts
                    at JustiSphereX Legal help you:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black">
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

              {/* FAQ Item 4 */}
              <details className="group overflow-hidden pb-10">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    How do I know if JustiSphereX Legal is the right firm for
                    design protection?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96 text-sm">
                  <p className="mt-2 px-4 text-black">
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

          <div className="lg:flex flex-row lg:px-10">
            <div className="px-2 text-justify lg:w-3/4">
              <h1 className="text-xl text-center text-black font-montserrat font-semibold lg:text-2xl">
                Registering a Design in India – A Simplified Process
              </h1>
              <p className="text-gray-800 pt-5 text-sm">
                Securing the visual identity of your product through design
                registration is a valuable investment. Here’s a simplified
                breakdown of the process:
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                1. Consultation & Design Search
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Before applying, it’s essential to determine if your design
                qualifies for protection under the Designs Act, 2000. We’ll
                assess your design and conduct a search to ensure that it hasn’t
                already been registered by someone else.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                2.Drafting the Design Application
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Once your design passes the eligibility check, we’ll prepare and
                file the application with the Indian Patent Office. This
                includes submitting illustrations and a detailed description of
                your design.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                3. Filing the Application
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                After drafting, we submit the design application on your behalf,
                making sure all required documents and fees are in order.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                4. Examination & Registration
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                The Design Office will review your application. If they have any
                objections, we’ll respond on your behalf, ensuring that your
                design gets registered smoothly.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                5. Post–Registration Management
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Once registered, your design is protected for 10 years, with the
                option to renew for an additional 5 years. We assist with
                managing renewals and handling any infringement issues that may
                arise.
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
              <a href="/trademark">
                <div className="card card-compact bg-base-100 w-72 shadow-xl">
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKc6eE_WPmaSRuSzcabfmXNHoIYn-GoGNAA&s"
                      alt="Design"
                      className="h-44"
                    />
                  </figure>
                  <div className="card-body bg-white text-black">
                    <h2 className="card-title">Trademark</h2>
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

export default Design;
