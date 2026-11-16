import React from 'react';
import { ShieldCheck, Activity, BrainCircuit, Scan, Volume2, AlertTriangle, Layers } from 'lucide-react';

interface ProjectVisualProps {
  type: 'autorickshaw' | 'rag-audio' | 'lingoleap' | 'phishing';
  title?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ type }) => {
  if (type === 'autorickshaw') {
    return (
      <div className="relative w-full h-56 bg-slate-900 rounded-xl overflow-hidden border border-slate-200 group shadow-inner">
        {/* Grid and road simulation */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent z-10" />

        {/* Video feed overlay banner */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 text-[11px] font-mono">
          <div className="flex items-center gap-2 bg-slate-950/90 border border-slate-700/80 px-2.5 py-1 rounded-md text-slate-200">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>CAM_FEED: 1080p @ 30FPS</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-950/90 border border-blue-500/40 text-sky-300 px-2.5 py-1 rounded-md font-semibold">
            <Scan className="w-3 h-3 text-sky-400" />
            <span>YOLOv8x-Inference</span>
          </div>
        </div>

        {/* Bounding box 1: Primary Autorickshaw */}
        <div className="absolute top-16 left-1/4 w-36 h-28 border-2 border-sky-400 rounded bg-sky-500/20 z-20 flex flex-col justify-between p-1.5 shadow-[0_0_15px_rgba(56,189,248,0.35)] transition-transform duration-500 group-hover:scale-105">
          <div className="flex items-center justify-between">
            <span className="bg-sky-400 text-slate-950 font-mono text-[10px] font-bold px-1.5 rounded">
              autorickshaw 96.8%
            </span>
            <span className="text-[9px] font-mono text-sky-200 bg-slate-950/80 px-1 rounded">id: 04</span>
          </div>
          {/* Centroid dot and vector */}
          <div className="relative flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-sky-300 shadow-[0_0_8px_#38bdf8] animate-ping" />
            <div className="absolute w-2 h-2 rounded-full bg-sky-400" />
          </div>
          <div className="text-[9px] font-mono text-slate-200 bg-slate-950/80 px-1.5 rounded self-start flex gap-1.5">
            <span>v: 28 km/h</span>
            <span className="text-emerald-400 font-bold">lane: L2</span>
          </div>
        </div>

        {/* Bounding box 2: Second Autorickshaw */}
        <div className="absolute top-24 right-8 w-24 h-20 border border-blue-400/80 rounded bg-blue-500/20 z-20 p-1 flex flex-col justify-between">
          <span className="bg-blue-500 text-white font-mono text-[9px] font-bold px-1 rounded self-start">
            autorickshaw 94.2%
          </span>
          <span className="text-[8px] font-mono text-slate-300 bg-slate-950/80 px-1 rounded self-end">id: 07</span>
        </div>

        {/* Telemetry bottom bar */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20 font-mono text-[10px] text-slate-300">
          <span className="flex items-center gap-1.5 text-sky-300 font-semibold">
            <Activity className="w-3.5 h-3.5 text-sky-400" />
            FPS: 42.1 (CUDA Core)
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-bold">
            Accuracy: 95%+ Verified
          </span>
        </div>
      </div>
    );
  }

  if (type === 'rag-audio') {
    return (
      <div className="relative w-full h-56 bg-slate-50 rounded-xl overflow-hidden border border-slate-200 group p-4 flex flex-col justify-between">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />

        {/* Top Header */}
        <div className="relative z-20 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-blue-700 font-bold">
            <Volume2 className="w-4 h-4 text-blue-600 animate-pulse" />
            <span>REALTIME AUDIO RAG PIPELINE</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-bold">
            &lt; 980ms End-to-End
          </span>
        </div>

        {/* Audio Waveform Visualization */}
        <div className="relative z-20 my-auto flex items-center justify-center gap-1.5 h-16 px-4">
          {[24, 45, 78, 92, 40, 65, 88, 100, 75, 52, 85, 95, 60, 35, 70, 82, 48, 30].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                i % 2 === 0
                  ? 'bg-gradient-to-t from-blue-600 to-sky-500'
                  : 'bg-gradient-to-t from-sky-500 to-blue-400'
              } group-hover:opacity-100 opacity-80`}
            />
          ))}
        </div>

        {/* Pipeline Nodes flow */}
        <div className="relative z-20 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
          <div className="bg-white border border-slate-200 p-1.5 rounded-lg shadow-sm">
            <span className="text-slate-500 block text-[9px]">Input</span>
            <span className="text-blue-700 font-bold">STT Stream</span>
          </div>
          <div className="bg-white border border-blue-200 p-1.5 rounded-lg shadow-sm">
            <span className="text-slate-500 block text-[9px]">Vector Index</span>
            <span className="text-sky-700 font-bold">45ms Retrieval</span>
          </div>
          <div className="bg-white border border-slate-200 p-1.5 rounded-lg shadow-sm">
            <span className="text-slate-500 block text-[9px]">Output</span>
            <span className="text-emerald-700 font-bold">Neural TTS</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'lingoleap') {
    return (
      <div className="relative w-full h-56 bg-slate-50 rounded-xl overflow-hidden border border-slate-200 group p-4 flex flex-col justify-between">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="relative z-20 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-blue-700 font-bold">
            <BrainCircuit className="w-4 h-4 text-sky-600" />
            <span>VERTEX AI & GEMINI CORE</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-blue-100 border border-blue-200 text-blue-800 text-[10px] font-bold">
            LSRW Framework
          </span>
        </div>

        {/* LSRW Matrix pills */}
        <div className="relative z-20 grid grid-cols-4 gap-2 my-auto">
          {[
            { label: 'Listening', score: '98%', color: 'bg-blue-50 border-blue-200 text-blue-800' },
            { label: 'Speaking', score: '94%', color: 'bg-sky-50 border-sky-200 text-sky-800' },
            { label: 'Reading', score: '96%', color: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
            { label: 'Writing', score: '92%', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
          ].map((item, idx) => (
            <div key={idx} className={`p-2 rounded-xl ${item.color} border text-center shadow-sm`}>
              <span className="block text-[9px] font-mono opacity-80">{item.label}</span>
              <span className="text-sm font-bold font-mono">{item.score}</span>
            </div>
          ))}
        </div>

        <div className="relative z-20 flex items-center justify-between text-[10px] font-mono bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
          <span className="text-slate-600 flex items-center gap-1 font-medium">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            Real-time Acoustic Diagnostic
          </span>
          <span className="text-emerald-700 font-bold">Zero Rule-based Fallback</span>
        </div>
      </div>
    );
  }

  // Phishing Detection
  return (
    <div className="relative w-full h-56 bg-slate-50 rounded-xl overflow-hidden border border-slate-200 group p-4 flex flex-col justify-between">
      <div className="absolute inset-0 bg-dots-pattern opacity-20" />

      <div className="relative z-20 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-800 font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>CYBER THREAT TELEMETRY</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-bold">
          F1 Score: 97.8%
        </span>
      </div>

      {/* Threat Inspection Card */}
      <div className="relative z-20 bg-white border border-slate-200 rounded-xl p-2.5 my-auto shadow-sm">
        <div className="flex items-center justify-between text-[11px] font-mono mb-1.5 pb-1 border-b border-slate-100">
          <span className="text-slate-500 font-medium">Payload Analysis:</span>
          <span className="text-rose-600 flex items-center gap-1 font-bold">
            <AlertTriangle className="w-3 h-3 text-rose-500" />
            HIGH RISK (94/100)
          </span>
        </div>
        <div className="space-y-1 text-[10px] font-mono">
          <div className="flex justify-between text-slate-600">
            <span>URL Lexical Entropy:</span>
            <span className="text-rose-600 font-semibold">Suspicious Punycode</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Urgency Sentiment Cue:</span>
            <span className="text-amber-600 font-semibold">Critical Trigger</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>SPF / DKIM Status:</span>
            <span className="text-emerald-600 font-semibold">Spoofing Identified</span>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span>35+ Vector Signals</span>
        <span className="text-blue-700 font-semibold">Ensemble ML Classifier</span>
      </div>
    </div>
  );
};
