import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const DNALabWindow = () => {
  const [bodyType, setBodyType] = useState([3]);
  const [faceStructure, setFaceStructure] = useState([50]);
  const [stylePreset, setStylePreset] = useState('Cyberpunk');
  const [dnaCode, setDnaCode] = useState('');

  const stylePresets = ['Cyberpunk', 'Retro', 'Minimal', 'Glitch'];

  const generateDNA = () => {
    const code = `DNA-${bodyType[0]}${faceStructure[0]}-${stylePreset.substring(0, 3).toUpperCase()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setDnaCode(code);
  };

  const synthesize = () => {
    // Randomize all values
    setBodyType([Math.floor(Math.random() * 5) + 1]);
    setFaceStructure([Math.floor(Math.random() * 100)]);
    setStylePreset(stylePresets[Math.floor(Math.random() * stylePresets.length)]);
    generateDNA();
  };

  const copyDNA = () => {
    if (dnaCode) {
      navigator.clipboard.writeText(dnaCode);
    }
  };

  return (
    <div className="p-4 font-mono text-xs bg-gradient-to-b from-[hsl(254,60%,25%)] to-[hsl(254,50%,15%)]">
      {/* Header */}
      <div className="mb-4 pb-2 border-b border-[hsl(254,60%,45%)]">
        <h2 className="text-[hsl(180,70%,60%)] font-bold text-sm mb-1">◢◤ ARTIST DNA LAB ◢◤</h2>
        <p className="text-[hsl(180,50%,50%)] text-[10px]">VIRTUAL ARTIST SYNTHESIS PROTOCOL</p>
      </div>

      {/* 3D Hologram Viewport */}
      <div className="mb-6 win95-border-inset bg-black/40 p-4 relative overflow-hidden" style={{ height: '200px' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Hologram Grid Effect */}
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: 'repeating-linear-gradient(0deg, hsl(180,70%,60%) 0px, transparent 1px, transparent 2px, hsl(180,70%,60%) 3px), repeating-linear-gradient(90deg, hsl(180,70%,60%) 0px, transparent 1px, transparent 2px, hsl(180,70%,60%) 3px)',
                 backgroundSize: '20px 20px'
               }}>
          </div>
          
          {/* Animated Figure Silhouette */}
          <div className="relative">
            <div 
              className="w-24 h-32 border-2 border-[hsl(180,70%,60%)] rounded-full animate-pulse"
              style={{
                boxShadow: '0 0 20px hsl(180,70%,60%), inset 0 0 20px hsl(180,70%,60%)',
                animation: 'pulse 2s ease-in-out infinite'
              }}
            >
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-12 h-12 border border-[hsl(180,70%,60%)] rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-16 h-20 border border-[hsl(180,70%,60%)] rounded-lg"></div>
            </div>
          </div>

          {/* Scan Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-0.5 w-full bg-[hsl(180,70%,60%)] opacity-60 animate-scan"></div>
          </div>
        </div>
        
        <div className="absolute top-2 right-2 text-[hsl(180,70%,60%)] text-[9px]">
          [HOLOGRAM ACTIVE]
        </div>
      </div>

      {/* Controls Panel */}
      <div className="win95-border bg-[hsl(254,40%,20%)] p-3 space-y-4">
        {/* Body Type */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-[hsl(180,70%,70%)] font-bold">BODY TYPE</label>
            <span className="text-[hsl(180,70%,60%)] win95-border-inset px-2 py-0.5 bg-black/30">{bodyType[0]}/5</span>
          </div>
          <Slider
            value={bodyType}
            onValueChange={setBodyType}
            min={1}
            max={5}
            step={1}
            className="cursor-pointer"
          />
        </div>

        {/* Face Structure */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-[hsl(180,70%,70%)] font-bold">FACE STRUCTURE</label>
            <span className="text-[hsl(180,70%,60%)] win95-border-inset px-2 py-0.5 bg-black/30">{faceStructure[0]}</span>
          </div>
          <Slider
            value={faceStructure}
            onValueChange={setFaceStructure}
            min={0}
            max={100}
            step={1}
            className="cursor-pointer"
          />
        </div>

        {/* Style Preset */}
        <div>
          <label className="text-[hsl(180,70%,70%)] font-bold block mb-2">STYLE PRESET</label>
          <div className="grid grid-cols-2 gap-2">
            {stylePresets.map((preset) => (
              <button
                key={preset}
                onClick={() => setStylePreset(preset)}
                className={`win95-button px-3 py-2 text-[10px] font-bold transition-all ${
                  stylePreset === preset 
                    ? 'bg-[hsl(180,70%,40%)] text-black' 
                    : 'text-[hsl(180,60%,60%)]'
                }`}
              >
                {preset.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Synthesize Button */}
        <Button
          onClick={synthesize}
          className="w-full win95-button bg-[hsl(180,70%,40%)] hover:bg-[hsl(180,70%,50%)] text-black font-bold text-sm py-3"
        >
          ⚡ SYNTHESIZE NEW ARTIST
        </Button>

        {/* DNA Code */}
        <div className="pt-2 border-t border-[hsl(254,60%,35%)]">
          <label className="text-[hsl(180,70%,70%)] font-bold block mb-2">DNA CODE</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={dnaCode}
              onChange={(e) => setDnaCode(e.target.value)}
              placeholder="PASTE DNA CODE..."
              className="flex-1 win95-border-inset bg-black/50 text-[hsl(180,70%,60%)] px-2 py-2 text-[10px] font-mono"
            />
            <button
              onClick={generateDNA}
              className="win95-button px-3 text-[10px] font-bold text-[hsl(180,60%,60%)]"
              title="Generate DNA"
            >
              GEN
            </button>
            <button
              onClick={copyDNA}
              className="win95-button px-3 text-[10px] font-bold text-[hsl(180,60%,60%)]"
              title="Copy DNA"
              disabled={!dnaCode}
            >
              COPY
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(200px); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DNALabWindow;
