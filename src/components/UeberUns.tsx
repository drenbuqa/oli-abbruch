"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { value: 500, suffix: "+", label: "Projekte abgeschlossen" },
  { value: 5, suffix: "", label: "Bundesländer" },
  { value: 100, suffix: "%", label: "Kundenzufriedenheit" },
];


function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count}{suffix}</span>;
}

export default function UeberUns() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section id="ueber-uns" className="bg-charcoal">

      {/* Top separator */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-red to-transparent opacity-60" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">

        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 36 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10 bg-red" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red">
              Unser Unternehmen
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-off-white leading-tight mb-6">
            Über Uns
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Oli Abbruch & Entkernung steht seit über 10 Jahren für professionellen Rückbau,
            präzise Entkernung und zuverlässige Schadstoffsanierung in ganz Baden-Württemberg.
            Wir arbeiten termingerecht, sauber und auf höchstem handwerklichem Niveau.
          </p>
        </motion.div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-700/40 border border-gray-700/40 mb-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-charcoal-light/30 px-8 py-10 flex flex-col gap-2"
            >
              <div className="text-5xl sm:text-6xl font-black text-off-white leading-none tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} inView={statsInView} />
              </div>
              <div className="h-[2px] w-8 bg-red mt-1" />
              <p className="text-sm text-gray-400 font-medium mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-charcoal relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red to-transparent opacity-60" />

        <div className="max-w-7xl mx-auto px-6 py-16 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0"
          >
            {["Schnell", "Sauber", "Zuverlässig"].map((word, i) => (
              <div key={word} className="flex flex-col sm:flex-row items-center">
                {i > 0 && (
                  <span className="text-red font-light text-2xl sm:text-4xl lg:text-5xl sm:mx-5 lg:mx-6 my-1 sm:my-0">—</span>
                )}
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-off-white uppercase tracking-[0.1em]">
                  {word}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red to-transparent opacity-40" />
      </motion.div>

    </section>
  );
}
