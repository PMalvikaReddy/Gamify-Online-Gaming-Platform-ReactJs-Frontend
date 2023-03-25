import React ,{useState}from 'react';
import YourGame from '../YourGame/YourGame';
import images from '../../constants/images';
import MyModal from './ShowModal';
import './Community.css'
// import images from "../../constants/images.js";


const Community = () => {
  const [showModal,setShowModal]=useState(false);

  const closeModal=()=>setShowModal(false);
  return (
    <div className='Games' id='COMMUNITY'>
        {/* <button type="button" className="Gamebutton1">
     YOUR GAMES
   </button> */}
    
    <div className='yourGames' id='community'>
    <YourGame title='Valorant' imagee={images.valo3}  />
   
      <YourGame title='CSGO' imagee={images.csgo3} />
      
      <YourGame title='Fall Guys' imagee={images.fall3} />
     
      <YourGame title='GTA V' imagee={images.gta3} />
     
      <YourGame title='Forza Horizon' imagee={images.forza3} />

      <YourGame title='Witcher 3' imagee={images.witch3}/>

      </div>


    </div>
  )
}

export default Community
