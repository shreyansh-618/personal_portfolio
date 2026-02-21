import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";

const skills = [
  "React.js",
  "JavaScript",
  "MongoDB",
  "Firebase",
  "Git/GitHub",
  "Vercel",
  "TailwindCSS",
  "Responsive Design",
  "Authentication",
];

const RADIUS_PCT = 42;

/* ---------- POSITION CALC ---------- */

const getSkillPositions = (count) => {
  const positions = [];

  for (let i = 0; i < count; i++) {
    const angle = (i * 360) / count - 90;
    const rad = (angle * Math.PI) / 180;

    positions.push({
      x: 50 + RADIUS_PCT * Math.cos(rad),
      y: 50 - RADIUS_PCT * Math.sin(rad),
    });
  }

  return positions;
};

const SKILL_POSITIONS = getSkillPositions(skills.length);

/* ---------- SKILL NODE ---------- */

const SkillNode = ({ name, x, y, rotation, index }) => {
  const counterRotate = useTransform(rotation, (r) => -r);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        translateX: "-50%",
        translateY: "-50%",
        rotate: counterRotate,
        width: "clamp(72px,11vw,128px)",
        height: "clamp(36px,5.5vw,64px)",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.14)",
        background:
          "linear-gradient(140deg, rgba(18,21,28,0.95), rgba(8,9,13,0.88))",
        color: "var(--primary)",
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: "0 10px 24px rgba(0,0,0,0.35)",
      }}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      {name}
    </motion.div>
  );
};

/* ---------- ABOUT SECTION ---------- */

const About = () => {
  const wheelRef = useRef(null);
  const isInView = useInView(wheelRef, { amount: 0.35 });

  const rotation = useMotionValue(0);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-32 flex flex-col items-center overflow-hidden"
    >
      {/* ================= TEXT SECTION ================= */}

      <div className="section-container max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm">
            The Mindset
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
            Architect of <br />
            <span className="neon-text">Experiences</span>
          </h2>

          <p className="text-xl md:text-2xl text-dim mb-8 leading-relaxed font-light">
            I specialize in the intersection of design and engineering. My work
            focuses on building digital products that are not just usable, but
            memorable.
          </p>

          <p className="text-lg md:text-xl text-dim leading-relaxed">
            With a background in full-stack development, I understand the
            harmony between a beautiful interface and robust architecture. I
            build modern, scalable and interactive web experiences.
          </p>
        </motion.div>
      </div>

      {/* ================= SKILL WHEEL ================= */}

      <motion.div
        ref={wheelRef}
        className="relative flex justify-center items-center mt-16"
        style={{
          width: "100%",
          minHeight: "520px",
        }}
      >
        <motion.div
          animate={isInView ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            width: "min(72vw,520px)",
            height: "min(72vw,520px)",
            position: "relative",
            rotate: rotation,
          }}
        >
          {/* Rings */}
          <div
            style={{
              position: "absolute",
              inset: "12%",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: "22%",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />

          {skills.map((skill, i) => {
            const { x, y } = SKILL_POSITIONS[i];

            return (
              <SkillNode
                key={skill}
                name={skill}
                x={x}
                y={y}
                rotation={rotation}
                index={i}
              />
            );
          })}
        </motion.div>

        {/* CENTER */}
        <div
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            position: "absolute",
            border: "2px solid rgba(0,242,255,0.35)",
            background:
              "linear-gradient(145deg, rgba(22,28,36,0.98), rgba(8,10,14,0.98))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 20px 40px rgba(0,0,0,0.5), 0 0 24px rgba(0,242,255,0.15)",
          }}
        >
          <span
            className="neon-text"
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            SKILLS
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
