import React from 'react';
import { motion } from 'motion/react';

export default function AboutStory() {
  return (
    <section className="py-32 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="/images/pool-3-after.jpg"
                alt="Beautiful pool maintained by Alex"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl">
              <div className="text-3xl font-display font-bold text-white">5.0 ★</div>
              <div className="text-aqua-500 text-sm font-bold uppercase tracking-widest">Google Rated</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-aqua-500 text-sm font-bold uppercase tracking-widest mb-4">Our Story</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Honest & <span className="text-aqua-500">Reliable Pool Care</span>
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Alex Pool Maintenance started with a simple goal: to provide Padstow and the surrounding Sydney areas with a pool service they can actually trust. 
              </p>
              <p>
                Whether it's a routine clean, a nightmare green pool recovery, or converting your old chlorine setup to a modern salt pool, Alex delivers perfection every single time.
                <span className="text-white font-medium"> We boast a 100% success rate with blackspot removal without using cheap, nasty chemicals.</span>
              </p>
              <p>
                With 94+ perfect 5-star reviews on Google, our reputation speaks for itself. We show up on time, do the hard work, and leave your pool crystal clear.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8">
              {[
                { value: '100%', label: 'Blackspot Success' },
                { value: '94+', label: '5-Star Reviews' },
                { value: 'Fast', label: 'Green Pool Recovery' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-aqua-500 uppercase tracking-widest font-bold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
