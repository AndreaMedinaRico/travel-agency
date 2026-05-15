import NavItem from '../common/NavItem';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-slate-800">
          TravelInc
        </h1>

        <ul className="hidden gap-8 md:flex">
          <NavItem href="paquetes">
            Paquetes
          </NavItem>

          <NavItem href="destinos">
            Destinos
          </NavItem>

          <NavItem href="opiniones">
            Opiniones
          </NavItem>

          <NavItem href="acercade">
            Acerca de nosotros
          </NavItem>

        </ul>

        <button className="rounded-full bg-black px-5 py-2 text-white transition hover:bg-slate-800">
          Book Now
        </button>
      </nav>
    </header>
  );
};

export default Navbar;