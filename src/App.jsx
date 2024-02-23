import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ScoreBoard from './components/ScoreBoard';
import shuffleArray from './utils/shuffleArray';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
    setAllImages(shuffleArray(imagePaths));
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

    <div className="container bg-gray">
    <div className="row my-4">
      <div className="col-12 text-center">
        <h1 className="game-title">Clicky Game - Can you beat it?</h1>
      </div>
    </div>
<div className="container">
  <div className="row my-4">
    <div className="col-12">
      <ScoreBoard score={score} highScore={highScore} />
    </div>
  </div>
  <div className="row">
    {allImages.map((src, index) => (
      <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
        <ImageCard src={src} onClick={() => handleImageClick(index)} />
      </div>
    ))}
  </div>
</div>
</div>
  );
}

export default App;
