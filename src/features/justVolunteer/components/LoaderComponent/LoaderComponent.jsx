import {
  useSelector,
} from 'react-redux';

export const LoaderComponent = () => {
  const { isLoading } = useSelector((store) => store.activitiesSlice);

  return (
    <div>
      {
        isLoading && (
          <>
            <div className="modal-backdrop fade show" />
            <div className="modal" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
              <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                    <div className="d-flex flex-column align-items-center">
                      <p className="h3 text-secondary">Cargando...</p>
                      <div className="spinner-border text-secondary" style={{ width: '3rem', height: '3rem' }} role="status" />
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
