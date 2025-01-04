import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TestimonialCard from "../Components/Testimonials";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

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
                className="w-full lg:h-96"
              >
                <source
                  src="/houseofIP.mp4"
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
              <h2 className="text-xl font-serif lg:text-2xl font-thin text-white mb-4">
                The story behind{""}
                <span className="font-serif font-bold ml-2">House of IP</span>
              </h2>
              <p className="text-white text-sm font-roboto lg:text-base leading-relaxed">
                At <span className="font-bold">House of IP</span> we believe
                that the foundation of any successful business lies in
                safeguarding intellectual property (IP) and fostering
                innovation. Our journey began with two visionary individuals,
                hailing from distinct yet complementary professional
                backgrounds, who shared a common passion for innovation,
                creativity, and the growing significance of intellectual
                property rights (IPRs) in today’s global economy. Together, they
                set out to build a company that champions the protection of
                ideas and innovation, empowering businesses to scale new
                heights.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-slate-900 py-8 px-4 lg:px-20 ">
          <div className="flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0">
            {/* Left Div (Tariq's story) */}
            <div className="w-full lg:w-1/2 pr-0 lg:pr-6 relative text-white lg:sticky lg:top-16 self-start">
              <motion.h2
                className="text-xl lg:text-2xl font-bold mb-4 text-center font-serif"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Mohd Tariq Saeed Khan <br /> Turning Creativity into an
                Enterprise
              </motion.h2>
              <motion.p
                className="text-sm lg:text-base leading-relaxed font-roboto text-justify"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                A retired Class 1 Civil Engineer with the Central Government of
                India, Mohd Tariq Saeed Khan built a distinguished career in
                engineering, collaborating with other professionals to execute
                projects of national importance. His expertise in map drawing
                and design gave him an intricate understanding of precision and
                creativity, and his decades of experience exposed him to
                countless innovative ideas. However, Tariq’s professional
                journey wasn’t just confined to engineering. Over the years, he
                became deeply intrigued by the process of turning raw ideas into
                practical, protected innovations. His curiosity about
                intellectual property rights grew as he observed how protecting
                one’s intellectual assets could transform industries and pave
                the way for groundbreaking progress.
              </motion.p>
              <motion.p
                className="text-sm lg:text-base leading-relaxed font-roboto text-justify mt-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Upon retiring, Tariq was at a crossroad. Unwilling to rest on
                his laurels, his inner innovator led him to an idea: why not
                create a platform dedicated to helping others safeguard their
                inventions, brands, and creative works? Recognizing the gap in
                awareness and accessibility of IPR services, he envisioned a
                company that could bridge this divide by offering top-notch
                services through a team of IPR professionals and agents. With
                this vision, he began laying the groundwork for “House of IP,”
                but he realized he needed a strong business partner who could
                help transform his idea into a viable enterprise. That’s when he
                joined forces with Mahendra Pratap Singh, a skilled businessman
                who shared his enthusiasm for innovation and intellectual
                property.
              </motion.p>
            </div>

            {/* Right Div (Mahendra's story) */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-1 gap-4">
              <motion.h2
                className="text-xl text-center lg:text-2xl font-bold mb-4 text-white font-serif"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Mahendra Pratap Singh <br /> A Strategic Entrepreneur with a
                Vision
              </motion.h2>
              <motion.p
                className="text-sm lg:text-base leading-relaxed font-roboto text-white text-justify"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Mahendra Pratap Singh is a seasoned businessman who has spent
                decades mastering the art of building brand value and
                understanding its importance in the modern economy. From small
                enterprises to large ventures, he has an eye for identifying
                opportunities and leveraging them strategically. Over the years,
                Mahendra observed that the backbone of sustainable business
                success often lies in protecting a company’s intellectual
                assets—from trademarks and patents to copyrights and designs.
              </motion.p>
              <motion.p
                className="text-sm lg:text-base leading-relaxed font-roboto text-white text-justify"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Mahendra understood that in an increasingly competitive world,
                businesses not only needed to create but also safeguard their
                brand identities and innovations to stay ahead. He believed IPR
                was not merely a legal requirement but a strategic tool for
                growth and competitiveness. When Mahendra met Tariq Saeed Khan,
                the connection was instant. They discovered a shared vision of
                creating a company that would democratize access to IPR
                services, helping businesses—both large and small—protect their
                intellectual property. Mahendra’s extensive business acumen and
                Tariq’s innovative mindset complemented each other perfectly.
                Together, they decided to bring their vision to life with “House
                of IP.”
              </motion.p>
            </div>
          </div>
          <div className="py-10 text-white">
            <h1 className="text-2xl font-bold font-serif lg:pb-5 ">
              The Birth of House of IP: A Perfect Partnership
            </h1>
            <p className="text-sm lg:text-base leading-8 font-roboto text-justify"> 
              The partnership between Tariq and Mahendra was built on mutual
              respect and shared values. While Tariq brought his creative and
              problem-solving expertise to the table, Mahendra provided the
              entrepreneurial drive and strategic insight to turn their vision
              into a thriving business.Together, they founded House of IP, a
              company designed to make IPR services accessible, reliable, and
              professionally managed. Recognizing that they were not IPR
              professionals themselves, they adopted a business model that
              allowed them to hire a team of capable and experienced IPR agents
              and professionals. These skilled individuals handle the technical
              aspects, such as filings, registrations, and hearings, while Tariq
              and Mahendra focus on building the business, guiding its strategic
              direction, and raising awareness about intellectual property’s
              importance.Their combined leadership ensures that "House of IP" is
              more than just a service provider—it is a bridge between
              creativity and protection, allowing innovators and businesses to
              thrive. Today, “House of IP” stands as a testament to their shared
              vision: a company that not only fosters innovation but also
              safeguards the intellectual assets that drive progress.{" "}
              <span className="font-semibold">
                {" "}
                Together, Mohd Tariq Saeed Khan and Mahendra Pratap Singh have
                built “House of IP” as a symbol of innovation, empowerment, and
                strategic vision, helping individuals and businesses protect
                their most valuable asset—their ideas.
              </span>
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl font-serif bg-slate-900 text-white">What our clients have to say</h1>
      <TestimonialCard />
    </>
  );
};

export default About;
