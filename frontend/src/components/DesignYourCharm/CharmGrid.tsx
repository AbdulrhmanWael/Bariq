export default function CharmGrid({
  images,
  onPick,
}: Readonly<{
  images: string[];
  onPick: (src: string) => void;
}>) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-6 gap-2 md:grid-cols-8 lg:grid-cols-10">
        {images.slice(0, 100).map((src) => (
          <button
            key={src}
            onClick={() => onPick(src)}
            className="border border-gray-200 p-1 rounded-md bg-white hover:shadow-sm"
          >
            <img src={src} alt={src} className="w-full h-10 object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}