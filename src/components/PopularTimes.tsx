import { motion } from 'motion/react';

export default function PopularTimes() {
  const data = [
    { hour: '6 PM', level: 40 },
    { hour: '7 PM', level: 60 },
    { hour: '8 PM', level: 85 },
    { hour: '9 PM', level: 100 },
    { hour: '10 PM', level: 95 },
    { hour: '11 PM', level: 90 },
    { hour: '12 AM', level: 80 },
    { hour: '1 AM', level: 70 },
    { hour: '2 AM', level: 50 },
  ];

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass p-12 rounded-3xl border-gold/20">
          <div className="text-center mb-12">
            <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Peak Hours</h2>
            <h3 className="text-3xl font-display font-bold">Popular Times</h3>
            <p className="text-white/50 mt-2">Plan your visit during our most vibrant hours</p>
          </div>

          <div className="flex items-end justify-between gap-2 h-64 md:h-80">
            {data.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="relative w-full flex justify-center">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="w-full max-w-[40px] bg-gradient-to-t from-gold/20 to-gold rounded-t-lg group-hover:to-gold-light transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-gold font-bold text-xs">
                      {item.level}%
                    </div>
                  </motion.div>
                </div>
                <span className="text-[10px] md:text-xs text-white/40 font-medium uppercase tracking-tighter">
                  {item.hour}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
