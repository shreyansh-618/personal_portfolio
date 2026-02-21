import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const heroButtons = [
    { name: "View Projects", id: "projects", primary: true },
    { name: "About Me", id: "about", primary: false },
    { name: "Contact", id: "contact", primary: false },
    {
      name: "GitHub",
      id: "github",
      primary: false,
      link: "https://github.com/shreyansh-618",
    },
  ];

  return (
    <section className="relative w-full h-screen mx-auto flex items-center overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm"
          >
            Digital Experiences Architect
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-9xl font-bold mb-6 leading-none tracking-tight"
          >
            SHREYANSH <br />
            <span className="neon-text">CHAUDHARY</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-dim mb-12 font-light tracking-wide max-w-2xl leading-relaxed"
          >
            I build{" "}
            <span className="text-white font-medium">visually immersive</span>{" "}
            and
            <span className="text-white font-medium">
              {" "}
              interactive digital installations
            </span>{" "}
            for the modern web.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            {heroButtons.map((btn) => (
              <a
                key={btn.name}
                href={btn.link || `#${btn.id}`}
                target={btn.link ? "_blank" : "_self"}
                rel={btn.link ? "noreferrer" : ""}
                className="flex"
              >
                <div
                  className={`px-8 py-4 glass text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 uppercase tracking-widest font-bold text-sm ${btn.primary ? "neon-glow text-primary" : "text-white border-glass-border hover:border-primary"}`}
                  style={{ minWidth: btn.name.length > 10 ? "200px" : "160px" }}
                >
                  {btn.name}
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full -z-10 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-l from-bg-dark via-transparent to-transparent z-10" />
      </div>
    </section>
  );
};

export default Hero;
