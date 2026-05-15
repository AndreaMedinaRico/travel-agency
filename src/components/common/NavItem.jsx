const NavItem = ({ href, children }) => {
  return (
    <li className="flex items-center justify-center">
      <a
        href={href}
        className="
          font-medium text-[#13203e]
          transition hover:text-blue-800
        "
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;