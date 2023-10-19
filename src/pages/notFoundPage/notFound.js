import React from 'react'
import notImg from './Q2BAOd2.png'
import { Link } from 'react-router-dom'
import './notFound.css'
import ImgProduct from '../../reusableComponents/images/img'
import BtnUse from '../../reusableComponents/button/btn'

export default function NotFound() {
  return (
    <div className='notFound-wrapper'>
      <ImgProduct src={notImg} className='img-wrapper' alt='page not found'/>
        <div className='phrase'>
            <p className=''>OOps...Page Not Found!</p>
            <div className='text-center'>
              <Link to="/">
                  <BtnUse className='btn btn-dark' content="Go Back TO Home Page"/>
              </Link>
            </div>
            
        </div>
    </div>
  )
}
