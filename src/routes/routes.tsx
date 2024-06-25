import { lazy } from 'react';

export const HomePage = lazy(() => {
  return import('./HomePage');
});

export const ProjectsPage = lazy(() => {
  return import('./ProjectsPage');
});

export const AboutPage = lazy(() => {
  return import('./AboutPage');
});

export const ErrorPage = lazy(() => {
  return import('../errors/error-page');
});
