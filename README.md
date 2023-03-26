# Gamify-Scaling Ethereum
## Introduction

You may have heard of various centralised web2 gaming platforms where the game developer has complete control over the game's economy, rules, and ownership of in-game assets. But,what if it wasn't so. What do you think about a decentralised game distribution platform that leverage blockchain technology where players have all control over their in-game assets and can own and trade them outside of the game. 

Hence, presenting Gamify, a decentralised digital game distribution platform which offers a seamless experience for gamers to discover, purchase and play their favourite games. Enter the world of Web3 gaming, where ownership, control, and earning potential are no longer just in-game achievements but a reality for every player.

The Gamify platform also integrates NFTs as tradeable in-game items and assets that can be minted (collected).These NFTs provide a new level of ownership, control, and monetization for gamers in Web3 games. Gamers can thus use these NFTs to to trade, sell, stake their assets in a decentralized marketplace or also trade them  in the game community which is implemented using the push chat group.

[The full demo of the project](https://www.youtube.com/watch?v=wbLEz9JIEKQ&t=9s)

Here are some of the Screen Shots from our website

1. Games Page

![q](https://user-images.githubusercontent.com/108075033/227780618-1d4de80b-8c13-4292-b467-e94374c1e5a5.png)


2. Game Purchase Page

![2](https://user-images.githubusercontent.com/108075033/227780465-1f14d4e3-d7de-45ac-9a9d-7e2daf1288b9.png)

5. Minted NFT.

![3](https://user-images.githubusercontent.com/108075033/227780495-e3ff7466-81fc-488a-b3f8-a7e1460904c2.png)

4. All the NFTs that are minted.

![allNft](https://user-images.githubusercontent.com/108075033/227780486-99f60f4b-e78c-43a2-9313-4006942c30a2.png)



## Technologies Used
- ### Polybase -
    The project uses Polybase for its database where it stores and renders all the images, text etc. related to the games on the platform. This technology helps replace the centralised databases by providing enhanced security, privacy, and transparency. It performs at a really fast speed, thereby allowing us to deliver a seamless experience to the users.
    
- ### Scroll -
    The most important aspect of the project is purchasing games. This is done by leveraging a contract deployed on SCROLL's Zk-EVM. This         contract runs on L-2 and hence can help when the project needs to be scaled, i.e when more users are onboarded and there is a need to         satisfy the requests of each user.
    
    The following is the address and contract deployment link to Scroll 
    
    **Contract Address: 0x3091da46A06528a46764b32c9AE8c58B3C221B5F**
    
    **Deployed Contract Link:[Link to deployment on Scroll Alpha testnet](https://blockscout.scroll.io/address/0x3091da46A06528a46764b32c9AE8c58B3C221B5F)** 
    
    Scroll Transaction details from Scroll Alpha Testnet
    
   ![7](https://user-images.githubusercontent.com/108075033/227780312-18747bd5-8e32-40dd-a131-0f736821fa22.png)


     

- ### Mantle -
    The NFTs are minted using a contract deployed on MANTLE. These NFTs are specific for a game. They are available in different rarities ("Common", "Rare", "Super Rare") and act as in game items or collectibles. For Example:- Gun skins, characters/avatars, swords etc.
    Once a game is bought by the user, they can obtain new collectibles by minting NFTs using the MANTLE contract.
    
    The following is the address and contract deployment link to Mantle testnet
    
    **Contract Address: 0x941a364F4BDadbAbE876201200104a4d90042f77**
    
    **Deployed Contract Link:[Link to deployment on Mantle testnet](https://explorer.testnet.mantle.xyz/address/0x941a364F4BDadbAbE876201200104a4d90042f77)**
    
     Mantle Testnet Transaction details after minting NFT
    
    ![6](https://user-images.githubusercontent.com/108075033/227780238-7b5d87d8-10fc-4d5a-bb15-bb549de9494c.png)
     

- ### PUSH Protocol -
  Every gaming platform needs a space for discussion that helps build a sense of community, provide support, feedback, learning opportunities, and increase   player engagement and retention. Hence, we have introduced PUSH chat into our project, where each user can join the game community which is a PUSH group to       discuss, trade and invite each other to play together in any game.
  Notifications is also a crucical component of this gamimg platform. They serve to keep players engaged, informed, and up-to-date on important events.Thus,       the project uses PUSH notifications to help notify the user when a new NFT is minted and to also show the transactions to confirm their ownership, also notifications are sent after the successful purchase of games.

The follwing are the screenshots from the push staging 

Push Chat

![4](https://user-images.githubusercontent.com/108075033/227780115-68f9ffa5-3d92-4159-ae25-538e556cedb4.png)

Push Notification

![5](https://user-images.githubusercontent.com/108075033/227780127-047cb5a6-8331-4b99-b4b4-3361efa8b819.png)
