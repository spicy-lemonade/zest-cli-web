# 🌶️ Zest CLI from Spicy Lemonade 🍋

*This is the frontend repo for our website. You probably want the [core repo](https://github.com/spicy-lemonade/zest-cli).*

#### Small language models. Runs offline. Runs on CPU. No cloud. No API keys. Privacy first. No tracking.

Zest CLI translates natural language into shell commands using local small language models. macOS only. Learn more at [zestcli.com](https://zestcli.com). 

![preview_zest](https://github.com/user-attachments/assets/d4891d15-6d1b-4464-9122-b6843c941764)

## 🚀 Beyond the Basics
While the GIF shows simple file management, Zest is designed for a variety of domains:

- Networking: "Show all active listening TCP ports"
- Docker: "Show the logs for the Docker container `my-app`"
- Git: "Show the most recent commit that modified the file components/pages/AboutPage.tsx"
- System: "Check my disk usage and sort the top 5 largest directories in my home folder"

*Note: Zest works best with single requests. i.e. `show the top 5 XXX` is better than `show the top 5 XXX or YYY`*

### Why Zest CLI?

- **Small language models** — purpose-trained SLMs optimised for CLI command translation
- **Runs offline** — runs entirely on your machine with no network calls at inference time
- **Runs on CPU** — no GPU needed, works on any modern Mac
- **No cloud** — no cloud dependencies at inference time
- **No API keys** — no accounts, tokens, or subscriptions required
- **Privacy first** — your commands and queries never leave your device
- **No tracking** — zero telemetry, user data, or usage data collection

---

## 🎯 What is This Repo?

This is the **website** for Zest CLI - a command-line tool that converts natural language into shell commands using locally-trained small language models. The site showcases the product's features, pricing, and download options. The actual CLI tool runs **100% offline** with no tracking, no API keys, and complete privacy. 


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

## 🔗 Related Repositories

* **[natural-language-cli-infra](https://github.com/spicy-lemonade/zest-cli):** Core app and infrastructure for the Zest small language model.

---

## 💡 Philosophy

This site follows the same principles as the product itself:

* **Fast:** Vite ensures instant Hot Module Replacement (HMR) and optimized builds.
* **Simple:** No unnecessary dependencies or complexity.
* **Privacy-focused:** No analytics, no tracking scripts, no third-party services.
* **Offline-first:** The *product* runs offline; the site explains why that matters.

New developers must be onboarded with IAM permissions and API keys before working with this infrastructure. See [docs/setup.md](docs/setup.md) for setup, deployment, IAM, and secrets configuration.

![spicy](https://github.com/user-attachments/assets/9c3d925d-5c7b-44ed-a2c8-b73e5a897895)
