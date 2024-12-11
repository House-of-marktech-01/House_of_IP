import React from "react";
import { NavLink } from "react-router-dom";
import TestimonialCard from "../Components/Testimonials";

const About = () => {
  return (
    <>
      <div className="w-full" style={{ position: "relative" }}>
        <img
          width="100%"
          height="315"
          src="https://www.jsalaw.com/wp-content/uploads/2020/07/About-us-banner-dark-1200x315.jpg"
          className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
          alt=""
          decoding="async"
          srcSet="https://www.jsalaw.com/wp-content/uploads/2020/07/About-us-banner-dark-1200x315.jpg 1200w, https://www.jsalaw.com/wp-content/uploads/2020/07/About-us-banner-dark-300x79.jpg 300w, https://www.jsalaw.com/wp-content/uploads/2020/07/About-us-banner-dark-1024x269.jpg 1024w, https://www.jsalaw.com/wp-content/uploads/2020/07/About-us-banner-dark-768x202.jpg 768w, https://www.jsalaw.com/wp-content/uploads/2020/07/About-us-banner-dark-600x158.jpg 600w, https://www.jsalaw.com/wp-content/uploads/2020/07/About-us-banner-dark.jpg 1366w"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        <div
          className="centered-text font-montserrat "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "24px",
            fontWeight: "100",
            textAlign: "center",
          }}
        >
          About us
        </div>
        <div className="breadcrumbs text-sm pl-6 bg-white text-black pt-5">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="bg-white pb-8">
        <div className="px-16">
          <div className="flex items-center pt-16">
            <div className="w-12 h-0.5 bg-[#8c6f46]"></div>
          </div>
          <h2 className="text-yellow-400 text-3xl text-left font-open-sans font-light pt-6">
            Who we are
          </h2>
          <div>
            <div className="r text-black text-lg text-justify">
              <p className="pt-4">
                JSA is a leading national law firm in India with over 600
                professionals operating out of 7 offices located in: Ahmedabad,
                Bengaluru, Chennai, Gurugram, Hyderabad, Mumbai, and New Delhi.
              </p>
              <p className="pt-4">
                Our practice is organised along service lines and sector
                specialisation that provides legal services to top Indian
                corporates, Fortune 500 companies, multinational banks and
                financial institutions, governmental and statutory authorities,
                and multilateral and bilateral institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center w-full bg-slate-900">
          {/* Image Section */}
          <div className="w-full md:w-1/2 animate__animated animate__slideInLeft">
            <div className="w-full">
              <img
                decoding="async"
                width="1200"
                height="680"
                src="https://www.jsalaw.com/wp-content/uploads/2020/07/why-we-are-unique.jpg"
                alt="Why we are unique"
                className="w-full h-auto p-16"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left p-16">
            <h2 className="text-yellow-400 text-2xl md:text-3xl font-light">
              Why we are unique
            </h2>
            <p className="text-base md:text-lg mt-4">
              With a keen focus on learning and specialised practices, we keep
              in touch with the changing environment in which our clients
              operate. We take pride in combining the expertise and diversity of
              experience of a large firm with the personalized attention and
              responsiveness of a boutique firm. Our lawyers work seamlessly
              across practice areas and offices to assist our clients.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center w-full bg-slate-900">
          {/* Image Section */}
          <div className="w-full md:w-1/2 animate__animated animate__slideInLeft">
            <div className="w-full">
              <img
                decoding="async"
                width="1200"
                height="680"
                src="https://www.jsalaw.com/wp-content/uploads/2020/07/why-we-are-unique.jpg"
                alt="Why we are unique"
                className="w-full h-auto p-16"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left p-16">
            <h2 className="text-yellow-400 text-2xl md:text-3xl font-light">
              Why we are unique
            </h2>
            <p className="text-base md:text-lg mt-4">
              With a keen focus on learning and specialised practices, we keep
              in touch with the changing environment in which our clients
              operate. We take pride in combining the expertise and diversity of
              experience of a large firm with the personalized attention and
              responsiveness of a boutique firm. Our lawyers work seamlessly
              across practice areas and offices to assist our clients.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full bg-slate-900">
          {/* Image Section */}
          <div className="w-full md:w-1/2 animate__animated animate__slideInLeft">
            <div className="w-full">
              <img
                decoding="async"
                width="1200"
                height="680"
                src="https://www.jsalaw.com/wp-content/uploads/2020/07/why-we-are-unique.jpg"
                alt="Why we are unique"
                className="w-full h-auto p-16"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left p-16">
            <h2 className="text-yellow-400 text-2xl md:text-3xl font-light">
              Why we are unique
            </h2>
            <p className="text-base md:text-lg mt-4">
              With a keen focus on learning and specialised practices, we keep
              in touch with the changing environment in which our clients
              operate. We take pride in combining the expertise and diversity of
              experience of a large firm with the personalized attention and
              responsiveness of a boutique firm. Our lawyers work seamlessly
              across practice areas and offices to assist our clients.
            </p>
          </div>
        </div>
      </div>
      <TestimonialCard/>
    </>
  );
};

export default About;
