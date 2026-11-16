import { useState } from 'react';
import confetti from 'canvas-confetti';
import { NeuralBackground } from './components/NeuralBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { PinnacleSpecial } from './components/PinnacleSpecial';
import { Experience } from './components/Experience';
import { AchievementsCertifications } from './components/AchievementsCertifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { PlaceholderModal } from './components/PlaceholderModal';
import type { Project } from './types/portfolio';
import { PERSONAL_INFO } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [placeholderInfo, setPlaceholderInfo] = useState<{
    isOpen: boolean;
    title: string;
    url: string;
  }>({
    isOpen: false,
    title: '',
    url: '',
  });

  const handleOpenPlaceholder = (title: string, url: string) => {
    setPlaceholderInfo({
      isOpen: true,
      title,
      url,
    });
  };

  const handleDirectDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#2563EB', '#0EA5E9', '#4F46E5', '#10B981']
    });

    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeFile;
    link.download = 'Vaibhav_Rai_A_V_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/15 selection:text-blue-700">
      {/* Interactive Neural Background Canvas */}
      <NeuralBackground />

      {/* Floating Navbar */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onDirectDownloadResume={handleDirectDownloadResume}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onDirectDownloadResume={handleDirectDownloadResume}
          onOpenPlaceholder={handleOpenPlaceholder}
        />

        {/* 2. About Me */}
        <About />

        {/* 3. Technical Skills */}
        <Skills />

        {/* 4. Featured Projects */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenPlaceholder={handleOpenPlaceholder}
        />

        {/* 5. Featured Leadership Achievement – PINNACLE */}
        <PinnacleSpecial />

        {/* 6. Professional Experience */}
        <Experience />

        {/* 7. Achievements & Certifications */}
        <AchievementsCertifications />

        {/* 8. Education */}
        <Education />

        {/* 9. Contact Section */}
        <Contact
          onOpenPlaceholder={handleOpenPlaceholder}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <PlaceholderModal
        isOpen={placeholderInfo.isOpen}
        title={placeholderInfo.title}
        url={placeholderInfo.url}
        onClose={() => setPlaceholderInfo({ ...placeholderInfo, isOpen: false })}
      />
    </div>
  );
}

export default App;
