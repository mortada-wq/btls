export function SampleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
      {/* Tall Card Left */}
      <div className="w-full max-w-[90%] md:max-w-full mx-auto bg-white/20 backdrop-blur-sm border border-white/40 rounded-3xl min-h-[clamp(8rem,18vh,12rem)]">
      </div>

      {/* Middle Column - Two Stacked Cards */}
      <div className="grid grid-rows-2 gap-3 md:gap-4 w-full max-w-[90%] md:max-w-full mx-auto">
        <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-2xl min-h-[clamp(4.75rem,10vh,6rem)]">
        </div>
        <div className="bg-white/20 backdrop-blur-sm border border-white/40 rounded-2xl min-h-[clamp(4.75rem,10vh,6rem)]">
        </div>
      </div>

      {/* Tall Card Right */}
      <div className="w-full max-w-[90%] md:max-w-full mx-auto bg-white/20 backdrop-blur-sm border border-white/40 rounded-3xl min-h-[clamp(8rem,18vh,12rem)]">
      </div>
    </div>
  );
}
