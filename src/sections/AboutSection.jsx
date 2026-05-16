import AboutCard from '../components/common/AboutCard';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="px-6 py-24"
      style={{ backgroundColor: '#E6F9FF'}}
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

          <div className="h-8"/>

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

          <div className="h-6"/>
          <div className="grid gap-5 sm:grid-cols-2">
            <AboutCard
              title="+10 años"
              description="Creando experiencias memorables."
            />

            <AboutCard
              title="Atención personalizada"
              description="Viajes adaptados a cada cliente."
            />

            <AboutCard
              title="Destinos exclusivos"
              description="Experiencias únicas alrededor del mundo."
            />

            <AboutCard
              title="Soporte continuo"
              description="Acompañamiento antes y durante el viaje."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;