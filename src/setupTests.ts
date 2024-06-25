// https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

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
