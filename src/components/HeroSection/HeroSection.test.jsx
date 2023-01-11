import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from './HeroSection';
import { renderWithRouter } from '../../setupTests';

describe('HeroSection component', () => {
  it('renders the component with the correct title', async () => {
    // Arrange
    renderWithRouter(<HeroSection />);
    const expectedTitleText = 'Full Stack Web Developer';

    const titleText = screen.getByText(/Full Stack Web Developer/i).textContent;

    // Assert
    expect(titleText).toBe(expectedTitleText);
  });
});
