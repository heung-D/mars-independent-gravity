import { useState, useRef, useEffect, ReactNode } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  icon: string;
  children: ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  zIndex: number;
}

const Window = ({ id, title, icon, children, onClose, onMinimize, onFocus, zIndex }: WindowProps) => {
  const [position, setPosition] = useState({ x: 100 + Math.random() * 200, y: 50 + Math.random() * 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    
    setIsDragging(true);
    onFocus();
    
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={windowRef}
      className="absolute win95-border bg-[hsl(var(--win95-gray))] shadow-2xl"
      style={{
        left: position.x,
        top: position.y,
        zIndex,
        minWidth: '400px',
        maxWidth: '90vw',
        minHeight: '300px',
        maxHeight: '80vh',
      }}
      onMouseDown={onFocus}
    >
      {/* Title Bar */}
      <div
        className="flex items-center justify-between px-1 py-0.5 cursor-move select-none"
        style={{
          background: 'linear-gradient(90deg, hsl(230 100% 45%), hsl(195 100% 50%))',
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <span className="text-white font-bold text-sm">{title}</span>
        </div>
        <div className="flex gap-0.5 window-controls">
          <button
            className="win95-button px-2 py-0.5 hover:bg-[hsl(var(--win95-light-gray))]"
            onClick={onMinimize}
          >
            <Minus className="w-3 h-3" />
          </button>
          <button
            className="win95-button px-2 py-0.5 hover:bg-[hsl(var(--win95-light-gray))]"
            disabled
          >
            <Square className="w-3 h-3" />
          </button>
          <button
            className="win95-button px-2 py-0.5 hover:bg-red-400"
            onClick={onClose}
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white win95-border-inset m-1 overflow-auto" style={{ maxHeight: 'calc(80vh - 40px)' }}>
        {children}
      </div>
    </div>
  );
};

export default Window;
