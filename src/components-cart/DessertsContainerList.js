export default function DessertsContainerList({
  data,
  cart,
  handleAddCart,
  handleRemoveCart,
}) {
  return (
    <ul className="desserts-container-list">
      {data.map((eachDessertObj) => (
        <Dessert
          eachDessertObj={eachDessertObj}
          handleAddCart={handleAddCart}
          handleRemoveCart={handleRemoveCart}
          cart={cart}
        />
      ))}
    </ul>
  );
}

function Dessert({ eachDessertObj, handleAddCart, handleRemoveCart, cart }) {
  const curCartItem = cart.find((item) => item.name === eachDessertObj.name);
  const qty = curCartItem?.quantity ?? 0;

  return (
    <li className="dessert">
      <img
        className="dessert-img"
        src={eachDessertObj.image.desktop}
        alt={eachDessertObj.name}
      />
      {qty === 0 ? (
        <AddToCartBtn
          handleAddCart={handleAddCart}
          eachDessertObj={eachDessertObj}
        />
      ) : (
        <QtyControlBtn
          handleRemoveCart={handleRemoveCart}
          curCartItem={curCartItem}
          handleAddCart={handleAddCart}
          eachDessertObj={eachDessertObj}
        />
      )}

      <label className="dessert-title">{eachDessertObj.category}</label>
      <p className="dessert-desc">{eachDessertObj.name}</p>
      <p className="dessert-price">${eachDessertObj.price.toFixed(2)}</p>
    </li>
  );
}

function AddToCartBtn({ handleAddCart, eachDessertObj }) {
  return (
    <div
      className="dessert-add-to-cart"
      onClick={() => {
        handleAddCart(eachDessertObj);
      }}
    >
      <img
        className="dessert-add-to-cart-img"
        src="assets/images/icon-add-to-cart.svg"
        alt="icon-cart"
      />
      <span className="dessert-add-to-cart-span">Add to Cart</span>
    </div>
  );
}

function QtyControlBtn({
  handleRemoveCart,
  curCartItem,
  handleAddCart,
  eachDessertObj,
}) {
  return (
    <div className="dessert-add-to-cart active">
      <button
        className="dessert-add-to-cart-active-decr"
        onClick={() => handleRemoveCart(curCartItem)}
      >
        <svg
          className="dessert-add-to-cart-active-decr-img"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="currentColor"
          viewBox="0 0 10 2"
        >
          <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>
      <span className="dessert-add-to-cart-span active">
        {curCartItem?.quantity ?? 0}
      </span>
      <button
        className="dessert-add-to-cart-active-incr"
        onClick={() => {
          handleAddCart(eachDessertObj);
        }}
      >
        <svg
          className="dessert-add-to-cart-active-incr-img"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="currentColor"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    </div>
  );
}
