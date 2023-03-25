import React from "react";
import images from "../../constants/images";
import "./ViewGames.css";
import data from "../../constants/poly.js";
import { Polybase } from "@polybase/client";
const db = new Polybase({ defaultNamespace: "game-webstore-new" });

const getData = async (title) => {
  const datas = await db.collection("gamesNew").where("id", "==", title).get();
  const ele = await datas.data[0].data;
  console.log(datas.data[0].data.name);
  // console.log(ele);

  const bruh = await ele;
  // console.log(bruh.coverimg);
  return bruh;
};

const ViewGames = ({ name, title, imagee }) => {
  const datas = await db.collection("gamesNew").where("id", "==", xx).get();
  console.log(datas.data[0].data.name);
  for (let i = 0; i < 99999; i++);
  const ele = getData(title);
  console.log(ele);
  console.log(data);
  return (
    <div className="ViewGames">
      <img src={imagee} alt="game" />

      <div className="gameTitle">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ViewGames;
