import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    const scoreElements = screen.queryAllByText(/Score:/i);
    // Assert that there is only one element with the text "Score:"
    expect(scoreElements.length).toBe(1);
  });
});