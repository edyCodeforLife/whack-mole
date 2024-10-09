import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GameComponent from '../src/components/Game';

test('renders game and increments score', () => {
  render(<GameComponent />);
  const scoreElement = screen.getByText(/Score: 0/i);
  expect(scoreElement).toBeInTheDocument();

  const holeElements = screen.getAllByRole('button');
  fireEvent.click(holeElements[0]);
  expect(screen.getByText(/Score: 1/i)).toBeInTheDocument();
});