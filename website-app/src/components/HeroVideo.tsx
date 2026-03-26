export function HeroVideo() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <video
        className="h-full w-full object-cover opacity-55"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/65 to-blue-50/45" />
    </div>
  );
}
