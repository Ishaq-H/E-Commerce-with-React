import PropTypes from "prop-types";

function Price({ originalPrice, salePrice }) {
  return (
    <div className="book__price">
      {salePrice ? (
        <>
          <span className="book__price--normal">
            £{originalPrice.toFixed(2)}
          </span>
          £{salePrice.toFixed(2)}
        </>
      ) : (
        <>£{originalPrice.toFixed(2)}</>
      )}
    </div>
  );
}

Price.propTypes = {
  originalPrice: PropTypes.number.isRequired,
  salePrice: PropTypes.number,
};

export default Price;
