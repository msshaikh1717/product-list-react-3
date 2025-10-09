export default function DessertsContainerList({ data }) {
  return (
    <ul className="desserts-container-list">
      {data.map((eachDessertObj) => (
        <Dessert eachDessertObj={eachDessertObj} />
      ))}
    </ul>
  );
}

function Dessert({ eachDessertObj }) {
  return (
    <li className="dessert">
      <img
        className="dessert-img"
        src={eachDessertObj.image.desktop}
        alt={eachDessertObj.name}
      />

      {/* <!-- ### ADD-TO-CART-DEFAULT --> */}

      {/* <div className="dessert-add-to-cart">
        <img
          className="dessert-add-to-cart-img"
          src="assets/images/icon-add-to-cart.svg"
          alt="icon-cart"
        />
        <span className="dessert-add-to-cart-span">Add to Cart</span>
      </div> */}

      {/* <!-- ### ADD-TO-CART-HOVER/ACTIVE --> */}

      <div className="dessert-add-to-cart dessert-add-to-cart-active">
        <button className="dessert-add-to-cart-active-decr">
          <img
            className="dessert-add-to-cart-active-decr-img"
            src="assets/images/icon-decrement-quantity.svg"
            alt="decrement"
          />
        </button>
        <span className="dessert-add-to-cart-span">23</span>
        <button className="dessert-add-to-cart-active-incr">
          <img
            className="dessert-add-to-cart-active-incr-img"
            src="assets/images/icon-increment-quantity.svg"
            alt="increment"
          />
        </button>
      </div>

      <label className="dessert-title">{eachDessertObj.category}</label>
      <p className="dessert-desc">{eachDessertObj.name}</p>
      <p className="dessert-price">${eachDessertObj.price.toFixed(2)}</p>
    </li>
  );
}
