import { useState } from "react";
import DessertsContainerList from "./DessertsContainerList";
import SideBar from "./SideBar";
import Overlay from "./Overlay.js";
import data from "./data.json";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleAddCart(dessertObj) {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (eachObj) => eachObj.name === dessertObj.name
      );

      if (existing)
        return prevCart.map((eachObj) =>
          eachObj.name === dessertObj.name
            ? { ...eachObj, quantity: eachObj.quantity + 1 }
            : eachObj
        );

      if (!existing) return [...prevCart, { ...dessertObj, quantity: 1 }];
    });
  }

  function handleRemoveCart(cartObj) {
    setCart((prevData) =>
      prevData
        .map((item) =>
          item.name === cartObj.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function handleRemoveSimilarCart(dessertObj) {
    setCart((prevData) =>
      prevData.filter((eachPrvData) => eachPrvData.name !== dessertObj.name)
    );
  }

  function handleIsConfirmed() {
    setIsConfirmed((prev) => !prev);
  }

  function handleStartNewOrder() {
    setIsConfirmed(false);
    setCart([]);
  }

  return (
    <div className="main-container">
      <header className="main-heading">Desserts</header>
      <DessertsContainerList
        data={data}
        cart={cart}
        handleAddCart={handleAddCart}
        handleRemoveCart={handleRemoveCart}
      />
      <SideBar
        cart={cart}
        handleRemoveSimilarCart={handleRemoveSimilarCart}
        handleIsConfirmed={handleIsConfirmed}
      />
      {isConfirmed && (
        <Overlay handleStartNewOrder={handleStartNewOrder} cart={cart} />
      )}
    </div>
  );
}
