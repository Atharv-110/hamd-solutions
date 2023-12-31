import React, { useEffect } from 'react';
import { Footer, HeaderFive, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CreativeArea from './creative-area';
import HeroArea from '../home-5/hero-area';
import NewsLetter from './news-letter';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import Testimonial from './testimonial';
import ContactMain from '../../../components/contact';


const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, [])
  return (
    <Wrapper>
      <HeaderFive />
      <HeroArea />
      <CreativeArea/>
      <BrandArea/>
      <ServicesArea/>
      <ProjectArea/>
      <Testimonial/>
      {/* <BlogArea/> */}
      <ContactMain />
      {/* <NewsLetter/> */}
      <Footer/>
    </Wrapper>
  );
};

export default Home;