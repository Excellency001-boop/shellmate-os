"use client";
import React, { useState } from 'react';

// 1. STATS & COLOR MAPPING - Everything updates based on the ID
const TRAIT_DATA: Record<string, { label: string, stamina: number, intel: number, speed: number, color: string, glow: string }> = {
  'shellmate.png.JPG': { label: 'Base Form', stamina: 94, intel: 89, speed: 91, color: 'text-blue-400', glow: 'bg-blue-600/30' },
  'crown.png': { label: 'Royal Crown', stamina: 85, intel: 98, speed: 80, color: 'text-yellow-400', glow: 'bg-yellow-500/40' },
  'ninja.png': { label: 'Ninja Gear', stamina: 90, intel: 82, speed: 99, color: 'text-zinc-400', glow: 'bg-zinc-500/30' },
  'cyber.png': { label: 'Cyber Link', stamina: 88, intel: 95, speed: 92, color: 'text-cyan-400', glow: 'bg-cyan-500/40' },
  'arc.png': { label: 'Arc Mage', stamina: 70, intel: 100, speed: 75, color: 'text-purple-400', glow: 'bg-purple-600/40' },
  'street.png': { label: 'Street Punk', stamina: 92, intel: 80, speed: 88, color: 'text-pink-400', glow: 'bg-pink-500/40' },
  'waste.png': { label: 'Raider', stamina: 99, intel: 75, speed: 82, color: 'text-orange-500', glow: 'bg-orange-600/30' },
  'steam.png': { label: 'Steam', stamina: 82, intel: 90, speed: 70, color: 'text-amber-600', glow: 'bg-amber-700/30' },
  'TMA.png': { label: 'TMA 420', stamina: 42, intel: 99, speed: 42, color: 'text-emerald-400', glow: 'bg-emerald-500/40' },
  'Retro.png': { label: 'Retro Gamer', stamina: 88, intel: 92, speed: 95, color: 'text-red-400', glow: 'bg-red-500/40' },
  'ssheyii.png': { label: 'Ssheyii 1/1', stamina: 100, intel: 100, speed: 100, color: 'text-rose-500', glow: 'bg-rose-600/50' },
};

export default function Shellmates() {
  const [sync, setSync] = useState(false);
  const [trait, setTrait] = useState('shellmate.png.JPG');

  const current = TRAIT_DATA[trait] || TRAIT_DATA['shellmate.png.JPG'];

  const handleShare = () => {
    const text = encodeURIComponent(`Syncing my @Shellmates OS Profile: ${current.label}\n🐢 STAMINA: ${current.stamina}%\n🧠 INTEL: ${current.intel}%\n⚡ SPEED: ${current.speed}%\n\n#Shellmates #Web3`);
    window.open(`x.com/intent/tweet?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#05070a] text-white p-8 font-sans selection:bg-blue-500/30 relative overflow-hidden">
      
      {/* BACKGROUND DEEP WATER EFFECT */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-900/10 blur-[120px] rounded-full" />
      </div>

      <nav className="relative z-10 max-w-6xl mx-auto flex justify-between items-center mb-12 border-b border-white/5 pb-6">
        <div className="text-xl font-black tracking-tighter uppercase italic flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping" />
          Shellmates // OS <span className="text-[10px] ml-2 text-zinc-600 font-mono">v2.0.26</span>
        </div>
        <button 
          onClick={() => setSync(!sync)}
          className={`px-8 py-2 rounded-full text-[10px] font-black uppercase transition-all duration-500 border ${sync ? 'bg-blue-600 border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'border-white/10 hover:border-white/30 text-zinc-400'}`}
        >
          {sync ? 'Neural Link Active' : 'Sync Neural Link'}
        </button>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* CHARACTER DISPLAY */}
        <div className="group bg-zinc-900/20 backdrop-blur-xl border border-white/10 rounded-[50px] p-12 flex flex-col items-center justify-center min-h-[550px] relative overflow-hidden shadow-2xl">
          
          {/* DYNAMIC REACTIVE GLOW */}
          <div className={`absolute inset-0 transition-all duration-1000 ${sync ? 'opacity-100' : 'opacity-0'} ${current.glow} blur-[120px]`} />
          
          <div className="relative z-10 w-full max-w-[340px]">
             <img 
              src={`/${trait}`} 
              alt="Turtle" 
              className={`w-full h-auto drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-700 ease-out 
              ${sync ? 'scale-105 rotate-0' : 'scale-90 rotate-2 grayscale opacity-20'}`} 
            />
          </div>
          
          <div className="relative z-10 mt-12 w-full flex justify-between font-mono text-[9px] text-zinc-500 uppercase tracking-[0.3em]">
            <span className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${sync ? 'bg-green-500' : 'bg-red-500'}`} />
              {sync ? 'Connected' : 'Locked'}
            </span>
            <span>DATA_ID: SM-042_{current.label.replace(/\s+/g, '')}</span>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-7xl font-black italic uppercase leading-[0.8] tracking-tighter">
              The <span className={`${current.color} transition-colors duration-500`}>Shell</span>
            </h1>
            <p className="mt-6 text-zinc-400 text-sm max-w-md">Equip unique traits to modify the signature of your Shellmate. Each trait alters performance metrics across the network.</p>
          </div>

          {/* EQUIPMENT GRID */}
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(TRAIT_DATA).map(([id, data]) => (
              <button 
                key={id}
                onClick={() => setTrait(id)} 
                className={`py-3 rounded-xl text-[9px] font-black uppercase border transition-all duration-300
                ${trait === id 
                  ? 'bg-white text-black border-white shadow-lg' 
                  : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:border-white/20 hover:text-white'}`}
              >
                {data.label}
              </button>
            ))}
          </div>

          {/* DYNAMIC STATS */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {[
              { label: 'Stamina', val: current.stamina },
              { label: 'Intel', val: current.intel },
              { label: 'Speed', val: current.speed }
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.03] p-5 rounded-2xl border border-white/5 group hover:border-white/10 transition-all">
                <div className="text-[10px] text-zinc-500 uppercase font-black mb-1">{s.label}</div>
                <div className={`text-2xl font-black ${sync ? current.color : 'text-zinc-700'} transition-all`}>
                  {sync ? `${s.val}%` : '--'}
                </div>
                <div className="w-full h-1 bg-white/5 mt-3 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ease-in-out ${sync ? current.glow.replace('/30', '').replace('/40', '').replace('/50', '') : 'w-0'}`}
                    style={{ width: sync ? `${s.val}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {sync && (
            <button 
              onClick={handleShare}
              className="w-full py-4 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-xl shadow-blue-500/20"
            >
              Share Signature to X
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

