const BGMWindow = () => {
  const tracks = [
    { id: 1, title: 'Want It', artist: 'Evo', mood: 'Sad', duration: '03:30' },
    { id: 2, title: 'I SLAY (ft. NoLay)', artist: 'Kraem', mood: 'Funny', duration: '03:45' },
    { id: 3, title: 'Heartbreak Please', artist: 'Kraem', mood: 'Sad', duration: '02:33' },
    { id: 4, title: 'Fear No Evil', artist: 'Kraem', mood: 'Heavy', duration: '02:30' },
    { id: 5, title: 'ctrl ft.Atalia Dan', artist: 'Evo', mood: 'Love', duration: '07:34' },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span>🎵</span> BGM
        </h2>
        <p className="text-sm text-gray-600">
          무드와 장르에 따른 다양한
          <br />
          음원소스를 받아보세요.
        </p>
      </div>

      <div className="space-y-2">
        {tracks.map(track => (
          <div
            key={track.id}
            className="win95-border bg-[hsl(var(--win95-gray))] p-3 hover:bg-[hsl(var(--win95-light-gray))] cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--nebula))] rounded flex items-center justify-center text-white font-bold">
                  {track.id}
                </div>
                <div>
                  <div className="font-bold text-sm">{track.title}</div>
                  <div className="text-xs text-gray-600">
                    {track.artist} · {track.mood}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono">{track.duration}</span>
                <button className="win95-button px-2 py-1 text-xs">▶</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 win95-border-inset p-3 bg-[hsl(var(--win95-gray))]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold">NOW PLAYING:</span>
          <span className="text-xs">Want It - Evo</span>
        </div>
        <div className="win95-border-inset h-2 bg-white relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[hsl(var(--signal))] to-[hsl(var(--nebula))]" />
        </div>
      </div>
    </div>
  );
};

export default BGMWindow;
