const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-slate-50 px-6 py-24"
    >
      <div
        className="
          mx-auto grid max-w-7xl gap-14
          lg:grid-cols-2 lg:items-center
        "
      >
        {/* Imagen */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
            alt="Agencia de viajes"
            className="rounded-3xl shadow-xl"
          />
        </div>

        {/* Contenido */}
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-slate-500">
            Sobre nosotros
          </p>

          <h2 className="mb-6 text-4xl font-bold text-slate-900">
            Creamos experiencias de viaje inolvidables
          </h2>

          <p className="mb-6 text-lg text-slate-600">
            En TravelInc nos especializamos en diseñar
            viajes personalizados para familias, parejas
            y aventureros que buscan experiencias únicas
            alrededor del mundo.
          </p>

          <p className="mb-8 text-slate-600">
            Con más de 10 años de experiencia, ofrecemos
            atención personalizada, destinos exclusivos y
            paquetes cuidadosamente planeados para que
            nuestros clientes disfruten cada momento de
            su viaje sin preocupaciones.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="mb-2 font-bold text-slate-800">
                +10 años
              </h3>

              <p className="text-sm text-slate-600">
                Creando experiencias memorables.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="mb-2 font-bold text-slate-800">
                Atención personalizada
              </h3>

              <p className="text-sm text-slate-600">
                Viajes adaptados a cada cliente.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="mb-2 font-bold text-slate-800">
                Destinos exclusivos
              </h3>

              <p className="text-sm text-slate-600">
                Experiencias únicas alrededor del mundo.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="mb-2 font-bold text-slate-800">
                Soporte continuo
              </h3>

              <p className="text-sm text-slate-600">
                Acompañamiento antes y durante el viaje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;