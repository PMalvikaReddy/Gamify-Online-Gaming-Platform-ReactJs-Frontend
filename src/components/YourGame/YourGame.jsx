import React from 'react';
import images from '../../constants/images';
import './YourGame.css'

const YourGames = ({title,imagee}) => {
  return (
      <div className="yourGame">
 
  <img src={imagee} alt="game"  />

  <div className='gameTitle'>
    <h3>{title}</h3>
 
  <button type="button" className="CommunityChat"><a href="https://staging.push.org/#/chat" target="_blank" style={{textDecoration:'none',color:"white"}}>
     Go To Community Chat</a>
   </button>
   </div>
</div>
  )
}

export default YourGames
