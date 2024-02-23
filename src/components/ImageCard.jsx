import React from 'react';

const ImageCard = ({ src, onClick }) => {
  return (
    <img 
      src={src} 
      alt="Character" 
      className="img-thumbnail custom-image-class"
      onClick={onClick} 
    />
  );
};

export default ImageCard;
