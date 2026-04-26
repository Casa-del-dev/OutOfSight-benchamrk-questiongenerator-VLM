type PipelineProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function Pipeline({ ref, visible }: PipelineProps) {
  const steps = [
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
  ];

  return (
    <section
      ref={ref}
      className={`
        fade-up ${visible ? "in" : ""}
        px-8 py-20
        border-t border-b
        border-slate-200 dark:border-[#1e2a40]
        bg-white dark:bg-[#070b14]
      `}
    >
      <div className="mx-auto max-w-275">
        <div className="mb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
            02 — Pipeline
          </span>
        </div>

        <h2
          className="
            mb-12 font-serif text-[clamp(28px,3vw,40px)] font-bold
            text-slate-950 dark:text-[#f0f2f8]
          "
        >
          From video to benchmark
        </h2>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`
                relative p-8
                ${i < steps.length - 1 ? "lg:border-r border-slate-200 dark:border-[#1e2a40]" : ""}
              `}
            >
              <div
                className="
                  mb-4 font-mono text-[32px] font-medium leading-none
                  text-slate-300 dark:text-[#1a2540]
                "
              >
                {step.n}
              </div>

              <div className="mb-2 text-sm font-medium text-slate-800 dark:text-[#c5d0e8]">
                {step.title}
              </div>

              <div className="text-[13px] leading-7 text-slate-600 dark:text-[#4a5870]">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
