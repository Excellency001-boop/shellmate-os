"use client";
import React, { useState, useEffect } from 'react';

const TRAIT_DATA: Record<string, { label: string, stamina: number, intel: number, speed: number, color: string, glow: string, rarity: string }> = {
  'shellmate.png.JPG': { label: 'Base Form', stamina: 94, intel: 89, speed: 91, color: 'text-blue-400', glow: 'from-blue-600/30', rarity: 'Common' },
  'crown.png': { label: 'Royal Crown', stamina: 85, intel: 98, speed: 80, color: 'text-yellow-400', glow: 'from-yellow-500/40', rarity: 'Legendary' },
  'ninja.png': { label: 'Ninja Gear', stamina: 90, intel: 82, speed: 99, color: 'text-zinc-400', glow: 'from-zinc-500/30', rarity: 'Rare' },
  'cyber.png': { label: 'Cyber Link', stamina: 88, intel: 95, speed: 92, color: 'text-cyan-400', glow: 'from-cyan-500/40', rarity: 'Epic' },
  'arc.png': { label: 'Arc Mage', stamina: 70, intel: 100, speed: 75, color: 'text-purple-400', glow: 'from-purple-600/40', rarity: 'Mystic' },
  'street.png': { label: 'Street Punk', stamina: 92, intel: 80, speed: 88, color: 'text-pink-400', glow: 'from-pink-500/40', rarity: 'Uncommon' },
  'waste.png': { label: 'Raider', stamina: 99, intel: 75, speed: 82, color: 'text-orange-500', glow: 'from-orange-600/30', rarity: 'Rare' },
  'TMA.png': { label: 'TMA 420', stamina: 42, intel: 99, speed: 42, color: 'text-emerald-400', glow: 'from-emerald-500/40', rarity: 'Exotic' },
  'Retro.png': { label: 'Retro Gamer', stamina: 88, intel: 92, speed: 95, color: 'text-red-400', glow: 'from-red-500/40', rarity: 'Rare' },
  'ssheyii.png': { label: 'Ssheyii 1/1', stamina: 100, intel: 100, speed: 100, color: 'text-rose-500', glow: 'from-rose-600/50', rarity: 'Artifact' },
};

export default function ShellmatesOS() {
  const [sync, setSync] = useState(false);
  const [trait, setTrait] = useState('shellmate.png.JPG');
  const [logs, setLogs] = useState<string[]>(["SYSTEM READY...", "AWAITING NEURAL LINK..."]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    Object.keys(TRAIT_DATA).forEach(file => { const img = new Image(); img.src = `/${file}`; });
  }, []);

  const addLog = (msg: string) => {
    setLogs(prev => [msg, ...prev].slice(0, 5));
  };

  const handleTraitChange = (id: string) => {
    setTrait(id);
    addLog(`EQUIPPED: ${TRAIT_DATA[id].label.toUpperCase()}`);
    setScore(prev => prev + 150);
  };

  const current = TRAIT_DATA[trait] || TRAIT_DATA['shellmate.png.JPG'];

  return (
    <main className="min-h-screen bg-[#020306] text-white font-mono p-4 lg:p-10 selection:bg-blue-500 selection:text-white">
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className={`absolute inset-0 bg-gradient-radial ${current.glow} opacity-20 blur-[150px] transition-all duration-1000`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* HEADER */}
        <header className="flex justify-between items-end border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl font-black tracking-tighter italic">SHELLMATES <span className="text-blue-500">v2.0.4</span></h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em]">Neural Interface // Ayo_xtt Edition</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-zinc-500 uppercase">OS_XP_SCORE</p>
            <p className="text-2xl font-black text-blue-400">{score.toLocaleString()}</p>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT: CHARACTER VIEW */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group aspect-square bg-zinc-900/30 border border-white/5 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
              </div>
              <img 
                key={trait}
                src={`/${trait}`} 
                className={`w-4/5 object-contain transition-all duration-700 ${sync ? 'scale-105 drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]' : 'grayscale opacity-30 blur-sm'}`}
              />
              <div className="absolute bottom-6 left-6 text-left">
                <span className={`text-[10px] px-3 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md font-bold uppercase ${current.color}`}>
                  {current.rarity}
                </span>
              </div>
            </div>

            {/* TERMINAL LOGS */}
            <div className="bg-black/50 border border-white/5 p-4 rounded-xl h-32 overflow-hidden">
              {logs.map((log, i) => (
                <p key={i} className={`text-[10px] uppercase mb-1 ${i === 0 ? 'text-blue-400' : 'text-zinc-600'}`}>
                  {`> ${log}`}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTROLS */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => { setSync(!sync); addLog(sync ? "SYSTEM DISCONNECTED" : "NEURAL LINK ESTABLISHED"); }}
                className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest transition-all duration-500 border ${sync ? 'bg-blue-600 border-blue-400 shadow-blue-500/50 shadow-2xl' : 'bg-zinc-900 border-white/5 text-zinc-500 hover:border-white/20'}`}
              >
                {sync ? '[ DEACTIVATE LINK ]' : '[ INITIALIZE NEURAL SYNC ]'}
              </button>

              <div className="grid grid-cols-3 gap-2">
                {Object.entries(TRAIT_DATA).map(([id, data]) => (
                  <button 
                    key={id}
                    onClick={() => handleTraitChange(id)}
                    className={`p-3 rounded-xl text-[9px] font-bold uppercase border transition-all ${trait === id ? 'bg-white text-black border-white scale-95' : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:bg-zinc-800'}`}
                  >
                    {data.label}
                  </button>
                ))}
              </div>
            </div>

            {/* STATS AREA */}
            <div className="grid grid-cols-3 gap-4 bg-zinc-900/20 p-6 rounded-3xl border border-white/5">
              {[
                { n: 'Stamina', v: current.stamina, c: 'bg-blue-500' },
                { n: 'Intel', v: current.intel, c: 'bg-emerald-500' },
                { n: 'Speed', v: current.speed, c: 'bg-amber-500' }
              ].map(s => (
                <div key={s.n} className="space-y-3">
                  <p className="text-[10px] text-zinc-500 uppercase font-black">{s.n}</p>
                  <p className="text-2xl font-black">{sync ? `${s.v}%` : '??'}</p>
                  <div className="h-1 bg-white/5 rounded-full">
                    <div className={`h-full transition-all duration-1000 ${s.c}`} style={{ width: sync ? `${s.v}%` : '0%' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* FOOTER ACTION */}
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  const text = `Syncing my @Shellmates OS Profile: ${current.label} 🐢\nSCORE: ${score}\n#Shellmates #Web3`;
                  window.open(`x.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
                  addLog("TRANSMITTING TO X...");
                }}
                className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-widest hover:invert transition-all"
              >
                Broadcast Signature
              </button>
              <button 
                onClick={() => { setScore(prev => prev + 500); addLog("NETWORK SCANNING..."); }}
                className="px-8 bg-zinc-900 border border-white/10 rounded-2xl text-xs hover:bg-zinc-800"
              >
                ⚡
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

