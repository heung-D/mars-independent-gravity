import { useState } from 'react';

interface OpenWindow {
  id: string;
  title: string;
  icon: string;
  minimized: boolean;
}

interface TaskbarProps {
  openWindows: OpenWindow[];
  onWindowClick: (id: string) => void;
}

const Taskbar = ({ openWindows, onWindowClick }: TaskbarProps) => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  setInterval(() => setCurrentTime(new Date()), 1000);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-10 win95-border bg-[hsl(var(--win95-gray))] flex items-center px-1 gap-1">
      {/* Start Button */}
      <button
        className="win95-button px-3 py-1 font-bold flex items-center gap-2 hover:bg-[hsl(var(--win95-light-gray))]"
        onClick={() => setShowStartMenu(!showStartMenu)}
      >
        <span className="text-lg">🔮</span>
        <span className="text-sm">MAR/S</span>
      </button>

      {/* Start Menu */}
      {showStartMenu && (
        <div className="absolute bottom-10 left-0 w-64 win95-border bg-[hsl(var(--win95-gray))] shadow-2xl">
          <div
            className="text-white font-bold text-2xl p-4 writing-mode-vertical"
            style={{
              background: 'linear-gradient(180deg, hsl(230 100% 45%), hsl(195 100% 50%))',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🪐</span>
              <div className="flex flex-col">
                <span className="text-sm">MAR/S</span>
                <span className="text-xs opacity-80">OS v2.5</span>
              </div>
            </div>
          </div>
          <div className="p-2">
            <button className="w-full text-left px-3 py-2 hover:bg-[hsl(230,100%,45%)] hover:text-white flex items-center gap-2">
              <span>🎵</span> Programs
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-[hsl(230,100%,45%)] hover:text-white flex items-center gap-2">
              <span>📁</span> Documents
            </button>
            <button className="w-full text-left px-3 py-2 hover:bg-[hsl(230,100%,45%)] hover:text-white flex items-center gap-2">
              <span>⚙️</span> Settings
            </button>
            <div className="border-t border-[hsl(var(--win95-border-dark))] my-1" />
            <button className="w-full text-left px-3 py-2 hover:bg-[hsl(230,100%,45%)] hover:text-white flex items-center gap-2">
              <span>🔌</span> Shut Down
            </button>
          </div>
        </div>
      )}

      {/* Window Buttons */}
      <div className="flex-1 flex gap-1 overflow-x-auto">
        {openWindows.map(window => (
          <button
            key={window.id}
            className={`win95-button px-3 py-1 min-w-[150px] max-w-[200px] truncate text-left flex items-center gap-2 ${
              !window.minimized ? 'bg-[hsl(var(--win95-light-gray))]' : ''
            }`}
            onClick={() => onWindowClick(window.id)}
          >
            <span>{window.icon}</span>
            <span className="text-xs truncate">{window.title}</span>
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className="win95-border-inset px-2 py-1 flex items-center gap-3">
        <span className="text-xs">🔊</span>
        <span className="text-xs">🌐</span>
        <span className="text-xs font-mono">
          {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
