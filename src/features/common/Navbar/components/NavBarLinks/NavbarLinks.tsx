import { NavLink } from 'react-router-dom';

type NavLinkType = 'navItem' | 'dropdownItem';

interface NavbarLinksProps {
  isLogged: boolean;
  userType: 'ONG' | 'Volunteer'
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

const getNavBarLinkByUserType = (
  userType: 'ONG' | 'Volunteer',
  navLinkType: NavLinkType,
) => {
  if (userType === 'ONG') {
    return (
      <>
        <NavbarLink to="/explorar" name="Explorar" navLinkType={navLinkType} />
        <NavbarLink to="/crear" name="Crear" navLinkType={navLinkType} />
      </>
    );
  }
  return (
    <NavbarLink to="/explorar" name="Explorar" navLinkType={navLinkType} />
  );
};

const NavbarLinks = ({ isLogged, userType, navLinkType }: NavbarLinksProps) => (isLogged
  ? getNavBarLinkByUserType(userType, navLinkType)
  : (
    <>
      <NavbarLink to="/auth/login" name="Accede" navLinkType={navLinkType} />
      <NavbarLink to="/auth/signin" name="Registrate" navLinkType={navLinkType} />
    </>
  ));

export default NavbarLinks;
