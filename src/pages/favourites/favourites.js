import React from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import FavouritesList from '../../components/favouritesList/favouritesList'
import Nav from '../../components/nav/nav'
import './favourites.css'

export default function Favourites() {
    const favouritesList = useSelector((state)=> state.favourite)
    
    const dispatch = useDispatch();
    const handleFavouritesToggle = (e, product) => {
        dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: product });
      };
      return (
        <div className="home-wrapper">
          <Nav/>
          <div className="container">
            <div className="row g-4 mt-5">
                <FavouritesList favouritesList={favouritesList} handleFavouritesToggle={handleFavouritesToggle}/>
            </div>
          </div>
        </div>
      );
}
