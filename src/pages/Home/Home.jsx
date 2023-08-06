import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import ServiceSteps from './ServiceSteps/ServiceSteps';
import ContactSection from './ContactSection/ContactSection';
import GallerySection from './GallerySection/GallerySection';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = 'Marvel' + " | " + 'Home';
  }, [location]);
    return (
        <div>
          <Banner />   
          <ShopByCategory />
          <GallerySection />
          <ServiceSteps />
          <ContactSection />
        </div>
    );
};

export default Home;