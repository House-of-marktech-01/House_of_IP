import React from 'react';

const PopularServices = () => {
  return (
    <div className="p-5 bg-white pl-20 border-2 pb-10">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Popular Services</h3>
      <div className="flex flex-wrap gap-3">
        <button className="px-4 py-2 bg-blue-50 text-black border border-blue-200 rounded hover:bg-blue-100">
          Trademark
        </button>
        <button className="px-4 py-2 bg-blue-50 text-black border border-blue-200 rounded hover:bg-blue-100">
          Patent
        </button>
        <button className="px-4 py-2 bg-blue-50 text-black border border-blue-200 rounded hover:bg-blue-100">
          Design
        </button>
        <button className="px-4 py-2 bg-blue-50 text-black border border-blue-200 rounded hover:bg-blue-100">
          Copyright
        </button>
        <button className="px-4 py-2 bg-blue-50 text-black border border-blue-200 rounded hover:bg-blue-100">
          IP Litigation
        </button>
        <button className="px-4 py-2 bg-blue-50 text-black border border-blue-200 rounded hover:bg-blue-100">
          Matrimonial Disputes
        </button>
      </div>
    </div>
  );
};

export default PopularServices;
