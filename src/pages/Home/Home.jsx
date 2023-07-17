import React from 'react';
import Banner from './Banner/Banner';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import ServiceSteps from './ServiceSteps/ServiceSteps';
import ContactSection from './ContactSection/ContactSection';
import GallerySection from './GallerySection/GallerySection';

const Home = () => {
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