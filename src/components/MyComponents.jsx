import React from 'react';

const generateImagePath = (imageName) => require(`../../images/${imageName}.jpg`);

function MyComponent() {

  const imageNames = Array.from({ length: 12 }, (_, i) => `character${i + 1}`);


  const imagePaths = imageNames.map(name => generateImagePath(name));

  return (
    <div>
      {imagePaths.map((src, index) => (
        <img key={index} src={src} alt={`Character ${index + 1}`} style={{ width: '100px', height: 'auto' }} />
      ))}
    </div>
  );
}

export default MyComponent;
