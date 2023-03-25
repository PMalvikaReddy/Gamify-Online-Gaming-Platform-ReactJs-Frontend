import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ViewGames from "../../components/ViewGames/ViewGames";
import images from "../../constants/images";
import "./Main.css";

const Main = () => {
  return (
    <div className="helloo">
      <div className="ViewGames">
        <ViewGames name="Valorant" title="g1" imagee={images.valomain} />
        <ViewGames
          name="Counter Strike: Global Offensive"
          title="g2"
          imagee={images.csgomain}
        />
        <ViewGames name="Fall Guys" title="g3" imagee={images.fallmain} />
        <ViewGames name="GTA V" title="g4" imagee={images.gtamain} />
        <ViewGames name="Forza Horizon" title="g5" imagee={images.forzamain} />
        <ViewGames name="The Witcher 3" title="g6" imagee={images.witchmain} />
      </div>
      {/* <Sidebar /> */}
    </div>
  );
};

export default Main;
