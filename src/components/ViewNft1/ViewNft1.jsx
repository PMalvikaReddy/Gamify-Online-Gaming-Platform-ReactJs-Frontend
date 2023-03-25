import {React,useState,useEffect} from "react";
import images from "../../constants/images";
import SingleNft from "../SingleNft/SingleNft";
import "./ViewNft1.css";
import Loader from "../Loader";
import { Link, useNavigate } from "react-router-dom";
//import fs from "fs";
import MintedNFT from "../MintedNFT";
// let first="",second="";

let meow="https://gateway.pinata.cloud/ipfs/QmUpCJ6Bs9bPA4TGuN3CcgUgdLdrCsnvPYAiUA33sdEQ4h?_gl=1*u7fi97*_ga*MjAyYWIyYWUtMmRmYi00M2RiLWFlMjctYzNkOTgyYmZjYzIy*_ga_5RMPXG14TE*MTY3OTU4Mjk4Ny4xNC4wLjE2Nzk1ODI5OTkuNDguMC4w",meow1="https://gateway.pinata.cloud/ipfs/QmUpCJ6Bs9bPA4TGuN3CcgUgdLdrCsnvPYAiUA33sdEQ4h?_gl=1*u7fi97*_ga*MjAyYWIyYWUtMmRmYi00M2RiLWFlMjctYzNkOTgyYmZjYzIy*_ga_5RMPXG14TE*MTY3OTU4Mjk4Ny4xNC4wLjE2Nzk1ODI5OTkuNDguMC4w";
let title1="Glock",value1="",price1="",title2="Space Panda",value2="",price2="";
let meow3="https://gateway.pinata.cloud/ipfs/QmUpCJ6Bs9bPA4TGuN3CcgUgdLdrCsnvPYAiUA33sdEQ4h?_gl=1*u7fi97*_ga*MjAyYWIyYWUtMmRmYi00M2RiLWFlMjctYzNkOTgyYmZjYzIy*_ga_5RMPXG14TE*MTY3OTU4Mjk4Ny4xNC4wLjE2Nzk1ODI5OTkuNDguMC4w",meow4="https://gateway.pinata.cloud/ipfs/QmUpCJ6Bs9bPA4TGuN3CcgUgdLdrCsnvPYAiUA33sdEQ4h?_gl=1*u7fi97*_ga*MjAyYWIyYWUtMmRmYi00M2RiLWFlMjctYzNkOTgyYmZjYzIy*_ga_5RMPXG14TE*MTY3OTU4Mjk4Ny4xNC4wLjE2Nzk1ODI5OTkuNDguMC4w",meow5="https://gateway.pinata.cloud/ipfs/QmUpCJ6Bs9bPA4TGuN3CcgUgdLdrCsnvPYAiUA33sdEQ4h?_gl=1*u7fi97*_ga*MjAyYWIyYWUtMmRmYi00M2RiLWFlMjctYzNkOTgyYmZjYzIy*_ga_5RMPXG14TE*MTY3OTU4Mjk4Ny4xNC4wLjE2Nzk1ODI5OTkuNDguMC4w";
let title3="No NFT",title4="No NFT",title5="Phonix";
let til1="No NFT",til2="No NFT",til3="No NFT",til4="No NFT",til5="No NFT";
let r1="",r2="",r3="",r4="",r5="";
async function expr(){
  const response = await fetch('http://127.0.0.1:5000/express');
  const json = await response.json()
  const newjson = JSON.stringify(json);
  const newj = await JSON.parse(newjson);
  // first = newj.documents[0].nft0[0];
 
  // fs.writeFile('new_file.txt',newj.documents[0].nft0[0],function(err){
  //   if(err)throw err;
  //   console.log('Saved');
  // })
  console.log("value1:",value1);
}


const ViewNft1 = () => {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(true);
  const[imgLink,setImgLink] = useState("");
  const[imgLink1,setImgLink1] = useState("");
  const[imgLink2,setImgLink2] = useState("");
  const[imgLink3,setImgLink3] = useState("");
  const[imgLink4,setImgLink4] = useState("");

  const[til11,settil11] = useState("");
  const[til12,settil12] = useState("");
  const[til13,settil13] = useState("");
  const[til14,settil14] = useState("");
  const[til15,settil15] = useState("");

  const[rare1,setrare1] = useState("");
  const[rare2,setrare2] = useState("");
  const[rare3,setrare3] = useState("");
  const[rare4,setrare4] = useState("");
  const[rare5,setrare5] = useState("");
  useEffect(()=>{
   
  },[imgLink,imgLink1,imgLink2,imgLink3,imgLink4])
  useEffect(()=>{
   
  },[til15,til11,til12,til13,til14])
  useEffect(()=>{
   
  },[rare1,rare2,rare3,rare4,rare5])
//   async function expr(){
//     const response = await fetch('http://127.0.0.1:5000/express');
//     const json = await response.json()
//     const newjson = JSON.stringify(json);
//     const newj = await JSON.parse(newjson);
//     // first = newj.documents[0].nft0[0];
//     const value12 = newj.documents[0].nft0[0];
//     // console.log("value12:",value12);
  
//     return value12;
//   }
// expr();
let bool1 = false,bool2=false,bool3=false,bool4=false,bool5=false;
 const val123 =async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
  const json = await response.json()
  const newjson = JSON.stringify(json);
  const newj = await JSON.parse(newjson);
  const value12 = newj.documents[0].nft0[0];
  console.log(value12)
  return(value12)
}

const val456 = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
const json = await response.json()
const newjson = JSON.stringify(json);
const newj = await JSON.parse(newjson);
const value12 = newj.documents[0].nft1[0];
console.log(value12)
return(value12)
}
const val2 = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
const json = await response.json()
const newjson = JSON.stringify(json);
const newj = await JSON.parse(newjson);
const value12 = newj.documents[0].nft2[0];
console.log(value12)
return(value12)
}
const val3 = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
const json = await response.json()
const newjson = JSON.stringify(json);
const newj = await JSON.parse(newjson);
const value12 = newj.documents[0].nft3[0];
bool4=true;
console.log(value12)
return(value12)
}
const val4 = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
const json = await response.json()
const newjson = JSON.stringify(json);
const newj = await JSON.parse(newjson);
const value12 = newj.documents[0].nft4[0];
console.log(value12)
return(value12)
}

  //const val1 = expr();
  // const k = val123()
  // console.log("something",k)
  
  const bruh= async () => {
   // setLoading(true);
    meow = await val123();
    console.log("meow",typeof(meow));
   // setLoading(false);
    setImgLink(meow);
    setLoading(false)
  }
  bruh()

  const bruh1= async () => {
    // setLoading(true);
     meow1 = await val456();
     console.log("meow1",typeof(meow1));
    // setLoading(false);
     setImgLink1(meow1);
     setLoading(false)
   }
   bruh1();
   const bruh2= async () => {
    // setLoading(true);
     meow3 = await val2();
     console.log("meow2",typeof(meow3));
    // setLoading(false);
     setImgLink2(meow3);
     setLoading(false)
   }
   bruh2();
   const bruh3= async () => {
    // setLoading(true);
     meow4 = await val3();
     console.log("meow3",typeof(meow4));
    // setLoading(false);
     setImgLink3(meow4);
     setLoading(false)
   }
   bruh3();
   const bruh4= async () => {
    // setLoading(true);
     meow5 = await val4();
     console.log("meow4",typeof(meow5));
    // setLoading(false);
     setImgLink4(meow5);
     setLoading(false)
   }
   bruh4();

   const til5f = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
   const json = await response.json()
   const newjson = JSON.stringify(json);
   const newj = await JSON.parse(newjson);
   const value12 = newj.documents[0].nft4[1];
   console.log("name",value12)
   return(value12)
   }
   const rem5= async () => {
    // setLoading(true);
     til5 = await til5f();
     console.log("til5",typeof(til5));
     console.log("*******************************************************************************")
    // setLoading(false);
     settil15(til5);
     setLoading(false)
   }
   rem5();
   const til1f = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
   const json = await response.json()
   const newjson = JSON.stringify(json);
   const newj = await JSON.parse(newjson);
   const value12 = newj.documents[0].nft0[1];
   console.log("name",value12)
   return(value12)
   }
   const rem1= async () => {
    // setLoading(true);
     til1 = await til1f();
     console.log("til1",typeof(til1));
     console.log("*******************************************************************************")
    // setLoading(false);
     settil11(til1);
     setLoading(false)
   }
   rem1();
   const til2f = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
   const json = await response.json()
   const newjson = JSON.stringify(json);
   const newj = await JSON.parse(newjson);
   const value12 = newj.documents[0].nft1[1];
   console.log("name",value12)
   return(value12)
   }
   const rem2= async () => {
    // setLoading(true);
     til2 = await til2f();
     console.log("til2",typeof(til2));
     console.log("*******************************************************************************")
    // setLoading(false);
     settil12(til2);
     setLoading(false)
   }
   rem2();
   const til3f = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
   const json = await response.json()
   const newjson = JSON.stringify(json);
   const newj = await JSON.parse(newjson);
   const value12 = newj.documents[0].nft2[1];
   console.log("name",value12)
   return(value12)
   }
   const rem3= async () => {
    // setLoading(true);
     til3 = await til3f();
     console.log("til5",typeof(til3));
     console.log("*******************************************************************************")
    // setLoading(false);
     settil13(til3);
     setLoading(false)
   }
   rem3();
   const til4f = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
   const json = await response.json()
   const newjson = JSON.stringify(json);
   const newj = await JSON.parse(newjson);
   const value12 = newj.documents[0].nft3[1];
   console.log("name",value12)
   return(value12)
   }
   const rem4= async () => {
    // setLoading(true);
     til4 = await til4f();
     console.log("til4",typeof(til4));
     console.log("*******************************************************************************")
    // setLoading(false);
     settil14(til4);
     setLoading(false)
   }
   rem4();









   const rare1f = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
   const json = await response.json()
   const newjson = JSON.stringify(json);
   const newj = await JSON.parse(newjson);
   const value12 = newj.documents[0].nft0[2];
   console.log("name",value12)
   return(value12)
   }
   const rar1= async () => {
    // setLoading(true);
     r1 = await rare1f();
     console.log("r1",typeof(r1));
     console.log("*******************************************************************************")
    // setLoading(false);
     setrare1(r1);
     setLoading(false)
   }
   rar1();
  
   const rare2f = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
   const json = await response.json()
   const newjson = JSON.stringify(json);
   const newj = await JSON.parse(newjson);
   const value12 = newj.documents[0].nft1[2];
   console.log("name",value12)
   return(value12)
   }
   const rar2= async () => {
    // setLoading(true);
     r2 = await rare2f();
     console.log("r1",typeof(r2));
     console.log("*******************************************************************************")
    // setLoading(false);
     setrare2(r2);
     setLoading(false)
   }
   rar2();

   const rare3f = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
   const json = await response.json()
   const newjson = JSON.stringify(json);
   const newj = await JSON.parse(newjson);
   const value12 = newj.documents[0].nft2[2];
   console.log("name",value12)
   return(value12)
   }
   const rar3= async () => {
    // setLoading(true);
     r3 = await rare3f();
     console.log("r1",typeof(r3));
     console.log("*******************************************************************************")
    // setLoading(false);
     setrare3(r3);
     setLoading(false)
   }
   rar3();
   const rare4f = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
   const json = await response.json()
   const newjson = JSON.stringify(json);
   const newj = await JSON.parse(newjson);
   const value12 = newj.documents[0].nft3[2];
   console.log("name",value12)
   return(value12)
   }
   const rar4= async () => {
    // setLoading(true);
     r4 = await rare4f();
     console.log("r1",typeof(r4));
     console.log("*******************************************************************************")
    // setLoading(false);
     setrare4(r4);
     setLoading(false)
   }
   rar4();

   const rare5f = async ()=>{ const response = await fetch('http://127.0.0.1:5000/express');
   const json = await response.json()
   const newjson = JSON.stringify(json);
   const newj = await JSON.parse(newjson);
   const value12 = newj.documents[0].nft4[2];
   console.log("name",value12)
   return(value12)
   }
   const rar5= async () => {
    // setLoading(true);
     r5 = await rare5f();
     console.log("r1",typeof(r5));
     console.log("*******************************************************************************")
    // setLoading(false);
     setrare5(r5);
     setLoading(false)
   }
   rar5();







  return (
    <div className="game_nft" id="ViewNft1">
      <div className="game_info">
        <br></br>
        <h1 className="game_title">Valorant</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Valorant is a team-based first-person shooter game developed by Riot
          Games. Players choose from a roster of unique characters, each with
          their own set of abilities, and battle in fast-paced matches using
          strategy and precision to outplay their opponents. The objective is to
          plant or defuse a bomb, or eliminate the opposing team, in a
          best-of-24-round game.<br/>
          Here are the NFTs you own. To get more NFTs or unique in-game items, click on the Mint NFT button above. 
        </p>

        <div className="app__wrapper_img">
          {/* <div className="nft_name">Nft u won</div> */}
          <img src={images.game2} alt="headerImg" />
        </div>
        <div className="review">
          <p>Your Review:</p>
        </div>
        <br></br>
        <div className="buy_nft">
          <p>OWNED NFT'S:</p>
          <div className="nft_display_container">
          
          
           
            <SingleNft
              title={til1}
              value={meow}
              price={r1}
              info="last sale at 0.15eth"
            />
          
          
            <SingleNft
              title={til2}
              value={meow1}
              price={r2}
              // info="last sale at 0.18eth"
            />
           
           <SingleNft
              title={til3}
              value={meow3}
              price={r3}
              // info="last sale at 0.18eth"
            />

<SingleNft
              title={til4}
              value={meow4}
              price={r4}
              // info="last sale at 0.18eth"
            />
            <SingleNft
              title={til5}
              value={meow5}
              price={r5}
              // info="last sale at 0.18eth"
            />
            <button
                type="button"
                className="custom__button_new"
                onClick={() => {
                  navigate("/Fall");
                  
                }}
              >
                MintNFT
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNft1;
