# 🎨 Avatar Generator

> 🚀 **Live Demo:** [https://avatarimggenerator.netlify.app/](https://avatarimggenerator.netlify.app/)

A fast, lightweight, and playful cartoon avatar generator web app. Customize unique avatars, randomize styles with fun animations, download as PNG/SVG, copy straight to your clipboard, and share exact configurations via URL — with zero sign-ups or server requirements.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://avatarimggenerator.netlify.app/)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **🎭 Deep Customization**:
  - **Head Shapes**: Rounded & Angular
  - **Skin Tones**: 6 curated natural tones
  - **Hair Styles**: 13 diverse styles (Buzz, Crew Cut, Bob, Pixie, Side Part, Long Straight, Long Wavy, Long Curly, Braids, Ponytail, Space Buns, Mohawk, Bald)
  - **Hair Colors**: 7 vibrant colors (Black, Brown, Blonde, Red, Gray, Blue, Pink)
  - **Eyes**: 8 expressive styles (Round, Narrow, Almond, Happy, Wink, Lashes, Doe, Cool)
  - **Mouths**: 6 fun expressions (Smile, Grin, Open, Neutral, Smirk, Lipstick)
  - **Accessories**: Glasses, Sunglasses, Headbands, Earrings, Bows, or None
  - **Backgrounds**: 6 pastel color palettes + **Real Alpha Transparency** option
- **🎲 One-Click Randomizer**: Instant randomized styles with a playful shake animation.
- **🖼️ High-Res PNG Export**: Browser-rendered 512×512 crisp PNG with transparent or solid background.
- **📐 Pure Vector SVG Export**: Standalone vector SVG ready for web design, apps, or print.
- **📋 Copy to Clipboard**: Copy your avatar directly as a PNG image to paste into Discord, Slack, Figma, Twitter, etc.
- **🔗 Shareable Avatar URLs**: The entire avatar state is encoded into URL parameters (`?head=0&skin=3&hair=6...`). Share your exact avatar with a single click.
- **💾 Auto-Save (Offline)**: Automatically remembers your last created avatar using `localStorage`.
- **📱 100% Responsive & Accessible**: Optimized for mobile screens (320px+), tablets, and desktops, with keyboard navigation and ARIA labels.
- **⚡ Client-Side Only**: 0 tracking, 0 database, 0 external paid APIs. Fast and private.

---

## 🚀 Quick Start (Run Locally)

### Prerequisites

Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/avatar-generator.git
cd avatar-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### 4. Build for production

```bash
npm run build
```

The compiled, production-ready static assets will be output to the `dist/` directory.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [lucide-react](https://lucide.dev/)
- **Typography**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Google Fonts)

---

## 📁 Project Structure

```
avatar-generator/
├── public/                 # Static assets & icons
├── src/
│   ├── avatar/             # Modular SVG rendering logic
│   │   ├── accessories.ts  # Glasses, headband, earrings, bows
│   │   ├── eyes.ts         # Eyebrows and eye variations
│   │   ├── hair.ts         # Hair styling for rounded and angular heads
│   │   ├── heads.ts        # Base head geometries & ears
│   │   ├── mouths.ts       # Mouth variations
│   │   └── renderAvatarSvg.ts # Full SVG assembler & standalone generator
│   ├── components/         # Reusable React components
│   │   ├── Avatar.tsx      # Avatar display & shake animation
│   │   ├── AvatarEditor.tsx# Customization controls container
│   │   ├── ExportActions.tsx# Export buttons (PNG, SVG, Clipboard, Share)
│   │   ├── OptionControl.tsx# Accessible left/right cycling selector
│   │   └── Toast.tsx       # Lightweight feedback notification
│   ├── data/
│   │   └── avatarOptions.ts# Color palettes, names, and option constants
│   ├── types/
│   │   └── avatar.ts       # TypeScript definitions & state models
│   ├── utils/
│   │   ├── copyAvatar.ts   # Clipboard API image copying
│   │   ├── exportPNG.ts    # Canvas-based high-res PNG export
│   │   ├── exportSVG.ts    # Standalone SVG blob download
│   │   ├── shareAvatar.ts  # URL parameter encoding & decoding
│   │   └── storage.ts      # Safe localStorage persistence
│   ├── App.tsx             # Root layout and state management
│   ├── index.css           # Global Tailwind & design token styles
│   └── main.tsx            # React application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🌐 Deployment

Since this app is a purely static client-side Single Page Application (SPA), it can be deployed anywhere for free:

### Deploy to Vercel (Recommended)

```bash
npx vercel
```
Or connect your GitHub repository directly on [Vercel](https://vercel.com). Vite is automatically detected.

### Deploy to Netlify

Run `npm run build` and drag & drop the generated `dist/` directory onto [Netlify Drop](https://app.netlify.com/drop).

### Deploy to GitHub Pages

1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. In `vite.config.ts`, add `base: '/avatar-generator/'`.
3. In `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

---

## 🙏 Credits & Acknowledgements

- **Original Design & Artwork**: The visual identity, layout inspiration, and original SVG avatar illustrations are based on the **"Interactive Avatar Generator"** template created by **Canva Creative Studio** on [Canva](https://www.canva.com/).
- **Re-engineered with React & TypeScript**: This open-source project modernizes the original concept into a standalone, client-side React 19 + TypeScript + Vite application with URL state sharing, PNG/SVG exports, and clipboard support.

---

## 📄 License

The code and application architecture are licensed under the [MIT License](LICENSE).
Avatar artwork and visual design concepts belong to **Canva Creative Studio** / Canva.
