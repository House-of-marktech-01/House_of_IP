import React from 'react';

const GoogleForm = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScU21_EuxVajsBpYFjK02wvYpewwwLo1-2sMsi6CQkGXTvtwQ/viewform"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        className="shadow-md rounded-md"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
