import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const OurStory = () => {
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
    <div className="w-full mx-auto font-roboto bg-slate-900 lg:px-24">
      <div className="lg:grid lg:grid-cols-2">
        <div className="lg:col-span-2 flex flex-col items-center">
          <div className="w-full">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10 lg:px-10 px-5">
              {/* Custom Video Player */}
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

              <div className="flex flex-col font-roboto items-start gap-3 lg:w-3/4">
                <h2 className="text-4xl font-serif font-semibold text-white">
                  Our Story!
                </h2>
                <p className="text-md text-white leading-relaxed mb-2.5">
                  At House of IP, we empower creators, innovators, and
                  entrepreneurs by securing their intellectual property rights.
                  From trademarks and copyrights to designs and patents, we
                  provide comprehensive solutions to protect your ideas and
                  innovations. With a focus on precision and trust, we ensure
                  your creations are safeguarded, giving you the confidence to
                  thrive in a competitive world. For more details, visit
                  <NavLink to="/about">
                    <span className="text-bold pl-1 pr-1 text-blue-700">
                      About
                    </span>
                  </NavLink>
                  or{" "}
                  <NavLink to="/contact">
                    <span className="text-bold pl-1 pr-1 text-blue-700">
                      Contact
                    </span>
                  </NavLink>{" "}
                  our experts to get started today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
