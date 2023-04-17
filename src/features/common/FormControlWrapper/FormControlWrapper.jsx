import './formControlWrapperStyle.css';

const BOOTSTRAP_STYLES = {
  MARGIN_BOTTOM: 'mb-3',
  MARGIN_TOP_BOTTOM: 'mt-3 mb-3',
};

export const FormControlWrapper = (
  {
    customStyle,
    children,
  },
) => (
  <div
    className={
      customStyle
        ? BOOTSTRAP_STYLES.MARGIN_TOP_BOTTOM
        : BOOTSTRAP_STYLES.MARGIN_BOTTOM
    }
  >
    {children}
  </div>
);
