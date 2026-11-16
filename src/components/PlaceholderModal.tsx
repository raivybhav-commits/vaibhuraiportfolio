import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Info, Code2 } from 'lucide-react';

interface PlaceholderModalProps {
  isOpen: boolean;
  title: string;
  url: string;
  onClose: () => void;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  isOpen,
  title,
  url,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl z-10">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-600">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Configurable Link</h3>
              <p className="text-xs text-slate-500 font-medium">{title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="my-5 space-y-3">
          <p className="text-xs text-slate-600 leading-relaxed">
            As requested, social profiles, repositories, and demonstration URLs use clean, editable placeholders to maintain authentic integrity.
          </p>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between font-mono text-xs">
            <span className="text-blue-700 font-semibold truncate mr-2">{url}</span>
            <button
              onClick={handleCopy}
              className="p-1.5 bg-white hover:bg-slate-100 text-slate-700 rounded border border-slate-200 transition-colors flex items-center gap-1 text-[11px] font-medium shadow-sm cursor-pointer"
              title="Copy link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-lg text-[11px] text-slate-700 flex items-start gap-2">
            <Code2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <span>
              To link your actual profile or repo, simply update the entry in <code className="text-blue-700 font-semibold">src/data/portfolioData.ts</code>.
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
