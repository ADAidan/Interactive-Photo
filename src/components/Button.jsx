import PropTypes from "prop-types";

const Button = ({ product }) => {
  return (
    <button
      className="banner-button"
      style={{
        top: product.top,
        left: product.left,
      }}
    >
      <div className="button-border">
        <div className="button-circle" />
      </div>
      <span className="tooltip">{product.text}</span>
    </button>
  );
};

Button.propTypes = {
  product: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Button;
