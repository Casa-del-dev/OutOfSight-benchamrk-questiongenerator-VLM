# OutOfSight Benchmark – Question Generator for VLMs

## Overview

OutOfSight is a benchmark and question generation framework designed for evaluating vision-language models (VLMs) on tasks involving spatial reasoning and out-of-sight memory.

The project provides:

- A frontend interface (React + Vite + Tailwind)
- Tools for generating benchmark questions
- A foundation for evaluating model performance

---

## Requirements

Make sure you have the following installed:

- Node.js (>= 18 recommended)
- npm (comes with Node)

---

## Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

Install dependencies:

```bash
npm install
```

---

## Running the project

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal (typically):

```
http://localhost:5173
```

---

## Build for production

To create a production build:

```bash
npm run build
```

To preview the build:

```bash
npm run preview
```

---

## Project Structure

```
.
├── public/              # Static assets (logos, favicon)
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   ├── Layout.tsx      # App layout (header, structure)
│   ├── App.tsx         # Router + app structure
│   ├── main.tsx        # Entry point
│   └── index.css       # Tailwind setup
├── index.html
├── vite.config.ts
└── package.json
```

---

## Dark Mode

The application supports dark mode based on:

- User preference stored in `localStorage`
- System preference (`prefers-color-scheme`)

The theme is applied at startup in `main.tsx`.

---

## Favicon Behavior

The favicon automatically switches based on system theme:

- Light mode → `Logo-sm-light.png`
- Dark mode → `Logo-sm-dark.png`

Configured in `index.html` using media queries.

---

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router

---

## License (GNU GPL v3)

This project is licensed under the GNU General Public License v3.0.

You are free to:

- Use
- Modify
- Distribute

Under the following conditions:

- You must disclose source code
- You must use the same license (GPL v3)
- You must include the original license and copyright

Full license text: https://www.gnu.org/licenses/gpl-3.0.en.html

---

## Author

Casa-del-Dev

---

## Notes

This project is part of a research-oriented workflow for benchmarking vision-language models. Further extensions may include automated evaluation pipelines and dataset integration.
