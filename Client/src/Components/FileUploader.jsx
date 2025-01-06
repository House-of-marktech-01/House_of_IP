import React from 'react';
import PropTypes from 'prop-types';

const FileUploader = ({ formLink }) => {
  const handleRedirect = () => {
    if (formLink) {
      window.location.href = formLink;
    } else {
      alert('Form link is not provided!');
    }
  };

  return (
    <div
      className='lg:w-1/3 bg-slate-800 h-32 flex flex-col justify-center items-center rounded-md shadow-md sticky top-20'
    >
      <h1 className='text-white mb-5 font-roboto'>Upload Your Documents here</h1>
      <button
        onClick={handleRedirect}
        className='h-12 w-32 bg-slate-900-500 font-roboto text-white rounded-md'
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
      >
        Upload
      </button>
    </div>
  );
};

FileUploader.propTypes = {
  formLink: PropTypes.string.isRequired, // Ensures the form link is provided
};

export default FileUploader;
