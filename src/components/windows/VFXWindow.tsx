const VFXWindow = () => {
  const effects = [
    { id: 1, name: 'Glitch Transition', type: 'Video', size: '2.5MB' },
    { id: 2, name: 'Hologram Effect', type: 'Video', size: '3.8MB' },
    { id: 3, name: 'Signal Distortion', type: 'Audio', size: '1.2MB' },
    { id: 4, name: 'Cosmic Particles', type: 'Video', size: '4.5MB' },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span>✨</span> VFX Library
        </h2>
        <p className="text-sm text-gray-600">
          MAR/S 시그니처 비주얼 이펙트
        </p>
      </div>

      <div className="space-y-2 mb-4">
        {effects.map(effect => (
          <div
            key={effect.id}
            className="win95-border bg-white p-3 hover:bg-[hsl(var(--win95-light-gray))] cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--signal))] to-[hsl(var(--nebula))] win95-border-inset flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <div className="font-bold text-sm">{effect.name}</div>
                <div className="text-xs text-gray-600">{effect.type} · {effect.size}</div>
              </div>
            </div>
            <button className="win95-button px-3 py-1 text-xs">
              Download
            </button>
          </div>
        ))}
      </div>

      <div className="win95-border-inset bg-[hsl(var(--win95-gray))] p-3">
        <div className="text-xs mb-2">
          <span className="font-bold">Preview:</span> Glitch Transition
        </div>
        <div className="win95-border bg-black h-32 flex items-center justify-center text-white text-xs">
          [VFX Preview Area]
        </div>
      </div>
    </div>
  );
};

export default VFXWindow;
