export function AdBanner({ adSlot }: { adSlot: string }) {
  return (
    <div className="w-full h-32 bg-gray-300 flex items-center justify-center text-gray-700 text-sm">
      {/* Aqui você pode integrar com Google AdSense */}
      <span>Anúncio ({adSlot})</span>
    </div>
  );
}
