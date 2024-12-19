import React from "react";
import { NavLink } from "react-router-dom";
import TestimonialCard from "../Components/Testimonials";

const About = () => {
  return (
    <>
      <div className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs pl-4 sm:pl-6 bg-white text-black pt-20">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="bg-white pb-6 sm:pb-8">
        <div className="py-8 px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Video Player Section */}
            <div className="flex-shrink-0 w-full lg:w-1/3">
              <video controls className="w-full h-auto rounded-lg shadow-md">
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-2/3 lg:pl-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                About{" "}
                <span className="font-montserrat font-thin">House of IP</span>
              </h2>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                At House of IP, we specialize in empowering individuals,
                businesses, and institutions to secure and protect their
                intellectual property. With a team of seasoned IPR agents and
                experts, we offer comprehensive services tailored to meet the
                dynamic needs of creators and innovators. Our mission is to
                simplify the IP registration process and provide strategic
                guidance for maximizing the value of your intellectual assets.
                Whether it’s patents, trademarks, copyrights, or trade secrets,
                we’re your trusted partner in navigating the complexities of
                intellectual property law. House of IP is more than a
                service—it’s a vision to foster innovation and safeguard
                creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-50 py-8 px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0">
            {/* Left Div */}
            <div className="w-full lg:w-2/3 pr-0 lg:pr-6 relative lg:sticky top-16 self-start">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                How We Began
              </h2>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                Our journey started with a simple goal: to make intellectual
                property accessible to everyone. Founded by a group of IP
                enthusiasts and experts, House of IP was born from a shared
                passion for innovation and creativity. We realized that while
                ideas have the power to change the world, they often remain
                vulnerable without proper protection. This insight drove us to
                establish a platform that bridges the gap between creators and
                the legal safeguards they need. From humble beginnings, we’ve
                grown into a leading IP service provider trusted by inventors,
                entrepreneurs, and businesses alike.
              </p>
              <p class="text-lg text-slate-900 lg:text-2xl pt-4 font-bold text-start mb-6">
                Our Evolution
              </p>
              <p class="mb-4 text-justify text-gray-700 text-sm lg:text-base">
                Since our inception, we have continually adapted to the
                ever-changing landscape of intellectual property laws and global
                innovation trends.
              </p>
              <h3 class="text-sm font-semibold text-gray-700 mb-4 lg:text-base">
                Milestones:
              </h3>
              <ul class="list-disc text-sm text-gray-700 pl-6 mb-4 lg:text-base">
                <li>
                  Established a global filing network for patents and
                  trademarks.
                </li>
                <li>
                  Expanded our expertise to include IP commercialization and
                  litigation support.
                </li>
                <li>
                  Built a cutting-edge digital platform for streamlined IP
                  registration and management.
                </li>
              </ul>
              <p class="text-justify text-sm text-gray-700 lg:text-base">
                Today, <strong>House of IP</strong> stands as a beacon for
                creators, offering end-to-end services that span multiple
                jurisdictions and industries.
              </p>
            </div>

            {/* Right Div */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-1 gap-4 pt-10 mt-10">
              <div className="p-4 bg-white rounded-lg shadow-md lg:bg-slate-900 pt-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 lg:text-white">
                  Vision
                </h3>
                <p className="text-gray-600 text-sm lg:text-white">
                  To create a world where every innovation, creation, and idea
                  is protected and nurtured. We aim to be the catalyst that
                  bridges creativity and commerce, enabling individuals and
                  organizations to thrive in an innovation-driven economy.
                </p>
              </div>

              {/* Child Div 3 */}
              <div className="p-4 bg-white rounded-lg shadow-md lg:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 lg:text-white">
                  Mission
                </h3>
                <ul class="list-disc text-sm text-gray-600 pl-6 mb-4 lg:text-base lg:text-white">
                  <li>
                    Empower Innovators: Equip creators with the tools and
                    resources to protect their intellectual property.
                  </li>
                  <li>
                    Simplify Complexity: Make the IP registration and protection
                    process straightforward and accessible.
                  </li>
                  <li>
                    Drive Global Impact: Foster a culture of innovation by
                    safeguarding ideas and enabling commercialization.
                  </li>
                </ul>
              </div>

              {/* Child Div 4 */}
              <div className="p-4 bg-white rounded-lg shadow-md lg:bg-slate-900 ">
                <h2 class="text-xl text-slate-900  font-bold text-start mb-6 lg:text-white lg:text-2xl">
                  Our Work Process
                </h2>
                <div class="space-y-6">
                  <div class="flex items-start text-gray-600 lg:text-white ">
                    <p>
                      <strong>Consultation:</strong> We start by understanding
                      your unique IP needs through personalized consultations.
                    </p>
                  </div>
                  <div class="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Research & Strategy:</strong> Conduct
                      comprehensive prior art searches and landscape analyses to
                      build a robust IP protection strategy.
                    </p>
                  </div>
                  <div class="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Filing & Documentation:</strong> Handle all
                      paperwork, filings, and submissions with meticulous
                      attention to detail, ensuring compliance with global IP
                      laws.
                    </p>
                  </div>
                  <div class="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Prosecution:</strong> Represent clients during
                      patent/trademark examinations and address objections with
                      sound legal arguments.
                    </p>
                  </div>
                  <div class="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Protection & Litigation:</strong> Provide expert
                      support for opposition, revocation, and IP infringement
                      cases.
                    </p>
                  </div>
                  <div class="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Commercialization:</strong> Assist in monetizing
                      your intellectual property through licensing, technology
                      transfer, or strategic partnerships.
                    </p>
                  </div>
                  <div class="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Ongoing Support:</strong> Offer continuous IP
                      management, ensuring your rights are maintained and
                      enforced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialCard />
    </>
  );
};

export default About;
