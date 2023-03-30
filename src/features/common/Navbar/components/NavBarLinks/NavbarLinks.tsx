import { NavLink } from 'react-router-dom';

type NavLinkType = 'navItem' | 'dropdownItem';

interface NavbarLinksProps {
  isLogged: boolean;
  navLinkType: NavLinkType;
}

interface NavbarLinkProp {
  to: string;
  name: string;
  navLinkType: NavLinkType;
}

const NavbarLink = ({ navLinkType, to, name }: NavbarLinkProp) => {
  const navLinkBootstrapClassName = navLinkType === 'navItem' ? 'nav-item nav-link' : 'dropdown-item';
  return navLinkType === 'navItem'
    ? (
      <NavLink
        className={({ isActive }) => `${navLinkBootstrapClassName}  ${isActive ? 'active' : ''} `}
        to={to}
      >
        {name}
      </NavLink>
    ) : (
      <li>
        <NavLink
          className={({ isActive }) => `${navLinkBootstrapClassName}  ${isActive ? 'active' : ''}`}
          to={to}
        >
          {name}
        </NavLink>
      </li>
    );
};

const NavbarLinks = ({ isLogged, navLinkType }: NavbarLinksProps) => (isLogged
  ? (
    <>
      <NavbarLink to="/explorar" name="Explorar" navLinkType={navLinkType} />
      <NavbarLink to="/gestionar" name="Gestionar" navLinkType={navLinkType} />
      <NavbarLink to="/crear" name="Crear" navLinkType={navLinkType} />
    </>
  ) : (
    <>
      <NavbarLink to="/auth/home" name="Home" navLinkType={navLinkType} />
      <NavbarLink to="/auth/login" name="Log In" navLinkType={navLinkType} />
      <NavbarLink to="/auth/signin" name="Sign In" navLinkType={navLinkType} />
    </>
  ));

export default NavbarLinks;
