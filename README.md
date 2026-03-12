<p align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" width="180"/>
</p>

<h1 align="center">🌿 Bulbasaur Garden</h1>

<p align="center">
  <em>A premium, fan-made Pokémon encyclopaedia and immersive digital experience built with modern web technologies.</em>
</p>

---

## 📖 About The Project

**Bulbasaur Garden** is an interactive web application designed as a digital sanctuary for Pokémon fans. It seamlessly merges a comprehensive **National Pokédex** with an engaging, relaxing environment called **The Garden**. Built with a major focus on modern user interfaces, the project utilizes crystal-clear glassmorphism, dynamic animations, and vibrant color palettes to deliver a top-tier visual and interactive experience.

## ✨ Core Features

- **National Pokédex**: A robust catalog of 1000+ Pokémon featuring high-res official artwork, in-depth statistics, type matchups, and detailed abilities.
- **The Garden Sanctuary**: An immersive, multisensorial page featuring interactive star particle animations, glowing orbs, and a magical Bulbasaur encounter.
- **Premium UI & UX**: Crafted with deep dark modes, thematic neon accents, subtle micro-animations, and fully responsive multi-column layouts across mobile, tablet, and desktop devices.
- **Advanced Performance**: Lightning-fast search optimized to find any Pokémon in milliseconds, custom fonts (`next/font`), and modern server-side operations.
- **Contact Hub**: A stylized, comprehensive contact section built dynamically with CSS Grids.

## 🛠️ Technologies & Tools Used

The project uses a powerful React-based stack to ensure top functionality, fast rendering, and a smooth developer experience.

<div align="center" style="margin: 20px 0;">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width="45" height="45" alt="Next.js" title="Next.js" style="margin: 0 10px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="45" height="45" alt="React" title="React" style="margin: 0 10px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="45" height="45" alt="Tailwind CSS" title="Tailwind CSS" style="margin: 0 10px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="45" height="45" alt="TypeScript" title="TypeScript" style="margin: 0 10px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" width="45" height="45" alt="ESLint" title="ESLint" style="margin: 0 10px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" width="45" height="45" alt="Vercel" title="Vercel" style="margin: 0 10px;"/>
</div>

<br/>

## 📈 Recent Updates & Milestones

Here is a summary of our latest development efforts and continuous improvements:

- **Enhanced Pokédex Presentation:** Added deep details for each Pokémon, displaying their initial attacks and abilities with rich, descriptive hover states and stunning glassmorphic card designs.
- **Bulbasaur Animation Polish:** Upgraded "The Garden" aesthetics. We refined Bulbasaur's idle state, integrated responsive bright star particle trails, and implemented dramatic interaction effects upon clicks.
- **Responsive Layout Architecture:** Overhauled CSS grids on the Contact page to ensure perfect layout scaling on laptops, tablets, and mobile views. Calibrated SVG icon bounds so they dynamically remain constrained inside project cards.
- **Production Deployment Readiness:** Successfully resolved Next.js build limits and prerendering errors to ensure flawless remote hosting on the **Vercel Platform**.

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have **Node.js** (version 18 or higher) installed on your system.

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/bulbasaur-garden.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd bulbasaur-garden
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Or alternatively run `yarn install` or `pnpm install`)*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Explore:** Open [http://localhost:3000](http://localhost:3000) in your web browser.

## 📂 Project Architecture

We employ a scalable, feature-sliced architecture tailored for the Next.js App Router:

- `/app`: Global App Router handling (`layout.tsx`, `page.tsx`), global stylesheets (`globals.css`), and localized routing bounds (for `/Pokedex`, `/Garden`, `/Contact`).
- `/src/features`: Segregated domains encapsulating their individual components and logic:
  - `/Home`: Hero section, application highlight displays, and main presentation cards.
  - `/Pokedex`: Logic for fetching, displaying, and navigating the Pokémon catalog.
  - `/Garden`: Specialized aesthetic components, ambient glow, and high-fidelity animations.

## ⚖️ Disclaimer & License

This is a non-profit, fan-made portfolio project created strictly for educational and aesthetic design purposes. 

**Pokémon** and all respective names, images, and concepts belong completely to Nintendo, Creatures Inc., and GAME FREAK inc. No copyright infringement is intended. 

---
<p align="center">
  <b>Developed with dedication to the Pokémon community.</b>
</p>
