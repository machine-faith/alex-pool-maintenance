import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftRight } from 'lucide-react';

const transformations = [
  {
    before: '/images/pool-1-before.jpg',
    after: '/images/pool-1-after.jpg',
    title: 'Extreme Green Recovery',
    location: 'Padstow',
  },
  {
    before: '/images/pool-4-before.jpg',
    after: '/images/pool-4-after.jpg',
    title: 'Post-Storm Cleanup',
    location: 'Sydney Suburbs',
  },
];

export default function BeforeAfter() {
  const [sliderPositions, setSliderPositions] = useState<number[]>(transformations.map(() => 50));
  const [isDragging, setIsDragging] = useState(false);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMove = (index: number, clientX: number) => {
    if (!isDragging) return;
    const container = containerRefs.current[index];
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      
      setSliderPositions(prev => {
        const newPos = [...prev];
        newPos[index] = percentage;
        return newPos;
      });
    }
  };

  return (
    <section id="transformations" className="py-32 bg-navy-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Real <span className="text-aqua-500">Transformations</span>
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Drag the slider to see the difference. We don't just clean pools, we rescue them.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 px-2">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">{item.title}</h3>
                  <p className="text-aqua-500 uppercase tracking-widest text-sm font-bold">{item.location}</p>
                </div>
                <div className="hidden md:flex text-slate-500 text-sm font-medium items-center gap-2">
                  <ArrowLeftRight size={16} /> Drag slider to compare
                </div>
              </div>

              <div 
                ref={el => containerRefs.current[idx] = el}
                className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl border border-white/10"
                onMouseDown={(e) => { setIsDragging(true); handleMove(idx, e.clientX); }}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={(e) => handleMove(idx, e.clientX)}
                onTouchStart={(e) => { setIsDragging(true); handleMove(idx, e.touches[0].clientX); }}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={(e) => handleMove(idx, e.touches[0].clientX)}
              >
                {/* After Image (Base) */}
                <img 
                  src={item.after} 
                  alt="After pool cleaning" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute top-4 right-4 bg-navy-900/80 backdrop-blur-md px-4 py-2 rounded-full font-bold text-white text-sm">
                  AFTER
                </div>

                {/* Before Image (Overlay clipped) */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPositions[idx]}%` }}
                >
                  <img 
                    src={item.before} 
                    alt="Before pool cleaning" 
                    className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                    style={{ width: '100vw', maxWidth: 'none' }} /* Force the image to not stretch, but wait, the parent is relative so we should just set object-cover and make the container clip */
                  />
                  {/* Better trick for clipping images: the image matches the container size, we use object-fit: cover */}
                  {/* Actually, if width is dynamic, object-cover stretches it. Better to use clip-path on the image. */}
                </div>

                {/* Fixing the overlay logic */}
                <div 
                   className="absolute inset-0 w-full h-full pointer-events-none"
                   style={{ clipPath: `inset(0 ${100 - sliderPositions[idx]}% 0 0)` }}
                >
                    <img 
                      src={item.before} 
                      alt="Before" 
                      className="absolute w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-white text-sm">
                      BEFORE
                    </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                  style={{ left: `calc(${sliderPositions[idx]}% - 2px)` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-aqua-500 transition-transform group-hover:scale-110">
                    <ArrowLeftRight size={18} className="text-navy-900" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
