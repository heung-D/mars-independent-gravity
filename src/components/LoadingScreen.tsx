import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const lines = [
    'SYSTEM INITIALIZED...',
    'CONNECTING TO UNKNOWN COORDINATES...',
    'VIRTUAL ARTIST ECOSYSTEM: ACTIVE'
  ];
  
  const fullText = lines.join('\n');
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[10000] flex items-center justify-center">
      {/* CRT Overlay */}
      <div className="crt-overlay fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 scanlines"></div>
        <div className="absolute inset-0 vignette"></div>
      </div>
      
      {/* Terminal Window */}
      <div className="w-full max-w-4xl mx-4 border border-[rgba(0,255,65,0.3)] bg-[rgba(0,20,0,0.3)] p-8 md:p-12 font-vt323">
        {/* Terminal Header */}
        <div className="flex items-center gap-4 pb-6 border-b border-[rgba(0,255,65,0.2)] mb-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full border border-[rgba(0,255,65,0.5)]"></div>
            <div className="w-3 h-3 rounded-full border border-[rgba(0,255,65,0.5)]"></div>
            <div className="w-3 h-3 rounded-full border border-[rgba(0,255,65,0.5)]"></div>
          </div>
          <div className="text-[rgba(0,255,65,0.6)] text-sm tracking-wider">
            mars-system.exe
          </div>
        </div>
        
        {/* ASCII Logo */}
        <div 
          className="text-[#00ff41] text-5xl md:text-7xl font-bold tracking-[0.3em] mb-8 glitch-text"
          style={{
            textShadow: '0 0 20px rgba(0, 255, 65, 0.8)',
            fontFamily: 'Space Mono, monospace'
          }}
        >
          MAR/S
        </div>
        
        {/* Command Line */}
        <div className="text-[#00ff41] text-lg md:text-xl mb-6 flex items-center gap-2">
          <span>&gt;</span>
          <span className="tracking-wider">MUSIC AI REVOLUTION SOCIETY</span>
          {showCursor && (
            <span className="inline-block w-2 h-5 bg-[#00ff41] animate-pulse"></span>
          )}
        </div>
        
        {/* Output Text */}
        <div className="text-[rgba(0,255,65,0.7)] text-base md:text-lg leading-relaxed whitespace-pre-line tracking-wide">
          {text}
        </div>
      </div>
      
      <style>{`
        .glitch-text {
          animation: glitch-effect 5s infinite;
        }
        
        @keyframes glitch-effect {
          0%, 90%, 100% {
            text-shadow: 0 0 20px rgba(0, 255, 65, 0.8);
          }
          91% {
            text-shadow: -3px 0 rgba(255, 0, 0, 0.5), 3px 0 rgba(0, 255, 255, 0.5);
          }
          92% {
            text-shadow: 3px 0 rgba(255, 0, 0, 0.5), -3px 0 rgba(0, 255, 255, 0.5);
          }
          93% {
            text-shadow: 0 0 20px rgba(0, 255, 65, 0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
