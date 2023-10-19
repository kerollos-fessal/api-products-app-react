import React from "react";
import Loader from "../loader/loader";
import { Link } from "react-router-dom";
import ImgProduct from "../../reusableComponents/images/img";
import BtnUse from "../../reusableComponents/button/btn";

import {AiFillStar } from "react-icons/ai";
import "./product.css";
// import { useSelector } from "react-redux/es/hooks/useSelector";

const ProductsList = ({ productsList, handleFavouritesToggle}) => {




  // const state = useSelector((state)=> state)
  // console.log(state)

  return productsList.length ? (
    productsList.map((product, index) => (
      <div
        key={product.id}
        className="col-md-4 col-sm-6 product-wrapper position-relative"
      >
        <Link
          className="link-body-emphasis link-offset-2 link-underline-opacity-0"
          to={`/products/${product.id}`}
        >
          <div className=" py-4 px-3 text-center border border-3 border-secondary shadow fw-bold">
            <div className="handle-size text-center d-flex justify-content-center align-content-center">
              <ImgProduct
                src={product.images[0]}
                alt="product preview"
                className="border border-2 border-black rounded-circle w-100"
              />
            </div>
            <br />
            {product.title}
            <br />
            {product.brand}
            <br />
            {product.category}
          </div>
        </Link>
        <BtnUse
          className="custom-btn-favourite"
          onClick={(e) => handleFavouritesToggle(e, product)}
          content={
            <div>
              <AiFillStar
                className={product.isFav? 'new-icon' : 'custom-icon'}
                size={50} />
            </div>
          }
        />
      </div>
    ))
  ) : (
    <Loader type="spinningBubbles" color="#111" />
  );
};
export default ProductsList;
