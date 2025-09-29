"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground({ children }: any) {
  return (
    <div className="relative w-full h-screen  overflow-hidden my-20">
      <motion.div
        className="absolute top-0 left-0 md:w-[250px] w-[100px] md:h-[250px] h-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(243,255,159,0.8) 40%, rgba(243,255,159,0.2) 100%)",
          filter: "blur(180px)",
        }}
        animate={{
          x: [0, 250, 250, 0, 0], // Left → Right (smaller distance now)
          y: [0, 0, 200, 200, 0], // Thoda neeche jaye (200px)
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute md:w-[250px] w-[100px] md:h-[250px] right-34 top-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(243,255,159,0.8) 40%, rgba(255,200,150,0.2) 100%)",
          filter: "blur(180px)",
        }}
        animate={{
          x: [0, -40, -60, 0],

          y: [0, 180, 140, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute md:w-[250px] w-[100px] md:h-[250px]  top-0 left-1/2 -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(243,255,159,0.8) 40%, rgba(150,200,255,0.2) 100%)",
          filter: "blur(180px)",
        }}
        animate={{
          y: [0, 300, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 flex items-center justify-center h-full text-white my-40">
        {children}
      </div>
    </div>
  );
}
