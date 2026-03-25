import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-extrabold mb-8"
              >
                Let's <span className="text-brand-blue">Talk</span>
              </motion.h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Ready to expand your business into Africa? Whether you have a specific project in mind or just want to explore the possibilities, we're here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-gray-600">ideamungerco@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-green-100 p-4 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp</h4>
                    <p className="text-gray-600">+234 812 454 4439</p>
                    <a href="https://wa.me/2348124544439" target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold text-sm hover:underline">Chat Now</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-gray-600">+234 916 959 6201</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-purple-100 p-4 rounded-xl">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Social Media</h4>
                    <div className="flex space-x-6 mt-4">
                      <a href="https://instagram.com/ideamunger" target="_blank" rel="noopener noreferrer" className="p-3 bg-pink-50 rounded-full text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-sm">
                        <Instagram className="w-6 h-6" />
                      </a>
                      <a href="https://x.com/OluwadikeOkey" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-50 rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transition-all shadow-sm">
                        <Twitter className="w-6 h-6" />
                      </a>
                      <a href="https://facebook.com/OluwaDike%20E%20Okechukwu" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        <Facebook className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-xl mb-4">Book a Strategy Call</h4>
                <p className="text-gray-600 mb-6">Prefer a direct conversation? Schedule a 30-minute discovery call via Calendly.</p>
                <a href="#inquiry-form" className="btn-primary inline-block">Schedule on Calendly</a>
              </div>
            </div>

            <motion.div 
              id="inquiry-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100"
            >
              <h3 className="text-3xl font-bold mb-8">Send an Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-500">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-500">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-500">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Acme Corp" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-500">Business Need</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white">
                    <option>Market Entry Strategy</option>
                    <option>Business Development</option>
                    <option>Product Sourcing</option>
                    <option>Local Partnerships</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-500">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all" placeholder="Tell us about your goals..."></textarea>
                </div>
                <button className="w-full btn-primary flex items-center justify-center space-x-2 py-5">
                  <span>Send Inquiry</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
