import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Divide from './Divide';

describe('Divide', () => {
  it('renders Divide component with the text AND', () => {
    // Arrange
    render(<Divide text="AND" />);

    const text = screen.getByText(/AND/i).textContent;

    // Assert
    expect(text).toBe('AND');
  });

  it('renders Divide component with the text OR', () => {
    // Arrange
    render(<Divide text="OR" />);

    const text = screen.getByText(/OR/i).textContent;

    // Assert
    expect(text).toBe('OR');
  });
});
