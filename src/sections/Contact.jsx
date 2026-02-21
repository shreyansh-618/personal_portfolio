import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    if (Math.abs(dx) < 120 && Math.abs(dy) < 120) {
      x.set(dx * 0.45);
      y.set(dy * 0.45);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [time, setTime] = useState(new Date());
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const timeStr = `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;

  const socialLinks = [
    {
      name: "EMAIL ME",
      value: "mailto:chaudharyshreyansh618@gmail.com",
      primary: true,
      color: "#00f2ff",
      icon: "✉",
    },
    {
      name: "GITHUB",
      value: "https://github.com/shreyansh-618",
      primary: false,
      color: "#7000ff",
      icon: "⌥",
    },
    {
      name: "LINKEDIN",
      value: "https://www.linkedin.com/in/shreyanshchaudhary618",
      primary: false,
      color: "#ff007a",
      icon: "◈",
    },
  ];

  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "3.5rem",
        paddingBottom: "0",
        overflow: "hidden",
        background: "rgba(5,5,5,0.15)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(0,242,255,0.12)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.04), 0 -8px 32px rgba(0,0,0,0.2)",
      }}
    >
      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "50%",
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(0,242,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "15%",
          top: "30%",
          width: "160px",
          height: "160px",
          background:
            "radial-gradient(circle, rgba(112,0,255,0.1) 0%, transparent 70%)",
          filter: "blur(35px)",
          pointerEvents: "none",
        }}
      />

      {/* Top glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "15%",
          right: "15%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #00f2ff66, #7000ff66, #ff007a66, transparent)",
        }}
      />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              margin: "0 0 0.4rem",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            viewport={{ once: true }}
            style={{
              margin: "0 0 0.6rem",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
              letterSpacing: "0.03em",
              color: "#fff",
            }}
          >
            LET'S{" "}
            <span
              style={{ color: "#00f2ff", textShadow: "0 0 20px #00f2ffaa" }}
            >
              CONNECT
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.13 }}
            viewport={{ once: true }}
            style={{
              margin: "0 auto",
              maxWidth: "520px",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.65,
            }}
          >
            Open for new opportunities and creative collaborations. Have a
            vision? Let's build it together.
          </motion.p>
        </div>

        {/* Link buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.6rem",
            marginBottom: "2rem",
          }}
        >
          {socialLinks.map((link) => (
            <MagneticButton key={link.name}>
              <a
                href={link.value}
                target={link.name !== "EMAIL ME" ? "_blank" : "_self"}
                rel="noreferrer"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  padding: "0.55rem 1.4rem",
                  borderRadius: "10px",
                  border: `1px solid ${hoveredLink === link.name ? link.color + "88" : link.primary ? link.color + "55" : "rgba(255,255,255,0.15)"}`,
                  background:
                    hoveredLink === link.name
                      ? `${link.color}14`
                      : link.primary
                        ? `${link.color}0a`
                        : "transparent",
                  color:
                    hoveredLink === link.name
                      ? link.color
                      : link.primary
                        ? link.color
                        : "rgba(255,255,255,0.65)",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  transition: "all 0.2s ease",
                  boxShadow:
                    hoveredLink === link.name
                      ? `0 0 16px ${link.color}22`
                      : "none",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                  {link.icon}
                </span>
                {link.name}
              </a>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "0.75rem 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.58rem",
              color: "rgba(255,255,255,0.22)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Shreyansh Chaudhary © 2026 · Designed for the future
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "0.78rem",
              fontWeight: 700,
              fontFamily: "monospace",
              color: "#00f2ff",
              letterSpacing: "0.1em",
              textShadow: "0 0 8px #00f2ff55",
            }}
          >
            {timeStr}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
