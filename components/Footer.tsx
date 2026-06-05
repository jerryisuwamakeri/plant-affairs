import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-800 text-white/80">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="relative w-8 h-8">
              <Image src="/images/logo.jpg" alt="BML Trees" fill className="object-cover rounded-full" />
            </div>
            <span className="font-serif text-xl text-white">BML Trees</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Premium plants, garden services and expert horticultural advice for homes and businesses across Nigeria.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-serif text-white text-base mb-5">Shop Plants</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/shop/indoor" className="hover:text-white transition-colors">Indoor Plants</Link></li>
            <li><Link href="/shop/outdoor" className="hover:text-white transition-colors">Outdoor Plants</Link></li>
            <li><Link href="/shop/fruit" className="hover:text-white transition-colors">Fruit Plants</Link></li>
            <li><Link href="/shop/indoor?sub=air-purifying" className="hover:text-white transition-colors">Air Purifying</Link></li>
            <li><Link href="/shop/indoor?sub=succulents" className="hover:text-white transition-colors">Succulents & Cacti</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-white text-base mb-5">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/services/garden-needs" className="hover:text-white transition-colors">Garden Needs</Link></li>
            <li><Link href="/services/landscaping" className="hover:text-white transition-colors">Landscaping</Link></li>
            <li><Link href="/services/landscaping?sub=design" className="hover:text-white transition-colors">Garden Design</Link></li>
            <li><Link href="/services/landscaping?sub=maintenance" className="hover:text-white transition-colors">Maintenance Plans</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-white text-base mb-5">Find Us</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={14} className="flex-shrink-0 mt-0.5 text-sage" />
              <span>23 Botanical Avenue, Wuse II, Abuja, Nigeria</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={14} className="flex-shrink-0 mt-0.5 text-sage" />
              <a href="tel:+2348066465246" className="hover:text-white transition-colors">+234 806 646 5246</a>
            </li>
            <li className="flex gap-2.5">
              <Mail size={14} className="flex-shrink-0 mt-0.5 text-sage" />
              <a href="mailto:info@bmltrees.com" className="hover:text-white transition-colors">info@bmltrees.com</a>
            </li>
          </ul>
          <div className="mt-5 text-sm">
            <p className="text-white/50 text-xs mb-1 uppercase tracking-wider">Opening Hours</p>
            <p>Mon–Sat: 8:00 – 18:00</p>
            <p>Sunday: 10:00 – 15:00</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} BML Trees. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
