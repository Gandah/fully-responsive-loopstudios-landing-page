import './HeroStyle.css'
import Header from './Header'
import { useState, useEffect } from 'react';


const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial viewport size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isMobile ? (
      <div className="bg-no-repeat bg-cover bg-left-top hero-background-mobile" >
        <Header />
      </div>
    ) : (
      <div className="hero-background"  >
        <Header />
      </div>
    )
  );
};

export default Hero