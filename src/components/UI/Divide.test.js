import { render, screen } from '@testing-library/react';
import Divide from './Divide';

it('renders Divide component with the text AND', () => {
  // Arrange
  render(<Divide text='AND' />);

  // Arrange
  expect(screen.getByText(/AND/i));
});

it('renders Divide component with the text OR', () => {
  // Arrange
  render(<Divide text='OR' />);

  // Arrange
  expect(screen.getByText(/OR/i));
});
