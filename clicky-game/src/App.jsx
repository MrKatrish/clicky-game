import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ScoreBoard from './components/ScoreBoard';
import shuffleArray from './utils/shuffleArray'; // You'll write this utility function to shuffle images
import images from './data/images'; // Assume this is an array of image objects

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  const [allImages, setAllImages] = useState(shuffleArray(images));

  useEffect(() => {
    setAllImages(shuffleArray(images));
  }, [score]);

  const handleImageClick = (id) => {
    if (clickedImages.includes(id)) {
      setScore(0);
      setClickedImages([]);
    } else {
      setScore(score + 1);
      setClickedImages([...clickedImages, id]);
      if (score >= highScore) {
        setHighScore(score + 1);
      }
    }
    setAllImages(shuffleArray(allImages));
  };

  return (
    <div>
      <ScoreBoard score={score} highScore={highScore} />
      <div>
        {allImages.map((image) => (
          <ImageCard key={image.id} image={image} onClick={() => handleImageClick(image.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
