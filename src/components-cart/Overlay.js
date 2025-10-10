export default function Overlay({ handleStartNewOrder, cart }) {
  return (
    <div className="o-o-c-overlay">
      <div className="o-o-c">
        <img
          className="o-o-c-tick-img"
          src="assets/images/icon-order-confirmed.svg"
          alt="order-confirmed"
        />
        <h1 className="o-o-c-order-confirmed-txt">Order Confirmed</h1>
        <p className="o-o-c-hope-msg">We hope you enjoy your food</p>
        <ul className="o-o-c-cart-items-list">
          {cart.map((item) => (
            <CartItem item={item} />
          ))}

          <div className="o-o-c-confirmed-order-summary">
            <hr className="o-o-c-cart-item-hrz-line" />
            <span className="o-o-c-confirmed-order-summary-total">
              Order Total
            </span>
            <span className="o-o-c-confirmed-order-summary-price">
              $
              {cart
                .reduce(
                  (accu, curItem) => curItem.price * curItem.quantity + accu,
                  0
                )
                .toFixed(2)}
            </span>
          </div>
        </ul>
        <button className="o-o-c-new-order-btn" onClick={handleStartNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

function CartItem({ item: { name, quantity, price } }) {
  return (
    <li className="o-o-c-cart-item">
      <img
        className="o-o-c-cart-item-thumb"
        src="assets/images/image-tiramisu-thumbnail.jpg"
        alt="Tiramisu-thumbnail"
      />
      <div className="o-o-c-cart-item-center-grid">
        <label className="o-o-c-cart-item-title">{name}</label>

        <span className="o-o-c-cart-item-qty">{quantity}x</span>
        <span className="o-o-c-cart-item-price">@${price.toFixed(2)}</span>
      </div>
      <span className="o-o-c-cart-item-total-price">
        ${(quantity * price).toFixed(2)}
      </span>
      {/* <!-- <hr className="o-o-c-cart-item-hrz-line" /> --> */}
    </li>
  );
}
