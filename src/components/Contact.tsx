import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onOpenPlaceholder: (title: string, url: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPlaceholder }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#0EA5E9', '#4F46E5', '#10B981']
      });

      // Reset form after short delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Background ambient light */}
      <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700 font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>07 &bull; GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have an Idea? Let's Build Something Intelligent.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Open to AI/ML opportunities, internships, research collaborations, and innovative engineering projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Configurable Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 transition-colors shadow-sm group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Direct Email</span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-bold text-slate-900 group-hover:text-blue-600 block transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200 text-xs flex items-center gap-1 transition-colors cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 transition-colors shadow-sm group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Phone & WhatsApp</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-slate-900 group-hover:text-sky-600 block transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Current Location</span>
                    <p className="text-sm font-bold text-slate-900">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Placeholder Buttons */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Professional Networks
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect on GitHub and LinkedIn. Links use clean configurable placeholders ready for your direct profile URLs:
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => onOpenPlaceholder('LinkedIn Profile', PERSONAL_INFO.linkedinPlaceholder)}
                  className="p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </button>

                <button
                  onClick={() => onOpenPlaceholder('GitHub Profile', PERSONAL_INFO.githubPlaceholder)}
                  className="p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-300 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <GithubIcon className="w-4 h-4 text-slate-800" />
                  <span>GitHub</span>
                </button>
              </div>
            </div>

            {/* Availability Callout */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Available for on-site & remote AI engineering roles worldwide.</span>
            </div>

          </div>

          {/* Right Column: Professional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Send a Direct Message</h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5 font-medium">
                    Fast response guaranteed within 24 hours.
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Transmitted!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto font-mono">
                    Thank you for reaching out. Your message has been recorded and Vaibhav Rai A V will connect with you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">
                        Your Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Jane Smith"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">
                        Your Email <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jane@company.ai"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Engineering Collaboration / Internship Opportunity"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">
                      Message <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the opportunity, research inquiry, or technical challenge..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-500/25 hover:shadow-blue-500/35 hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
