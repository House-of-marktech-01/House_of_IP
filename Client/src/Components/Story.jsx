import React from "react";

const OurStory = () => {
  return (
    <div className=" p-6 bg-slate-900">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="lg:w-1/2 p-6">
          {/* Divider */}
          <div className="flex items-center">
            <div className="w-12 h-0.5 bg-[#8c6f46]"></div>
          </div>

          {/* Title Section */}
          <div className="mt-8">
            <span className="text-xs font-semibold text-yellow-400 tracking-wide uppercase">
              Our Expertise
            </span>
            <h3 className="text-4xl font-light text-yellow-400 mt-2">
              Our Story
              <span className="border-b-2 border-[#8c6f46] ml-2"></span>
            </h3>
          </div>

          {/* Text Content */}
          <div className="mt-8 text-lg">
            <p className="mb-4 font-montserrat font-extralight">
              At <strong className="font-bold">HOUSE OF IP</strong>, we strive to achieve intelligent
              and innovative solutions for every client, delivered through a
              collaborative and professional approach. As an IP and commercial
              law firm, we blend expansive sectoral expertise with strategic
              perspectives to tackle complex legal challenges.
            </p>
            <p className="mb-4 font-montserrat font-extralight">
              We foster a performance-driven culture while making calibrated
              decisions mitigating risk factors for clients. Our collaborative
              work ethos unlocks unique legal and technical insights benefiting
              client objectives.
            </p>
            <p className="mb-4 font-montserrat font-extralight">
              Across services in patents, trademarks, copyrights and beyond, we
              position legal intelligence at the core – be it contract drafting,
              litigation strategies or enforcement drives related to
              intellectual property, civil and criminal disputes. We also assist
              clients on family/matrimonial conflicts through negotiated
              settlements. Our positive approach targets maximum value creation
              from legal proceedings and advisory mandates.
            </p>
            <p className="font-montserrat font-extralight">
              The ultimate objective is client delight through a smooth
              experience where legal complexities get resolved seamlessly. We
              take pride in making ‘Legal Simple’ for our clients.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 p-6 mt-12 lg:mt-0">
          <div className="flex justify-center align-middle mt-32">
            <img
              src="https://www.jusip.in/wp-content/uploads/2024/03/Lawyer-team-india.png"
              alt="Lawyer Team"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
