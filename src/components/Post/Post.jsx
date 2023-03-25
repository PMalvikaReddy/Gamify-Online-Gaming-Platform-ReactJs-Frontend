import React from "react";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import ViewNft1 from "../ViewNft1/ViewNft1";
import ViewNft2 from "../ViewNft2/ViewNft2";
import "./Post.css";

const Post = ({ title, desc, value, ViewNft }) => {
  return (
    <div className="post">
      <form className="gameForm">
        <img src={value} width="150px" height="200px" alt="game image" />
        <div className="gameHeading-content">
          <div className="postInfo">
            <span className="postTitle">{title}</span>
            <hr />
          </div>
          <p className="postDesc">{desc}</p>
        </div>
        <div>
          <button type="button" className="rating__button" style={{textDecoration:'none',color:"white"}}>
            94% <i className=" ratingHeart fa-solid fa-heart"></i>
          </button>
          <button type="button" className="nft__button" style={{textDecoration:'none',color:"white"}}>
            <Link to={ViewNft} style={{textDecoration:'none',color:"white"}}>View Nft's</Link>{" "}
          </button>

          {/* <p className='nft_info_link' ><Link to ='/ViewNft' >View Nft's</Link></p> */}
        </div>
      </form>
    </div>
  );
};

export default Post;
