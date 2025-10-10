export default function SideBar({
  cart,
  handleRemoveSimilarCart,
  handleIsConfirmed,
}) {
  return (
    <div className="side-bar">
      <header className="side-bar-heading">
        Your Cart ({cart.length === 0 ? `0` : cart.length})
      </header>

      {/* <!-- ### FOR EMPTY CART --> */}
      {cart.length === 0 ? (
        <>
          <img
            className="side-bar-img"
            src="assets/images/illustration-empty-cart.svg"
            alt="empty-cart"
          />
          <p className="side-bar-desc">Your added items will appear here</p>
        </>
      ) : (
        // ### FOR FILLED CART
        <>
          <ul className="cart-items-list">
            {cart.map((eachCartItem) => (
              <CartItems
                eachCartItem={eachCartItem}
                handleRemoveSimilarCart={handleRemoveSimilarCart}
              />
            ))}
          </ul>

          {/* ### ORDER SUMMARY */}
          <div className="order-summary">
            <span className="order-summary-title">Order Total</span>
            <span className="order-summary-total">
              $
              {cart
                .reduce((accu, cur) => accu + cur.price * cur.quantity, 0)
                .toFixed(2)}
            </span>
          </div>

          {/* ### CARBON-NEUTRAL */}
          <div className="carbon-neutral">
            <img
              className="carbon-neutral-img"
              src="assets/images/icon-carbon-neutral.svg"
              alt="carbon-neutral"
            />
            <span className="carbon-neutral-span">
              This is
              <strong className="carbon-neutral-span-strong">
                {` carbon-neutral `}
              </strong>
              delivery
            </span>
          </div>
          <button className="confirm-order-btn" onClick={handleIsConfirmed}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}

function CartItems({ eachCartItem, handleRemoveSimilarCart }) {
  return (
    <li className="cart-item">
      <label className="cart-item-title">{eachCartItem.name}</label>
      <span className="cart-item-qty">{eachCartItem.quantity}x</span>
      <span className="cart-item-price">@${eachCartItem.price.toFixed(2)}</span>
      <span className="cart-item-total-price">
        ${(eachCartItem.price * eachCartItem.quantity).toFixed(2)}
      </span>
      <button
        className="cart-item-rmv-btn"
        onClick={() => {
          handleRemoveSimilarCart(eachCartItem);
        }}
      >
        <img src="assets/images/icon-remove-item.svg" alt="X" />
      </button>
      <hr className="cart-item-hrz-line" />
    </li>
  );
}
