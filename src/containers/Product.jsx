import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { editProduct } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modalSlice";

const Product = ({ product }) => {

  // Obtiene el dispatch para despachar acciones
  const dispatch = useDispatch();

  /* handle que edita si esta en In Cart o no, llevando el booleano a true unicamente mas abrir o no el modal */
  const handleProduct = (id) => {
    dispatch(editProduct(id));
    dispatch(openModal(id));
  };

  return (
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5">
          <Link to={`/details/${product.id}`}>
            <img
              className="card-img-top"
              src={product.img}
              alt="product image"
              onClick={() => console.log("hiciste click en un telefono")}
            />
          </Link>
          <button
            className="cart-btn"
            disabled={product.inCart ? true : false}
            onClick={() => {
              handleProduct(product.id);
            }}
          >
            {product.inCart ? (
              <p className="text-capitalize mb-0" disabled>
                in cart
              </p>
            ) : (
              <i className="bi bi-cart-plus-fill bi-bold" />
            )}
          </button>
        </div>
        {/* cart footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{product.title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="me-1">$</span>
            {product.price}
          </h5>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  inCart: PropTypes.bool,
};

export default Product;
