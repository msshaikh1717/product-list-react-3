export default function Overlay() {
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
          <li className="o-o-c-cart-item">
            <img
              className="o-o-c-cart-item-thumb"
              src="assets/images/image-tiramisu-thumbnail.jpg"
              alt="Tiramisu-thumbnail"
            />
            <div className="o-o-c-cart-item-center-grid">
              <label className="o-o-c-cart-item-title">
                Vanilla Bean Crème Brûlée
              </label>

              <span className="o-o-c-cart-item-qty">1x</span>
              <span className="o-o-c-cart-item-price">@$6.50</span>
            </div>
            <span className="o-o-c-cart-item-total-price">$13.00</span>
            {/* <!-- <hr className="o-o-c-cart-item-hrz-line" /> --> */}
          </li>
          <li className="o-o-c-cart-item">
            <img
              className="o-o-c-cart-item-thumb"
              src="assets/images/image-tiramisu-thumbnail.jpg"
              alt="Tiramisu-thumbnail"
            />
            <div className="o-o-c-cart-item-center-grid">
              <label className="o-o-c-cart-item-title">Classic Tiramisu</label>

              <span className="o-o-c-cart-item-qty">1x</span>
              <span className="o-o-c-cart-item-price">@$6.50</span>
            </div>
            <span className="o-o-c-cart-item-total-price">$13.00</span>
            {/* <!-- <hr className="o-o-c-cart-item-hrz-line" /> --> */}
          </li>
          <li className="o-o-c-cart-item">
            <img
              className="o-o-c-cart-item-thumb"
              src="assets/images/image-tiramisu-thumbnail.jpg"
              alt="Tiramisu-thumbnail"
            />
            <div className="o-o-c-cart-item-center-grid">
              <label className="o-o-c-cart-item-title">Classic Tiramisu</label>

              <span className="o-o-c-cart-item-qty">1x</span>
              <span className="o-o-c-cart-item-price">@$6.50</span>
            </div>
            <span className="o-o-c-cart-item-total-price">$13.00</span>
          </li>

          <div className="o-o-c-confirmed-order-summary">
            <hr className="o-o-c-cart-item-hrz-line" />
            <span className="o-o-c-confirmed-order-summary-total">
              Order Total
            </span>
            <span className="o-o-c-confirmed-order-summary-price">$46.50</span>
          </div>
        </ul>
        <button className="o-o-c-new-order-btn">Start New Order</button>
      </div>
    </div>
  );
}
