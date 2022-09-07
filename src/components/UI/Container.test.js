import { render, screen } from '@testing-library/react';
import Container from './Container';

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
