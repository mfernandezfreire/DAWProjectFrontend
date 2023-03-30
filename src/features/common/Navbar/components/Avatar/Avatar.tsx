import NavbarLinks from '../NavBarLinks/NavbarLinks';

interface AvatarProps {
  isLogged: boolean;
}

const Avatar = ({ isLogged }: AvatarProps) => (
  <div className="dropdown">
    <button type="button" className="btn btn-light" data-bs-toggle="dropdown">
      <span className="bi bi-file-person-fill" />
    </button>
    <ul className="dropdown-menu dropdown-menu-end">
      <NavbarLinks isLogged={isLogged} navLinkType="dropdownItem" />
    </ul>
  </div>
);

export default Avatar;
