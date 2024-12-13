import React from "react";

const OurStory = () => {
  return (
    <div className="w-full mx-auto bg-white">
      <div className="lg:grid lg:grid-cols-2 mt-5=">
        <div className="lg:col-span-2 flex flex-col items-center">
          <div className="w-full">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10 lg:px-10 px-5">
              <video
                width="auto"
                height="auto"
                controls
                loop
                muted
                className="w-full lg:w-2/3 rounded-lg lg:h-96"
              >
                <source
                  src="https://img.indiafilings.com/videos/IndiaFilings-The-Journey!.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="flex flex-col items-start gap-3">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Our Story!
                </h2>
                <p className="text-md text-gray-800 leading-relaxed mb-2.5">
                  At House of IP Legal, we provide comprehensive legal services
                  to individuals and businesses alike. Our expertise spans
                  across intellectual property, civil, criminal, and matrimonial
                  law, ensuring that you receive the best legal assistance
                  tailored to your needs.
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://www.indiafilings.com/about-us"
                  >
                    about House of IP.
                  </a>
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
