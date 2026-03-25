import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, Sparkles, ArrowRight, Loader2, Target, TrendingUp, ShieldCheck, RefreshCw } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

import { Link } from 'react-router-dom';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface GeneratedIdea {
  title: string;
  description: string;
  feasibilityScore: number;
  marketPotential: string;
  firstSteps: string[];
  challenges: string[];
}

export default function IdeaGenerator() {
  const [field, setField] = useState('');
  const [loading, setLoading] = useState(false);
  const [idea, setIdea] = useState<GeneratedIdea | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateIdea = async () => {
    if (!field.trim()) return;
    
    setLoading(true);
    setError(null);
    setIdea(null);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate a highly feasible, actionable, and creative business or project idea in the field of: ${field}. 
        Return the response in strict JSON format with the following structure:
        {
          "title": "Short catchy title",
          "description": "Detailed explanation of the idea",
          "feasibilityScore": 1-100,
          "marketPotential": "Brief analysis of market potential",
          "firstSteps": ["Step 1", "Step 2", "Step 3"],
          "challenges": ["Challenge 1", "Challenge 2"]
        }`,
        config: {
          responseMimeType: "application/json"
        }
      });

      const result = JSON.parse(response.text || '{}');
      setIdea(result);
    } catch (err) {
      console.error(err);
      setError("Failed to generate idea. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-blue-100 text-brand-blue px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Idea Bank</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Withdraw Your Next <span className="text-brand-blue">Big Idea</span>
          </h1>
          <p className="text-xl text-gray-600">
            Enter a field or a problem you're passionate about, and our AI will "munger" it into a feasible, actionable business concept.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-12">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-gray-500">Field of Interest / Problem</label>
                <input 
                  type="text" 
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all text-lg" 
                  placeholder="e.g. Sustainable Fashion, Urban Farming, AI for Seniors..." 
                />
              </div>
              <button 
                onClick={generateIdea}
                disabled={loading || !field.trim()}
                className="w-full btn-primary flex items-center justify-center space-x-2 py-5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Munging Idea...</span>
                  </>
                ) : (
                  <>
                    <Lightbulb className="w-6 h-6" />
                    <span>Generate Feasible Idea</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 bg-red-50 text-red-600 rounded-xl text-center mb-8 border border-red-100"
              >
                {error}
              </motion.div>
            )}

            {idea && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="bg-brand-blue p-8 text-white">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-bold">{idea.title}</h2>
                    <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg">
                      <p className="text-xs uppercase font-bold opacity-80">Feasibility</p>
                      <p className="text-2xl font-black">{idea.feasibilityScore}%</p>
                    </div>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed">{idea.description}</p>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-2 mb-4 text-brand-blue">
                      <Target className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-wider text-sm">Market Potential</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{idea.marketPotential}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 mb-4 text-green-600">
                      <TrendingUp className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-wider text-sm">First Steps</h4>
                    </div>
                    <ul className="space-y-2">
                      {idea.firstSteps.map((step, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-600">
                          <span className="text-green-500 font-bold">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-2 mb-4 text-red-500">
                      <ShieldCheck className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-wider text-sm">Key Challenges</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {idea.challenges.map((challenge, i) => (
                        <span key={i} className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium border border-red-100">
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-center">
                  <button 
                    onClick={generateIdea}
                    className="flex items-center space-x-2 text-brand-blue font-bold hover:underline"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Another Angle</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Need help executing this idea?</h3>
          <p className="text-gray-600 mb-8">
            Ideas are just the beginning. IdeamungerCo provides the strategic support, market research, and execution power to turn these AI-generated concepts into real businesses.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" className="btn-primary">Consult with an Expert</Link>
            <Link to="/services" className="btn-secondary">View Execution Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
