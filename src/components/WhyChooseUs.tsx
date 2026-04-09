import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Clock, ShieldCheck, HeartHandshake, Sparkles, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Full public liability, workers comp, and Home Owners Warranty Insurance. Your property is always protected.',
  },
  {
    icon: Clock,
    title: 'Same-Day Response',
    description: 'Emergency callout? We\'re there. Standard quotes returned within 4 hours, not 4 days.',
  },
  {
    icon: HeartHandshake,
    title: 'Locally Owned',
    description: 'Not a franchise. You deal directly with Alex — taking personal pride and staking his name on every job.',
  },
  {
    icon: Sparkles,
    title: 'Satisfaction Guaranteed',
    description: 'If you\'re not 100% happy with our work, we\'ll come back and fix it — no charge, no questions.',
  },
  {
    icon: Leaf,
    title: '100% Blackspot Success',
    description: 'We have a perfect success rate in removing stubborn blackspots, and we NEVER use nasty, cheap chemicals.',
  },
  {
    icon: MapPin,
    title: 'True Local Knowledge',
    description: 'We know Sydney\'s coastal salt air, bore water quirks, and council regulations inside out.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why <span className="text-aqua-500">Alex?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            There are plenty of pool guys. Here's why 94+ families rate us 5.0 stars on Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 rounded-2xl border border-white/5 hover:border-aqua-500/30 transition-all group"
            >
              <div className="w-12 h-12 bg-aqua-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-aqua-500 transition-colors">
                <reason.icon size={24} className="text-aqua-500 group-hover:text-navy-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
