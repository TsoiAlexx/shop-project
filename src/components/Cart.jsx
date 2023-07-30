function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;

  return (
    <div
      className="cart deep-orange lighten-1 white-text"
      onClick={handleBasketShow}
    >
      <i className="small material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };
