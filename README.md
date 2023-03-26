# Gamify-Scaling Ethereum
## Introduction

You may have heard of various centralised web2 gaming platforms where the game developer has complete control over the game's economy, rules, and ownership of in-game assets. But,what if it wasn't so. What do you think about a decentralised game distribution platform that leverage blockchain technology where players have all control over their in-game assets and can own and trade them outside of the game. 

Hence, presenting Gamify, a decentralised digital game distribution platform which offers a seamless experience for gamers to discover, purchase and play their favourite games. Enter the world of Web3 gaming, where ownership, control, and earning potential are no longer just in-game achievements but a reality for every player.

The Gamify platform also integrates NFTs as tradeable in-game items and assets that can be minted (collected).These NFTs provide a new level of ownership, control, and monetization for gamers in Web3 games. Gamers can thus use these NFTs to to trade, sell, stake their assets in a decentralized marketplace or also trade them  in the game community which is implemented using the push chat group.

## Technologies
- ### Polybase -
    The project uses Polybase for its database where it stores and renders all the images, text etc. related to the games on the platform. This technology helps replace the centralised databases by providing enhanced security, privacy, and transparency. It performs at a really fast speed, thereby allowing us to deliver a seamless experience to the users.
    
- ### Scroll -
    The most important aspect of the project is purchasing games. This is done by leveraging a contract deployed on SCROLL's Zk-EVM. This         contract runs on L-2 and hence can help when the project needs to be scaled, i.e when more users are onboarded and there is a need to         satisfy the requests of each user.
     

- ### Mantle -
    The NFTs are minted using a contract deployed on MANTLE. These NFTs are specific for a game. They are available in different rarities ("Common", "Rare", "Super Rare") and act as in game items or collectibles. For Example:- Gun skins, characters/avatars, swords etc.
    Once a game is bought by the user, they can obtain new collectibles by minting NFTs using the MANTLE contract.
    

- ### PUSH Protocol -
  Every gaming platform needs a space for discussion that helps build a sense of community, provide support, feedback, learning opportunities, and increase   player engagement and retention. Hence, we have introduced PUSH chat into our project, where each user can join the game community which is a PUSH group to       discuss, trade and invite each other to play together in any game.
  Notifications is also a crucical component of this gamimg platform. They serve to keep players engaged, informed, and up-to-date on important events.Thus,       the project uses PUSH notifications to help notify the user when a new NFT is minted and to also show the transactions to confirm their ownership.
