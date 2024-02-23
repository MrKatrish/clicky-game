function ScoreBoard({ score, highScore }) {
    return (
      <div>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    );
  }
  
  export default ScoreBoard;