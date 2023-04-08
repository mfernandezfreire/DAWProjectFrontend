import { useDispatch } from 'react-redux';
import { setLogout } from '../../../../../store/slices';

interface AvatarProps {
  isLogged: boolean;
}

const Avatar = ({ isLogged }: AvatarProps) => {
  const dispatch = useDispatch();
  return (isLogged
    ? (
      <div className="dropdown">
        <button type="button" className="btn btn-light" data-bs-toggle="dropdown">
          <span className="bi bi-file-person-fill" />
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <button className="dropdown-item" type="button" onClick={() => dispatch(setLogout())}>Logout</button>
        </ul>
      </div>
    ) : <div style={{ minHeight: '42px', minWidth: '38px' }} />);
};

export default Avatar;
