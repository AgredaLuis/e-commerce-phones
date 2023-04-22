import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { clearCart } from "../../features/productSlice";
import { useDispatch } from "react-redux";

const CartTotals = ({ cart }) => {
  const [subTotal, setSubTotal] = useState();
  const [tax, setTax] = useState(subTotal / 10);
  const [total, setTotal] = useState(tax + subTotal);
  const dispatch = useDispatch();

  const handleClear = () =>{
    dispatch(clearCart())
  }

  useEffect(() => {
    const totalprice = cart.reduce((acumulator, product) => {
      return acumulator + product.total;
    }, 0);

    setSubTotal(totalprice);
    setTax(parseFloat((totalprice * 0.1).toFixed(2)));
    setTotal(totalprice + tax);
  }, [cart, tax]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-2 ms-5 ms-md-auto col-sm-8 text-capitalize text-end">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={handleClear}
            >
              Clear cart
            </button>
          </Link>
          {/* sub total */}
          <h5>
            <span className="text-title">subtotal : </span>{" "}
            <strong>$ {subTotal}</strong>
          </h5>
          {/* cart tax */}
          <h5>
            <span className="text-title">tax : </span> <strong>$ {tax}</strong>
          </h5>
          {/* cart total */}
          <h5>
            <span className="text-title">total : </span>{" "}
            <strong>${total}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
