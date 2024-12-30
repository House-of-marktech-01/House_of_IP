import React,{useState,useRef} from "react";
import { NavLink } from "react-router-dom";
import TestimonialCard from "../Components/Testimonials";
import { Helmet } from "react-helmet";

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setIsButtonVisible(false);
      setTimeout(() => {
        setIsButtonVisible(false); // Hide button after a few seconds
      }, 3000);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsButtonVisible(true); // Show button if paused
    }
  };

  const handleMouseEnter = () => {
    setIsButtonVisible(true); // Show button on hover
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setIsButtonVisible(false); // Hide button when not hovered and playing
    }
  };
  return (
    <>
      <Helmet>
        <title>House of IP - About</title>
      </Helmet>
      <div className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs pl-4 sm:pl-6 bg-slate-900 text-white pt-20">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-900 pb-6 sm:pb-8">
        <div className="py-8 px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Video Player Section */}
            <div
              className="relative w-full lg:w-2/3"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <video
                ref={videoRef}
                width="auto"
                height="auto"
                loop
                muted
                className="w-full lg:h-80 lg:w-[100%]"
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Play/Pause Button in the center */}
              <div
                className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300 ${
                  isButtonVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <button
                  onClick={togglePlayPause}
                  className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg transition-transform hover:scale-110"
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 9v6m4-6v6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 4l12 8-12 8V4z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-2/3 lg:pl-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
                About{" "}
                <span className="font-montserrat font-thin">House of IP</span>
              </h2>
              <p className="text-white text-sm lg:text-base leading-relaxed">
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
        <div className="bg-slate-900 py-8 px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0">
            {/* Left Div */}
            <div className="w-full lg:w-2/3 pr-0 lg:pr-6 relative text-white lg:sticky top-16 self-start">
              <h2 className="text-xl lg:text-2xl font-bold mb-4">
                How We Began
              </h2>
              <p className=" text-sm lg:text-base leading-relaxed">
                Our journey started with a simple goal: to make intellectual
                property accessible to everyone. Founded by a group of IP
                enthusiasts and experts, House of IP was born from a shared
                passion for innovation and creativity. We realized that while
                ideas have the power to change the world, they often remain
                vulnerable without proper protection. This insight drove us to
                establish a platform that bridges the gap between creators and
                the safeguards they need. From humble beginnings, we’ve grown
                into a leading IP service provider trusted by inventors,
                entrepreneurs, and businesses alike.
              </p>
              <p className="text-lg  lg:text-2xl pt-4 font-bold text-start mb-6">
                Our Evolution
              </p>
              <p className="mb-4 text-justify  text-sm lg:text-base">
                Since our inception, we have continually adapted to the
                ever-changing landscape of intellectual property laws and global
                innovation trends.
              </p>
              <h3 className="text-sm font-semibold  mb-4 lg:text-base">
                Milestones:
              </h3>
              <ul className="list-disc text-sm pl-6 mb-4 lg:text-base">
                <li>
                  Established a global filing network for patents and
                  trademarks.
                </li>
                <li>
                  Expanded our expertise to include IP commercialization
                  support.
                </li>
                <li>
                  Built a cutting-edge digital platform for streamlined IP
                  registration and management.
                </li>
              </ul>
              <p className="text-justify text-sm  lg:text-base">
                Today, <strong>House of IP</strong> stands as a beacon for
                creators, offering end-to-end services that span multiple
                jurisdictions and industries.
              </p>
            </div>

            {/* Right Div */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-1 gap-4 pt-10 mt-10">
              <div className="p-4 bg-white rounded-lg shadow-md lg:bg-slate-800 pt-5">
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
              <div className="p-4 bg-white rounded-lg shadow-md lg:bg-slate-800">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 lg:text-white">
                  Mission
                </h3>
                <ul className="list-disc text-sm text-gray-600 pl-6 mb-4 lg:text-base lg:text-white">
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
              <div className="p-4 bg-white rounded-lg shadow-md lg:bg-slate-800 ">
                <h2 className="text-xl text-slate-900  font-bold text-start mb-6 lg:text-white lg:text-2xl">
                  Our Work Process
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start text-gray-600 lg:text-white ">
                    <p>
                      <strong>Consultation:</strong> We start by understanding
                      your unique IP needs through personalized consultations.
                    </p>
                  </div>
                  <div className="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Research & Strategy:</strong> Conduct
                      comprehensive prior art searches and landscape analyses to
                      build a robust IP protection strategy.
                    </p>
                  </div>
                  <div className="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Filing & Documentation:</strong> Handle all
                      paperwork, filings, and submissions with meticulous
                      attention to detail, ensuring compliance with global IP
                      laws.
                    </p>
                  </div>
                  <div className="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Prosecution:</strong> Represent clients during
                      patent/trademark examinations and address objections with
                      sound arguments.
                    </p>
                  </div>
                  <div className="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Protection & Litigation:</strong> Provide expert
                      support for opposition, revocation, and IP infringement
                      cases.
                    </p>
                  </div>
                  <div className="flex items-start text-gray-600 lg:text-white">
                    <p>
                      <strong>Commercialization:</strong> Assist in monetizing
                      your intellectual property through licensing, technology
                      transfer, or strategic partnerships.
                    </p>
                  </div>
                  <div className="flex items-start text-gray-600 lg:text-white">
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
