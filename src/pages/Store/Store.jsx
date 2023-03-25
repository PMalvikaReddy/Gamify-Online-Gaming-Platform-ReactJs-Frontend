import React, { ReactDOM, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import images from "../../constants/images.js";
import "./Store.css";
import Fall from "../../components/Fall/Fall.jsx";
import { Link, useNavigate } from "react-router-dom";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
const ContractAddress="0x3091da46A06528a46764b32c9AE8c58B3C221B5F"
const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "balances",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "close",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const Web3 = require('web3');
const web3 = new Web3();
console.log(web3.eth)

const contract = new web3.eth.Contract(abi,ContractAddress)

function Trial() {
  console.log("work work");
}

//working button
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }
  async function connect() {
    console.log("haha");
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        console.log("connected metamask");
        // Acccounts now exposed
        fund1();
        return web3;
      } catch (error) {
        console.error(error);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3;
      console.log("Injected web3 detected.");
      return web3;
    }
    // Fallback to localhost; use dev console port by default...
    else {
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:9545");
      const web3 = new Web3(provider);
      console.log("No web3 instance injected, using Local web3.");
      return web3;
    }

    async function fund1() {
      console.log("new fund1");
      let web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      console.log("my metamask:", userAddress);
      const amount = web3.utils.toWei("0.01", "ether"); // Convert 1 Ether to wei
      contract.setProvider(web3.currentProvider);
      const tx = await contract.methods.deposit().send({ from: "0xAdF8af32653ffdF5c5cD4ae760b54598a51536d3", value: amount });
      const Pkey = `2cd034745b76389975c88865effd4caf16ba9773d697eeafd58e63bac004f199`;

const signer = new ethers.Wallet(Pkey);
const sendNotification = async () => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 4, // subset
      identityType: 2, // direct payload
      notification: {
        title: `Gamify Notification`,
        body: ``,
      },
      payload: {
        title: `Payment Successful`,
        body: `Congrats! You have successfully purchased the game, have fun.`,
        cta: "",
        img: "",
      },
      recipients: [
        "eip155:5:0x25cEA86d3309AFA37bEd0412810c5a4d9Ffdb9D7",
        "eip155:5:0xAdF8af32653ffdF5c5cD4ae760b54598a51536d3",
        "eip155:5:0xDfB90E5f7f3f62aC4B15b431F4674354A21eed56",
      ], // recipients addresses
      channel: "eip155:5:0xE49ab5380e332AC3456bB33cf588Db2770536f27", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: ", err);
  }
};
sendNotification();
    }
  }

  return connect();
}

function Trial2() {
  // window.location.href = "./rain.html";
  console.log("here in trial 2 bro");
 
}

function Form2() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return Trial2();
}

const Store = () => {
  const imgs = [
    //use only https image links here
    {
      id: 0,
      value:
        "https://www.pinnacle.com/Cms_Data/Contents/Guest/Media/esports2017/Article-Images/Valorant/2020-What-is-Valorant/Esports-What-is-Valorant-Temp-Hero.jpg",
      title: "Valorant",
      desc: "Valorant is a team-based first-person shooter game developed by Riot Games. Players choose from a roster of unique characters, each with their own set of abilities, and battle in fast-paced matches using strategy and precision to outplay their opponents. The objective is to plant or defuse a bomb, or eliminate the opposing team, in a best-of-24-round game.",
      ratings: "94%",
      price: "0.01ETH",
    },
    {
      id: 1,
      value:
        "https://assets.reedpopcdn.com/cs-go.jpeg/BROK/thumbnail/1600x900/quality/100/cs-go.jpeg",
      title: "Counter Strike: Global Offensive",
      desc: "Counter-Strike: Global Offensive (CS:GO) is a first-person shooter game developed by Valve Corporation. Players join terrorist or counter-terrorist teams and engage in fast-paced, objective-based matches. The game includes a wide range of weapons and game modes, with emphasis on team strategy, communication, and skillful play.",
     
      ratings: "91%",
      price: "0.01ETH",
    },
    {
      id: 2,
      value:
        "https://cdn2.unrealengine.com/fallguys-keyart-evergreen-v1-3840x2160-3506fecb3424.png",
      title: "Fall Guys",
      desc: "Fall Guys: Ultimate Knockout is a multiplayer party game developed by Mediatonic. Players compete in various obstacle courses and mini-games with up to 60 players at a time, with the aim of being the last one standing. The game features colorful graphics and physics-based gameplay that creates hilarious moments and chaotic fun for players.",
      ratings: "89%",
      price: "0.01ETH",
    },
    {
      id: 4,
      value:
        "https://imageio.forbes.com/specials-images/imageserve/5ebd5555a69715000675b96d/GTA-V/960x0.jpg",
      title: "GTA 5",
      desc: "Grand Theft Auto V (GTA 5) is an open-world action-adventure game developed by Rockstar North. Players take on the roles of three protagonists as they complete missions, engage in heists, and explore the vast city of Los Santos. The game features a realistic world, immersive gameplay, and a gripping storyline.",
      ratings: "97%",
      price: "0.01ETH",
    },

    {
      id: 5,
      value:
        "https://i0.wp.com/waytoomany.games/wp-content/uploads/2021/11/Forza-Horizon-5-10.png",
      title: "Forza Horizon",
      desc: "Forza Horizon is an open-world racing game developed by Playground Games. Players participate in a series of races and events across a variety of terrains, from urban streets to dirt roads and more. The game features a wide range of customizable cars and a vibrant world with dynamic weather and time of day cycles.",
      ratings: "86%",
      price: "0.01ETH",
    },
    {
      id: 6,
      value: "https://i.ytimg.com/vi/TZ_G6XiHoUA/maxresdefault.jpg",
      title: "Witcher 3",
      desc: "The Witcher 3 is an action role-playing video game set in a vast open-world filled with captivating characters, intricate storylines, and diverse landscapes. Players assume the role of Geralt of Rivia, a professional monster hunter, as he navigates political turmoil and battles supernatural threats in a visually stunning and immersive environment.",
 
      ratings: "90%",
      price: "0.01ETH",
    },
  ];
  const navigate = useNavigate();

  const [wordData, setWordData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="hello" id="Store">
      <div className="scroll">
        <div className="Details__Image">
          <img
            className="bigImage"
            src={wordData.value}
            height="300"
            width="500"
          />
          <div className="Details">
            <div className="Title">
              <p>{wordData.title}</p>
            </div>
            <div className="description">
              <p>{wordData.desc}</p>
              <p>Ratings: {wordData.ratings}</p>{" "}
              <button type="button" className="custom__button0" onClick={Form}>
                {wordData.price}
              </button>
              <button
                type="button"
                className="custom__button1"
                onClick={() => navigate("/Fall")}
              >
                MintNFT
              </button>
            </div>
          </div>
        </div>
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {imgs.map((data, i) => (
              <div
                className="app__gallery-images_card flex__center"
                ref={scrollRef}
                key={i}
              >
                <img
                  className={wordData.id == i ? "clicked" : ""}
                  src={data.value}
                  onClick={() => handleClick(i)}
                  height="70"
                  width="100"
                />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrows">
            <p className="gallery__arrow_icon1" onClick={() => scroll("left")}>
              <i class="fa-solid fa-angles-left"></i>
            </p>
            <p className="gallery__arrow_icon2" onClick={() => scroll("right")}>
              <i class="fa-solid fa-angles-right"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
