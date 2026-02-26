import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-charcoal-light pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="text-gold w-8 h-8" />
              <span className="text-2xl font-display font-bold tracking-tighter">
                THE <span className="text-gold">MILLS</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Pune's premier destination for luxury dining and vibrant nightlife. Experience elegance in every detail.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#reservation" className="hover:text-gold transition-colors">Reservations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-1" />
                <span>Raja Bahadur Mill Rd, Sangamvadi, Pune, Maharashtra 411001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 20 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>info@themills.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-48 border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.965842886737!2d73.8715!3d18.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f999999999%3A0x6666666666666666!2sThe%20Mills!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-white/30 text-sm">
          <p>&copy; {new Date().getFullYear()} The Mills Pune. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
