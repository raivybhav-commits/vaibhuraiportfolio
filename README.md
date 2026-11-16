# Premium Personal Portfolio — Vaibhav Rai A V
> **AI & Machine Learning Engineer | Python Developer | VTU Branch Topper**

A modern, high-performance personal portfolio website built with **React 19, TypeScript, Vite, Tailwind CSS, and Lucide Icons**. Designed to present the engineering caliber of an Artificial Intelligence & Machine Learning professional.

---

## 🌟 Key Highlights

- **Design Aesthetic**: Deep Navy/Almost Black (`#080D18`), Electric Blue (`#3B82F6`), and Cyan (`#22D3EE`) with subtle glassmorphism and modern typography (*Space Grotesk*, *Inter*, *JetBrains Mono*).
- **Interactive Neural Background Canvas**: Lightweight, dynamic neural network constellation reacting to mouse movements.
- **Hero Section**: Bold typography, live telemetry badge, CTAs (*View My Projects*, *Download Resume*, *Contact Me*), configurable GitHub/LinkedIn links, and an AI Engineer identity card with photo placeholder.
- **Interactive Project Showcase**:
  1. *Autorickshaw Detection & Behavior Analysis* (YOLOv8, Computer Vision – 95%+ Accuracy)
  2. *Low-Latency Audio RAG System – Pace Wisdom* (Sub-second voice query processing)
  3. *LingoLeap – AI-Based Multilingual Learning Platform* (Vertex AI, Gemini Pro, LSRW progression)
  4. *Phishing Email Detection System* (Ensemble ML, Cybersecurity heuristics)
- **Deep-Dive Architecture Modals**: Click "Explore Architecture" on any project to view technical challenge vs. solution, system architecture pipelines, and performance benchmarks.
- **Featured Leadership Section (PINNACLE)**: Case-study showcase of the 3rd International-Level Technical Symposium (*Project Expo*, *Tech Fest*, and *QUORIA – AI Summit*).
- **Vertical Experience Timeline**: Vertical connected timeline detailing internships at *Kyeal Wellness* & *MAC25AI*, alongside leadership roles at *Yen Artificia* and *YenFinity*.
- **Honors & Credentials**: Highlights consecutive *VTU Branch Topper (1st, 2nd, 3rd Year)*, *ISTE State-Level Hackathon*, *IEEE Anveshan*, and certifications from *NVIDIA*, *MongoDB*, *OpenAI*, and *Google Cloud*.
- **Downloadable Resume**: Built-in interactive CV viewer + one-click download for `Vaibhav_Rai_Resume.pdf`.
- **Direct Contact Section**: Interactive form with validation, live transmission feedback, confetti animation, and one-click copy for `vaibhurai3@gmail.com`.

---

## 🚀 Running the Project

### 1. Development Server
```bash
npm run dev
```

### 2. Production Build
```bash
npm run build
```

### 3. Local Preview
```bash
npm run preview
```
The website is currently served locally on `http://localhost:4173/`.

---

## 🛠️ Updating Placeholders & Content

All information, project metrics, and URLs are centralized in a single configuration file:
- **`src/data/portfolioData.ts`**

To connect your actual GitHub profile, LinkedIn URL, or project repository links, simply edit the respective fields:
```typescript
export const PERSONAL_INFO = {
  name: "VAIBHAV RAI A V",
  githubPlaceholder: "https://github.com/your-username",
  linkedinPlaceholder: "https://linkedin.com/in/your-profile",
  email: "vaibhurai3@gmail.com",
  phone: "+91 9539755923",
  location: "Kerala, India",
  ...
};
```

---

## 📁 Project Architecture

```
├── public/
│   ├── Vaibhav_Rai_Resume.pdf  # Downloadable PDF resume
│   └── favicon.svg             # VR monogram favicon
├── src/
│   ├── components/
│   │   ├── About.tsx                      # About me & core engineering pillars
│   │   ├── AchievementsCertifications.tsx # VTU Topper, hackathons & certifications
│   │   ├── Contact.tsx                    # Interactive contact form & direct reachout
│   │   ├── Education.tsx                  # B.E. in AI & ML, CGPA 9.36
│   │   ├── Experience.tsx                 # Vertical career & leadership timeline
│   │   ├── Footer.tsx                     # Sleek footer with quick navigation
│   │   ├── Hero.tsx                       # High-impact hero section
│   │   ├── Icons.tsx                      # Crisp GitHub & LinkedIn vector icons
│   │   ├── Navbar.tsx                     # Sticky glassmorphism header & scrollspy
│   │   ├── NeuralBackground.tsx           # Interactive HTML5 neural canvas
│   │   ├── PinnacleSpecial.tsx            # PINNACLE international symposium banner
│   │   ├── PlaceholderModal.tsx           # Configurable link helper modal
│   │   ├── ProjectModal.tsx               # Full project case study modal
│   │   ├── Projects.tsx                   # Featured AI/ML project cards
│   │   ├── ProjectVisual.tsx              # Custom CV, Audio RAG, LSRW & Threat visuals
│   │   ├── ResumeModal.tsx                # In-browser CV viewer & print/download
│   │   └── Skills.tsx                     # Categorized skill cards with live search
│   ├── data/
│   │   └── portfolioData.ts               # Centralized portfolio data store
│   ├── types/
│   │   └── portfolio.ts                   # TypeScript interfaces
│   ├── App.tsx                            # Root application orchestrator
│   ├── index.css                          # Tailwind CSS v4 styling & glassmorphic tokens
│   └── main.tsx                           # Application entry point
├── generate_pdf.py                        # Standalone script to regenerate resume PDF
├── package.json
└── vite.config.ts
```
