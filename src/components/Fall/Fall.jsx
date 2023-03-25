import React from "react";
import "./Fall.css";
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

let kkk = true;
let nftNo = 0, url="";
let sendImage="";


let pushImages = ["https://gateway.pinata.cloud/ipfs/QmQKrqBKLbWqtLYSSfdmpEPwjnTtPMBJBYND9CiLBSkWKD?_gl=1*1pulrcs*_ga*MjAyYWIyYWUtMmRmYi00M2RiLWFlMjctYzNkOTgyYmZjYzIy*_ga_5RMPXG14TE*MTY3OTU4Mjk4Ny4xNC4wLjE2Nzk1ODI5OTkuNDguMC4w",
"https://gateway.pinata.cloud/ipfs/Qmdo3gXuJ5vTf2iEJSsjQKX9ioYPHfmKYWdws7s1VDNMeA?_gl=1*1pulrcs*_ga*MjAyYWIyYWUtMmRmYi00M2RiLWFlMjctYzNkOTgyYmZjYzIy*_ga_5RMPXG14TE*MTY3OTU4Mjk4Ny4xNC4wLjE2Nzk1ODI5OTkuNDguMC4w",

"https://gateway.pinata.cloud/ipfs/Qmdm1QSWKgbYmV9A11CUaybRmmJGwRMULQULJ78pq99v1Y?_gl=1*1pulrcs*_ga*MjAyYWIyYWUtMmRmYi00M2RiLWFlMjctYzNkOTgyYmZjYzIy*_ga_5RMPXG14TE*MTY3OTU4Mjk4Ny4xNC4wLjE2Nzk1ODI5OTkuNDguMC4w"
,"https://gateway.pinata.cloud/ipfs/Qmf8rVFUXwUeBRMfffhuo2WYaS7XJG282PdTuhnT95bn55?_gl=1*fwqyp3*_ga*MjAyYWIyYWUtMmRmYi00M2RiLWFlMjctYzNkOTgyYmZjYzIy*_ga_5RMPXG14TE*MTY3OTU4Mjk4Ny4xNC4wLjE2Nzk1ODI5OTkuNDguMC4w",
"https://gateway.pinata.cloud/ipfs/QmapU3Qn5hqhuPx2qfPz8wPE5NvXyjVsJhojdhEKJ6zBSY?_gl=1*fwqyp3*_ga*MjAyYWIyYWUtMmRmYi00M2RiLWFlMjctYzNkOTgyYmZjYzIy*_ga_5RMPXG14TE*MTY3OTU4Mjk4Ny4xNC4wLjE2Nzk1ODI5OTkuNDguMC4w",
]
async function dbread(){
   return oi
      const response = await fetch('http://127.0.0.1:5000/nftmint');
      const json = await response.json();
      const newjson = JSON.stringify(json);

      const newj = await JSON.parse(newjson);

      console.log("nft:",newj.nft);
      console.log("url:",newj.mantle_link);
      nftNo = newj.nft;
      url = newj.mantle_link;
      let col = 0;
if (nftNo == "n4") { 
  col = 0;
} else if (nftNo == "n5") {
  col = 1;
} else if (nftNo == "n3") {
  col = 2;
} else if (nftNo == "n2") {
  col = 3;
} else {
  col = 4;
}
      sendImage = pushImages[col];
      // console.log("nftNo",nftNo)
      console.log("new url",url)
      console.log("inside dbread",)
      return newj;
    }

const Fall = () => {
  const image = new Image();

  const explorer = function (){
      console.log("the mantle url",url);
      console.log("nftNo", nftNo);

      const goHere = url.slice(29);
      
      console.log("this is that sendImage",sendImage);

      const Pkey = `0xbfda15ce3b8a6405882e7571d9953e9435d45d713eff2fee080b9a4873094d05`;
  const signer = new ethers.Wallet(Pkey);
  const sendNotification = async (sendImage,url) => {
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 4, // subset
        identityType: 2, // direct payload
        notification: {
          title: `Push notification - NFT Minted`,
          body: `Check it out`,
        },
        payload: {
          title: `Congrats you have minted a new NFT!`,
          body: url,
          cta: "",
          img: sendImage,
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
  sendNotification(sendImage,url);
      
  
  
  
  window.open(goHere,'_blank')
  }

  const fallrain = async function () {


    // const check ={};
    if(kkk){
      // delay(function(){console.log("heyheyhey")},20000)
      let check=await dbread();
      console.log("check", check)
      kkk = false;
    }
    let  nft= nftNo;
    
// n4 - panda n5 - phoenix  n3 - glock  n2 - mask  n1 - space girl

let col = 0;
if (nft == "n4") { 
  image.src = new1;
  col = 0;
} else if (nft == "n5") {
  image.src = new2;
  col = 1;
} else if (nft == "n3") {
  image.src = new3;
  col = 2;
} else if (nft == "n2") {
  image.src = new4;
  col = 3;
} else {
  image.src = new5;
  col = 4;
}

const color = ["white", "red", "white", "blue", "gold"];


    image.addEventListener("load", function () {
      const canvas = document.getElementById("canvas1");
      const ctx = canvas.getContext("2d");
      canvas.width = 300;
      canvas.height = 533;

      let particlesArray = [];
      const numberOfParticles = 5000;
      const detail = 1;

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let grid = [];
      for (let y = 0; y < canvas.height; y += detail) {
        let row = [];
        for (let x = 0; x < canvas.width; x += detail) {
          const red = pixels.data[y * 4 * pixels.width + x * 4];
          const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
          const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
          const color = "rgb(" + red + "," + green + "," + blue + ")";
          const brightness = calculateBrightness(red, green, blue) / 100;

          row.push(brightness);
        }
        grid.push(row);
      }

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = 0;
          //this.prevX = this.x;
          this.speed = 0;
          this.velocity = Math.random() * 0.7;
          this.size = Math.random() * 2 + 0.1;
        }
        update() {
          this.speed =
            grid[Math.floor(this.y / detail)][Math.floor(this.x / detail)];
          let movement = 2.5 - this.speed + this.velocity;
          this.y += movement;
          if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
          }
          //console.log(this.x += movement)
        }
        draw() {
          ctx.beginPath();
          ctx.fillStyle = color[col];
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      function init() {
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }
      }
      init();

      function animate() {
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = "rgb(0, 0,0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          ctx.globalAlpha = particlesArray[i].speed * 0.3;
          particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
      }
      animate();

      function calculateBrightness(red, green, blue) {
        return Math.sqrt(
          red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
        );
      }
    });
  };
  
  return (
    <div>
      <canvas id="canvas1"></canvas>
      <button onClick={fallrain} className="reveal"> Reveal NFT</button>
      <button onClick={explorer} className="block"> View NFT on Block explorer</button>

    </div>
  );
};

export default Fall;
