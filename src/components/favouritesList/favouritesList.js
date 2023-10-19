import React from 'react'
import { Link } from 'react-router-dom'
import BtnUse from '../../reusableComponents/button/btn'
import ImgProduct from '../../reusableComponents/images/img'
import { AiFillDelete} from "react-icons/ai"

const FavouritesList = ({ favouritesList, handleFavouritesToggle}) => {

    return favouritesList.length ?(
        favouritesList.map((fav, index) => (
            <div
              key={fav.id}
              className=" fav-wrapper col-md-4 col-sm-6 position-relative"
            >
              <Link
                className="link-body-emphasis link-offset-2 link-underline-opacity-0"
                to={`/products/${fav.id}`}
              >
                <div className=" py-4 px-3 text-center border border-3 border-secondary shadow fw-bold">
                  <div className="handle-size text-center d-flex justify-content-center align-content-center">
                    <ImgProduct
                      src={fav.images[0]}
                      alt="fav preview"
                      className="border border-2 border-black rounded-circle w-100"
                    />
                  </div>
                  <br />
                  {fav.title}
                  <br />
                  {fav.brand}
                  <br />
                  {fav.category}
                </div>
              </Link>
              <BtnUse
                className="custom-btn-favourite"
                onClick={(e) => handleFavouritesToggle(e, fav)}
                content={
                  <div>
                    <AiFillDelete
                      className='custom-icon'
                      color={ "#d00" }
                      size={40} />
                  </div>
                }
              />
            </div>
          ))
          ) : (
              <div className='d-flex flex-column justify-content-center align-content-center  bg-secondary-subtle h-100 shadow'>
          <p className='fw-bolder fs-3 mx-5 mt-5 px-5 pt-5'>There is no favourites till now</p>
            
            <Link
                className="link-body-emphasis link-offset-2 link-underline-opacity-0 mx-5 mb-5"
                to="/"
              ><BtnUse className='btn btn-secondary w-25 mx-5 mb-5' content="Go Back To Home Page"/></Link>
          </div>
        )
}

export default FavouritesList