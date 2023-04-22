
import React from 'react';

const Modal = ({ onClose, title, description, additionalInfo, image, date }) => {
  return (
    <>
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={onClose}></div>
      <div className="modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="modal-content bg-white p-8 py-10 flex flex-col lg:flex-row justify-center items-center space-x-8 w-full max-w-3xl h-full max-h-4xl lg:p-16 lg:space-x-16 overflow-y-auto">
          <div className="carousel-container flex-shrink-0 w-full max-w-lg h-full overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="info-container flex-grow w-full max-w-xl flex flex-col justify-center items-center lg:items-start relative">
            <button  className="modal-close top-0 right-0 mt-4 mr-4 px-2 py-1 text-sm font-medium leading-none text-gray-700 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"onClick={onClose}>Close
            </button>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="mb-8">{description}</p>
            {additionalInfo && <p className="mb-8">{additionalInfo}</p>}
            {date && <p className="text-center italic">{date}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
