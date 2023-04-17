import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as NavbarLogo } from '../../../assets/logoNavbar.svg';
import Avatar from './components/Avatar/Avatar';
import NavbarLinks from './components/NavBarLinks/NavbarLinks';

const Navbar = () => {
  const { isLogged, userInfo } = useSelector((store) => store.authSlice);
  const userType = userInfo?.userType;
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="d-none d-sm-flex container-fluid justify-content-between">
        <Link
          className="navbar-brand"
          to="/"
        >
          {/* JustVolunteer */}
          <NavbarLogo />
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavbarLinks isLogged={isLogged} userType={userType} navLinkType="navItem" />
          </div>
        </div>
        <Avatar isLogged={isLogged} />
      </div>
      <div className="d-flex d-sm-none container-fluid justify-content-between">
        <div className="dropdown">
          <div className="dropdown">
            <button type="button" className="btn btn-light" data-bs-toggle="dropdown">
              <span className="bi bi-list" />
            </button>
            <ul className="dropdown-menu">
              <NavbarLinks isLogged={isLogged} userType={userType} navLinkType="dropdownItem" />
            </ul>
          </div>
        </div>
        <Link
          className="navbar-brand"
          to="/"
        >
          <NavbarLogo style={{ marginLeft: '1.75rem' }} />
        </Link>
        <Avatar isLogged={isLogged} />
      </div>
    </nav>
  );
};

export default Navbar;
