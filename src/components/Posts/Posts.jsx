import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  return (
    <div>
      <div className="library__Title">
        <p>GAMES YOU OWN: </p>
      </div>
      <Post
        title="Valorant"
        desc="Valorant is a team-based first-person shooter game developed by Riot Games. Players choose from a roster of unique characters, each with their own set of abilities, and battle in fast-paced matches using strategy and precision to outplay their opponents. The objective is to plant or defuse a bomb, or eliminate the opposing team, in a best-of-24-round game."
        value="https://cdn.esportsdriven.com/media/guides/images/Valorants-sunny-new-map-Breeze-is-out-now.main.jpg"
        ViewNft="/ViewNft1"
      />
      <Post
        title="Fall Guys"
        desc="Fall Guys: Ultimate Knockout is a multiplayer party game developed by Mediatonic. Players compete in various obstacle courses and mini-games with up to 60 players at a time, with the aim of being the last one standing. The game features colorful graphics and physics-based gameplay that creates hilarious moments and chaotic fun for players."
        value="https://cdn2.unrealengine.com/gameplay-4k-00-03-38-59-still007-3840x2160-256b94aa7274.png"
        ViewNft="/ViewNft2"
      />
      {/* <Post title='Title3' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Unde sunt est dolore, aspernatur aut, atque repellat temporibus
       voluptas at veritatis, optio quos deserunt. Vitae deleniti
       consequatur delectus impedit provident. Quisquam. atque repellat temporibus
       consequatur delectus impedit provident. Quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
       consequatur delectus impedit provident. Quisquam.'value="https://geco.netlify.app/assets/img/product/latest_games_thumb02.jpg"/>
       <Post title='Title4' desc=' ipsum dolor sit amet consectetur adipisicing elit.
      Unde sunt est dolore, aspernatur aut, atque repellat temporibus
       voluptas at veritatis, optio quos deserunt. Vitae deleniti
       consequatur delectus impedit provident. Quisquam. atque repellat temporibus
       consequatur delectus impedit provident. Quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
       consequatur delectus impedit provident. Quisquam.'value="https://geco.netlify.app/assets/img/product/latest_games_thumb03.jpg"/>
       <Post title='Title5' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Unde sunt est dolore, aspernatur aut, atque repellat temporibus
       voluptas at veritatis, optio quos deserunt. Vitae deleniti
       consequatur delectus impedit provident. Quisquam. atque repellat temporibus
       consequatur delectus impedit provident. Quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
       consequatur delectus impedit provident. Quisquam.' value="https://geco.netlify.app/assets/img/images/released_game_img03.jpg"/> */}
    </div>
  );
};

export default Posts;
