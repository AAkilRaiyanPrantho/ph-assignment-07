import PropTypes from "prop-types";

const Cart = ({ cart }) => {
  const { title } = cart;
  return (
    <div>
      <ol className="list-disc text-md relative p-1 left-4">
        <li>{title}</li>
      </ol>
      {/* <h3 className="text-md font-semibold">{title}</h3> */}
    </div>
  );
};

Cart.propTypes = {
  // course: PropTypes.object.isRequired,
  cart: PropTypes.object,
};

export default Cart;
