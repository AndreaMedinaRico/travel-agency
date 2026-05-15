const NavItem = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        className="text-slate-600 transition hover:text-black"
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;