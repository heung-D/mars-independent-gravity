const ArtistsWindow = () => {
  const artists = [
    { id: 1, name: 'KRAEM', genre: 'Electronic/Experimental', status: 'Active' },
    { id: 2, name: 'EVO', genre: 'R&B/Soul', status: 'Active' },
    { id: 3, name: 'ATALIA DAN', genre: 'Pop/Alternative', status: 'Featured' },
    { id: 4, name: 'NOLAY', genre: 'Hip-Hop/Trap', status: 'Featured' },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span>👤</span> Virtual Artists
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          AI 기반 가상 아티스트들이 존재하는
          <br />
          MAR/S 독립 행성 생태계
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {artists.map(artist => (
          <div
            key={artist.id}
            className="win95-border bg-gradient-to-br from-[hsl(var(--primary))]/10 to-[hsl(var(--nebula))]/10 p-4 hover:from-[hsl(var(--primary))]/20 hover:to-[hsl(var(--nebula))]/20 cursor-pointer"
          >
            <div className="w-full aspect-square bg-gradient-to-br from-[hsl(var(--signal))] to-[hsl(var(--nebula))] win95-border-inset mb-3 flex items-center justify-center">
              <span className="text-4xl">🎭</span>
            </div>
            <div className="text-center">
              <div className="font-bold text-sm mb-1">{artist.name}</div>
              <div className="text-xs text-gray-600 mb-2">{artist.genre}</div>
              <div className="win95-button px-2 py-1 text-xs inline-block">
                {artist.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 win95-border bg-gradient-to-r from-[hsl(var(--signal))]/20 to-[hsl(var(--nebula))]/20 p-3">
        <div className="text-xs font-bold mb-2">🌌 ECOSYSTEM STATUS</div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div>
            <div className="text-gray-600">Artists</div>
            <div className="font-bold">{artists.length}</div>
          </div>
          <div>
            <div className="text-gray-600">Tracks</div>
            <div className="font-bold">47</div>
          </div>
          <div>
            <div className="text-gray-600">Signals</div>
            <div className="font-bold text-[hsl(var(--signal))]">ACTIVE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsWindow;
