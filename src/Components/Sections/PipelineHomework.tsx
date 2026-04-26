export default function Pipeline() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        borderTop: "0.5px solid #1e2a40",
        borderBottom: "0.5px solid #1e2a40",
        background: "#060a10",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="section-rule">
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "#3b5bdb",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            02 — Pipeline
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: 700,
            color: "#f0f2f8",
            marginBottom: "3rem",
          }}
        >
          From video to benchmark
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
          }}
        >
          {[
            {
              n: "1",
              title: "Visibility tracking",
              desc: "Per-frame object visibility is computed via 3D projection, geometric occlusion rays, fixture state machines, and Grounding DINO detection.",
            },
            {
              n: "2",
              title: "Key-frame selection",
              desc: "Anchor times T are chosen where an object is currently out of sight but was stably visible earlier — prioritising objects that have actually moved.",
            },
            {
              n: "3",
              title: "Question generation",
              desc: "Staged VQA is produced: first confirming invisibility, then asking about last placement, fixture, direction, and distance.",
            },
            {
              n: "4",
              title: "VLM evaluation",
              desc: "Models receive the full video clip and must answer without visual access to the queried object. Accuracy is tracked against horizon length.",
            },
          ].map((step, i, arr) => (
            <div
              key={step.n}
              style={{
                padding: "2rem",
                borderRight:
                  i < arr.length - 1 ? "0.5px solid #1e2a40" : "none",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "32px",
                  fontWeight: 500,
                  color: "#1a2540",
                  marginBottom: "1rem",
                  lineHeight: 1,
                }}
              >
                {step.n}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#c5d0e8",
                  marginBottom: "8px",
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#4a5870",
                  lineHeight: 1.7,
                }}
              >
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
