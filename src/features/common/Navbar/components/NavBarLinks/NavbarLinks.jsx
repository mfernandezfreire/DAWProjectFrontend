import { NavLink } from 'react-router-dom';

const NavbarLink = ({ navLinkType, to, name }) => {
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
  userType,
  navLinkType,
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

const NavbarLinks = ({ isLogged, userType, navLinkType }) => (isLogged
  ? getNavBarLinkByUserType(userType, navLinkType)
  : (
    <>
      <NavbarLink to="/auth/home" name="Home" navLinkType={navLinkType} />
      <NavbarLink to="/auth/login" name="Accede" navLinkType={navLinkType} />
      <NavbarLink to="/auth/signin" name="Registrate" navLinkType={navLinkType} />
    </>
  ));

export default NavbarLinks;
