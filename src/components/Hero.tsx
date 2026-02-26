import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80"
          alt="The Mills Interior"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-charcoal"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 tracking-tighter">
            THE <span className="text-gold">MILLS</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            Luxury Dining & Premium Nightlife Experience
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#reservation"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gold text-charcoal px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              Book a Table
            </motion.a>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-gold text-gold px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              View Menu
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
