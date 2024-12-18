import React from "react";
import { NavLink } from "react-router-dom";
import TestimonialCard from "../Components/Testimonials";

const About = () => {
  return (
    <>
      <div className="w-full" style={{ position: "relative" }}>
        <div className="breadcrumbs text-xs pl-4 sm:pl-6 bg-white text-black pt-5 lg:pt-20">
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
                Welcome to House of IP, where innovation meets expertise, and
                every story begins with a purpose. Ours started with a simple
                yet profound belief—that the law should be a shield for both
                creators and families alike. Founded with a commitment to
                safeguarding what matters most, we’ve built our law firm from
                the ground up, driven by a passion for protecting the ideas that
                shape the future and the relationships that anchor our lives.
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
                House of IP wasn’t born out of mere ambition; it grew from the
                realization that the law could be more—more personal, more
                protective, more compassionate. Our founder, with a background
                rooted deeply in Intellectual Property Rights (IPR) and
                matrimonial law, recognized that many people faced a gap in
                understanding their rights and how to shield them. With a vision
                to close that gap, House of IP was born.
              </p>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Our Evolution
              </h2>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                From the early days of offering tailored legal advice to local
                entrepreneurs and individuals, our firm quickly grew into a
                trusted legal partner for clients across diverse fields. Whether
                it’s a startup fighting to protect its brand or a family
                navigating the complexities of matrimonial law, we’ve always
                stood by our clients with dedication, professionalism, and care.
                Each case is a new chapter in our journey, and we are honoured
                to play a role in shaping the legal landscape for the people we
                serve.
              </p>
            </div>

            {/* Right Div */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-1 gap-4 pt-10">
              {/* Child Div 1 */}
              <div className="p-4 rounded-lg shadow-md lg:bg-slate-900">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 lg:text-white">
                  Our Expertise: Where Innovation Meets Humanity
                </h3>
                <h5 className="text-base font-semibold text-gray-800 mb-2 lg:text-white">
                  1. Intellectual Property Rights (IPR)
                </h5>
                <p className="text-gray-600 text-xs lg:text-white">
                  In today’s fast–paced world of innovation and creativity,
                  protecting intellectual property is more important than ever.
                  Our team offers comprehensive legal services across
                  TRADEMARKS, COPYRIGHTS, PATENTS, AND DESIGNS, ensuring that
                  our clients’ intellectual assets are safeguarded.
                </p>
                <h5 className="text-base font-semibold text-gray-800 mb-2 pt-5 lg:text-white">
                  2. Matrimonial Cases
                </h5>
                <p className="text-gray-600 text-xs lg:text-white">
                  Personal matters require a personal touch. We bring empathy
                  and expertise to matters of divorce, child custody, and
                  alimony, guiding our clients through emotionally charged times
                  with compassion and strategic counsel.
                </p>
              </div>

              {/* Child Div 2 */}
              <div className="p-4 bg-white rounded-lg shadow-md lg:bg-slate-900">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 lg:text-white">
                  Vision
                </h3>
                <p className="text-gray-600 text-xs lg:text-white">
                  At House of IP, our vision is to become a leading force in
                  redefining how legal protection is perceived and practiced. We
                  strive to create a future where intellectual property rights
                  and personal matters are safeguarded with utmost care,
                  precision, and innovation. We aim to empower individuals,
                  entrepreneurs, and businesses to confidently pursue their
                  ambitions, knowing that their legal rights are fully protected
                  and supported.
                </p>
              </div>

              {/* Child Div 3 */}
              <div className="p-4 bg-white rounded-lg shadow-md lg:bg-slate-900">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 lg:text-white">
                  Mission
                </h3>
                <p className="text-gray-600 text-xs lg:text-white">
                  Our mission is to provide reliable, personalized, and
                  forward-thinking legal solutions that serve as a shield for
                  our clients. We are committed to simplifying complex legal
                  landscapes, ensuring that each individual, creator, and
                  business we work with understands and harnesses the power of
                  the law to their advantage. With a foundation built on trust,
                  transparency, and unwavering dedication, we seek to protect
                  both your innovations and personal well-being with the highest
                  level of professionalism.
                </p>
              </div>

              {/* Child Div 4 */}
              <div className="p-4 bg-white rounded-lg shadow-md lg:bg-slate-900">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 lg:text-white">
                  Our Evolution
                </h3>
                <p className="text-gray-600 text-xs lg:text-white">
                  At House of IP, we take a client-first approach, combining
                  expertise with empathy. Every case we handle, whether it’s an
                  intellectual property dispute or a sensitive matrimonial
                  issue, begins with a deep understanding of our clients’ needs.
                  We believe that every legal challenge is unique, which is why
                  we provide tailored strategies that not only resolve immediate
                  issues but also anticipate future challenges. Our meticulous
                  attention to detail, collaborative mindset, and innovative
                  problem-solving ensure that we deliver results that
                  matter—while building lasting relationships based on trust and
                  success.
                </p>
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
