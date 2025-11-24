import { useState, useEffect } from 'react';
import DesktopIcon from '@/components/DesktopIcon';
import Window from '@/components/Window';
import Taskbar from '@/components/Taskbar';
import BGMWindow from '@/components/windows/BGMWindow';
import ArtistsWindow from '@/components/windows/ArtistsWindow';
import ShopWindow from '@/components/windows/ShopWindow';
import VFXWindow from '@/components/windows/VFXWindow';
import DNALabWindow from '@/components/windows/DNALabWindow';
import LoadingScreen from '@/components/LoadingScreen';

interface OpenWindow {
  id: string;
  title: string;
  icon: string;
  component: React.ReactNode;
  minimized: boolean;
  zIndex: number;
}

const Desktop = () => {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-black relative">
      {/* CRT Overlay Effects */}
      <div className="crt-overlay fixed inset-0 pointer-events-none z-[9999]">
        {/* Scanlines */}
        <div className="absolute inset-0 scanlines"></div>
        {/* Vignette glow */}
        <div className="absolute inset-0 vignette"></div>
      </div>

      {/* Starfield Effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#00ff41] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

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
