const ShopWindow = () => {
  const items = [
    { id: 1, name: 'Limited Poster [GOD]', price: '₩35,000', stock: '5 left' },
    { id: 2, name: 'Artist Hologram Card', price: '₩25,000', stock: '12 left' },
    { id: 3, name: 'MAR/S OS T-Shirt', price: '₩45,000', stock: 'In Stock' },
    { id: 4, name: 'Signal Sticker Pack', price: '₩15,000', stock: 'In Stock' },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span>🛍️</span> MAD SHOP
        </h2>
        <p className="text-sm text-gray-600">
          MAR/S 독점 굿즈와 디지털 콘텐츠
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {items.map(item => (
          <div
            key={item.id}
            className="win95-border bg-white p-3 hover:bg-[hsl(var(--win95-light-gray))] cursor-pointer"
          >
            <div className="aspect-square bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--dust))] win95-border-inset mb-2 flex items-center justify-center">
              <span className="text-4xl">📦</span>
            </div>
            <div className="text-sm font-bold mb-1">{item.name}</div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-[hsl(var(--primary))]">{item.price}</span>
              <span className="text-gray-600">{item.stock}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="win95-border bg-[hsl(var(--win95-gray))] p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold">🛒 Cart</span>
          <span className="text-xs">0 items</span>
        </div>
        <button className="w-full win95-button py-2 font-bold hover:bg-[hsl(var(--win95-light-gray))]">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShopWindow;
