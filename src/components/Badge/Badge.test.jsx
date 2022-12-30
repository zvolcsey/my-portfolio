import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Badge from './Badge';

describe('Badge', () => {
  it('renders Badge component with the provided children built-in component', () => {
    // Arrange
    const badgeText = 'Full Stack Developer';
    render(
      <Badge>
        <p>{badgeText}</p>
      </Badge>
    );

    const text = screen.getByText(/full stack developer/i).textContent;

    // Assert
    expect(text).toBe(badgeText);
  });
});
