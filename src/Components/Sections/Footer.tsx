export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid #1e2a40",
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
          color: "#2a3a56",
        }}
      >
        OutOfSight — VLM Spatial Memory Benchmark
      </span>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
          color: "#2a3a56",
        }}
      >
        ETH Zürich · 3D Vision · 2026
      </span>
    </footer>
  );
}
