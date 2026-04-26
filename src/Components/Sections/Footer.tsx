type FooterProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function Footer({ ref, visible }: FooterProps) {
  return (
    <footer
      className={`fade-up ${visible ? "in" : ""}`}
      style={{
        borderTop: "0.5px solid #1e2a40",
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
      }}
      ref={ref}
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
