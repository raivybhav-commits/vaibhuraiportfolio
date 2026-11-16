import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Eye, FileText, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
  onDirectDownloadResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal, onDirectDownloadResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'PINNACLE', href: '#pinnacle', special: true },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/90 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
          : 'bg-white/60 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 p-[1px] shadow-sm shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-shadow">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-blue-600">
                VR
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                VAIBHAV RAI
              </span>
              <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                AI / ML ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/90 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30 font-semibold'
                      : link.special
                      ? 'text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {link.special && <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse" />}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Resume Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setResumeMenuOpen(!resumeMenuOpen)}
                onBlur={() => setTimeout(() => setResumeMenuOpen(false), 200)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 hover:brightness-105 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ChevronDown className="w-3 h-3 opacity-80" />
              </button>

              {resumeMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => {
                      setResumeMenuOpen(false);
                      onOpenResumeModal();
                    }}
                    className="w-full px-3 py-2 text-left text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-600" />
                    <span>View Interactive CV</span>
                  </button>
                  <button
                    onClick={() => {
                      setResumeMenuOpen(false);
                      onDirectDownloadResume();
                    }}
                    className="w-full px-3 py-2 text-left text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-sky-600" />
                    <span>Download PDF File</span>
                  </button>
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenResumeModal()}
              className="p-2 text-blue-600 hover:text-blue-700 rounded-lg bg-slate-100 border border-slate-200 text-xs flex items-center gap-1 font-mono cursor-pointer"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg bg-slate-100 border border-slate-200 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-slate-200 backdrop-blur-2xl px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.special && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      Featured
                    </span>
                  )}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-200 mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-blue-600" />
                <span>View Interactive CV</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDirectDownloadResume();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
