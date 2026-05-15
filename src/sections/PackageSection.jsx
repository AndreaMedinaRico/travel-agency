import PackageCard from '../components/common/PackageCard';
import { packagesData } from '../data/packagesData';

const PackagesSection = () => {
  return (
    <section
      id="packages"
      className="px-24 mt-64 flex items-center justify-center"
      style={{ backgroundColor: '#E6F9FF' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center"> 
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#13203e]">
            Paquetes de viaje
          </p>

          <h2 className="text-5xl font-bold text-[#13203e]"> 
            Aprovecha las ofertas exlusivas 
          </h2>
        </div>
        <div className="h-20" />
        <div
          className="
            grid gap-10   // <-- aumenté el gap de 8 a 10 para más espacio entre tarjetas
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;