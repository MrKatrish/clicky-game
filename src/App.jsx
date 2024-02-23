import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ScoreBoard from './components/ScoreBoard';
import shuffleArray from './utils/shuffleArray';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure this imports your CSS with animations

function App() {
  const initialImages = shuffleArray([...Array(12).keys()].map(i => ({
    id: i,
    src: new URL(`./images/character${i + 1}.jpg`, import.meta.url).href,
  })));

  const [images, setImages] = useState(initialImages);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [message, setMessage] = useState('');
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  const handleImageClick = (id) => {
    if (clickedIds.includes(id)) {
      setMessage('Your guess was incorrect - Start Over!');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setScore(0);
      setClickedIds([]);
    } else {
      setMessage('Your guess was correct!');
      setScore(prev => prev + 1);
      setClickedIds(prev => [...prev, id]);
    }
    setImages(shuffleArray(images));
  };

  return (
    <div className="container text-center">
      <h1 className="my-4">Clicky Game - Can you beat it?</h1>
      <h2 className="feedback-message">{message}</h2>
      <ScoreBoard score={score} highScore={highScore} />
      <div className={`row ${shake ? 'shake-animation' : ''}`}>
        {images.map(({ id, src }) => (
          <div key={id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <ImageCard src={src} onClick={() => handleImageClick(id)} className="image-card" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
