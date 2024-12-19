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
                  className="w-full rounded-lg lg:h-96"
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>
                {/* Custom Controls */}
                <div className="absolute bottom-0 left-0 w-full bg-slate-900 py-3 flex justify-center items-center rounded-b-lg">
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
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Our Story!
                </h2>
                <p className="text-md text-gray-800 leading-relaxed mb-2.5">
                  At House of IP, we provide comprehensive services
                  to individuals and businesses alike. Our expertise spans
                  across intellectual property, civil, criminal, and matrimonial
                  law, ensuring that you receive the best assistance
                  tailored to your needs.
                  <NavLink className="text-blue-600 hover:underline" to="/about">
                    {" "}
                    about House of IP.
                  </NavLink>
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
