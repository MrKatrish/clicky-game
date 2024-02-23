import React from 'react';

const ImageCard = ({ src, onClick }) => {
  return <img src={src} alt="Character" onClick={onClick} />;
};

export default ImageCard;
