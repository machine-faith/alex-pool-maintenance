import React from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Award, Users } from 'lucide-react';

export default function TrustSignals() {
  const signals = [
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Pools Serviced', value: '12,000+', icon: Users },
    { label: 'Fully Licensed & Insured', value: '100%', icon: Shield },
  ];

  return (
    <section className="py-20 bg-navy-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          {signals.map((signal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-aqua-500/10 rounded-xl flex items-center justify-center">
                  <signal.icon size={24} className="text-aqua-500" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                {signal.value}
              </div>
              <div className="text-aqua-500 uppercase tracking-widest text-xs font-bold">
                {signal.label}
              </div>
            </motion.div>
          ))}

          {/* Google Review Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-aqua-500 text-aqua-500" />
              ))}
            </div>
            <div className="text-2xl font-bold text-white mb-1">5.0 / 5.0</div>
            <div className="text-slate-400 text-sm">Based on 94 Google Reviews</div>
            <div className="mt-4 flex items-center gap-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" 
                alt="Google" 
                className="h-5"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-bold text-white uppercase tracking-tighter">Reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Credential Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {[
            'SPASA Certified',
            'Public Liability Insured',
            'Workers Comp',
            'Fully Licensed',
            'ABN Registered',
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-500">
              <Shield size={14} className="text-aqua-500/60" />
              <span className="text-xs uppercase tracking-widest font-bold">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
