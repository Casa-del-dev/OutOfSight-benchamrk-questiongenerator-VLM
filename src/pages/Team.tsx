import Footer from "../Components/Sections/Footer";
import { useDelayedInView } from "../Lib/DelayAnimation";

type TeamPerson = {
  name: string;
  affiliation: string;
  role: string;
  focus: string;
};

const projectMembers: TeamPerson[] = [
  {
    name: "Fangzhou Ma",
    affiliation: "MSc Data Science, ETH Zürich",
    role: "Project member",
    focus:
      "Out-of-sight spatial memory benchmark, question generation, wording, 3D-VLM evaluation, edge-case handling, setup, integration into a single package, and research.",
  },
  {
    name: "Ivo Alexander Ban",
    affiliation: "MSc Computer Science, ETH Zürich",
    role: "Project member",
    focus:
      "Backbone visibility development, research, and question generation, formalization.",
  },
  {
    name: "Eren Homburg",
    affiliation: "MSc Computer Science, ETH Zürich",
    role: "Project member",
    focus:
      "Implementation of benchmark steps, research, question generation, and website development with visual design.",
  },
  {
    name: "Xiaoxuan Cheng",
    affiliation: "MSc Electrical Engineering, ETH Zürich",
    role: "Project member",
    focus: "Project presentation.",
  },
];

const supervisors: TeamPerson[] = [
  {
    name: "Gabriele Goletto",
    affiliation: "Research Scientist, Microsoft",
    role: "Supervisor",
    focus: "Project supervision",
  },
  {
    name: "Chiara Plizzari",
    affiliation: "Assistant Professor, Bocconi University",
    role: "Supervisor",
    focus: "Project supervision",
  },
  {
    name: "Rémi Pautrat",
    affiliation: "Senior Research Scientist, Microsoft",
    role: "Supervisor",
    focus: "Project supervision",
  },
  {
    name: "Mahdi Rad",
    affiliation: "Senior Research Scientist, Microsoft",
    role: "Supervisor",
    focus: "Project supervision",
  },
];

type PersonCardProps = {
  person: TeamPerson;
  index: number;
};

function PersonCard({ person, index }: PersonCardProps) {
  const { ref, visible } = useDelayedInView(150 + index * 100);

  const initials = person.name
    .split(" ")
    .filter(Boolean)
    .map((x) => x[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article
      ref={ref}
      className={`fade-up ${
        visible ? "in" : ""
      } group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/4`}
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl transition duration-300 group-hover:bg-blue-500/20" />

      <div className="relative flex items-start gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 font-mono text-lg font-medium text-blue-700 dark:text-blue-300">
          {initials}
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
            {person.role}
          </p>

          <h3 className="mt-2 text-xl font-medium text-slate-950 dark:text-white">
            {person.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {person.affiliation}
          </p>
        </div>
      </div>

      <p className="relative mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {person.focus}
      </p>
    </article>
  );
}

export default function Team() {
  const { ref: membersRef, visible: membersVisible } = useDelayedInView(300);
  const { ref: supervisorsRef, visible: supervisorsVisible } =
    useDelayedInView(300);
  const { ref: footerRef, visible: footerVisible } = useDelayedInView(300);

  return (
    <main className="homepage-font w-full overflow-x-clip bg-white text-slate-900 dark:bg-[#080c14] dark:text-[#e8eaf0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        * { box-sizing: border-box; }

        .homepage-font {
          font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
        }

        .serif {
          font-family: 'Playfair Display', serif;
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

        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr !important; }
          .team-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* PROJECT MEMBERS */}
      <section
        ref={membersRef}
        className="relative px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className={`fade-up ${membersVisible ? "in" : ""}`}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
              Contributors
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-slate-950 dark:text-white md:text-5xl">
              Project members
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              The members who worked on the implementation, experiments,
              question generation pipeline, visualization, and evaluation.
            </p>
          </div>

          <div className="team-grid mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {projectMembers.map((person, index) => (
              <PersonCard
                key={person.name + index}
                person={person}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto h-px w-[90%] max-w-7xl bg-slate-200 dark:bg-white/10" />

      {/* SUPERVISORS */}
      <section
        ref={supervisorsRef}
        className="relative px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className={`fade-up ${supervisorsVisible ? "in" : ""}`}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
              Guidance
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-slate-950 dark:text-white md:text-5xl">
              Supervisors
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              Research supervisors supporting the direction, framing, and
              quality of the benchmark.
            </p>
          </div>

          <div className="team-grid mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {supervisors.map((person, index) => (
              <PersonCard
                key={person.name + index}
                person={person}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer ref={footerRef} visible={footerVisible} />
    </main>
  );
}
