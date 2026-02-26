import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import About from './components/About';
import Gallery from './components/Gallery';
import PopularTimes from './components/PopularTimes';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal selection:bg-gold selection:text-charcoal">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <InfoCards />
          <About />
          <Gallery />
          <PopularTimes />
          <Reviews />
          <Reservation />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
