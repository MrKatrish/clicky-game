import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ScoreBoard from './components/ScoreBoard';
import shuffleArray from './utils/shuffleArray';

function App() {

  const imagePaths = [];
  for (let i = 1; i <= 12; i++) {
    imagePaths.push(new URL(`./images/character${i}.jpg`, import.meta.url).href);
  }


  const [allImages, setAllImages] = useState(shuffleArray(imagePaths));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);

  useEffect(() => {
    setAllImages(shuffleArray(imagePaths)); // use imagePaths instead of images
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
        {allImages.map((src, index) => (
          <ImageCard key={index} src={src} onClick={() => handleImageClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
