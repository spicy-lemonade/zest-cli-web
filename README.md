# Zest CLI - Website

#### Web frontend for a privacy-first natural language CLI tool. Using locally-trained small language models. No cloud. No API keys. Runs offline. Runs on CPU.

![spicy](https://github.com/user-attachments/assets/9c3d925d-5c7b-44ed-a2c8-b73e5a897895)

## 🎯 What is This?

This is the **website** for Zest CLI - a command-line tool that converts natural language into shell commands using locally-trained small language models. The site showcases the product's features, pricing, and download options.

The actual CLI tool runs **100% offline** with no tracking, no API keys, and complete privacy. This website explains why engineers should use it.

---

## 🛠 Tech Stack

* **Vite:** Lightning-fast development server with Hot Module Replacement (HMR) and optimized production builds.
* **React 19:** Component-based UI library for building the interactive landing page.
* **TypeScript:** Static type checking for improved code quality and developer experience.
* **Tailwind CSS:** Utility-first CSS framework loaded via CDN for rapid UI development.
* **Lucide React:** Beautiful, consistent icon library for UI elements (terminal icons, feature badges, navigation).

---

## 🏗 Project Structure

```
.
├── App.tsx              # Main application component with hero, features, pricing
├── components/          # Reusable React components
│   ├── Terminal.tsx     # Interactive terminal demo
│   ├── Features.tsx     # Feature showcase section
│   └── Pricing.tsx      # Pricing cards and download CTAs
├── index.html           # HTML entry point (includes Tailwind CDN)
├── index.tsx            # React app entry point
├── types.ts             # TypeScript type definitions
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🎨 Design System

The site uses a **"Spicy Lemonade" brand identity** with:

* **Color Palette:** Yellow-to-red gradient (`#facc15` → `#ef4444`)
* **Typography:** Plus Jakarta Sans (headings/body), JetBrains Mono (code)
* **Style:** Bold, modern, high-contrast design with smooth animations
* **Components:** All styled using Tailwind utility classes with custom gradient utilities

---

## 🔗 Related Repositories

* **[natural-language-cli-infra](https://github.com/spicy-lemonade/natural-language-cli-infra):** Terraform infrastructure for ML training pipeline (GCS buckets, IAM, billing).
* **[natural-language-cli-eng](https://github.com/spicy-lemonade/natural-language-cli-eng):** Core CLI tool and model training code.

---

## 💡 Philosophy

This site follows the same principles as the product itself:

* **Fast:** Vite ensures instant Hot Module Replacement (HMR) and optimized builds.
* **Simple:** No unnecessary dependencies or complexity.
* **Privacy-focused:** No analytics, no tracking scripts, no third-party services.
* **Offline-first:** The *product* runs offline; the site explains why that matters.
