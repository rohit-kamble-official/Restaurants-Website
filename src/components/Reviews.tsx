import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Rohan Malhotra",
      role: "Food Critic",
      text: "The ambiance at The Mills is unmatched in Pune. The fusion of industrial aesthetics with luxury dining creates a unique vibe. The cocktails are world-class!",
      rating: 5
    },
    {
      name: "Ananya Deshmukh",
      role: "Lifestyle Blogger",
      text: "Had an amazing dinner here. The staff is incredibly attentive and the Asian cuisine was authentic and flavorful. Definitely my new favorite spot.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Entrepreneur",
      text: "Perfect place for business dinners or a night out with friends. The 24-hour service is a huge plus. The pizza here is surprisingly good!",
      rating: 4
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-charcoal-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Guest Experiences</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-10 rounded-3xl relative group"
            >
              <Quote className="absolute top-6 right-6 text-gold/20 w-12 h-12 group-hover:text-gold/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-gold fill-gold' : 'text-white/20'}`} 
                  />
                ))}
              </div>

              <p className="text-white/80 italic mb-8 leading-relaxed">"{review.text}"</p>
              
              <div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-gold text-sm font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
