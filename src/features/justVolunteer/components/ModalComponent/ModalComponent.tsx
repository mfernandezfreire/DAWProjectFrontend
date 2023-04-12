/* eslint-disable max-len */
import { ExclamationTriangle, HandThumbsUp } from 'react-bootstrap-icons';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { RootState } from '../../../../store/store';
import { setActivitieErrorToNull } from '../../../../store/slices/activies';

export const ModalComponent = () => {
  const dispatch = useDispatch();
  const { isError, errorInfo } = useSelector((store: RootState) => store.activitiesSlice);

  const handleClose = () => {
    dispatch(setActivitieErrorToNull());
  };

  const getIcon = () => {
    if (errorInfo.errorType === 'danger') {
      return <ExclamationTriangle size={50} color="red" />;
    }
    if (errorInfo.errorType === 'warning') {
      return <ExclamationTriangle size={50} color="orange" />;
    }
    if (errorInfo.errorType === 'ok') {
      return <HandThumbsUp size={50} color="green" />;
    }
    return <ExclamationTriangle size={50} color="red" />;
  };

  return (
    <div>
      {
        isError && (
          <>
            <div className="modal-backdrop fade show" />
            <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="text-center mb-4">
                      {
                        getIcon()
                      }
                    </div>
                    <div className="text-center mb-5">
                      <h5>
                        {errorInfo.errorMessage}
                      </h5>
                    </div>
                    <div className="text-center">
                      <button type="button" className={`btn ${errorInfo.errorType === 'ok' ? 'btn-success' : `btn-${errorInfo.errorType}`}`} data-bs-dismiss="modal" onClick={() => handleClose()}>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};
