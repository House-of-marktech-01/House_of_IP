import React from "react";

const OurStory = () => {
  return (
    <div className="w-full mx-auto bg-slate-100 lg:px-12">
      <div className="lg:grid lg:grid-cols-2">
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
                  src="/"
                  type="video/mp4"
                />
              </video>

              <div className="flex flex-col items-start gap-3">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Our Story!
                </h2>
                <p className="text-md text-gray-800 leading-relaxed mb-2.5">
                  At House of IP , we provide comprehensive  services
                  to individuals and businesses alike. Our expertise spans
                  across intellectual property, civil, criminal, and matrimonial
                  law, ensuring that you receive the best  assistance
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
