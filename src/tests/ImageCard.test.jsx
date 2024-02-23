// ImageCard.test.jsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ImageCard from '../components/ImageCard';

test('renders ImageCard component', () => {
  const { getByAltText } = render(<ImageCard src="../images/character1.jpg" alt="Test Image" />);
  const image = getByAltText('Test Image');
  expect(image).toBeTruthy();
});

test('calls onClick when image is clicked', () => {
  const onClickMock = jest.fn();
  const { getByAltText } = render(
    <ImageCard src="../images/character1.jpg" alt="Test Image" onClick={onClickMock} />
  );
  const image = getByAltText('Test Image');
  fireEvent.click(image);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('adds animation class on hover', () => {
  const { getByAltText } = render(<ImageCard src="../images/character1.jpg" alt="Test Image" />);
  const image = getByAltText('Test Image');
  fireEvent.mouseEnter(image);
  expect(image.classList.contains('image-card-hover')).toBeTruthy();
});

test('adds lost class after losing', () => {
  const { getByAltText } = render(<ImageCard src="../images/character1.jpg" alt="Test Image" lost />);
  const image = getByAltText('Test Image');
  expect(image.classList.contains('image-card-lost')).toBeTruthy();
});