// ImageCard.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ImageCard from '../components/ImageCard';

describe('ImageCard', () => {
  it('displays the image correctly', () => {
    const testImage = { url: 'https://example.com/image.jpg', name: 'Test Image' };
    render(<ImageCard image={testImage} onClick={() => {}} />);
    const image = screen.getByRole('img', { name: /Test Image/i });
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(image).toHaveAttribute('alt', 'Test Image');
  });
});
