export default function View() {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(59,91,219,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "#3b5bdb",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          03 — Get started
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 700,
            color: "#f0f2f8",
            marginBottom: "1.25rem",
          }}
        >
          Ready to test your model?
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#5a6a88",
            maxWidth: "440px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Download question pairs in JSONL format, or use our codebase to
          evaluate directly against your model outputs.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="/question-generator" className="btn-primary">
            Example Question Pairs
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
            Example Benchmark
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
      </div>
    </section>
  );
}
