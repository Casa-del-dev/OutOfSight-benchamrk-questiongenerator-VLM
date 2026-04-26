type Capability = {
  code: string;
  title: string;
  desc: string;
};

type TrajectoryProps = {
  capabilities: Capability[];
};

export default function Trajectory({ capabilities }: TrajectoryProps) {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
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
          01 — Benchmark structure
        </span>
      </div>

      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(28px, 3vw, 40px)",
          fontWeight: 700,
          color: "#f0f2f8",
          marginBottom: "1rem",
        }}
      >
        Four axes of spatial memory
      </h2>
      <p
        style={{
          fontSize: "15px",
          color: "#5a6a88",
          maxWidth: "560px",
          lineHeight: 1.75,
          marginBottom: "3rem",
        }}
      >
        At a given query time T, models are asked about objects not currently
        visible — with difficulty scaled by how long ago they were last seen.
      </p>

      <div
        className="caps-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        {capabilities.map((c) => (
          <div className="cap-card" key={c.code}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                color: "#3b5bdb",
                letterSpacing: "0.08em",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              {c.code}
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#c5d0e8",
                marginBottom: "6px",
              }}
            >
              {c.title}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#4a5870",
                lineHeight: 1.65,
              }}
            >
              {c.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
