import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe, TrendingUp, Users, ShieldCheck, Lightbulb, Sparkles, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CountUp({ value, suffix = "" }: { value: string; suffix?: string }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) => `${latest}${suffix}`);

  useEffect(() => {
    const controls = animate(count, numericValue, { duration: 10, ease: "easeOut" });
    return controls.stop;
  }, [numericValue, count]);

  return <motion.span>{displayValue}</motion.span>;
}

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Lightbulb className="w-3 h-3" />
              <span>The Idea Bank</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Grow Your <span className="text-brand-blue">Ideas</span> Into Reality
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              IdeamungerCo is where raw thoughts are refined and deposited. We help you incubate, strategize, and execute feasible ideas in any field.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/idea-generator" className="btn-primary flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Get AI-Generated Ideas</span>
              </Link>
              <Link to="/contact" className="btn-secondary text-center">
                Book a Strategy Call
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-brand-blue rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                alt="Idea Growth" 
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-xl p-12 rounded-full border border-white/20">
                  <Lightbulb className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <TrendingUp className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Idea Feasibility</p>
                  <p className="text-xl font-bold">Actionable & Real</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Idea Bank Concept Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What is an Idea Bank?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Most ideas die because they lack a safe place to grow. IdeamungerCo is that place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Deposit",
              desc: "Bring your raw, unrefined thoughts to us. No idea is too small or too wild to be munged.",
              icon: <ArrowRight className="w-8 h-8 text-brand-blue rotate-90" />
            },
            {
              title: "Incubate",
              desc: "We refine, stress-test, and add the necessary strategy to make your idea feasible and scalable.",
              icon: <RefreshCw className="w-8 h-8 text-brand-blue" />
            },
            {
              title: "Withdraw",
              desc: "Take out a fully-formed, actionable business plan or project roadmap ready for execution.",
              icon: <ArrowRight className="w-8 h-8 text-brand-blue -rotate-90" />
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-gray-50 rounded-2xl border border-gray-100 transition-all text-center"
            >
              <div className="mb-6 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Simple Breakdown */}
      <section className="section-padding bg-brand-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">What We Do</h2>
            <div className="space-y-6">
              {[
                "Market Entry Strategy & Research",
                "Business Development & Sales Pipeline",
                "Product Sourcing & Supply Chain",
                "Local Partnership & JV Facilitation"
              ].map((service, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <CheckCircle2 className="text-blue-400 w-6 h-6 flex-shrink-0" />
                  <span className="text-xl font-medium">{service}</span>
                </div>
              ))}
            </div>
            <Link to="/services" className="mt-12 inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors">
              <span>View all services</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 p-8 rounded-2xl text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp value="10" suffix="+" />
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Countries</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl text-center mt-8">
              <p className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp value="50" suffix="+" />
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Projects</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">
                $<CountUp value="100" suffix="M+" />
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Value Created</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl text-center mt-8">
              <p className="text-4xl font-bold text-blue-400 mb-2">
                <CountUp value="95" suffix="%" />
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-widest">Client Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <div className="bg-blue-100 text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 self-start">
              Free Resource
            </div>
            <h3 className="text-3xl font-bold mb-4">Market Entry Guide for Africa</h3>
            <p className="text-gray-600 mb-8">
              Download our comprehensive guide on navigating the complexities of African markets. Learn about regulatory hurdles, cultural nuances, and growth strategies.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              />
              <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all whitespace-nowrap">
                Get the Guide
              </button>
            </form>
          </div>
          <div className="md:w-1/2 bg-brand-blue relative overflow-hidden flex items-center justify-center p-12">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L100 0 L100 100 Z" fill="white" />
              </svg>
            </div>
            <div className="relative z-10 text-center">
              <Globe className="w-24 h-24 text-white mx-auto mb-6 opacity-50" />
              <p className="text-white font-bold text-xl">2024 Edition Now Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-blue text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to Scale in Africa?</h2>
          <p className="text-xl text-blue-100 mb-12">
            Don't leave your expansion to chance. Partner with experts who know the terrain.
          </p>
          <Link to="/contact" className="bg-white text-brand-blue px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl">
            Book Your Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
