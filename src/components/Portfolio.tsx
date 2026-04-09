import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    name: 'Green Pool Recovery',
    suburb: 'Padstow',
    service: 'Full Recovery',
    image: '/images/pool-1-after.jpg',
  },
  {
    name: 'Blackspot Elimination',
    suburb: 'Sydney Suburbs',
    service: '100% Success Rate',
    image: '/images/got-blackspots-in-your-pool-we-have-a-100-successful-rate-in-removing-blackspots-and-we-don-t-use-any-nasty-cheap-chemicals-either.jpg',
  },
  {
    name: 'Chlorine to Salt',
    suburb: 'Sydney Suburbs',
    service: '30-min Conversion',
    image: '/images/we-converted-this-chlorine-pool-to-a-salt-pool-30mins-plumbed-in-and-vasco-is-ready.jpg',
  },
  {
    name: 'Routine Maintenance',
    suburb: 'Padstow',
    service: 'Flawless Polish',
    image: '/images/pool-4-after.jpg',
  },
  {
    name: 'Strata Clean',
    suburb: 'Sydney Suburbs',
    service: 'Complex Care',
    image: '/images/strata.jpg',
  },
  {
    name: 'Equipment Install',
    suburb: '"The Pool Cleaner Pro"',
    service: 'Robotic Cleaners',
    image: '/images/another-the-pool-cleaner-pro-installed.jpg',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Recent <span className="text-aqua-500">Work</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Every pool tells a story. Here are some of ours — real results from real Australian homes.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-12 mb-4" />
          <div className="text-aqua-500 font-bold tracking-widest uppercase text-sm">
            Portfolio 2024
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-800"
            >
              <img
                src={project.image}
                alt={`${project.name} — ${project.suburb}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="text-white text-2xl font-display font-bold mb-1">
                  {project.name}
                </div>
                <div className="text-aqua-500 text-xs font-bold uppercase tracking-widest mb-1">
                  {project.suburb}
                </div>
                <div className="text-slate-400 text-sm">
                  {project.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
