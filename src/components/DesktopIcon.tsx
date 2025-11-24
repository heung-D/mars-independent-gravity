import { useState } from 'react';

interface DesktopIconProps {
  icon: string;
  name: string;
  onDoubleClick: () => void;
}

const DesktopIcon = ({ icon, name, onDoubleClick }: DesktopIconProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
  };

  return (
    <div
      className={`flex flex-col items-center gap-1 p-2 cursor-pointer select-none w-24 ${
        isSelected ? 'bg-[hsl(230,100%,45%)]/30 border border-white/50' : ''
      }`}
      onClick={handleClick}
      onDoubleClick={onDoubleClick}
      onBlur={() => setIsSelected(false)}
      tabIndex={0}
    >
      <div className="text-5xl drop-shadow-lg">{icon}</div>
      <div className="text-white text-xs text-center font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] px-1 break-words">
        {name}
      </div>
    </div>
  );
};

export default DesktopIcon;
