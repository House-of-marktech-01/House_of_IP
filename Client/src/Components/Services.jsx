import React from 'react';

const PopularServices = () => {
  return (
    <div className=" pt-5 bg-slate-100 border-2 pb-10 px-5 lg:px-20">
      <h3 className="text-lg font-semibold text-slate-900 mb-4 pl-1">Popular Services</h3>
      <div className="flex flex-wrap gap-3">
        <a href="/" className="px-4 py-2 bg-blue-50 text-xs text-black border border-blue-200 rounded hover:bg-blue-100">
          Trademark
        </a>
        <a href="/" className="px-4 py-2 bg-blue-50 text-xs text-black border border-blue-200 rounded hover:bg-blue-100">
          Patent
        </a>
        <a href="/" className="px-4 py-2 bg-blue-50 text-xs text-black border border-blue-200 rounded hover:bg-blue-100">
          Design
        </a>
        <a href="/" className="px-4 py-2 bg-blue-50 text-xs text-black border border-blue-200 rounded hover:bg-blue-100">
          Copyright
        </a>
        <a href="/" className="px-4 py-2 bg-blue-50 text-xs text-black border border-blue-200 rounded hover:bg-blue-100">
          IP Litigation
        </a>
        <a href="/" className="px-4 py-2 bg-blue-50 text-xs text-black border border-blue-200 rounded hover:bg-blue-100">
          Matrimonial Disputes
        </a>
      </div>
    </div>
  );
};

export default PopularServices;
