const HeroSection = () => {
  return (
    <section
      className="
        relative flex h-screen items-center justify-center
        bg-cover bg-center
      "
      style={{
        backgroundImage: "url('/HeroImage.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/80">
          Viaja por el mundo
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Agenda viajes increíbles
        </h1>

        <p className="mb-8 text-lg text-white/90 md:text-xl">
          Una forma fácil y rápida de tener todo listo para tu viaje.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;