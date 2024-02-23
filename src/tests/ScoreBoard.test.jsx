// ScoreBoard.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ScoreBoard from '../components/ScoreBoard';

describe('ScoreBoard', () => {
  it('renders the score and high score correctly', () => {
    render(<ScoreBoard score={4} highScore={10} />);
    expect(screen.getByText(/Score: 4/i)).toBeInTheDocument();
    expect(screen.getByText(/High Score: 10/i)).toBeInTheDocument();
  });
});
