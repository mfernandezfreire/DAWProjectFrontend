import { Link } from 'react-router-dom';
import Avatar from './components/Avatar/Avatar';
import NavbarLinks from './components/NavBarLinks/NavbarLinks';

const Navbar = () => {
  const loggedIn = false;
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="d-none d-sm-flex container-fluid justify-content-between">
        <Link
          className="navbar-brand"
          to="/"
        >
          JustVolunteer
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavbarLinks isLogged={loggedIn} navLinkType="navItem" />
          </div>
        </div>
        <Avatar isLogged={loggedIn} />
      </div>
      <div className="d-flex d-sm-none container-fluid justify-content-between">
        <div className="dropdown">
          <div className="dropdown">
            <button type="button" className="btn btn-light" data-bs-toggle="dropdown">
              <span className="bi bi-list" />
            </button>
            <ul className="dropdown-menu">
              <NavbarLinks isLogged={loggedIn} navLinkType="dropdownItem" />
            </ul>
          </div>
        </div>
        <Link
          className="navbar-brand"
          to="/"
        >
          JustVolunteer
        </Link>
        <Avatar isLogged={loggedIn} />
      </div>
    </nav>
  );
};

export default Navbar;
