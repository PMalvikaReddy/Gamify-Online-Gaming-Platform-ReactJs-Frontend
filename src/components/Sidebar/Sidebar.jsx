import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='sidebarItem'>
      <span className="sidebarTitle">CATEGORIS</span>
      <ul className='sidebarCategorisList'>
          <li className='sidebarCategorisListItem'>Rogue-Like</li>
          <li className='sidebarCategorisListItem'>Adventure</li>
          <li className='sidebarCategorisListItem'>Survival</li>
          <li className='sidebarCategorisListItem'>Sci-Fi & Cyberpunk</li>
          <li className='sidebarCategorisListItem'>Role-Playing</li>
          <li className='sidebarCategorisListItem'>Sandbox</li>
      </ul>
    </div>
    <div className='sidebarItem'>
      <span className="sidebarTitle">FOLLOW US</span>
      <div className='sidebar-icons'>
          <li className='icons'><i class='fab fa-twitter-square'></i></li>
          <li className='icons'><i class='fab fa-facebook-square'></i></li>
          <li className='icons'><i class='fab fa-instagram-square'></i></li>
      </div>
      </div>
  </div>
  )
}

export default Sidebar
