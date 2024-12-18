import React, { useState, useEffect } from "react";

const DisclaimerModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4">
        <h2 className="text-xl font-bold mb-4 text-black">Disclaimer</h2>
        <p className="text-xs mb-4 text-gray-800">
          The rules of the Indian Bar Council prohibit lawyers and law firms
          from advertising or soliciting work through communication in the
          public domain. This website is not a means for advertisement or
          solicitation. Its sole purpose is to provide you the information you
          seek. JustiSphereX Legal has no intention to advertise or solicit
          clients through this website. Please note that all decisions you take
          from the information provided in the website are your personal
          decisions and we will bear no responsibility towards them. By clicking
          on 'I AGREE', you acknowledge that the information provided in the
          website (a) does not amount to advertising or solicitation and (b) is
          meant only for your information. If you do not consent to these terms,
          please click on 'I DISAGREE' and you will be diverted from this
          website.
        </p>
        <div className="flex justify-between">
          <button
            onClick={() => onClose(false)}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Disagree
          </button>
          <button
            onClick={() => onClose(true)}
            className="px-4 py-2 bg-slate-900 text-white rounded-md"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
