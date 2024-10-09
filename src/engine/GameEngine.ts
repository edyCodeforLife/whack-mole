import { useState, useEffect } from 'react';

interface GameEngineProps {
  moleCount: number;
  moleInterval: number;
}

const useGameEngine = ({ moleCount, moleInterval }: GameEngineProps) => {
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setMoleIndex(Math.floor(Math.random() * moleCount));
        setElapsedTime((prevTime) => prevTime + 1);
      }, moleInterval);
    }

    return () => clearInterval(interval);
  }, [isRunning, moleCount, moleInterval]);

  const startGame = () => {
    setScore(0);
    setElapsedTime(0);
    setIsRunning(true);
  };

  const stopGame = () => {
    setIsRunning(false);
    setMoleIndex(null);
  };

  const handleMoleClick = () => {
    if (isRunning && moleIndex !== null) {
      setScore((prevScore) => prevScore + 1);
      setMoleIndex(null);
    }
  };

  return {
    score,
    moleIndex,
    isRunning,
    elapsedTime,
    startGame,
    stopGame,
    handleMoleClick,
  };
};

export default useGameEngine;