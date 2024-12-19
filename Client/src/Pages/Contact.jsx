import React from "react";
import { NavLink } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import Chatbot from "../Components/Chatbot";

const Contact = () => {
  return (
    <div className="w-full relative ">
      <div class="flex flex-col lg:flex-row justify-evenly  items-center w-full pt-3 bg-white parallax-container">
        <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex px-9 bg-slate-800 flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
          <div class="text-white group-hover:scale-105 transition-all">
            <svg
              class="w-16 h-16"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <div class="group-hover:pb-10 transition-all duration-500 delay-200">
            <h1 class="font-semibold text-white">Contact 1</h1>
            <p class="text-white text-sm">Designation 1</p>
          </div>
          <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
            <div class="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
              <NavLink class="hover:scale-110 transition-all duration-500 delay-200">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
              </NavLink>
              <NavLink class="hover:scale-110 transition-all duration-500 delay-200">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 960 1000"
                >
                  <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
        <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col px-9 bg-slate-800 max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
          <div class="text-white group-hover:scale-105 transition-all">
            <svg
              class="w-16 h-16"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <div class="group-hover:pb-10 transition-all duration-500 delay-200">
            <h1 class="font-semibold text-white">Contact 2</h1>
            <p class="text-white text-sm">Designation 2</p>
          </div>
          <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
            <div class="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
              <NavLink class="hover:scale-110 transition-all duration-500 delay-200">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
              </NavLink>
              <NavLink class="hover:scale-110 transition-all duration-500 delay-200">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 960 1000"
                >
                  <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
        <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm px-9 bg-slate-800 hover:shadow-2xl transition-all duration-500 shadow-xl">
          <div class="text-white group-hover:scale-105 transition-all">
            <svg
              class="w-16 h-16"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <div class="group-hover:pb-10 transition-all duration-500 delay-200">
            <h1 class="font-semibold text-white">Contact 3</h1>
            <p class="text-white text-sm">Designation 3</p>
          </div>
          <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
            <div class="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
              <NavLink class="hover:scale-110 transition-all duration-500 delay-200">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <path d="M22 6l-10 7L2 6"></path>
                </svg>
              </NavLink>
              <NavLink class="hover:scale-110 transition-all duration-500 delay-200">
                <svg
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 960 1000"
                >
                  <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
