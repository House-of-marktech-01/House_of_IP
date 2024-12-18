import React, { useState, useEffect } from "react";

const Stats = () => {
  return (
    <>
      <h1 className=" text-2xl pt-10 bg-slate-100 text-gray-900 text-center sm:pl-2">
        Explore our digital services stack.
      </h1>
      <div className="card-body bg-slate-100 lg:px-20">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 py-1.5">
          <div className="relative h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden group p-2 z-0">
            {/* Floating Circle */}
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-slate-900 group-hover:scale-[800%] duration-500 z-[-1]"></div>

            {/* Card Content */}
            <div className="flex flex-col items-center mb-5 p-5">
              {/* Heading */}
              <h1 className="z-20 font-bold font-Poppin group-hover:text-white text-gray-700 duration-500 text-[1.4em]">
                Copyright
              </h1>

              {/* Button */}
              <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
                <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
                  <a href=""> More info </a>
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="relative h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden group p-2 z-0">
            {/* Floating Circle */}
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-slate-900 group-hover:scale-[800%] duration-500 z-[-1]"></div>

            {/* Card Content */}
            <div className="flex flex-col items-center mb-5 p-5">
              {/* Heading */}
              <h1 className="z-20 font-bold font-Poppin group-hover:text-white text-gray-700 duration-500 text-[1.4em]">
                Trademark
              </h1>

              {/* Button */}
              <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
                <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
                  <a href="/trademark"> More info </a>
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="relative h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden group p-2 z-0">
            {/* Floating Circle */}
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-slate-900 group-hover:scale-[800%] duration-500 z-[-1]"></div>

            {/* Card Content */}
            <div className="flex flex-col items-center mb-5 p-5">
              {/* Heading */}
              <h1 className="z-20 font-bold font-Poppin group-hover:text-white text-gray-700 duration-500 text-[1.4em]">
                Matrimonial Disputes
              </h1>

              {/* Button */}
              <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
                <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
                  <a href="/"> More info </a>
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="relative h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden group p-2 z-0">
            {/* Floating Circle */}
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-slate-900 group-hover:scale-[800%] duration-500 z-[-1]"></div>

            {/* Card Content */}
            <div className="flex flex-col items-center mb-5 p-5">
              {/* Heading */}
              <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-gray-700 text-[1.4em]">
                Patent
              </h1>

              {/* Button */}
              <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
                <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
                  <a href="/patent"> More info </a>
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="relative h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden group p-2 z-0">
            {/* Floating Circle */}
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-slate-900 group-hover:scale-[800%] duration-500 z-[-1]"></div>

            {/* Card Content */}
            <div className="flex flex-col items-center mb-5 p-5">
              {/* Heading */}
              <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-gray-700 text-[1.4em]">
                Design
              </h1>

              {/* Button */}
              <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
                <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
                  <a href="/design"> More info </a>
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <div className="relative h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden group p-2 z-0">
            {/* Floating Circle */}
            <div className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-slate-900 group-hover:scale-[800%] duration-500 z-[-1]"></div>

            {/* Card Content */}
            <div className="flex flex-col items-center mb-5 p-5">
              {/* Heading */}
              <h1 className="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em] text-gray-700">
                IP Litigation
              </h1>

              {/* Button */}
              <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
                <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">
                  <a href="/"> More info </a>
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
