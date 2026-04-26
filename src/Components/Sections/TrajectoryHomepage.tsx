import { motion } from "framer-motion";

type Capability = {
  code: string;
  title: string;
  desc: string;
};

type TrajectoryProps = {
  capabilities: Capability[];
  ref?: React.Ref<HTMLElement>;
  visible: boolean;
};

export default function Trajectory({
  capabilities,
  ref,
  visible,
}: TrajectoryProps) {
  return (
    <section
      ref={ref}
      className={`fade-up mx-auto max-w-275 px-8 py-20 ${visible ? "in" : ""}`}
    >
      <div className="mb-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-blue-400">
          01 — Benchmark structure
        </span>
      </div>

      <h2 className="mb-4 font-serif text-[clamp(28px,3vw,40px)] font-bold text-slate-950 dark:text-[#f0f2f8]">
        Multi-step spatial reasoning questions
      </h2>

      <p className="mb-12 text-[15px] leading-7 text-slate-600 dark:text-[#5a6a88] text-center w-full">
        Models are asked with gradually increasing reasoning steps to track the
        target object that was moved or viewed in the past, and infer its
        spatial relation with the current scene. The questions are designed to
        evaluate spatial memory, object permanence, and hidden-state tracking in
        egocentric video.
      </p>

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* continuous line from first dot to last dot */}
        <div
          className="
      absolute left-4 top-3.25
      w-px bg-slate-200 dark:bg-white/10
    "
          style={{
            height: `calc(100% - ${capabilities.length > 1 ? "13px" : "0px"})`,
          }}
        />

        <div className="flex flex-col gap-10">
          {capabilities.map((c, index) => {
            const isLast = index === capabilities.length - 1;

            return (
              <motion.div
                key={c.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="
        relative grid grid-cols-[32px_1fr] gap-6 pb-10

        before:absolute before:left-4 before:top-0
        before:h-3 before:w-px before:bg-transparent

        after:absolute after:left-4 after:top-4
        after:w-px after:bg-slate-200 dark:after:bg-white/10

          last:after:hidden
      "
                style={{
                  // hide the line for last item
                  ...(isLast && { ["--tw-content" as any]: "none" }),
                }}
              >
                {/* DOT */}
                <div className="relative z-10 flex justify-center">
                  <div className="mt-1 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-white dark:bg-blue-500 dark:ring-[#060a10]" />
                </div>

                {/* CONTENT */}
                <div className="max-w-xl">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-blue-600 dark:text-blue-400">
                    {c.code}
                  </div>

                  <h3 className="mb-2 text-base font-medium text-slate-900 dark:text-[#c5d0e8]">
                    {c.title}
                  </h3>

                  <p className="text-[13px] leading-6 text-slate-600 dark:text-[#5a6a88]">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
