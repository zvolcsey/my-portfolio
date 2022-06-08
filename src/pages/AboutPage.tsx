import { FC, useEffect } from 'react';

const AboutPage: FC<{}> = () => {
  useEffect(() => {
    document.title = 'About Me | Zoltán Völcsey';
  }, []);

  return <p>About Page</p>;
};

export default AboutPage;
