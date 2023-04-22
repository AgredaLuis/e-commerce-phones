import React from "react";
import Product from "./Product";
import { Title } from "../components/Title";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  const stateProducts = useSelector((state) => state.product);

  return (
    <>
      <div className="py-5">
        <div className="container">
        <Title name="our" title=" products" />
          <div className="row">
            {
              stateProducts.map((product) =>(
                  <Product key={product.id} product={product}/>

              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
