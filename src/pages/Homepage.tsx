import React from "react";
import logo from "../assets/Logo.png";

const Homepage: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-white text-gray-900 dark:bg-slate-900 dark:text-slate-100">
      <section
        className="w-full max-w-3xl rounded-3xl p-10 text-center 
                          bg-white/80 dark:bg-slate-800/80 
                          backdrop-blur shadow-2xl"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div
            className="w-28 h-28 p-4 rounded-2xl 
                          bg-gray-100 dark:bg-slate-700 
                          flex items-center justify-center"
          >
            <img
              src={logo}
              alt="OutOfSight logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold">OutOfSight</h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 dark:text-slate-300 leading-relaxed">
          Benchmark question generator for vision-language models.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/question-generator"
            className="px-6 py-3 rounded-full font-semibold 
                       bg-blue-600 text-white 
                       hover:bg-blue-700 transition"
          >
            Question Generator
          </a>

          <a
            href="/benchmark"
            className="px-6 py-3 rounded-full font-semibold 
                       border border-gray-300 dark:border-slate-500
                       hover:bg-gray-100 dark:hover:bg-slate-700
                       transition"
          >
            Benchmark
          </a>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
