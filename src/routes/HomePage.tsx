import { FC, useEffect } from 'react';

import HeroSection from '../components/HeroSection/HeroSection';
import QuoteSection from '../components/QuoteSection/QuoteSection';

const HomePage: FC<Record<string, never>> = () => {
  useEffect(() => {
    document.title = 'Home | Zoltán Völcsey';
  }, []);
  return (
    <>
      <HeroSection />
      <QuoteSection />
    </>
  );
};

export default HomePage;
