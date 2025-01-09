import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import BaseUrl from "../../BaseUrl"

Modal.setAppElement('#root');

const FileUploader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formContent, setFormContent] = useState('');

  const fetchFormContent = async () => {
    try {
      const response = await fetch(`${BaseUrl}fetchtrademark`);
      console.log(response)
      const data = await response.text();
      setFormContent(data);
    } catch (error) {
      console.error('Failed to fetch form content:', error);
    }
  };

  const openModal = () => {
    fetchFormContent();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="lg:w-1/3 bg-slate-800 h-32 flex flex-col justify-center items-center rounded-md shadow-md sticky top-20">
      <h1 className="text-white mb-5 font-roboto">Upload Your Documents here</h1>
      <button
        onClick={openModal}
        className="h-12 w-32 bg-slate-900 font-roboto text-white rounded-md"
      >
        Upload
      </button>

      {/* Modal for Google Form */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="flex flex-col h-full">
          <button
            onClick={closeModal}
            className="self-end mb-2 px-3 py-1 bg-red-500 text-white rounded-md"
          >
            Close
          </button>
          <div
            dangerouslySetInnerHTML={{ __html: formContent }}
            style={{ overflowY: 'auto', maxHeight: '80vh' }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default FileUploader;
