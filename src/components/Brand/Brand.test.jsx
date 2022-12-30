import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Brand from './Brand';
import { renderWithRouter } from '../../setupTests';

describe('Brand', () => {
  it('renders Brand component with the correct text', () => {
    // Arrange
    renderWithRouter(<Brand />);

    const text = screen.getByText(/Zoltán Völcsey/i).textContent;

    // Assert
    expect(text).toBe('Zoltán Völcsey');
  });
});
