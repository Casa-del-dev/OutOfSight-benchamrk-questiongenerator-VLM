import { useEffect, useRef, useState } from "react";
import Hero from "../Components/Sections/HeroHomepage";
import Trajectory from "../Components/Sections/TrajectoryHomepage";
import Pipeline from "../Components/Sections/PipelineHomework";
import View from "../Components/Sections/ViewHomepage";
import Footer from "../Components/Sections/Footer";

const capabilities = [
  {
    code: "Q1",
    title: "Current visibility check",
    desc: "At time <TIME HH:MM:SS video X>, is <Target Object> that was moved earlier visible in the current frame?",
  },
  {
    code: "Q2",
    title: "Last visible observation",
    desc: "At time <TIME HH:MM:SS video X>, <Target Object> that was moved earlier is not visible. When was it last visible, and where was it located in the image?",
  },
  {
    code: "Q3",
    title: "Last placement observation",
    desc: "At time <TIME HH:MM:SS video X>, when was the <Target Object> last placed, and where was it placed?",
  },
  {
    code: "Q4",
    title: "Scene anchor",
    desc: "At time <TIME HH:MM:SS video X>, based on the last placement of <Target Object> that was moved earlier, which nearby fixture is closest to it?",
  },
  {
    code: "Q5.1",
    title: "Egocentric object-camera relation inference",
    desc: "At time <TIME HH:MM:SS video X>, <Target Object> is not visible. Based on its last known position, in which direction is <Target Object> based on where you are looking at, at time <TIME HH:MM:SS video X>?",
  },
  {
    code: "Q5.2",
    title: "Egocentric object-object relation",
    desc: "At time <TIME HH:MM:SS video X>, <Target Object> is not visible. Based on the last known position of <Target Object> and the <Anchored Object> (marked object) in the current frame, where is <Target Object> relative to <Anchored Object>?",
  },
  {
    code: "Q5.3",
    title: "Object-object distance",
    desc: "At time <TIME HH:MM:SS video X>, <Target Object> is not visible. Based on the last known position of <Target Object> and the marked object soap dispenser in the current frame, how far is <Target Object> from <Anchored Object>?",
  },
];

const stats = [
  { value: "HD-EPIC", label: "Dataset" },
  { value: "7", label: "Question types" },
  { value: "3D", label: "Spatial reasoning" },
  { value: "VLM", label: "Evaluation target" },
];

export default function Homepage() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="h-full overflow-y-auto overflow-x-hidden bg-white text-slate-900 dark:bg-[#080c14] dark:text-[#e8eaf0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        * { box-sizing: border-box; }

        .homepage-font {
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
        }

        .fade-up.in {
          opacity: 1;
          transform: translateY(0);
        }

        .d1 { transition-delay: 0.05s; }
        .d2 { transition-delay: 0.15s; }
        .d3 { transition-delay: 0.25s; }
        .d4 { transition-delay: 0.35s; }
        .d5 { transition-delay: 0.45s; }
        .d6 { transition-delay: 0.55s; }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,91,219,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,91,219,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%);
        }

        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.018;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
        }

        .logo-ring {
          position: absolute;
          border-radius: 50%;
          border: 0.5px solid rgba(59,91,219,0.2);
          animation: spin linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-row { flex-wrap: wrap; gap: 20px !important; }
          .stat-divider { display: none; }
          .caps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <Hero ref={heroRef} visible={visible} stats={stats} />

      {/* ── WHAT WE TEST ─────────────────────────────────────── */}
      <Trajectory capabilities={capabilities} />

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <Pipeline />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <View />

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
