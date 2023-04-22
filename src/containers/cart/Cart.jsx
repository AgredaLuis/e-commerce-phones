import React from "react";
import { Title } from "../../components/index";
import { CartColumns, CartEmpty, CartList, CartTotals } from "../index";
import { useSelector } from "react-redux";

const Cart = () => {
  const stateProducts = useSelector((state) => state.product);
  const cart = [];

  stateProducts.map((product) => {
    if (product.inCart === true) {
      cart.push(product);
    }
  });
  return (
    <section>
      <Title name="your" title=" cart" />
      {cart.length > 0 ? (
        <>
          <CartColumns />
          <CartList cart={cart}/>
          <CartTotals cart={cart}/>
        </>
      ) : (
        <CartEmpty />
      )}
    </section>
  );
};

export default Cart;
