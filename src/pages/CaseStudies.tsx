import { motion } from 'motion/react';
import { TrendingUp, Users, Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const cases = [
    {
      client: "Global Tech Giant",
      challenge: "Entering the Nigerian fintech space with zero local presence.",
      action: "IdeamungerCo facilitated regulatory licensing, hired the local leadership team, and secured 5 key banking partnerships.",
      result: "Launched in 6 months with 100k+ users in the first quarter.",
      stats: ["6 Months to Launch", "5 Strategic JVs", "100k+ Users"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    {
      client: "European FMCG Brand",
      challenge: "Supply chain disruptions and unreliable local sourcing in East Africa.",
      action: "Vetted and established a new supplier network across Kenya and Tanzania, implementing strict quality control protocols.",
      result: "Reduced sourcing costs by 22% and eliminated stock-outs.",
      stats: ["22% Cost Reduction", "0% Stock-out Rate", "12 Vetted Suppliers"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
    },
    {
      client: "Renewable Energy Startup",
      challenge: "Scaling operations from a pilot project to a national rollout.",
      action: "Developed the national expansion strategy, secured government grants, and managed the local distribution network setup.",
      result: "Expanded to 12 states within 18 months, reaching 50k households.",
      stats: ["12 States Covered", "50k Households", "$2M Grants Secured"],
      image: "https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Real <span className="text-brand-blue">Outcomes</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just promise results. we deliver them. Explore how we've helped businesses scale across Africa.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-32">
          {cases.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="inline-block px-4 py-1 bg-blue-100 text-brand-blue rounded-full text-sm font-bold mb-6">
                  Case Study: {item.client}
                </div>
                <h2 className="text-4xl font-bold mb-8">{item.challenge}</h2>
                
                <div className="space-y-8 mb-10">
                  <div>
                    <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-3">What We Did</h4>
                    <p className="text-lg text-gray-700 leading-relaxed">{item.action}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-600 uppercase text-xs tracking-widest mb-3">The Result</h4>
                    <p className="text-xl font-bold text-gray-900">{item.result}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                      <p className="text-sm font-bold text-brand-blue">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={item.image} 
                    alt={item.client} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-brand-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Your Success Story Starts Here</h2>
          <p className="text-xl mb-12 opacity-80">Let's build the next great African success story together.</p>
          <Link to="/contact" className="btn-primary inline-block">Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}
