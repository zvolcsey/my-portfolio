import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './routes/root';

const HomePage = lazy(() => {
  return import('./routes/HomePage');
});

const ProjectsPage = lazy(() => {
  return import('./routes/ProjectsPage');
});

const AboutPage = lazy(() => {
  return import('./routes/AboutPage');
});

const ErrorPage = lazy(() => {
  return import('./errors/error-page');
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
