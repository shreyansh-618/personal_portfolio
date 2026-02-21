import React, { useState } from "react";

const ProjectCard = ({
  title,
  subtitle,
  purpose,
  highlights,
  tech,
  github,
  index,
}) => {
  const [flipped, setFlipped] = useState(false);

  const colors = [
    { primary: "#00f2ff", secondary: "#7000ff" },
    { primary: "#7000ff", secondary: "#ff007a" },
    { primary: "#ff007a", secondary: "#00f2ff" },
  ];
  const { primary, secondary } = colors[index % colors.length];

  const cardStyle = {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    borderRadius: "16px",
    background:
      "linear-gradient(135deg, rgba(10,14,22,0.98), rgba(8,8,10,0.98))",
    border: `2px solid ${primary}55`,
    boxShadow: `0 0 30px ${primary}1a, 0 10px 40px rgba(0,0,0,0.6)`,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
  };

  const labelStyle = (color) => ({
    fontSize: "0.6rem",
    letterSpacing: "0.2em",
    color,
    textTransform: "uppercase",
    fontWeight: 700,
    marginBottom: "0.4rem",
  });

  return (
    <div style={{ perspective: "1400px", width: "100%" }}>
      <div
        onClick={() => setFlipped((p) => !p)}
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          cursor: "pointer",
          transformStyle: "preserve-3d",
          transition: "transform 0.65s ease-in-out",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ===== FRONT ===== */}
        <div style={cardStyle}>
          {/* Left accent stripe */}
          <div
            style={{
              width: "5px",
              flexShrink: 0,
              background: `linear-gradient(180deg, ${primary}, ${secondary})`,
            }}
          />

          {/* Index column */}
          <div
            style={{
              width: "60px",
              flexShrink: 0,
              borderRight: `1px solid ${primary}22`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              padding: "1rem 0",
            }}
          >
            <span
              style={{
                color: primary,
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
              }}
            >
              #{String(index + 1).padStart(2, "0")}
            </span>
            <div
              style={{
                width: "1px",
                height: "40px",
                background: `linear-gradient(180deg, ${primary}88, transparent)`,
              }}
            />
          </div>

          {/* Main content */}
          <div
            style={{
              flex: 1,
              padding: "1.25rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: primary,
                  textShadow: `0 0 20px ${primary}88`,
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.8rem",
                  marginTop: "0.4rem",
                  lineHeight: 1.5,
                }}
              >
                {subtitle}
              </p>
            </div>

            {/* Tech pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.62rem",
                    padding: "2px 9px",
                    borderRadius: "20px",
                    border: `1px solid ${primary}33`,
                    color: "rgba(255,255,255,0.6)",
                    background: `${primary}0a`,
                    letterSpacing: "0.06em",
                  }}
                >
                  {t}
                </span>
              ))}
              {tech.length > 4 && (
                <span
                  style={{
                    fontSize: "0.62rem",
                    color: "rgba(255,255,255,0.3)",
                    alignSelf: "center",
                  }}
                >
                  +{tech.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Right flip hint */}
          <div
            style={{
              width: "56px",
              flexShrink: 0,
              borderLeft: `1px solid ${primary}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: `2px solid ${primary}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: primary,
                fontSize: "1rem",
                background: `${primary}0f`,
              }}
            >
              ↺
            </div>
          </div>
        </div>

        {/* ===== BACK ===== */}
        <div
          style={{
            ...cardStyle,
            transform: "rotateY(180deg)",
            border: `2px solid ${secondary}55`,
            boxShadow: `0 0 30px ${secondary}1a, 0 10px 40px rgba(0,0,0,0.6)`,
          }}
        >
          {/* Left accent stripe */}
          <div
            style={{
              width: "5px",
              flexShrink: 0,
              background: `linear-gradient(180deg, ${secondary}, ${primary})`,
            }}
          />

          {/* Purpose */}
          <div
            style={{
              flex: "0 0 30%",
              padding: "1.25rem 1.25rem",
              borderRight: `1px solid ${primary}22`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={labelStyle(primary)}>Purpose</p>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.75rem",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {purpose}
            </p>
          </div>

          {/* Highlights */}
          <div
            style={{
              flex: "0 0 35%",
              padding: "1.25rem 1.25rem",
              borderRight: `1px solid ${primary}22`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={labelStyle(secondary)}>Highlights</p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {highlights.slice(0, 4).map((h) => (
                <li
                  key={h}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "0.72rem",
                    paddingLeft: "0.9rem",
                    position: "relative",
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    style={{ position: "absolute", left: 0, color: secondary }}
                  >
                    ›
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Stack + CTA */}
          <div
            style={{
              flex: 1,
              padding: "1.25rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={labelStyle(primary)}>Stack</p>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}
              >
                {tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.6rem",
                      padding: "2px 8px",
                      borderRadius: "20px",
                      border: `1px solid ${primary}44`,
                      color: "rgba(255,255,255,0.65)",
                      background: `${primary}10`,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "block",
                textAlign: "center",
                padding: "0.5rem 0.75rem",
                borderRadius: "8px",
                border: `1px solid ${primary}55`,
                color: primary,
                textDecoration: "none",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: `${primary}0f`,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = `${primary}25`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = `${primary}0f`)
              }
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
