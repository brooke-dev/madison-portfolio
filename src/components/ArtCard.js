import React, { useState } from 'react';
import Modal from './Modal';

const ArtCard = ({ title, description, image, additionalInfo, date, inStock, quantity}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="art-card  p-4" onClick={handleModalOpen}>
        <img  className="max-w-xs mx-auto" src={image} alt={title} />
      </div>
      {isModalOpen && (
        <Modal 
          onClose={handleModalClose} 
          title={title} 
          description={description} 
          image={image} 
          additionalInfo={additionalInfo} 
          date={date}
          inStock={inStock}
          quantity={quantity}
          />
      )}
    </div>
  );
};

export default ArtCard;
