import React from "react";
import { NavLink } from "react-router-dom";
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";

const Patent = () => {
  const token = Cookies.get("jwtToken");
  return (
    <>
      <div id="patent" className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs sm:text-sm pl-4 sm:pl-6 bg-white text-black pt-20 lg:pt-20">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/practice">Practice Areas</NavLink>
            </li>
            <li>Patent</li>
          </ul>
        </div>
        <div className="lg:flex gap-5 border p-3 bg-white lg:px-20">
          <div className="relative w-7/10 shrink-0 flex justify-center items-center">
            <div className="sticky">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9Ngiq_F5HPP39UxsluGMvOiMx4-aZrO1vg&s"
                className="rounded-lg w-80"
                alt="Patent"
              />
            </div>
          </div>

          <div className="flex flex-col lg:w-2/3">
            <div className="my-auto w-full pt-10 px-5 sm:w-full">
              <h2 className="text-base font-black mb-2 text-gray-700 lg:mb-4">
                Patent
              </h2>

              <p className="prod_description text-sm text-gray-700 mt-2">
                Patents are pivotal in protecting the intellectual property
                rights of fresh innovations, be they products, services, or
                processes. In India, to ensure these rights are recognized and
                upheld, one must adhere to the Indian Patent Act of 1970 for
                patent registration.
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
            <button className="btn btn-active bg-slate-900 my-auto ml-5">
              Make a Payment
            </button>
          ) : (
            <div className="hidden sm:flex flex-col w-2/10 justify-center items-center bg-gray-100">
              <div className="bg-white p-8 rounded-lg">
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
                    className="w-full py-2 bg-slate-900 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white px-5 text-justify lg:px-20">
          <h1 className="text-center text-3xl text-black pb-4 pt-4">Patents</h1>
          <p className="pb-8 text-gray-800 text-sm">
            As a premier Intellectual Property (IP) law firm, JustiSphereX Legal
            offers comprehensive patent filing and protection services tailored
            for companies and inventors across a wide array of industries. Our
            highly skilled team, comprising multi–domain experts, including
            patent agents, engineers, and researchers, ensures top–tier patent
            drafting, prosecution, and litigation support.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            Our patent drafting services are meticulously crafted to suit the
            uniqueness of each invention. This process involves conducting
            exhaustive prior art and landscape searches, followed by in–depth
            consultations with the inventor. We specialize in drafting both
            provisional and complete specifications for submission to the Indian
            Patent Office, as well as global filings through the Patent
            Cooperation Treaty (PCT) or direct routes. Our expertise spans
            multiple jurisdictions, including the Indian Patent Office, USPTO,
            and EPO, enabling us to successfully navigate the complexities of
            patent prosecution by addressing examiner objections with strong,
            legally sound arguments.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            For patent prosecution, our team excels in responding to examiner
            queries and building compelling cases that highlight the inventive
            merit of your application. We provide end-to-end guidance during
            patent office hearings, ensuring inventors are thoroughly briefed to
            navigate these critical moments confidently.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            On the litigation front, we analyse cited prior art in opposition
            and revocation cases, prepare robust written responses, affidavits,
            and deliver compelling arguments during oral hearings. We also
            handle patent appeals, counterclaims, and revocation proceedings
            across various High Courts, ensuring clients receive strategic
            representation. Our litigation support teams are experienced in
            nullifying opposition filings and revocation requests through solid
            evidence and courtroom advocacy.
          </p>
          <p className="pb-8 text-gray-800 text-sm">
            To maximize the value of your patents, our IP commercialization
            experts provide services such as landscape mapping, patent
            valuation, due diligence, and the development of monetization
            strategies through licensing or technology transfers. Trusted by
            leading companies, universities, and research institutions across
            India, we help secure and unlock the full potential of your
            intellectual property.
          </p>
        </div>
        <div className="bg-white px-5 text-justify flex lg:px-20 ">
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
                    What types of patents does JustiSphereX Legal handle?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    At JustiSphereX Legal, our multidisciplinary team of
                    technical experts and patent agents assists in drafting,
                    prosecuting, and litigating patents across a wide range of
                    sectors, including mechanical, electrical, software, and
                    biotechnology inventions.
                  </p>
                </div>
              </details>

              {/* Add the other FAQ items here */}
              {/* FAQ Item 2 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    What is the process of filing a patent with JustiSphereX
                    Legal?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-96 group-open:max-h-96 px-12 text-justify text-black font-montserrat font-thin overflow-y-auto">
                  <p className="mt-2 px-4 text-black text-sm">
                    Our patent filing process is comprehensive and includes:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black text-sm">
                    <li>
                      <strong>Prior art search and landscape analysis:</strong>
                      We conduct thorough research on existing patents and
                      technologies relevant to your invention.
                    </li>
                    <li>
                      <strong>Inventor consultations:</strong> We collaborate
                      with you to understand every technical aspect of your
                      invention.
                    </li>
                    <li>
                      <strong>Drafting</strong> We prepare provisional and
                      complete patent specifications tailored to your needs.
                    </li>
                    <li>
                      <strong>Filing</strong> We manage the filing process at
                      the Indian Patent Office, USPTO, EPO, or other
                      jurisdictions via PCT or direct routes.
                    </li>
                    <li>
                      <strong>Prosecution</strong> We handle communication with
                      patent offices, addressing examiner queries to ensure a
                      smooth progression of your application.
                    </li>
                  </ul>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    What happens if my patent application is challenged?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    At JustiSphereX Legal, our dedicated litigation team is
                    well–versed in handling patent disputes. We thoroughly
                    analyse the challenge, prepare strong counter–arguments
                    supported by evidence, and represent you during oral
                    hearings to defend your patent’s validity.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    How can I monetize my patent?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96 text-sm">
                  <p className="mt-2 px-4 text-black">
                    Our IP commercialization team provides expert services,
                    including:
                  </p>
                  <ul className="mt-2 px-4 list-disc list-inside text-black text-sm">
                    <li>
                      <strong> Landscape mapping: </strong>
                      Identifying markets and competitors for your patent.
                    </li>
                    <li>
                      <strong>Patent valuation:</strong> Determining the
                      commercial potential of your invention.
                    </li>
                    <li>
                      <strong>Due diligence:</strong> Conducting risk
                      assessments to ensure informed decision–making.
                    </li>
                    <li>
                      <strong>Monetization strategies: </strong> Crafting
                      tailored strategies for licensing or technology transfer
                      to maximize your patent’s value.
                    </li>
                  </ul>
                </div>
              </details>
              <details className="group overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 bg-slate-900 rounded-lg transition">
                  <span className="font-medium text-white">
                    How do I know if JustiSphereX Legal is the right patent law
                    firm for me?
                  </span>
                  <span className="transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-96">
                  <p className="mt-2 px-4 text-black text-sm">
                    JustiSphereX Legal is a distinguished IP law firm with a
                    proven track record of securing and leveraging patents for
                    businesses, academic institutions, and research
                    organizations across India. Our multidisciplinary team of
                    experts offers personalized services and extensive
                    jurisdictional experience to support you through every step
                    of the patent process, from filing to commercialization.
                  </p>
                </div>
              </details>
            </div>
          </div>
          <div className="lg:flex flex-row">
            <div className="px-2 text-justify lg:w-3/4 lg:pl-10">
              <h1 className="text-xl text-center text-black font-montserrat font-semibold lg:text-2xl">
                Securing a Patent in India – A Step-by-Step Guide
              </h1>
              <p className="text-gray-800 pt-5 text-sm">
                Protecting your innovation with a patent is a vital process.
                Here’s a streamlined overview of the patent filing process in
                India:
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                1. Prior Art Search & Disclosure
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Before filing, it’s essential to conduct a thorough search to
                identify similar patents that could affect yours. This ensures
                that your invention meets the criteria for novelty and
                non–obviousness. We’ll also guide you on whether to keep your
                invention confidential before filing.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                2. Drafting the Patent Application
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Our team will work closely with you to capture the technical
                details of your invention, preparing a clear and concise patent
                specification with detailed descriptions and illustrations.
                Depending on your needs, we’ll determine whether a provisional
                or complete specification is best.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                3. Filing at the Indian Patent Office (IPO)
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                We handle the entire filing process on your behalf at the IPO
                through our expert patent agents team, ensuring the timely
                submission of all necessary documents and payment of required
                fees.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                4. Patent Prosecution & Examination
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                After filing, your application will be examined by the IPO. Our
                experts manage all communications with the examiner, addressing
                any objections and making amendments to ensure a smooth approval
                process.
              </p>
              <h3 className="font-bold text-gray-900 pt-3">
                5. Grant & Post–Grant Management
              </h3>
              <p className="text-gray-800 pt-2 text-sm">
                Once your patent is granted, we provide ongoing support in
                maintaining it, including payment of renewal fees and addressing
                any infringement issues that may arise. Each invention is
                unique, and our expert team will provide a personalized roadmap
                to ensure your intellectual property is fully protected.
              </p>
            </div>

            {/* Card Section */}
            <div className="flex flex-col justify-center space-y-4 items-center space-x-3 lg:flex-col">
              {/* Card 1 */}
              <a href="/trademark">
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

export default Patent;
