import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import ProductsList from "../../components/productsList/product";
import SearchInput from "../../components/formInputs/searchInput";
import { useDispatch } from "react-redux";
// import BtnUse from "../../reusableComponents/button/btn";
import Nav from "../../components/nav/nav";
import './home.css'

function Home() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [counter, setCounter] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


//   useCallback is a hook provided by the React library that allows you to memorize a function.
//    It is used to optimize the performance of your React components by ensuring that 
//    functions are not recreated unnecessarily.
  const getProductsList = useCallback(() => {
    axiosInstance
      .get(`/products/search?q=${searchQuery}`)
      .then((res) => {
        let tempArr = res.data.products.map((product,index)=>({
          ...product , isFav: false
        }))
        setProductsList(tempArr);
        console.log(tempArr);
      })
      .catch((err) => console.log(err));
  }, [searchQuery]);
  
  useEffect(() => {
    getProductsList();
  }, [getProductsList]);

  // useEffect(() => {
  //   if (counter === 6) {
  //     navigate(`/products/${counter}`);
  //   }
  // }, [counter, navigate]);
  
  // const incrementCounter = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // };

  const handleFavouritesToggle = (e, product) => {
    if(product.isFav){
      let Obj= productsList.find((Obj)=>Obj.id ===product.id);
      Obj.isFav= false;
      setProductsList([...productsList])
      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: product });
    }else{
      let Obj= productsList.find((Obj)=>Obj.id ===product.id);
      Obj.isFav= true;
      setProductsList([...productsList])

      product.isFav = true;
    dispatch({ type: "ADD_TO_FAVOURITES", payload: product });
  }
  };


  return (
    <div className="home-wrapper">
      <Nav/>
        <SearchInput id="input-search"
         className="form-control w-50 mx-auto py-2 shadow"
          placeholder="Search here for Product" name="myInput"
           type="search"  value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}/>
                 <div className="fav-control">
        <Link className="link-underline-light border border-2 border-secondary p-2 rounded-3 fav-btn" to="/favourites">Go to favourites</Link>
      </div>
      {/* <BtnUse onClick={incrementCounter} content="increment"/>
      {`Counter: ${counter}`} */}
      <div className="container">
        <div className="row g-4">
            <ProductsList productsList={productsList} handleFavouritesToggle={handleFavouritesToggle}/>
        </div>
      </div>
      <div className="fav-control">
        <Link className="link-underline-light border border-2 border-secondary p-2 rounded-3 fav-btn" to="/favourites">Go to favourites</Link>
      </div>
    </div>
  );
}
export default Home;
