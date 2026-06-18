<<<<<<< HEAD
# Shibin — Full Stack Web Developer Portfolio

A modern, responsive personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Glassmorphism & gradient design with blue/purple palette
- Dark/Light mode toggle
- Smooth scroll navigation with progress indicator
- Framer Motion animations and hover effects
- Fully responsive (mobile, tablet, desktop)
- SEO optimized with Open Graph metadata
- Scroll-to-top button & loading animation
- Accessible, production-ready components

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Navigate to the project
cd shibin-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
shibin-portfolio/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css      # Global styles & Tailwind
│   │   ├── layout.tsx       # Root layout with SEO metadata
│   │   └── page.tsx         # Main page composing all sections
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, ScrollProgress, ScrollToTop
│   │   ├── sections/        # Hero, About, Projects, Services, Experience, Contact
│   │   └── ui/              # Reusable UI (GlassCard, ThemeToggle, etc.)
│   ├── data/                # Content data (skills, projects, services, etc.)
│   ├── lib/                 # Utility functions
│   └── types/               # TypeScript type definitions
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Customization

Edit content in the `src/data/` folder:

| File | Contents |
|------|----------|
| `site.ts` | Name, tagline, contact info, social links |
| `skills.ts` | Skills grid items |
| `projects.ts` | Project cards |
| `services.ts` | Service offerings |
| `experience.ts` | Experience & education timeline entries |

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
vercel
```

Follow the prompts to link your project and deploy.

### Option 2: GitHub Integration

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New Project**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — keep default settings
6. Click **Deploy**

Your site will be live at `https://your-project.vercel.app`.

### Environment Variables

No environment variables are required for the base portfolio. Add them in Vercel dashboard if you integrate a contact form backend (e.g., Resend, Formspree).

## License

© 2026 Shibin. All rights reserved.
=======
# Shibin-Portfolio
>>>>>>> 47692949b56857279a11ea2be9f201dffb6e2f19
