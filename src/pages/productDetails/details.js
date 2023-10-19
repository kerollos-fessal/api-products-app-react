import React, { useEffect, useState, useCallback }  from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosInstance from '../../axios';
import Loader from "../../components/loader/loader";
import ImgProduct from '../../reusableComponents/images/img';
import './details.css'

function Details() {
const {id} = useParams();
const [productDetails, setProductDetails] = useState(undefined)

const getProductsDetails = useCallback(() => {
    axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        setProductDetails(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getProductsDetails();
  }, [getProductsDetails]);

  return productDetails ? (
    <div className='px-5 product-details-wrapper fw-bold'>
        <div className='border border-3 border-black w-25 mx-auto p-4 my-3 fw-bold shadow-sm text-center'>Product Details</div>
      <ImgProduct className='w-75 d-block m-auto' src= {productDetails.images[2]} alt='product preview'/>
      <ImgProduct className="custom-photo" src= {productDetails.images[3]} alt='product preview'/>
      <ImgProduct className="custom-photo" src= {productDetails.images[1]} alt='product preview'/>
      <ImgProduct className="custom-photo" src= {productDetails.thumbnail} alt='product preview'/>
      <p>{`title: ${productDetails.title}`}</p>
      <p>{`category: ${productDetails.category}`}</p>
      <p>{`price: ${productDetails.price}`}</p>
      <p>{`description: ${productDetails.description}`}</p>
      <Link to={"/"}>Go back home</Link>
    </div>
  ) : (
    <Loader  type="spinningBubbles" color="#111"/>
  );

}
export default Details