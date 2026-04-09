import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    name: 'Local Guide',
    location: 'Google Review',
    rating: 5,
    text: 'Pools always clean, for an extra clean feed him shawarma sandwich.',
    service: 'Regular Maintenance',
  },
  {
    name: 'Sarah Jenkins',
    location: 'Padstow, NSW',
    rating: 5,
    text: 'Alex responded to our call right away. We had a blackspot problem that nobody else could fix, but Alex got rid of it completely with no harsh chemicals.',
    service: 'Blackspot Removal',
  },
  {
    name: 'Mark Thompson',
    location: 'Sydney, NSW',
    rating: 5,
    text: 'He came in and plumbed our new salt chlorinator in just 30 minutes! Professional, reliable, and exactly what we needed. Highly recommend Alex Pool Maintenance.',
    service: 'Salt Chlorinator Install',
  },
  {
    name: 'David Chen',
    location: 'Sydney, NSW',
    rating: 5,
    text: 'Our pool was completely green after being neglected. Alex came out and had it sparkling within a few days. Best pool guy in town.',
    service: 'Green Pool Recovery',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="py-32 bg-navy-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            94+ <span className="text-aqua-500">5-Star</span> Reviews
          </h2>
          <p className="text-slate-400 text-lg">Real feedback from real Sydney pool owners.</p>
        </motion.div>

        <div className="relative h-[380px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-aqua-500 text-aqua-500" />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-display font-light text-white italic leading-relaxed mb-6 max-w-3xl mx-auto">
                "{testimonials[current].text}"
              </p>

              <div className="mt-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-white font-bold text-lg">{testimonials[current].name}</span>
                  <BadgeCheck size={18} className="text-aqua-500" />
                </div>
                <div className="text-aqua-500 text-sm uppercase tracking-widest mb-1">
                  {testimonials[current].location}
                </div>
                <div className="text-slate-500 text-xs">
                  {testimonials[current].service}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-navy-900 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current ? 'w-8 bg-aqua-500' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-navy-900 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
