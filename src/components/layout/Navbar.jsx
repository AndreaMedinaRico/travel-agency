import { User } from 'lucide-react';
import NavItem from '../common/NavItem';

const Navbar = () => {
  return (
    <header
      className="
        fixed top-0 z-50 w-full backdrop-blur-md
      "
    >
      <nav className="mx-auto flex h-20 max-w-5xl items-center justify-end pl-20">
        {/* Logo */}
        <div className="w-100">
          <h1 className="text-2xl font-bold text-[#13203e]">
            Travel.Inc
          </h1>
        </div>

        {/* Links */}
        <ul className="    absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
          <NavItem href="#packages">
            Paquetes
          </NavItem>

          <NavItem href="#destinations">
            Destinos
          </NavItem>

          <NavItem href="#reviews">
            Opiniones
          </NavItem>

          <NavItem href="#about">
            Acerca de nosotros
          </NavItem>
        </ul>

        {/* Icon */}
        <div className="flex w-120 justify-end">
          <button
            aria-label="Perfil"
            className="
              rounded-full  p-3
              text-[#13203e]
              transition hover:bg-slate-100
            "
          >
            <User size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;