# SmartPostAI - AI-Powered LinkedIn Content Automation Platform 🚀

SmartPostAI is an intelligent content creation, scheduling, and analytics platform designed to empower professionals, creators, and teams to build and scale their presence on LinkedIn effortlessly.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)

---

## ✨ Features

- 🤖 **AI Content Studio**: Generate viral hooks, high-converting posts, and custom brand voices in seconds.
- 🖼️ **AI Image & Visuals**: Create custom images and SVG graphics matched directly to post topic context.
- 🔗 **URL-to-Post Converter**: Paste any blog URL, documentation, or news article to instantly synthesize engaging LinkedIn posts.
- 📅 **Smart Scheduler & Queue**: Plan, preview, and automate your post publication calendar.
- 📊 **Analytics & Performance Tracking**: Monitor impression growth, engagement rates, and top-performing content formats.
- 💼 **LinkedIn Integration**: Smooth OAuth authentication, direct publishing, and organization page posting.
- 💬 **Slack Workflow Integration**: Automated Slack notifications for post approvals, scheduled queues, and performance digests.
- 🌗 **Responsive Modern UI**: Built with glassmorphism aesthetics, animated transitions (Framer Motion), and full dark/light theme support.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI & Components**: React 19, [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/)
- **Styling & Animations**: [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Charts & Diagrams**: [Mermaid.js](https://mermaid.js.org/)
- **State & Notifications**: React Context, [Sonner Toast Notifications](https://sonner.emilkowal.si/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ladyunicorn560/SmartPostAI_frontend.git
   cd SmartPostAI_frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_BASE=http://localhost:8000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deployment on Vercel

1. Push your repository to GitHub.
2. Log into [Vercel](https://vercel.com) and click **"Import Project"**.
3. Select `SmartPostAI_frontend`.
4. Add the environment variable:
   - `NEXT_PUBLIC_API_BASE`: `<Your Production Backend URL>`
5. Click **Deploy**.

---

## 📄 License

This project is licensed under the MIT License.
