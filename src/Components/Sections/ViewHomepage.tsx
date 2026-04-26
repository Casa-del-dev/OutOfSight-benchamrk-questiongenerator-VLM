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
          <div className="flex gap-4 justify-center mt-6">
            {/* Primary Button */}
            <a
              href="/question-generator"
              className="group inline-flex items-center gap-2 rounded-xl 
    bg-linear-to-r from-blue-500 to-blue-600 
    px-6 py-3 text-white font-medium 
    shadow-lg shadow-blue-500/20
    transition-all duration-300 
    hover:from-blue-400 hover:to-blue-500 
    hover:shadow-blue-500/40 
    active:scale-95"
            >
              Example Question Pairs
              <svg
                className="transition-transform duration-300 group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Secondary Button */}
            <a
              href="/benchmark"
              className="group inline-flex items-center gap-2 rounded-xl 
    px-6 py-3 font-medium 
    text-gray-200 
    bg-white/5 backdrop-blur-md 
    border border-white/10
    shadow-sm
    transition-all duration-300 
    hover:bg-white/10 hover:border-white/20 
    hover:text-white
    active:scale-95"
            >
              Example Benchmark
              <svg
                className="transition-transform duration-300 group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
