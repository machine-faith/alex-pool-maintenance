import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pool-4-after.jpg"
          alt="Perfectly clean pool by Alex Pool Maintenance"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter leading-tight">
            Perfect Pools.<br />
            <span className="text-aqua-500">Every Time.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-4 font-light tracking-wide max-w-2xl mx-auto">
            Padstow & Sydney's 5.0 Star Rated Pool Maintenance Specialist.
          </p>
          <p className="text-sm md:text-base text-slate-400 mb-10 max-w-xl mx-auto">
            Expert Green Pool Recovery · Fast Equipment Supply & Install · Flawless Regular Maintenance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-navy-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-aqua-500 transition-all"
            >
              Get a Free Quote
            </motion.a>
            <a
              href="tel:0410001110"
              className="flex items-center gap-2 text-white border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              <Phone size={18} />
              0410 001 110
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
