import React from "react";
import Button from "../Components/Button";

const Card = () => {
  return (
    <div className="w-full bg-white grid grid-cols-1 lg:grid-cols-2 space-y-3 px-5 pb-10 pt-5">
      <div className="group max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-md lg:max-w-lg relative">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://www.jusip.in/wp-content/uploads/2024/02/Patents-India-filling-enforcement.jpg"
            alt="Competition Law Background"
            className="w-full h-40 object-cover"
          />
          {/* Icon */}
          <div className="absolute top-2/3 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Icon"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Content Section with Hover Effect */}
        <div className="p-5 bg-white group-hover:bg-slate-900 group-hover:text-white transition-all duration-700 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h3 className="text-lg font-semibold uppercase text-gray-700 group-hover:text-white mb-2 relative z-20">
            CopyRight
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed mb-4 relative z-20">
            Safeguard your creative works with our specialized copyright
            registration.
          </p>
          <a href="/copyright">
            <Button />
          </a>
        </div>
      </div>
      <div className="group max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-md lg:max-w-lg relative">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://www.jusip.in/wp-content/uploads/2024/02/Copyright-protection-enforcement-india.jpg"
            alt="Competition Law Background"
            className="w-full h-40 object-cover"
          />
          {/* Icon */}
          <div className="absolute top-2/3 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Icon"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Content Section with Hover Effect */}
        <div className="p-5 bg-white group-hover:bg-slate-900 group-hover:text-white transition-all duration-700 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h3 className="text-lg font-semibold uppercase text-gray-700 group-hover:text-white mb-2 relative z-20">
            Design
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed mb-4 relative z-20">
            Protect your unique product designs with our expert legal services.
          </p>
          <a href="/design">
            <Button />
          </a>
        </div>
      </div>
      <div className="group max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-md lg:max-w-lg relative">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://www.jusip.in/wp-content/uploads/2024/02/Trademark-filing-enforcement-India.jpg"
            alt="Competition Law Background"
            className="w-full h-40 object-cover"
          />
          {/* Icon */}
          <div className="absolute top-2/3 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Icon"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Content Section with Hover Effect */}
        <div className="p-5 bg-white group-hover:bg-slate-900 group-hover:text-white transition-all duration-700 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h3 className="text-lg font-semibold uppercase text-gray-700 group-hover:text-white mb-2 relative z-20">
            Patent
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed mb-4 relative z-20">
            Secure your innovations with our comprehensive patent filing and
            protection.
          </p>
          <a href="/patent">
            <Button />
          </a>
        </div>
      </div>
      <div className="group max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-md lg:max-w-lg relative">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://www.jusip.in/wp-content/uploads/2024/02/civil-criminal-general-litigation-lawyer.jpg"
            alt="Competition Law Background"
            className="w-full h-40 object-cover"
          />
          {/* Icon */}
          <div className="absolute top-2/3 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Icon"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* Content Section with Hover Effect */}
        <div className="p-5 bg-white group-hover:bg-slate-900 group-hover:text-white transition-all duration-700 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <h3 className="text-lg font-semibold uppercase text-gray-700 group-hover:text-white mb-2 relative z-20">
            Trademark
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed mb-4 relative z-20">
            Protect your brand with our expert trademark registration and
            defense services.
          </p>
          <a href="/trademark">
            <Button />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
