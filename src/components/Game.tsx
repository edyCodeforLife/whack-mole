import React from 'react';
import useGameEngine from '../engine/GameEngine';
import Hole from './Hole';
import '../styles/Game.css';

const Game: React.FC = () => {
  const {
    score,
    moleIndex,
    isRunning,
    elapsedTime,
    startGame,
    stopGame,
    handleMoleClick,
  } = useGameEngine({ moleCount: 9, moleInterval: 1000 });

  return (
    <div className="game">
      <h1>Whack-a-Mole</h1>
      <p>Score: {score}</p>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <div className="controls">
        {!isRunning ? (
          <button onClick={startGame}>Start Game</button>
        ) : (
          <button onClick={stopGame}>Stop Game</button>
        )}
      </div>
      <div className="grid">
        {Array.from({ length: 9 }).map((_, index) => (
          <Hole
            key={index}
            isActive={moleIndex === index}
            onClick={handleMoleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;