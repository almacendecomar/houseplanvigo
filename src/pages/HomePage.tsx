import { Helmet } from 'react-helmet';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import About from '../components/home/About';
import Amenities from '../components/home/Amenities';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Houseplan | Alojamiento Turístico en Vigo</title>
        <meta name="description" content="Disfruta de una experiencia única en nuestro alojamiento turístico en Vigo. Confort y tranquilidad en una ciudad privilegiada." />
      </Helmet>
      
      <Hero />
      <Features />
      <About />
      <Amenities />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;