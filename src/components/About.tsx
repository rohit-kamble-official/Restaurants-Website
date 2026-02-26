import { motion } from 'motion/react';
import { Star, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              A Symphony of Flavors <br /> & Elegance
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Located in the heart of Pune at Raja Bahadur Mill Road, The Mills is more than just a restaurant. 
              It's a sanctuary for those who appreciate the finer things in life. From curated cocktails to 
              world-class multi-cuisine dishes, every detail is crafted to provide an unforgettable experience.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Star className="text-gold w-6 h-6 fill-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.5</p>
                  <p className="text-white/50 text-xs uppercase tracking-tighter">1,180+ Reviews</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <Clock className="text-gold w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-white/50 text-xs uppercase tracking-tighter">Open All Hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
                alt="Fine Dining"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-gold/30 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
