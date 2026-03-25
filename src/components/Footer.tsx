import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-white mb-6 block">
            IDEAMUNGER<span className="text-blue-400">CO</span>
          </Link>
          <p className="text-gray-400 max-w-md mb-8">
            The Idea Bank. We help you grow, refine, and execute feasible ideas in any field. Turning raw thoughts into actionable reality.
          </p>
          <div className="flex space-x-4">
            <a href="https://x.com/OluwadikeOkey" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/ideamunger" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/OluwaDike%20E%20Okechukwu" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="mailto:ideamungerco@gmail.com" className="p-2 bg-gray-800 rounded-full hover:bg-red-500 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Explore</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/idea-generator" className="hover:text-white transition-colors font-bold text-blue-400">AI Idea Generator</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+234 812 454 4439 (WhatsApp)</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+234 916 959 6201</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>ideamungerco@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; 2015 IdeamungerCo. All rights reserved.</p>
      </div>
    </footer>
  );
}
