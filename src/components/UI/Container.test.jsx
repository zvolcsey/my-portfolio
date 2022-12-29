import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Container from './Container';

describe('Container', () => {
  it('renders Container component with the provided children built-in component', () => {
    // Arrange
    render(
      <Container>
        <h1>Hello World!</h1>
      </Container>
    );

    const text = screen.getByText(/hello world!/i).textContent;

    // Assert
    expect(text).toBe('Hello World!');
  });
});
