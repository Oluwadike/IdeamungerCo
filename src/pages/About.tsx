import { motion } from 'motion/react';
import { Quote, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export default function About() {
  const [caricatureUrl, setCaricatureUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function generateImage() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
        const prompt = "A high-quality, professional digital caricature of a Black man with a well-groomed beard, wearing a stylish maroon double-breasted suit and a light pink shirt. He is posing with one hand near his chin, showing a sophisticated and confident expression. The style should be clean, vibrant, and artistic, suitable for a professional business 'About' page. White background.";
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }]
          },
          config: {
            imageConfig: {
              aspectRatio: "1:1",
              imageSize: "1K"
            }
          }
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setCaricatureUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error('Error generating caricature:', error);
      } finally {
        setLoading(false);
      }
    }

    generateImage();
  }, []);

  return (
    <div className="pt-20">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
              The <span className="text-brand-blue">Idea Munger</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              IdeamungerCo was founded by Dike E Okechukwu on the belief that ideas are the most valuable currency in the world. However, an idea without a "munger" — a process to refine, test, and execute it — is just a dream.
            </p>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                We operate as an "Idea Bank". A place where you can deposit your raw thoughts, have them incubated by experts, and withdraw them as actionable, feasible business models.
              </p>
              <p>
                Whether it's tech, agriculture, fashion, or social impact, we apply a rigorous framework to ensure that every idea we touch has the best possible chance of surviving the transition from concept to reality.
              </p>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
              {loading ? (
                <div className="flex flex-col items-center space-y-4">
                  <Loader2 className="w-12 h-12 text-brand-blue animate-spin" />
                  <p className="text-gray-500 font-medium">Generating Caricature...</p>
                </div>
              ) : caricatureUrl ? (
                <img 
                  src={caricatureUrl} 
                  alt="Dike - Founder Caricature" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <img 
                  src="https://picsum.photos/seed/ideamunger-founder/1000/1250" 
                  alt="Dike - Founder" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-blue text-white p-10 rounded-2xl shadow-2xl max-w-xs hidden md:block">
              <Quote className="w-10 h-10 mb-4 opacity-50" />
              <p className="text-lg font-medium italic mb-4">
                "An idea is a seed. My job is to provide the soil, the water, and the sunlight to help it grow into something that changes the world."
              </p>
              <p className="font-bold">— Dike E Okechukwu, Founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Munging Process</h2>
            <p className="text-gray-600">How we turn thoughts into things.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Raw Input",
                desc: "We take your idea exactly as it is. No judgment, just pure potential."
              },
              {
                title: "Strategic Munging",
                desc: "We apply market logic, financial modeling, and operational strategy to refine the concept."
              },
              {
                title: "Actionable Output",
                desc: "You receive a clear, step-by-step roadmap to launch and scale your vision."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-brand-blue">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
