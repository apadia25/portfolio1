import React from 'react'
import Header from '../../components/Header';
import Introduction from './Introduction';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';
import Education from './Education'
import { useSelector } from 'react-redux';

export default function Index() {
    const {loading, portfolioData} = useSelector((state) => state.root);
  return (
    <div>
        {portfolioData && (
              <div className='bg-primary md:px-24 px-5 lg:px-40'>
              <Header />
              <Introduction />
              <About />
              <Education />
              <Experiences />
              <Projects />
              <Contact />
              <Footer />
              <LeftSider />
              </div>
        )}
    </div>
  )
}

// md=large,Medium 
// lg=large
// sm=noiiiiii