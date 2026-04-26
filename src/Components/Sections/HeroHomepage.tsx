import React from "react";
import logo from "../../assets/Logo.png";
type Stat = {
  value: string;
  label: string;
};

type HeroProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
  stats: Stat[];
};

export default function Hero({ ref, visible, stats }: HeroProps) {
  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        padding: "6rem 2rem 4rem",
        overflow: "hidden",
      }}
    >
      <div className="grid-bg" />
      <div className="noise" />

      {/* Blue glow */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(59,91,219,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: "5rem",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className={`fade-up d1 ${visible ? "in" : ""}`}>
            <span className="tag">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#7b9cf7",
                  display: "inline-block",
                }}
              />{" "}
              Vision-Language Model Benchmark
            </span>
          </div>

          <h1
            className={`fade-up d2 ${visible ? "in" : ""}`}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(52px, 6vw, 78px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "1.25rem 0",
              color: "#f0f2f8",
            }}
          >
            Out
            <span style={{ fontStyle: "italic", color: "#3b5bdb" }}>Of</span>
            Sight
          </h1>

          <p
            className={`fade-up d3 ${visible ? "in" : ""}`}
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#8899b8",
              maxWidth: "520px",
              marginBottom: "1rem",
              fontWeight: 300,
            }}
          >
            Can a vision-language model remember where you put something after
            it disappears from the frame?
          </p>

          <p
            className={`fade-up d4 ${visible ? "in" : ""}`}
            style={{
              fontSize: "15px",
              lineHeight: 1.75,
              color: "#5a6a88",
              maxWidth: "500px",
              marginBottom: "2.5rem",
            }}
          >
            OutOfSight benchmarks spatial memory, object permanence, and
            hidden-state tracking in egocentric cooking video — built on
            HD-EPIC's dense 3D object annotations.
          </p>

          <div
            className={`fade-up d5 ${visible ? "in" : ""}`}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
          >
            <a href="/question-generator" className="btn-primary">
              Question generator
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="/benchmark" className="btn-ghost">
              Benchmark
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div
            className={`fade-up d6 ${visible ? "in" : ""} stats-row`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: "0.5px solid #1e2a40",
            }}
          >
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "17px",
                      fontWeight: 500,
                      color: "#c5d0e8",
                      marginBottom: "2px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#4a5870",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
                {i < stats.length - 1 && <div className="stat-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right column — logo visual */}
        <div
          className={`fade-up d4 ${visible ? "in" : ""}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", width: 340, height: 340 }}>
            {/* Orbital rings */}
            <div
              className="logo-ring"
              style={{
                width: 320,
                height: 320,
                top: 10,
                left: 10,
                animationDuration: "28s",
              }}
            />
            <div
              className="logo-ring"
              style={{
                width: 260,
                height: 260,
                top: 40,
                left: 40,
                animationDuration: "18s",
                animationDirection: "reverse",
                borderColor: "rgba(59,91,219,0.1)",
              }}
            />

            {/* Card */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 220,
                height: 220,
                background: "#0d1320",
                border: "0.5px solid #1e2a40",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <img
                src={logo}
                alt="OutOfSight logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Floating labels */}
            {[
              {
                label: "Object permanence",
                top: "4%",
                left: "-12%",
                delay: "0.8s",
              },
              {
                label: "Spatial memory",
                bottom: "8%",
                right: "-10%",
                delay: "1s",
              },
              {
                label: "Hidden state",
                top: "50%",
                right: "-18%",
                delay: "1.2s",
              },
            ].map((f) => (
              <div
                key={f.label}
                style={{
                  position: "absolute",
                  top: f.top,
                  bottom: f.bottom,
                  left: f.left,
                  right: f.right,
                  background: "#0d1320",
                  border: "0.5px solid #1e2a40",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: "#4c6ef5",
                  whiteSpace: "nowrap",
                  animation: `fade-up 0.6s ${f.delay} both`,
                }}
              >
                {f.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
