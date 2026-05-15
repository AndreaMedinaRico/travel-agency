import PackageCard from '../components/common/PackageCard';
import { packagesData } from '../data/packagesData';

const PackagesSection = () => {
  return (
    <section
      id="packages"
      className="px-24 py-24 flex items-center justify-center"
      style={{ backgroundColor: '#E6F9FF' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#13203e]">
            Paquetes de viaje
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Agenda tu paquete 
          </h2>
        </div>

        <div
          className="
            grid gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {packagesData.map((pkg) => (
            <PackageCard
              key={pkg.id}
              {...pkg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;