import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Game from '../src/components/Game';

jest.useFakeTimers();

test('renders game and increments score', () => {
  // Render the Game component
  render(<Game />);

  // Verify initial score is 0
  const scoreElement = screen.getByText(/Score: 0/i);
  expect(scoreElement).toBeInTheDocument();

  // Start the game
  const startButton = screen.getByText(/Start Game/i);
  fireEvent.click(startButton);

  // Fast-forward until the mole appears
  act(() => {
    jest.advanceTimersByTime(1000);
  });

  // Find the mole and simulate a click
  const moleElement = screen.getByAltText(/Mole/i);
  fireEvent.click(moleElement);

  // Verify the score is incremented to 1
  const updatedScoreElement = screen.getByText(/Score: 1/i);
  expect(updatedScoreElement).toBeInTheDocument();

  // Stop the game
  const stopButton = screen.getByText(/Stop Game/i);
  fireEvent.click(stopButton);
});