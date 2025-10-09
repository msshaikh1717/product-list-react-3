export default function SideBar() {
  return (
    <div className="side-bar">
      <header className="side-bar-heading">Your Cart (0)</header>

      {/* <!-- ### FOR EMPTY CART --> */}
      {/* <img
        className="side-bar-img"
        src="assets/images/illustration-empty-cart.svg"
        alt="empty-cart"
      />
      <p className="side-bar-desc">Your added items will appear here</p> */}

      {/* <!-- ### FOR FILLED CART --> */}

      <ul className="cart-items-list">
        <li className="cart-item">
          <label className="cart-item-title">Classic Tiramisu</label>
          <span className="cart-item-qty">1x</span>
          <span className="cart-item-price">@$6.50</span>
          <span className="cart-item-total-price">$13.00</span>
          <button className="cart-item-rmv-btn">
            <img src="assets/images/icon-remove-item.svg" alt="X" />
          </button>
          <hr className="cart-item-hrz-line" />
        </li>
        <li className="cart-item">
          <label className="cart-item-title">Classic Tiramisu</label>
          <span className="cart-item-qty">1x</span>
          <span className="cart-item-price">@$6.50</span>
          <span className="cart-item-total-price">$13.00</span>
          <button className="cart-item-rmv-btn">
            <img src="assets/images/icon-remove-item.svg" alt="X" />
          </button>
          <hr className="cart-item-hrz-line" />
        </li>
        <li className="cart-item">
          <label className="cart-item-title">Classic Tiramisu</label>
          <span className="cart-item-qty">1x</span>
          <span className="cart-item-price">@$6.50</span>
          <span className="cart-item-total-price">$13.00</span>
          <button className="cart-item-rmv-btn">
            <img src="assets/images/icon-remove-item.svg" alt="X" />
          </button>
          <hr className="cart-item-hrz-line" />
        </li>
      </ul>

      {/* <!-- ### ORDER SUMMARY --> */}

      <div className="order-summary">
        <span className="order-summary-title">Order Total</span>
        <span className="order-summary-total">$46.50</span>
      </div>

      {/* <!-- ### CARBON-NEUTRAL --> */}

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
      <button className="confirm-order-btn">Confirm Order</button>
    </div>
  );
}
