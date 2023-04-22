import React from "react";
import { useDispatch } from "react-redux";
import { decrementProduct,incrementProduct,removeProduct} from "../../features/productSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();


  const handleDecrement = (id) => {
    dispatch(decrementProduct(id))
  }

  const handleIncrement = (id) =>{
    dispatch(incrementProduct(id))
  }

  const handleRemove = (id) => {
    dispatch(removeProduct(id))
  }

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={item.img}
          alt="product-image"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {item.title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span> ${item.price}
      </div>

      {/*  */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => handleDecrement(item.id)}>-</span>
          </div>
          <div>
            <span className="btn btn-black mx-1">{item.count}</span>
          </div>
          <div>
            <span className="btn btn-black mx-1" onClick={() => handleIncrement(item.id)}>+</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" >
          <i className="bi bi-trash-fill basurita" onClick={() => handleRemove(item.id)} ></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> Item total: $ {item.total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
