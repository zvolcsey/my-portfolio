import { FC, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/Layout';

const HomePage = lazy(() => {
  return import('./pages/HomePage');
});

const ProjectsPage = lazy(() => {
  return import('./pages/ProjectsPage');
});

const AboutPage = lazy(() => {
  return import('./pages/AboutPage');
});

const App: FC<Record<string, never>> = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );

  return <>{routes}</>;
};

export default App;
