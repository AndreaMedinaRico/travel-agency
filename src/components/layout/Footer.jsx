import {
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="px-24 mt-64 flex items-center justify-center text-white" style={{ backgroundColor: '#13203e' }}>
      <div
        className="
          mx-auto grid max-w-7xl gap-12
          text-center
          md:grid-cols-2 lg:grid-cols-4
        "
      >
        {/* Marca */}
        <div>
          <h2 className="mb-4 text-3xl font-bold">
            Travel.Inc
          </h2>

          <p className="text-slate-400">
            Creamos experiencias de viaje inolvidables
            para quienes desean explorar el mundo con
            comodidad, seguridad y aventura.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Enlaces rápidos
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li className="cursor-pointer transition hover:text-white">
              Nosotros
            </li>

            <li className="cursor-pointer transition hover:text-white">
              Destinos
            </li>

            <li className="cursor-pointer transition hover:text-white">
              FAQ
            </li>

            <li className="cursor-pointer transition hover:text-white">
              Contacto
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Contacto
          </h3>

          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center justify-center gap-3">
              <Phone size={18} />

              <span>+52 442 123 4567</span>
            </li>

            <li className="flex items-center justify-center gap-3">
              <Mail size={18} />

              <span>contacto@travelinc.com</span>
            </li>

            <li className="flex items-center justify-center gap-3">
              <MapPin size={18} />

              <span>Querétaro, México</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="
          mx-auto mt-14 max-w-7xl
          border-t border-slate-800 pt-6
          text-center text-sm text-slate-500
        "
      >
        © 2026 TravelInc. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;