import React from 'react'
import images from '../../constants/images';
import SingleNft from '../SingleNft/SingleNft';
import './ViewNft2.css'

const ViewNft2 = () => {
  return (
    <div className="game_nft" id="ViewNft2">
 <div className='game_info'>
  <br></br>
<h1 className='game_title'> Title 2</h1>
<p className='p__opensans' style={{margin:'2rem 0'}}>From legendary game creator Hideo Kojima comes a genre-defying experience, now 
expanded in this definitive DIRECTOR’S CUT. As Sam Bridges, your mission is to deliver hope to humanity by connecting the last survivors of a decimated America.
 Can you reunite the shattered world, one step at a time?a</p>

 <div className='app__wrapper_img'>
    <div className='nft_name' >Nft u won</div>
<img src={"https://geco.netlify.app/assets/img/blog/blog_thumb02.jpg"} alt='headerImg'/>
 </div>
 <div className='review'>
    <p>Your Review:</p>
 </div><br></br>
 <div className='buy_nft'>
    <p>BUY MORE NFT'S:</p>
    <div className='nft_display_container'>
    <SingleNft title="titlename" value="https://geco.netlify.app/assets/img/blog/blog_thumb02.jpg" price= "0.1eth" info="last sale at 0.15eth" />
    <SingleNft title="titlename2" value="https://geco.netlify.app/assets/img/images/released_game_img03.jpg" price= "0.125eth" info="last sale at 0.18eth"/>
    <SingleNft title="titlename3" value="https://geco.netlify.app/assets/img/blog/blog_thumb02.jpg" price= "0.21eth" info="last sale at 0.15eth"/>
    <SingleNft title="title4" value="https://geco.netlify.app/assets/img/product/latest_games_thumb03.jpg" price= "0.185eth" info="last sale at 0.25eth"/>
    </div>
 </div>
  </div>
    </div>
  )
}

export default ViewNft2
