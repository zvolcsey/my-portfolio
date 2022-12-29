// https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/
import matchers from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

expect.extend(matchers);

// https://testing-library.com/docs/example-react-router#reducing-boilerplate
export const renderWithRouter = (
  ui: React.ReactElement,
  { route = '/' } = {}
) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
