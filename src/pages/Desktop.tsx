import { useState } from 'react';
import DesktopIcon from '@/components/DesktopIcon';
import Window from '@/components/Window';
import Taskbar from '@/components/Taskbar';
import BGMWindow from '@/components/windows/BGMWindow';
import ArtistsWindow from '@/components/windows/ArtistsWindow';
import ShopWindow from '@/components/windows/ShopWindow';
import VFXWindow from '@/components/windows/VFXWindow';
import DNALabWindow from '@/components/windows/DNALabWindow';

interface OpenWindow {
  id: string;
  title: string;
  icon: string;
  component: React.ReactNode;
  minimized: boolean;
  zIndex: number;
}

const Desktop = () => {

  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([
    {
      id: 'dnalab',
      title: 'DNA LAB',
      icon: '🧬',
      component: <DNALabWindow />,
      minimized: false,
      zIndex: 100,
    }
  ]);
  const [maxZIndex, setMaxZIndex] = useState(100);

  const icons = [
    { id: 'dnalab', name: 'DNA LAB', icon: '🧬', component: <DNALabWindow /> },
    { id: 'bgm', name: 'BGM', icon: '🎵', component: <BGMWindow /> },
    { id: 'artists', name: 'Artists', icon: '👤', component: <ArtistsWindow /> },
    { id: 'shop', name: 'MAD SHOP', icon: '🛍️', component: <ShopWindow /> },
    { id: 'vfx', name: 'VFX', icon: '✨', component: <VFXWindow /> },
    { id: 'soundfx', name: 'SOUND FX', icon: '🔊', component: <div className="p-4">Sound Effects Coming Soon...</div> },
    { id: 'fonts', name: 'FONTS', icon: '📝', component: <div className="p-4">Fonts Coming Soon...</div> },
  ];

  const openWindow = (icon: typeof icons[0]) => {
    const existingWindow = openWindows.find(w => w.id === icon.id);
    
    if (existingWindow) {
      // Bring to front and restore if minimized
      setOpenWindows(prev => prev.map(w => 
        w.id === icon.id 
          ? { ...w, minimized: false, zIndex: maxZIndex + 1 }
          : w
      ));
      setMaxZIndex(prev => prev + 1);
    } else {
      // Open new window
      const newWindow: OpenWindow = {
        id: icon.id,
        title: icon.name,
        icon: icon.icon,
        component: icon.component,
        minimized: false,
        zIndex: maxZIndex + 1,
      };
      setOpenWindows(prev => [...prev, newWindow]);
      setMaxZIndex(prev => prev + 1);
    }
  };

  const closeWindow = (id: string) => {
    setOpenWindows(prev => prev.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setOpenWindows(prev => prev.map(w => 
      w.id === id ? { ...w, minimized: true } : w
    ));
  };

  const bringToFront = (id: string) => {
    const newZIndex = maxZIndex + 1;
    setOpenWindows(prev => prev.map(w => 
      w.id === id ? { ...w, zIndex: newZIndex } : w
    ));
    setMaxZIndex(newZIndex);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-[hsl(254,80%,35%)] via-[hsl(230,70%,40%)] to-[hsl(195,60%,35%)] relative">
      {/* Starfield Effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* MAR/S Planet - Vector Graphics */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-60 pointer-events-none overflow-visible">
        <svg 
          viewBox="0 0 400 400" 
          className="w-full h-full planet-rotate"
          style={{ filter: 'drop-shadow(0 0 40px rgba(180, 70, 255, 0.6))' }}
        >
          <defs>
            <radialGradient id="planetGradient" cx="40%" cy="40%">
              <stop offset="0%" stopColor="hsl(180, 70%, 50%)" stopOpacity="0.9" />
              <stop offset="50%" stopColor="hsl(254, 70%, 45%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(254, 80%, 20%)" stopOpacity="1" />
            </radialGradient>
            
            <radialGradient id="glowGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="hsl(180, 70%, 60%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(254, 70%, 45%)" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(300, 80%, 60%)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(180, 70%, 60%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(300, 80%, 60%)" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Outer Glow */}
          <circle cx="200" cy="200" r="140" fill="url(#glowGradient)" className="planet-pulse" />
          
          {/* Main Planet Body */}
          <circle cx="200" cy="200" r="100" fill="url(#planetGradient)" />
          
          {/* Surface Details */}
          <circle cx="180" cy="180" r="20" fill="hsl(254, 60%, 30%)" opacity="0.4" />
          <circle cx="220" cy="210" r="15" fill="hsl(254, 60%, 30%)" opacity="0.3" />
          <circle cx="190" cy="220" r="12" fill="hsl(180, 60%, 40%)" opacity="0.3" />
          
          {/* Holographic Rings - Main */}
          <g className="rings-rotate">
            <ellipse cx="200" cy="200" rx="160" ry="40" 
              fill="none" 
              stroke="url(#ringGradient1)" 
              strokeWidth="2"
              opacity="0.8"
            />
            <ellipse cx="200" cy="200" rx="170" ry="45" 
              fill="none" 
              stroke="url(#ringGradient1)" 
              strokeWidth="1.5"
              opacity="0.6"
            />
            <ellipse cx="200" cy="200" rx="150" ry="35" 
              fill="none" 
              stroke="url(#ringGradient1)" 
              strokeWidth="1"
              opacity="0.7"
            />
          </g>
          
          {/* Signal Waves */}
          <g className="signal-pulse">
            <circle cx="200" cy="200" r="110" 
              fill="none" 
              stroke="hsl(180, 70%, 60%)" 
              strokeWidth="1"
              opacity="0.4"
            />
            <circle cx="200" cy="200" r="120" 
              fill="none" 
              stroke="hsl(180, 70%, 60%)" 
              strokeWidth="0.5"
              opacity="0.3"
            />
          </g>
          
          {/* Glitch Overlay Layers */}
          <g className="glitch-layer-1">
            <circle cx="200" cy="200" r="100" 
              fill="none" 
              stroke="hsl(300, 80%, 60%)" 
              strokeWidth="2"
              opacity="0"
            />
          </g>
          <g className="glitch-layer-2">
            <circle cx="200" cy="200" r="100" 
              fill="none" 
              stroke="hsl(180, 80%, 60%)" 
              strokeWidth="2"
              opacity="0"
            />
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes rotate-planet {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes rotate-rings {
          0% { transform: rotateX(60deg) rotateZ(0deg); }
          100% { transform: rotateX(60deg) rotateZ(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        
        @keyframes signal-expand {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        
        @keyframes glitch-1 {
          0%, 90%, 100% { 
            opacity: 0;
            transform: translate(0, 0);
          }
          91% { 
            opacity: 0.8;
            transform: translate(-4px, 2px);
          }
          93% { 
            opacity: 0;
            transform: translate(2px, -2px);
          }
        }
        
        @keyframes glitch-2 {
          0%, 85%, 100% { 
            opacity: 0;
            transform: translate(0, 0);
          }
          86% { 
            opacity: 0.7;
            transform: translate(3px, -3px);
          }
          88% { 
            opacity: 0;
            transform: translate(-3px, 2px);
          }
        }
        
        .planet-rotate {
          animation: rotate-planet 120s linear infinite;
        }
        
        .rings-rotate {
          transform-origin: center;
          animation: rotate-planet 30s linear infinite;
        }
        
        .planet-pulse {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        
        .signal-pulse {
          animation: signal-expand 3s ease-out infinite;
        }
        
        .glitch-layer-1 {
          animation: glitch-1 3s infinite;
        }
        
        .glitch-layer-2 {
          animation: glitch-2 4s infinite;
        }
      `}</style>

      {/* Desktop Icons Grid */}
      <div className="absolute top-8 left-8 grid gap-6">
        {icons.map(icon => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            name={icon.name}
            onDoubleClick={() => openWindow(icon)}
          />
        ))}
      </div>

      {/* Windows */}
      {openWindows.map(window => !window.minimized && (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          icon={window.icon}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          onFocus={() => bringToFront(window.id)}
          zIndex={window.zIndex}
        >
          {window.component}
        </Window>
      ))}

      {/* Taskbar */}
      <Taskbar 
        openWindows={openWindows}
        onWindowClick={(id) => {
          const window = openWindows.find(w => w.id === id);
          if (window?.minimized) {
            setOpenWindows(prev => prev.map(w => 
              w.id === id ? { ...w, minimized: false, zIndex: maxZIndex + 1 } : w
            ));
            setMaxZIndex(prev => prev + 1);
          } else {
            bringToFront(id);
          }
        }}
      />
    </div>
  );
};

export default Desktop;
