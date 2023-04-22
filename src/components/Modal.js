
import React from 'react';

const Modal = ({ onClose, title, description, additionalInfo, image }) => {
  return (
    <>
      <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={onClose}></div>
      <div className="modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="modal-content bg-white p-8 py-10 flex flex-col lg:flex-row justify-center items-center space-x-8 w-full max-w-3xl h-full max-h-4xl lg:p-16 lg:space-x-16 overflow-y-auto">
          <div className="carousel-container flex-shrink-0 w-full max-w-lg h-full overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="info-container flex-grow w-full max-w-xl flex flex-col justify-center items-center lg:items-start relative">
            <button  className="modal-close absolute top-0 right-0 mt-4 mr-4 px-2 py-1 text-sm font-medium leading-none text-gray-700 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"onClick={onClose}>Close
              {/* <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/>
              </svg> */}
            </button>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="mb-8">{description}</p>
            {additionalInfo && <p className="mb-8">{additionalInfo}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
