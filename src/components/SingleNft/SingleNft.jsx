import React from 'react'
import images from '../../constants/images'
import './SingleNft.css'
import Loader from '../Loader'
const SingleNft = ({value,title,price,info}) => {
  console.log("from single:",value)
  return (
    <div className='nft_component'>
        <div className='nft_container'>
            <img className='nft_container_img' src={value} alt="image"/>
            <p className='nft-container_title'>{title}</p>
            <p className='nft-container_price'>{price}</p>
           
        </div>
      
    </div>
  )
}

export default SingleNft
