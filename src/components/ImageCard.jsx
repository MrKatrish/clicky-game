import React from 'react';

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="img-thumbnail custom-image-class"
      onClick={onClick} 
    />
  );
};

export default ImageCard;
