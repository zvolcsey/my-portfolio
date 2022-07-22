import { FC, useEffect } from 'react';

import HeroSection from '../components/HeroSection/HeroSection';

const HomePage: FC<{}> = () => {
  useEffect(() => {
    document.title = 'Home | Zoltán Völcsey';
  }, []);
  return <HeroSection />;
};

export default HomePage;
