import React from 'react';
import { motion } from 'motion/react';
import { Droplets, Thermometer, Hammer, Settings, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Pool Cleaning',
    description: 'Comprehensive cleaning programs tailored to your pool type, climate, and usage — so you never have to think about it.',
    icon: Droplets,
    includes: [
      'Robotic scrubbing & vacuuming',
      'Chemical testing & balancing',
      'Skimmer & filter basket clean',
      'Surface skim & leaf removal',
    ],
    from: '$89/visit',
  },
  {
    title: 'Green Pool Recovery',
    description: 'Turn your nightmare green pool back into a sparkling oasis in record time.',
    icon: Thermometer,
    includes: [
      'Chemical shock treatment',
      'Intensive deep vacuuming',
      'Heavy algae brushing',
      'Filter backwashing & balancing',
    ],
    from: 'Call for Quote',
  },
  {
    title: 'Blackspot Removal',
    description: 'We have a 100% success rate in completely eliminating blackspots without using cheap, nasty chemicals.',
    icon: Hammer,
    includes: [
      'Safe spot chemical treatment',
      'Heavy wire brushing',
      'Strict chemical balancing',
      'Future preventative advice',
    ],
    from: 'Call for Quote',
  },
  {
    title: 'Chlorine to Salt Conversions',
    description: 'Convert your harsh chlorine pool to a gentle, modern salt water system. Plumbed and ready in just 30 minutes!',
    icon: Settings,
    includes: [
      'Salt chlorinator install',
      'Water salt level balancing',
      'Equipment calibration',
      'Complete system tutorial',
    ],
    from: 'Call for Quote',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-navy-800 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-aqua-500/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Boutique <span className="text-aqua-500">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive care tailored to the unique demands of Australian coastal and inland climates. 
            Every service backed by our satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 rounded-3xl hover:border-aqua-500/50 transition-all group"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-aqua-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-aqua-500 transition-colors">
                  <service.icon size={32} className="text-aqua-500 group-hover:text-navy-900 transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 size={16} className="text-aqua-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/5">
                <span className="text-slate-500 text-xs uppercase tracking-widest">Starting from </span>
                <span className="text-aqua-500 font-bold text-lg">{service.from}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
