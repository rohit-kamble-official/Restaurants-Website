import { motion } from 'motion/react';
import { MapPin, Star, Clock, Utensils } from 'lucide-react';

export default function InfoCards() {
  const cards = [
    {
      icon: <MapPin className="w-8 h-8 text-gold" />,
      title: "Location",
      description: "Raja Bahadur Mill Rd, Pune",
      link: "#footer"
    },
    {
      icon: <Star className="w-8 h-8 text-gold" />,
      title: "Rating",
      description: "4.5 (1.2K reviews)",
      link: "#reviews"
    },
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      title: "Open Hours",
      description: "Open 24 Hours",
      link: "#home"
    },
    {
      icon: <Utensils className="w-8 h-8 text-gold" />,
      title: "Multi-cuisine",
      description: "Pizza, Asian, Bar Bites",
      link: "#menu"
    }
  ];

  return (
    <section className="py-12 bg-charcoal relative z-20 -mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href={card.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center transition-all group"
            >
              <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:bg-gold/20 transition-colors">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{card.title}</h4>
              <p className="text-white/60 text-sm">{card.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
