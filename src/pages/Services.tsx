import { motion } from 'motion/react';
import { Briefcase, Search, Truck, Handshake, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "Idea Incubation",
      icon: <Search className="w-12 h-12 text-brand-blue" />,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
      description: "Taking raw concepts and refining them through rigorous stress-testing and strategic planning.",
      problem: "Raw ideas are often vague and lack a clear path to execution.",
      solution: "We apply our 'munging' process to turn vague thoughts into structured business models.",
      process: ["Concept Refinement", "Market Validation", "Feasibility Study", "Strategic Roadmap"],
      outcome: "A fully-formed, actionable business concept."
    },
    {
      title: "Strategy & Growth",
      icon: <Briefcase className="w-12 h-12 text-brand-blue" />,
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000&auto=format&fit=crop",
      description: "Developing the high-level strategy needed to scale your idea from zero to one.",
      problem: "Many great ideas fail due to poor strategic positioning or lack of growth planning.",
      solution: "We build the strategic foundation that ensures long-term scalability and market fit.",
      process: ["Market Positioning", "Growth Hacking", "Revenue Modeling", "Competitive Strategy"],
      outcome: "A robust strategy for sustainable growth."
    },
    {
      title: "Execution Support",
      icon: <Truck className="w-12 h-12 text-brand-blue" />,
      image: "https://images.unsplash.com/photo-1517245327032-96a1c4a161a7?q=80&w=1000&auto=format&fit=crop",
      description: "Providing the operational muscle to turn your strategy into a living, breathing business.",
      problem: "Execution is where most ideas die. Founders often lack the resources to launch effectively.",
      solution: "We provide hands-on support in hiring, operations, and initial launch management.",
      process: ["Operational Setup", "Talent Acquisition", "Launch Management", "Supply Chain Setup"],
      outcome: "A successfully launched and operational business."
    },
    {
      title: "Strategic Partnerships",
      icon: <Handshake className="w-12 h-12 text-brand-blue" />,
      image: "https://images.unsplash.com/photo-1573164064245-0cf657683936?q=80&w=1000&auto=format&fit=crop",
      description: "Connecting your idea with the right partners, investors, and stakeholders.",
      problem: "Ideas need ecosystems to thrive, but finding the right partners is difficult.",
      solution: "We leverage our global network to find the perfect matches for your project.",
      process: ["Partner Scouting", "Due Diligence", "Negotiation Support", "Ecosystem Building"],
      outcome: "Strong, value-adding strategic alliances."
    }
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Our <span className="text-brand-blue">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the strategic foundation and operational support you need to succeed in Africa's most promising markets.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-600 mb-2 uppercase text-xs tracking-widest">The Problem</h4>
                    <p className="text-gray-700">{service.problem}</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-green-600 mb-2 uppercase text-xs tracking-widest">Our Solution</h4>
                    <p className="text-gray-700">{service.solution}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold mb-4">The Process:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {service.process.map((p, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                        <span className="text-gray-700">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-brand-blue rounded-r-lg">
                  <p className="font-bold text-brand-blue">Outcome: <span className="text-gray-800 font-medium">{service.outcome}</span></p>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-brand-blue text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-xl mb-12 opacity-90">Every business is unique. We tailor our approach to your specific goals and market requirements.</p>
          <Link to="/contact" className="btn-secondary border-white text-brand-blue hover:bg-white hover:text-brand-blue">
            Request a Custom Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}
