import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How often should I have my pool serviced?',
    answer: 'For most residential pools in Sydney, we recommend weekly servicing during summer and fortnightly during winter. Factors like tree coverage, salt vs chlorine systems, and pool usage can affect frequency. We\'ll assess your situation and recommend the right schedule during your free quote.',
  },
  {
    question: 'How much does regular pool cleaning cost?',
    answer: 'Our regular maintenance programs start from $89 per visit. The exact cost depends on pool size, type (concrete, fibreglass, vinyl), and the level of care needed. We offer weekly, fortnightly, and monthly plans — all with no lock-in contracts. Request a free quote for a price tailored to your pool.',
  },
  {
    question: 'Do you service saltwater pools?',
    answer: 'Absolutely. Our technicians are experienced with all pool types including saltwater, chlorine, mineral, and magnesium systems. We carry specialised testing equipment for each sanitisation method and will adjust chemical treatments accordingly.',
  },
  {
    question: 'What areas do you service?',
    answer: 'We primarily service Padstow and the surrounding Sydney south-west suburbs. Not sure if we cover your area? Just call Alex on 0410 001 110 — we\'re always happy to help.',
  },
  {
    question: 'Can you help with a green pool emergency?',
    answer: 'Yes — green pool recovery is one of our specialties. We can typically restore a green pool to crystal clear in record time. Call Alex directly on 0410 001 110 for fast response.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. Alex Pool Maintenance operates with full public liability insurance. We\'re professional, trustworthy, and take pride in protecting your home and pool equipment on every job.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-32 bg-navy-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-aqua-500">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know before booking. Can't find your answer? <a href="#contact" className="text-aqua-500 hover:underline">Get in touch</a>.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-bold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-aqua-500 shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
