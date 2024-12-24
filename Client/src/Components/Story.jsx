import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const OurStory = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="w-full mx-auto bg-slate-100 lg:px-12">
      <div className="lg:grid lg:grid-cols-2">
        <div className="lg:col-span-2 flex flex-col items-center">
          <div className="w-full">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10 lg:px-10 px-5">
              {/* Custom Video Player */}
              <div className="relative w-full lg:w-2/3">
                <video
                  ref={videoRef}
                  width="auto"
                  height="auto"
                  loop
                  muted
                  className="w-full lg:h-96"
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>
                {/* Custom Controls */}
                <div className="absolute bottom-0 left-0 w-full bg-slate-900 py-3 flex justify-center items-center gap-4">
                  {/* Backward Button */}
                  <button
                    onClick={() => (videoRef.current.currentTime -= 10)}
                    className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:scale-105 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 15l-6-6m0 0l6-6m-6 6h12"
                      />
                    </svg>
                  </button>

                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlayPause}
                    className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:scale-105 transition-transform"
                  >
                    {isPlaying ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 text-black"
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
                        className="w-6 h-6 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 4l12 8-12 8V4z"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Forward Button */}
                  <button
                    onClick={() => (videoRef.current.currentTime += 10)}
                    className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:scale-105 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 15l6-6m0 0l-6-6m6 6H8"
                      />
                    </svg>
                  </button>

                  {/* Volume Control */}
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    onChange={(e) => (videoRef.current.volume = e.target.value)}
                    className="w-1/4 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start lg:w-[90%] gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Our Story!
                </h2>
                <p className="text-md text-gray-800 leading-relaxed mb-2.5">
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
