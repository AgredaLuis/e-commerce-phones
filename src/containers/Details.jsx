import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editProduct } from "../features/productSlice";


const Details = () => {
  const stateProducts = useSelector((state) => state.product);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const productFound = stateProducts.find((product) => product.id == params.id);
  const [detailsProduct, setDetailsProduct] = useState(productFound);

  /* handle que edita si esta en In Cart o no, llevando el booleano a true unicamente */
  const handleProduct = (id) => {
    dispatch(editProduct(id));
  };

  useEffect(() => {
    if (detailsProduct == undefined) {
      // Código a ejecutar si la variable es undefined
      console.log("La variable es undefined");
    } else {
      const productFound = stateProducts.find(
        (product) => product.id == params.id
      );
      setDetailsProduct(productFound);
      console.log("La variable tiene un valor definido");
    }
  }, [productFound]);

  return (
    <div>
      <div key={detailsProduct.id} className="container py-3">
        {/* Title */}

        <div className="row">
          <div className="col-10 mx-auto text center text-slanted text blue my-5">
            <h1>{detailsProduct.title}</h1>
          </div>
        </div>
        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img className="img-fluid" src={detailsProduct.img} alt="product" />
          </div>
          {/* product text */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h1>model : {detailsProduct.title}</h1>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by :{" "}
              <span className="text-uppercase">{detailsProduct.company}</span>
            </h4>
            <h4 className="text-blue">
              <strong>
                {" "}
                price : <span>$</span> {detailsProduct.price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product :
            </p>
            <p className="text-muted lead">{detailsProduct.info}</p>
            {/* buttons */}
            <div>
              <Link to="/">
                <button className="button-container">Back to products</button>
              </Link>
              <button
                className="button-containerTwo"
                disabled={detailsProduct.inCart ? true : false}
                onClick={() => {
                  handleProduct(detailsProduct.id);
                }}
              >
                {detailsProduct.inCart ? " in Cart" : "add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
