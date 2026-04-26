type ViewProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function View({ ref, visible }: ViewProps) {
  return (
    <section
      ref={ref}
      className={`relative overflow-hidden px-8 py-24 text-center
        bg-white text-slate-950
        dark:bg-[#070b14] dark:text-[#f0f2f8] ${visible ? "fade-up in" : ""}`}
    >
      <div
        className="
          pointer-events-none absolute bottom-[-20%] left-1/2 h-100 w-175 -translate-x-1/2
          bg-[radial-gradient(ellipse,rgba(59,91,219,0.12)_0%,transparent_70%)]
          dark:bg-[radial-gradient(ellipse,rgba(59,91,219,0.16)_0%,transparent_70%)]
        "
      />

      <div className="relative z-10">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
          03 — Get started
        </p>

        <h2
          className="
            mb-5 font-serif text-[clamp(32px,4vw,52px)] font-bold
            text-slate-950 dark:text-[#f0f2f8]
          "
        >
          Ready to test your model?
        </h2>

        <p className="mx-auto mb-10 max-w-110 text-base leading-7 text-slate-600 dark:text-[#5a6a88]">
          Download question pairs in JSONL format, or use our codebase to
          evaluate directly against your model outputs.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/question-generator"
            className="
              group inline-flex items-center gap-2 rounded-xl
              bg-linear-to-r from-blue-500 to-blue-600
              px-6 py-3 font-medium text-white
              shadow-lg shadow-blue-500/20
              transition-all duration-300
              hover:from-blue-400 hover:to-blue-500 hover:shadow-blue-500/40
              active:scale-95
            "
          >
            Example Question Pairs
            <ArrowIcon />
          </a>

          <a
            href="/benchmark"
            className="
              group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium
              text-slate-800
              bg-slate-100 border border-slate-200
              shadow-sm
              transition-all duration-300
              hover:bg-white hover:border-slate-300 hover:text-slate-950 hover:shadow-md
              active:scale-95

              dark:text-gray-200
              dark:bg-white/5 dark:border-white/10
              dark:hover:bg-white/10 dark:hover:border-white/20 dark:hover:text-white
            "
          >
            Example Benchmark
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
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
  );
}
