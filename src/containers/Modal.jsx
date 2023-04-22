import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/modalSlice";

const Modal = ({id}) => {
  // Obtiene el estado del modal desde el store de Redux
  const stateProducts = useSelector((state) => state.product);

  const productFound = stateProducts.find((product) => product.id == parseInt(id));

  const [product, setproduct] = useState(productFound)

  // Obtiene el dispatch para despachar acciones
  const dispatch = useDispatch();



  const handleModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal-overlay" onClick={handleModal}>
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-cappitalize p-5"
          >
            <h5>item added to the cart</h5>
            {/* image */}
            <img src={product.img} alt="" className="img-fluid" />
            {/* title */}
            <h5>{product.title}</h5>
            {/* price */}
            <h5 className="text-muted"> price: $ {product.price} </h5>
            <Link to="/">
                <button className="button-container" onClick={handleModal}>
                    continue shopping
                </button>
            </Link>
            <Link to="/cart">
                <button className="button-containerTwo" onClick={handleModal}>
                    go to cart
                </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
