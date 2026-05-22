"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add overflow-hidden to body while loading
    document.body.style.overflow = "hidden";
    
    // Safety timeout of 1.8 seconds to hide loader
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center">
            {/* Pulsing logo */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: [0, 1, 0.8, 1],
                scale: 1,
                transition: { duration: 1.2, ease: "easeOut" }
              }}
              className="text-4xl md:text-5xl font-bold tracking-[0.25em] text-white select-none filter drop-shadow-[0_0_15px_rgba(0,210,255,0.4)]"
            >
              ZABNIX
            </motion.h1>
            
            {/* Subtle loader line */}
            <div className="w-32 h-[1px] bg-white/10 mt-6 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
