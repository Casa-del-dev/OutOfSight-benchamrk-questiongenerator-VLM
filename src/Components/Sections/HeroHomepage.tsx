import React from "react";
import logo from "../../assets/Logo.png";

type Stat = {
  value: string;
  label: string;
};

type HeroProps = {
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
  stats: Stat[];
};

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

export default function Hero({ ref, visible, stats }: HeroProps) {
  return (
    <section
      ref={ref}
      className="
        relative flex min-h-full items-center overflow-hidden px-8 pb-16 pt-24
        bg-white text-slate-950
        dark:bg-[#070b14] dark:text-[#f0f2f8]
      "
    >
      <div className="grid-bg" />
      <div className="noise" />

      <div className="relative z-10 mx-auto grid w-full max-w-275 gap-20 lg:grid-cols-[1fr_480px]">
        <div className="flex flex-col justify-center">
          <div className={`fade-up d1 ${visible ? "in" : ""}`}>
            <span
              className="
                inline-flex items-center gap-2 rounded-full border px-3 py-1
                border-blue-200 bg-blue-50 text-blue-700
                dark:border-white/10 dark:bg-white/5 dark:text-blue-300
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Vision-Language Model Benchmark
            </span>
          </div>

          <h1
            className={`fade-up d2 ${visible ? "in" : ""} my-5 font-serif text-[clamp(52px,6vw,78px)] font-bold leading-[1.05] tracking-[-0.02em] text-slate-950 dark:text-[#f0f2f8]`}
          >
            Out
            <span className="italic text-blue-600 dark:text-blue-500">Of</span>
            Sight
          </h1>

          <p
            className={`fade-up d3 ${visible ? "in" : ""} mb-4 max-w-130 text-lg font-light leading-8 text-slate-700 dark:text-[#8899b8]`}
          >
            Can a vision-language model remember where you put something after
            it disappears from the frame?
          </p>

          <p
            className={`fade-up d4 ${visible ? "in" : ""} mb-10 max-w-125 text-[15px] leading-7 text-slate-600 dark:text-[#5a6a88]`}
          >
            OutOfSight benchmarks spatial memory, object permanence, and
            hidden-state tracking in egocentric cooking video — built on
            HD-EPIC&apos;s dense 3D object annotations.
          </p>

          <div
            className={`fade-up d5 ${visible ? "in" : ""} flex flex-wrap gap-3`}
          >
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
              Question generator
              <ArrowIcon />
            </a>

            <a
              href="/benchmark"
              className="
                group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium
                border border-slate-200 bg-slate-100 text-slate-800 shadow-sm
                transition-all duration-300
                hover:bg-white hover:border-slate-300 hover:text-slate-950 hover:shadow-md
                active:scale-95
                dark:border-white/10 dark:bg-white/5 dark:text-gray-200
                dark:hover:bg-white/10 dark:hover:border-white/20 dark:hover:text-white
              "
            >
              Benchmark
              <ArrowIcon />
            </a>
          </div>

          <div
            className={`fade-up d6 ${visible ? "in" : ""} mt-14 flex flex-wrap items-center gap-7 border-t pt-8 border-slate-200 dark:border-[#1e2a40]`}
          >
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                <div>
                  <div className="mb-0.5 font-mono text-[17px] font-medium text-slate-900 dark:text-[#c5d0e8]">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.06em] text-slate-500 dark:text-[#4a5870]">
                    {s.label}
                  </div>
                </div>

                {i < stats.length - 1 && (
                  <div className="h-8 w-px bg-slate-200 dark:bg-[#1e2a40]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div
          className={`fade-up d4 ${visible ? "in" : ""} flex items-center justify-center`}
        >
          <div className="relative h-105 w-105">
            <div
              className="
      pointer-events-none absolute left-1/2 top-1/2 h-150 w-150
      -translate-x-1/2 -translate-y-1/2
      bg-[radial-gradient(circle,rgba(59,91,219,0.18)_0%,transparent_70%)]
      dark:bg-[radial-gradient(circle,rgba(59,91,219,0.14)_0%,transparent_70%)]
    "
            />
            <div className="logo-ring absolute left-5 top-5 h-95 w-95" />
            <div
              className="logo-ring absolute left-14 top-14 h-77 w-77"
              style={{
                animationDuration: "18s",
                animationDirection: "reverse",
              }}
            />

            <div
              className="
                absolute left-1/2 top-1/2 flex h-70 w-70
                -translate-x-1/2 -translate-y-1/2 items-center justify-center
                rounded-[28px] border p-8
                border-slate-200 bg-white shadow-xl shadow-blue-500/10
                dark:border-[#1e2a40] dark:bg-[#0d1320] dark:shadow-blue-500/5
              "
            >
              <img
                src={logo}
                alt="OutOfSight logo"
                className="h-full w-full object-contain"
              />
            </div>

            {[
              {
                label: "Object permanence",
                top: "4%",
                left: "-12%",
                delay: "0.8s",
              },
              {
                label: "Spatial memory",
                bottom: "8%",
                right: "-10%",
                delay: "1s",
              },
              {
                label: "Hidden state",
                top: "50%",
                right: "-18%",
                delay: "1.2s",
              },
            ].map((f) => (
              <div
                key={f.label}
                className="
                  absolute whitespace-nowrap rounded-lg border px-3 py-1.5
                  font-mono text-[10px]
                  border-slate-200 bg-white text-blue-600 shadow-sm
                  dark:border-[#1e2a40] dark:bg-[#0d1320] dark:text-blue-400
                "
                style={{
                  top: f.top,
                  bottom: f.bottom,
                  left: f.left,
                  right: f.right,
                  animation: `fade-up 0.6s ${f.delay} both`,
                }}
              >
                {f.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
