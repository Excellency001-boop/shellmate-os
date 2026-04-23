"use client";
import React, { useState, useEffect, useCallback } from 'react';

// --- CONFIGURATION ---
const TRAITS: Record<string, { label: string, stamina: number, intel: number, speed: number, color: string, glow: string, rarity: string, mult: number }> = {
  'shellmate.png.JPG': { label: 'Base Unit', stamina: 88, intel: 85, speed: 82, color: 'text-blue-400', glow: 'from-blue-600/20', rarity: 'Standard', mult: 1.0 },
  'crown.png': { label: 'Royal King', stamina: 82, intel: 99, speed: 75, color: 'text-yellow-400', glow: 'from-yellow-500/30', rarity: 'Legendary', mult: 5.0 },
  'ninja.png': { label: 'Shinobi', stamina: 92, intel: 88, speed: 100, color: 'text-zinc-400', glow: 'from-zinc-500/20', rarity: 'Rare', mult: 2.5 },
  'cyber.png': { label: 'Cyber Runner', stamina: 85, intel: 95, speed: 95, color: 'text-cyan-400', glow: 'from-cyan-500/30', rarity: 'Epic', mult: 3.2 },
  'arc.png': { label: 'Ether Mage', stamina: 65, intel: 100, speed: 80, color: 'text-purple-400', glow: 'from-purple-600/30', rarity: 'Mystic', mult: 4.5 },
  'street.png': { label: 'Vandal', stamina: 90, intel: 82, speed: 90, color: 'text-pink-400', glow: 'from-pink-500/30', rarity: 'Uncommon', mult: 1.5 },
  'ssheyii.png': { label: 'Ssheyii 1/1', stamina: 100, intel: 100, speed: 100, color: 'text-rose-500', glow: 'from-rose-600/40', rarity: 'Artifact', mult: 10.0 },
};

export default function ShellmatesOS() {
  const [sync, setSync] = useState(false);
  const [trait, setTrait] = useState('shellmate.png.JPG');
  const [xp, setXp] = useState(0);
  const [logs, setLogs] = useState<string[]>(["SYSTEM BOOT COMPLETE", "WAITING FOR USER..."]);
  const [isScanning, setIsScanning] = useState(false);

  const active = TRAITS[trait] || TRAITS['shellmate.png.JPG'];

  // --- LOGIC ---
  const pushLog = useCallback((msg: string) => {
    setLogs(prev => [msg, ...prev].slice(0, 4));
  }, []);

  useEffect(() => {
    Object.keys(TRAITS).forEach(img => { const i = new Image(); i.src = `/${img}`; });
  }, []);

  const triggerScan = () => {
    setIsScanning(true);
    pushLog("SCANNING NETWORK...");
    setTimeout(() => {
      const bonus = Math.floor(Math.random() * 500 * active.mult);
      setXp(v => v + bonus);
      pushLog(`FOUND FRAGMENT: +${bonus} XP`);
      setIsScanning(false);
    }, 1500);
  };

  const shareToX = () => {
    const text = `Shellmates OS Neural Link: ACTIVE\nTrait: ${active.label}\nXP Score: ${xp}\nLevel: ${active.rarity}\n\nBuilt by @Ayo_xtt 🐢`;
    window.open(`x.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#05070a] text-zinc-100 font-mono p-4 lg:p-10 selection:bg-blue-500">
      {/* GLOBAL GLOW */}
      <div className={`fixed inset-0 bg-gradient-radial ${active.glow} to-transparent opacity-30 transition-all duration-1000 pointer-events-none`} />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-6">
        
        {/* LEFT: THE CHARACTER CORE */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900/40 border border-white/5 rounded-[40px] p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-8 left-8 flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full animate-ping ${sync ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-[10px] tracking-widest text-zinc-500 uppercase">{sync ? 'Link Active' : 'Offline'}</span>
            </div>
            
            <img 
              src={`/${trait}`} 
              className={`w-4/5 object-contain transition-all duration-700 ${sync ? 'scale-110 drop-shadow-2xl' : 'grayscale opacity-20 blur-xl'}`}
              onError={(e) => { e.currentTarget.src = "/shellmate.png.JPG"; }}
            />

            <div className="absolute bottom-8 right-8">
              <p className={`text-[10px] font-black px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md uppercase ${active.color}`}>
                {active.rarity} // x{active.mult}
              </p>
            </div>
          </div>

          <div className="bg-black/60 border border-white/5 p-6 rounded-2xl h-32 overflow-hidden">
            {logs.map((l, i) => (
              <p key={i} className={`text-[11px] mb-1 ${i === 0 ? 'text-blue-400' : 'text-zinc-600'}`}> {`> ${l}`} </p>
            ))}
          </div>
        </div>

        {/* RIGHT: THE INTERFACE */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex justify-between items-end border-b border-white/5 pb-6">
            <div>
              <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">The <span className={active.color}>Shell</span></h1>
              <p className="text-[10px] text-zinc-500 mt-2 tracking-[0.4em]">NEURAL INTERFACE v2.5</p>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-zinc-600 block">TOTAL_XP_YIELD</span>
              <span className="text-3xl font-black text-blue-500">{xp.toLocaleString()}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => { setSync(!sync); pushLog(sync ? "NEURAL DISCONNECT" : "LINK INITIALIZED"); }}
              className={`py-6 rounded-2xl font-black uppercase text-xs transition-all ${sync ? 'bg-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.3)]' : 'bg-zinc-900 text-zinc-500 border border-white/5'}`}
            >
              {sync ? 'Disconnect System' : 'Neural Sync'}
            </button>
            <button 
              disabled={!sync || isScanning}
              onClick={triggerScan}
              className="bg-white text-black py-6 rounded-2xl font-black uppercase text-xs disabled:opacity-20 transition-all hover:invert"
            >
              {isScanning ? 'Scanning...' : 'Network Scan'}
            </button>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
            {Object.entries(TRAITS).map(([id, data]) => (
              <button 
                key={id}
                onClick={() => { setTrait(id); pushLog(`LOADED: ${data.label.toUpperCase()}`); setXp(v => v + 10); }}
                className={`p-3 rounded-xl text-[9px] font-black border transition-all ${trait === id ? 'bg-zinc-100 text-black' : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:border-white/20'}`}
              >
                {data.label}
              </button>
            ))}
          </div>

          <div className="bg-zinc-900/20 border border-white/5 rounded-3xl p-8 grid grid-cols-3 gap-8">
            {[ { l: 'Stamina', v: active.stamina }, { l: 'Intel', v: active.intel }, { l: 'Speed', v: active.speed } ].map(s => (
              <div key={s.l} className="space-y-4">
                <p className="text-[10px] text-zinc-600 font-black uppercase">{s.l}</p>
                <p className="text-3xl font-black">{sync ? `${s.v}%` : '--'}</p>
                <div className="h-1 bg-white/5 rounded-full">
                  <div className={`h-full transition-all duration-1000 ${active.color.replace('text', 'bg')}`} style={{ width: sync ? `${s.v}%` : '0%' }} />
                </div>
              </div>
            ))}
          </div>

          {sync && (
            <button onClick={shareToX} className="w-full py-5 bg-[#1DA1F2] rounded-2xl font-black uppercase text-xs hover:scale-[1.02] transition-all">
              Broadcast Neural Signature
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

