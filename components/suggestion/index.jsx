import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import VideoOnePlay from "assets/images/content/videoOnePlay.png";
import ArrowDown from "assets/images/arrowDown.svg";
import BigTime from "assets/images/article/bigtime.webp";
import MetalCore from "assets/images/article/metalcore.webp";
import Mokens from "assets/images/article/mokens.webp";
import Mighty from "assets/images/article/mighty.webp";
import MightyBear from "assets/images/article/mightybear.webp";
import Phantom from "assets/images/article/phantom.webp";
import Phantom1 from "assets/images/article/phantom1.webp";
import Phantom2 from "assets/images/article/phantom2.webp";
import Phantom3 from "assets/images/article/phantom3.webp";
import Immortal from "assets/images/article/immortal.webp";
import Apes from "assets/images/article/apes.webp";
import Apes1 from "assets/images/article/apes1.webp";
import War from "assets/images/article/warlegends.png";

import Styles from "pages/media/content.module.scss";
import GamesStyles from "pages/games/games.module.scss";

export const contentData = [
  {
    image: VideoOnePlay,
    title: "Revoland Game Play | Featuring RDA & Orangutan",
    type: "Gameplay",
    video: "https://www.youtube.com/embed/965EFohY0fM",
    hashTags: ["# Gameplay"],
    link: "/video-details/Revoland Game Play | Featuring RDA & Orangutan"
  },
  {
    image: VideoOnePlay,
    video: "https://www.youtube.com/embed/kodZktwbeSk",
    title: "Best Team for Ultimate Champions | Week #3 | December",
    type: "Gameplay",
    hashTags: ["# Gameplay"],
    link: "/video-details/Best Team for Ultimate Champions | Week %233 | December"
  },
  {
    image: VideoOnePlay,
    video: "https://www.youtube.com/embed/ZlLM68aWS6k",
    title: "Call of Hustle. ft Adesh | Ep. 1",
    type: "Stories",
    hashTags: ["# Stories"],
    link: "/video-details/Call of Hustle. ft Adesh | Ep. 1"
  },
  {
    image: VideoOnePlay,
    video: "https://www.youtube.com/embed/al0_yhbYg0c",
    title: "IndiGG Web3 Championship Qualifiers",
    type: "Streams",
    hashTags: ["# Streams"],
    link: "/video-details/IndiGG Web3 Championship Qualifiers"
  },
  {
    image: VideoOnePlay,
    video: "https://www.youtube.com/embed/MbVQowx1A9I",
    title: "IndiGG Web-3 Championship | Blast Royale | Semi Finals and Finals",
    type: "Streams",
    hashTags: ["# Streams"],
    link: "/video-details/IndiGG Web-3 Championship | Blast Royale | Semi Finals and Finals"
  },
  {
    image: VideoOnePlay,
    video: "https://www.youtube.com/embed/OUnJOslfCgY",
    title: "IndiGG x Fractal x Mokens League | Game Night",
    type: "Streams",
    hashTags: ["# Streams"],
    link: "/video-details/IndiGG x Fractal x Mokens League | Game Night"
  },
  {
    image: VideoOnePlay,
    video: "https://www.youtube.com/embed/_RP9VgtD6Co",
    title: "IndiGG Web-3 Championship Qualifiers | Blast Royale | Semi Finals",
    type: "Streams",
    hashTags: ["# Streams"],
    link: "/video-details/IndiGG Web-3 Championship Qualifiers | Blast Royale | Semi Finals"
  },
  {
    image: VideoOnePlay,
    video: "https://www.youtube.com/embed/qpuC9lehznk",
    title: "IndiGG BRAWL STARS WEB 3 CHAMPIONSHIP 2022 FINALS",
    type: "Streams",
    hashTags: ["# Streams"],
    link: "/video-details/IndiGG BRAWL STARS WEB 3 CHAMPIONSHIP 2022 FINALS"
  },

  {
    image: BigTime,
    title: "IndiGG Partners with web3 MMORPG, Big Time",
    type: "Articles",
    hashTags: ["#Article"],
    link: "/article-details/IndiGG Partners with web3 MMORPG, Big Time",
    article: [
      {
        description: [
          "IndiGG has decided to enter the fast paced action world of the upcoming AAA web3 MMORPG, Big Time ~ a free-to-play web3 game where players can team up with their friends and earn NFT loot",
          "MMORPGs by design were always going to take center stage in the world of web3 gaming and for that very reason IndiGG has decided to enter the fast paced action world of the upcoming AAA web3 MMORPG, Big Time.",
          "Big Time is a free-to-play web3 game where players can team up with their friends in order to travel through time to fight bosses, clear dungeons and earn loot in the form of NFTs. IndiGG is partnering up with Big Time studios in order to bring one of the best upcoming web3 games to our community and give them access to the game’s play & earn features via the IndiGG scholarship offerings."
        ]
      },
      {
        heading: "What does this mean for the IndiGG Community?",
        description: [
          "IndiGG has acquired over 300+ spaces in order to provide a similar amount of scholarships once the game has gone live for the public. The game is currently in early access and is slated to go live sometime later this year. ",
          "IndiGG’s investment in Big Time’s spaces means that we’ll be giving out 300+ scholarships to our community who can then play and earn via the game. This will enable the IndiGG community to also have a significant presence in the game and allow them to reap the best rewards the game has to offer."
        ]
      },
      {
        heading: "More about Big Time",
        description: [
          "Big Time is set in a world where a mysterious threat is tearing down the walls of time and collapsing history, causing different eras to collide with one another. The game takes players through time and space to encounter some of history’s most infamous figures and puts the player in the driver’s seat of their own time machine, allowing them to collect legendary items from revolutionary historical battles.",
          "SPACE NFTs are limited-edition NFTs by which players and guilds can expand their Time Machines in the game, and create a universe within the Big Time multiverse. Each SPACE unlocks different features that will boost NFT capabilities and allow access to the future Big Time token. SPACE can only be collected in-game or purchased from the Big Time Marketplace. As they are incredibly rare and difficult to acquire, only a certain amount will be allocated for sale, and the remaining will be distributed across the game.",
          "Big Time Studios has an all-star team of game industry veterans from the likes of Epic Games, Blizzard Entertainment, Electronic Arts (EA), and Riot Games. Individually, they have contributed to some of the most beloved and widely renowned franchises in gaming history, including Fortnite, God of War, Call of Duty, and Overwatch, to name a few.",
          "Big Time’s Early Access is already live and the full game is scheduled to release sometime later this year."
        ]
      }
    ]
  },
  {
    image: MetalCore,
    title: "IndiGG Partners With Metalcore, Mech Based Open World Web3 Game",
    type: "Articles",
    hashTags: ["#Article"],
    link: "/article-details/IndiGG Partners With Metalcore, Mech Based Open World Web3 Game",
    article: [
      {
        description: [
          "Metalcore is a web3 game based around Battle Mechs on an alien planet where players fight for their faction, engage in PVP battles & work together with other players for co-operative PVE team fights",
          "IndiGG is partnering with Metalcore, a web3 game based around Battle Mechs on an alien planet where players fight for their faction, engage in PVP battles as well as work together with other players for co-operative PVE team fights. ",
          "The game is designed by gaming industry veterans Studio 369, blockchain developer Umbrella Network, with a development team hailing from Activision, Disney, Lucas Films, Midway, and projects such as the MechWarrior 2 franchise, Mortal Kombat and Gears of War.",
          "IndiGG is proud to bring such a high quality game to our community and scholars in order to ensure that they get access to the best web3 games available in the market. This partnership also means that both IndiGG and Metalcore will be conducting several co-marketing efforts in order to educate the broader community about Metalcore as well as the benefits of web3 games in general."
        ]
      },
      {
        heading: "What does this mean for the IndiGG Community?",
        description: [
          "IndiGG guild members will of course have access to the play & earn elements of the game through our scholarship offerings; but if that wasn’t enough, they’ll also gain access to the early access playtesting of the game, participation in the Metalcore Open World alpha and competing in MetalCore’s co operative PvE and PvP gameplay when those launch",
          "In order to know more about Metalcore and the IndiGG scholarship being offered around Metalcore ~ join the IndiGG discord and ask any moderator for help. We’re looking for new mech pilots who’ll help IndiGG conquer this new alien planet in the metaverse. "
        ]
      }
    ]
  },
  {
    image: Mokens,
    title:
      "IndiGG Partners with Mokens League - Blockchain-based eSports Gaming Platform",
    type: "Articles",
    hashTags: ["#Article"],
    link: "/article-details/IndiGG Partners with Mokens League - Blockchain-based eSports Gaming Platform",
    article: [
      {
        description: [
          "Mokens League, the eSport lover's favourite platform, offers several classic multiplayer sports video games. Players assemble to compete for the opportunity to earn tokens using NFT avatars.",
          "Esports, or sports competitions played via online multiplayer video games, have become increasingly popular in India. Even Forbes's ranking placed India at number 16 overall in the growing eSports market. This is all thanks to the raging advertising and marketing campaign on numerous digital streaming channels like YouTube. It is safe to say that it has effectively taken over the Indian youth populace.",
          "Not shying away from the growing trends, we at IndiGG want to bring all these interested players into the web3 ecosystem with Mokens League and offer great opportunities for Indian eSports enthusiasts."
        ]
      },
      {
        heading: "What's Unique About Mokens League",
        description: [
          "Mokens League isn't like your everyday sports video game. It hosts several conventional skill-based sports video game competitions, which include free-to-play and play-to-own options. To compete and have a chance to earn the tokens, players must leverage their unique NFT characters to compete.",
          "In the third quarter of 2023, Mokens League will begin the fun with their first release of a soccer game available for PC and mobile users. More eSports will follow on various platforms, including multiplayer tennis, basketball, hockey, and beach volleyball."
        ]
      },
      {
        heading: "IndiGG x Mokens League: What does it mean?",
        description: [
          "We at IndiGG are always listening to what the community has to say. And we heard you when you said you love the Mokens League, which is why we made efforts to bring it to all the members of IndiGG. ",
          "After learning about the extensive work experts have poured into the Mokens league, we know these gaming opportunities are a labour of love. They have leveraged state-of-the-art blockchain technology to develop sports video games that use NFT characters to compete.",
          "Like us, the founders of Mokens League also believe in interacting with their community at a grass root level. We noticed it from the ease with which community members could approach the founders, building trust and a solid reputation for the project.",
          "We at IndiGG know that India is big on gaming. Strong expansion in the Indian online gaming business has made it one of the largest in the world. From its $2.6 billion in 2022 value, the market is forecast to reach $8.6 billion by 2027, a 27.1% CAGR with over 500 million Indians being gamers in FY2022.",
          "For this reason, IndiGG is enthusiastic about its partnership with Mokens League, which will bring this unique eSports gaming opportunity for our community to enter the web3 environment.",
          "“We're thrilled to partner with Mokens League, a real-time, football-themed competitive game built by a team that has years of demonstrated prowess in building content-rich, and fun-first games. The game has already become a community favourite,” says Abhishek Anand, Business Head at IndiGG. “We’re thrilled to bring Mokens League to the masses considering India has a massive audience for sports, particularly football. Together, we share the same vision, which is to bring quality games and leave behind a legacy for years to come!”"
        ]
      },
      {
        heading: "Introducing Monkens League through IndiGG Community",
        description: [
          "With IndiGG, Mokens League can scale its user base enormously. The game will be activated and available to the entire community of 300K+ members. Additionally, IndiGG will leverage influencer marketing strategies to popularize and brand the game nationwide.",
          "We will closely collaborate with our gaming influencers to create informative content to introduce Mokens League to their extensive followership. The content will aim to inform, promote, and pursue individuals to seize the opportunity provided by the partnership.",
          "“We are thrilled to start collaborating with IndiGG and being able to bring Mokens League to the Indian gaming community”. Said Martin Repetto, CEO of Mokens League.",
          "“We are already organizing five small/medium tournaments at a grassroot level along with one central tournament for the IndiGG community. We wish to provide them not only lots of fun by playing and competing in our real-time multiplayer soccer video game, but also become active members of our web3 ecosystem”. Said Juan Francisco Dalceggio, Chief Business Officer of Mokens League.",
          "With this partnership, we, Monkens League and IndiGG, are excited to provide thrilling gaming opportunities to eSports enthusiasts in India. Stay tuned to our social media pages for further announcements about upcoming events and competitions."
        ]
      },
      {
        heading: "About IndiGG",
        description: [
          "IndiGG is constructing the world's biggest Web3 gaming DAO, with its headquarters in India. We're bringing India's 500 million+ players into the Web3 gaming community and allowing DAO members to earn. We do this by collaborating with the world's greatest game companies and developers, enhancing their chances of success by establishing relevant micro-communities.",
          "Website I Twitter I Discord I Substack I YouTube I Medium I Reddit"
        ]
      },
      {
        heading: "About Monkens League",
        description: [
          "Mokens League is an eSports platform using blockchain technology started in 2021 by Monster League Studios LTD. There are real-team multiplayer skill-based competition video games free-to-play and play-to-own. A soccer game will be launched in Q3 2023, as the first game, for PC and mobile. More eSports will follow, also on other platforms.",
          "Website | Twitter | Discord | YouTube | Instagram | Linktree"
        ]
      }
    ]
  },
  {
    image: Mighty,
    title:
      "IndiGG Partners with Mighty Action Heroes, a Web3 Battle Royale Game Developed by Mighty Bear Games",
    type: "Articles",
    hashTags: ["#Article"],
    link: "/article-details/IndiGG Partners with Mighty Action Heroes, a Web3 Battle Royale Game Developed by Mighty Bear Games",
    article: [
      {
        description: [
          "IndiGG has invested in the upcoming real-time multiplayer web3 battle royale Mighty Action Heroes so that gamers can be onboarded from the IndiGG community into the game, enabling them to play & earn",
          "IndiGG has invested in the upcoming real-time multiplayer web3 battle royale Mighty Action Heroes so that gamers can be onboarded from the IndiGG community into the game, enabling them to play and earn from the game.",
          "IndiGG is partnering up with Mighty Action Heroes, a multiplatform web3-native battle royale game launching in early access later in the year, in order to bring it to gamers across the Indian subcontinent. It is being developed by Mighty Bear Games, a team with a strong background in game development and a track record of shipping high-quality games. Battle Royale is one of the hottest gaming genres across this region and hence we’re very excited to bring a really good web3 battle royale game to our community."
        ],
        detailImage: MightyBear
      },
      {
        description: [
          "We also believe that bringing in high quality web3 games that the regional gaming crowd can relate to will help in our quest to onboard the 500+ million gamers of India into the world of web3 gaming.",
          "“I believe there’s quite an empty space with regards to the Battle Royale genre in the web3 gaming ecosystem. Gamers from the Indian subcontinent have a big appetite when it comes to battle royale games that are also available on mobile, especially post the ban on PUBG. Mighty Action Heroes is one of the very few games we’ve come across which is a third person battle royale that will also be available on mobile. The cherry on top is the game being designed by the remarkable Mighty Bear Games, which has a proven history of building kickass products. We look forward to working closely with the team and offering a great battle royale to our community once the game goes live.” - Ayush Gupta - Growth Lead at IndiGG",
          "“Game publishing is most effective when not just localised, but culturalised. We’re excited to partner with IndiGG to tap on their knowledge of how best to reach Indian gamers as we develop and launch Mighty Action Heroes.” - Abel Tan, Partnerships Lead, Mighty Action Heroes"
        ]
      }
    ]
  },
  {
    image: Phantom,
    title: "IndiGG Partners with upcoming AAA Mech Shooter, Phantom Galaxies",
    type: "Articles",
    hashTags: ["#Article"],
    link: "/article-details/IndiGG Partners with upcoming AAA Mech Shooter, Phantom Galaxies",
    article: [
      {
        description: [
          "IndiGG is proud to announce that we’re partnering with Phantom Galaxies by investing in 1 Large Planet+100 Small Asteroids in order to give the IndiGG community a head start in the upcoming web3 game",
          "Phantom Galaxies is easily one of the most awaited web3 games given it’s amazing combat, AAA visuals, as well as it’s unique aesthetic owing to the fact that it’s a Transformer styled space-mech game and so, we at IndiGG are proud to announce that we’re partnering with Phantom Galaxies by investing in 1 Large Planet along with about 100 Small Asteroids in order to give the IndiGG community a head start & other benefits in the game.",
          "Planets are unique NFTs that will provide holders with in-game real estate and utility as well as a regular emission of the native cryptocurrency of Phantom Galaxies. Each Planet is allocated a set amount of Phantom Galaxies Governance token and will award the owner an amount of “PGToken” directly. Once staking is enabled, Planets will emit a ‘Minimum Token Emission’ of PGToken. Each sized planet will be able to physically accommodate a certain number of simultaneous players, from a squad of 4 players on a small asteroid to thousands of players on a large planet."
        ],
        detailImage: Phantom1
      },
      {
        description: [
          "Phantom Galaxies combines open-world space sim with fast-paced mech shooter and a captivating story. Early access for the game is slated to come out later this year; however, one can already try out parts of the game, currently in alpha, using the Halberd-001 NFT. There are currently 3 episodes with hours of content available to play via the NFT which allows gamers to get a feel for the game before its official release.",
          "There are currently over 125,000 users actively playing the Alpha version of Phantom Galaxies and over 500,000 owners of the NFTs granting access to the Alpha game."
        ],
        detailImage: Phantom2
      },
      {
        heading: "What does this partnership mean for the IndiGG Community?",
        description: [
          "Planets are key in-game assets for Phantom Galaxies, representing the game’s user-ownable real estate. Each Planet will have designated coordinates within the game universe, and will have randomized traits that make it unique."
        ],
        detailImage: Phantom3
      },
      {
        description: [
          "Owning a planet allows IndiGG to build structures on said planet, such as marketplaces to sell items, hangers to store Starfighters, residential units to house guild members, or refiners to harvest materials. The Large Planet along with the 100 Asteroids that we have purchased will go towards giving the IndiGG community a place to belong in the universe of Phantom Galaxies and reap the benefits of one of the top upcoming web3 games."
        ]
      }
    ]
  },
  {
    image: Immortal,
    title: "IndiGG is partnering with Immortal Game for an epic Web3 chess season",
    type: "Articles",
    hashTags: ["#Article"],
    link: "/article-details/IndiGG is partnering with Immortal Game for an epic Web3 chess season",
    article: [
      {
        description: [
          "Gamers and chess players rejoice! IndiGG is proud to announce its partnership with Immortal Game, the world’s first Play-and-Earn chess platform. Together, we bring you a Web3 chess game that will excite and engage gamers and chess fans alike.",
          "Web3 gaming is growing in leaps and bounds, with a market cap of approximately $25 billion at the beginning of 2022. It does not appear to be diminishing anytime soon, even in the depths of a bear market. Play-and-Earn NFT Games Market is forecasted to be worth $2845.1 million by 2022-2028, according to the “Play-to-Earn NFT Games market” research report. With an estimated three billion-plus gamers on the planet and counting, it is clear that video games can be the most accessible way to bring digital assets into the mainstream.",
          "Immortal Game intends to create a new generation of GameFi by fusing the immense attraction of chess with the emerging blockchain gaming business. The Free-to-Play chess game tries to develop a robust game economy by including tokenized challenges into the regular chess gameplay."
        ]
      },
      {
        heading: "The Alliance",
        description: [
          "As mentioned earlier, the GameFi sector is constantly evolving with the introduction of web3 technology. Take Immortal Game, a platform for playing chess with financial rewards. They've attracted existing chess players with the added aspect of earning tokens and introduced the game to investors and GameFi enthusiasts.",
          "But it's not just about the rewards - they've also added fun elements in the form of micro and macro quests. So you can flex your chess skills and earn $CMT tokens as you play.",
          "IndiGG recognizes these core asset ownership values and believes Immortal Game is well on its way to truly immortalizing them in digital chess. With IndiGG's vision of onboarding 500M+ gamers onto web3, Immortal Game provides the ideal platform for IndiGG to onboard players from the chess niche.",
          "Immortal Game promotes asset ownership while providing a unique gaming experience with its Immortal and Ageless Chess Pieces features. We can't wait to see what future developments Immortal has in store for the digital chess community."
        ]
      },
      {
        heading: "The 'Immortal Game'",
        description: [
          "Immortal Game offers a refreshing twist on this classic contest. Not only can you play with traditional pieces, but there are also ageless pieces that give the game a whole new dynamic. And if that's not enough to pique your interest, they also have quests tied to your progress.",
          "As you complete missions and rank up the leaderboards, you'll earn points and potentially win prizes like CMT tokens, $ETH, and even NFTs. Their mobile app is scheduled to release in early 2023, but their Web platform is already optimized for mobile, so you can play on the go right now!",
          "So why not add excitement to your next game night with Immortal Game? It's sure to be a memorable experience.",
          "And if you want to hone your chess skills to become Web3's next Viswanathan Anand, we have you covered! The Immortal Game Academy, to be launched in the next few months, will have experienced professional players who can provide in-depth lessons to take your gameplay to the next level. The instructors they are currently onboarding have years of experience and can teach everything from basic rules to advanced tactics."
        ]
      },
      {
        heading: "Checkmate your opponents!",
        description: [
          "If and when you are ready to take down the biggies of the board game, there is a dedicated non-stop Immortal action waiting for you at IndiGG. In November, we're hosting four Immortal Tournaments for the IndiGG Autumn Cup, with a prize pool of $2000 for each tournament. That's a grand total of $8000 up for grabs! Compete against fellow Immortals players in your region and show off your skills.",
          "Tournaments aside, the Immortals community activation begins with AMAs on Twitter and Discord for teams and community members to exchange information about the Immortal project and our partnerships. Then, we'll dive into our NFTs, utilities, tokenomics, and roadmap during a one-hour KYG session. Trivia Tuesdays will be dedicated to chess trivia to learn more about the game and its history. And what better way to turn binge viewers into new chess players than with a seven-day marathon of the Queen's Gambit? We'll also have beginner and intermediate training sessions in our IndiGG discord for those looking for a hands-on approach.",
          "Join us in celebrating all things chess!"
        ]
      },
      {
        heading: "About Immortal Game",
        description: [
          "Immortal Game is a community-driven, next-generation chess platform. The game is free to play and based on the Play-and-Earn principle. Immortal Game adds a new layer of strategy to the world's most popular board game. Collect Ageless and Immortal chess pieces, fulfill their tasks, and rise to the top of the leaderboards!",
          "To know more, visit:",
          "Website | Discord | Twitter | Instagram | Telegram"
        ]
      },
      {
        heading: "About IndiGG",
        description: [
          "IndiGG is building the world's largest Web3 gaming DAO centered in India. We're onboarding the 500M+ gamers of India to the Web3 gaming ecosystem and enabling earnings for the DAO members. We do this by partnering with the best gaming studios and developers globally, thereby increasing their success probability by creating relevant micro-communities.",
          "Website I Twitter I Discord I Substack I YouTube I Medium I Reddit"
        ]
      }
    ]
  },
  {
    image: Apes,
    title: "IndiGG partners with Web3 MMO strategy game, Meta Apes",
    type: "Articles",
    hashTags: ["#Article"],
    link: "/article-details/IndiGG partners with Web3 MMO strategy game, Meta Apes",
    article: [
      {
        description: [
          "As part of this partnership, you can join the IndiGG Discord to win some fantastic rewards worth up to USD 3000.",
          "Hello Fam, IndiGG brings another exciting MMO Strategy Game - Meta Apes, a free-to-play and win-to-earn game with PEEL as the native governance token. ",
          "Now you can play Meta Apes on IndiGG and win big rewards from the"
        ]
      },
      {
        heading: "IndiGG X MetaApes Reward Program",
        description: [
          "In the apocalyptic world, nuclear war wiped out nearly the entire human population. After the disaster, the survivors had no alternative but to evacuate the planet aboard spacecraft. Time moved more slowly in the post-apocalyptic world, and no one could have predicted that something would thrive in the wasteland.",
          "That's when the Apes seized over!",
          "It is now your chance to conquer the Planet of Apes and lead the Apes in their objective of Space Hegemony. Assist them in exploring human ruins, searching for resources, fighting adversaries, and constructing towns and communities. The graphics are stunning and the user-friendly system will surely keep you glued to the game.",
          "Read about the gameplay in detail here.",
          "Download the App:",
          "https://apps.apple.com/us/app/meta-apes/id1621913848 (iOS)",
          "https://play.google.com/store/apps/details?id=com.mkbanana.gp (Android)",
          "IndiGG x Meta Apes Reward program The IndiGG x Meta Apes Reward program, created in collaboration with Meta Apes, aims to ape-fy every region of India while concentrating on the game's growth in the country and neighboring regions."
        ]
      },
      {
        heading: "1) Rise of Apes Season 1",
        description: [
          "The Rise of Apes is an earning program with a whopping prize pool of $1900. It consists of tasks based on in-game achievements, boosting gang and city power through rivalry and local pride! The total reward pool for 10 Gangs would be $1900 per month The distribution is as follows:",
          "Conqueror Ape- Top 10 players in the weekly power-up leaderboards get $1 each.",
          "Researcher Ape- Top 10 players in the weekly technology donation leaderboards get $1 each.",
          "Helper Ape- Top 10 players in the weekly gang help leaderboards get $1 each.",
          "Brawler Ape- Top 10 players in the weekly kill count leaderboards get $1 each.",
          "Battleborn Ape –  Lead scheduled rallies for at least one month. Top 3 rally commanders will get 10$ each.",
          "To be eligible for the contest, join one the “IndiGG gangs” within Meta Apes. Additionally, you should also join the IndiGG Discord channel to be eligible. (Psst…you also get a kickass discord role and symbol against your name)"
        ],
        detailImage: Apes1
      },
      {
        heading: "2) Regional gang brawl Season - 1",
        description: [
          "We are further incentivizing the best clans.",
          "The gang which increases their power in a period of 35 days will be rewarded with a prizepool of USD 1100 based on their ranking. Eligibility being the gang power of 15 million. Distribution is as follows (all figures in INR)",
          "1st - $300",
          "2nd - $200",
          "3rd - $150",
          "4th - $100",
          "5th - $75",
          "6th - $50",
          "7th - $25",
          "8-10 th- $10",
          "Gang leaders receive an additional 20% of the corresponding rank reward.",
          "Gang rewards - $930",
          "Gang leader rewards-$180",
          "Total- $1100",
          "The contest commences from  11th November - 16th December. Stay tuned to our social media channels, especially Discord announcements.",
          "IndiGG will also host daily events in addition to its reward programme to educate the community and help players improve in their game.",
          "For more details, join us on IndiGG’s discord https://discord.com/invite/igg "
        ]
      },
      {
        heading: "About Meta Apes",
        description: [
          "Meta Apes is a free-to-play and win-to-earn MMO strategy game set in a post-apocalyptic world. Players must work closely with their Gang to become the strongest Clan and win the ultimate race to space. Meta Apes is the first game to launch BNB Sidechain with PEEL as the native governance token. Meta Apes is available on both Google Play (Android) & App Store (iOS).",
          "To learn more about Meta Apes, visit.",
          "Linktree | Website | Marketplace | Medium | Twitter | Discord |Telegram Channel"
        ]
      },
      {
        heading: "About IndiGG",
        description: [
          "IndiGG is building the world's largest Web3 gaming DAO centered in India. We're onboarding the 500M+ gamers of India to the Web3 gaming ecosystem and enabling earnings for the DAO members. We do this by partnering with the best gaming studios and developers globally, thereby increasing their success probability by creating relevant micro-communities.",
          "Website I Twitter I Discord I Substack I YouTube I Medium I Reddit"
        ]
      }
    ]
  },
  {
    image: War,
    title: "IndiGG Partners up with War Legends, Military-Themed MOBA Game",
    type: "Articles",
    hashTags: ["#Article"],
    link: "/article-details/IndiGG Partners up with War Legends, Military-Themed MOBA Game",
    article: [
      {
        description: [
          "War Legends is a military-themed web3 MOBA game set in the 1950s. MOBA games are one of the most popular genres in India, with a huge player base in web2 games like Dota 2, League of Legends: Wild Rift, etc. Games like Mobile Legends: Bang Bang had 75 Million active users, the majority of which were Indian gamers.",
          "Along with War Legends, we at IndiGG plan to onboard all of these gamers to the web3 ecosystem and provide them with earning opportunities. War Legends’ exciting game mechanics along with its utilisation of NFTs and their native token $WAR make it more feasible as a web3 MOBA game that provides the community with opportunities to create a source of earning."
        ]
      },
      {
        heading: "Win over $4000 worth of NFTs and USDT from the Beta phase",
        description: [
          "War Legends is running a Beta test event for the community where players can try out the game for free and stand a chance to win NFTs.",
          "Players can participate in tournaments and win NFTs and cash prizes of up to $4000",
          "Learn more about this here."
        ]
      },
      {
        heading: "Stream and Win NFTs",
        description: [
          "War Legends have something for all the creators as well. Streamers who play the game for their community on Twitch or Discord can earn NFTs based on the number of hours played.",
          "Reward pool for streamers:",
          "1 Common NFT - For every 3 hours streamed",
          "1 Rare NFT - For every 5 hours streamed",
          "1 Epic NFT - For every 10 hours streamed",
          "1 Legendary NFT - For every 20 hours streamed",
          "Join the program here."
        ]
      },
      {
        heading: "IndiGG Tournaments",
        description: [
          "IndiGG is also planning many fun activities around War Legends for the community, where players can experience the game and earn prizes simultaneously."
        ]
      },
      {
        heading: "Tournaments in Gaming Cafes",
        description: [
          "We’ll be hosting 20+ tournaments in gaming cafes across India, including major cities like Bangalore, Mumbai, Pune, and Jaipur."
        ]
      },
      {
        heading: "Major Leagues",
        description: [
          "That’s not all! We’ll also be hosting 2 Major War Legends leagues for the community which will come wrapped with a lucrative prize pool. Stay tuned over our socials for the announcements."
        ]
      },
      {
        heading: "About IndiGG",
        description: [
          "IndiGG is building the world's largest Web3 gaming DAO centred in India. We're onboarding the 500M+ gamers of India to the Web3 gaming ecosystem and enabling earnings for the DAO members. We do this by partnering with the best gaming studios and developers globally, thereby increasing their success probability by creating relevant micro-communities.",
          "Website I Twitter I Discord I Substack I YouTube I Medium I Reddit"
        ]
      },
      {
        heading: "About War Legends",
        description: [
          "War Legends is a military-themed Multiplayer Online Battle Arena (MOBA) game developed on top of blockchain technology that functions as its own metaverse and has non-fungible tokens (NFTs) alongside Play-and-Earn ) elements.",
          "Facebook | Discord | Whitepaper | Telegram |  Twitter  | Opensea | Medium"
        ]
      }
    ]
  }
];

const Suggestion = ({ title }) => {
  const [content, setContent] = useState(contentData);
  const [openFilter, setOpenFilter] = useState(false);
  const [filteredText, setFilteredText] = useState("All Wiki");
  const filterData = contentData;

  const handleFilterChange = (content) => {
    setFilteredText(content);
    if (content === "All Wiki") {
      setContent(contentData);
    } else {
      const result = filterData.filter((item) => item.type === content);
      setContent(result);
    }
    setOpenFilter(false);
  };

  return (
    <>
      <div className={[Styles.featuredType, GamesStyles.games].join(" ")}>
        <h2>{title}</h2>
        <div className={GamesStyles.dropDown}>
          <p onClick={() => setOpenFilter(!openFilter)}>
            {filteredText} <Image src={ArrowDown} alt="filter" />
          </p>
          {openFilter ? (
            <ul className={GamesStyles.gamesFilter}>
              <li onClick={() => handleFilterChange("All Wiki")}>All Wiki</li>
              <li onClick={() => handleFilterChange("Gameplay")}>Gameplay</li>
              <li onClick={() => handleFilterChange("Stories")}>Stories</li>
              <li onClick={() => handleFilterChange("Streams")}>Streams</li>
              <li onClick={() => handleFilterChange("Articles")}>Articles</li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={Styles.featuredVideosWrapper}>
        {content.map((content, i) => {
          return content.link ? (
            <Link href={content.link} key={i}>
              <div className={Styles.featuredVideo}>
                <div className={[Styles.featuredVideoImg, Styles.featuredVideoDesktop].join(" ")}>
                  {content.video ? (
                    <iframe
                      style={{ maxWidth: "100%", borderRadius: "24px" }}
                      width="100%"
                      src={content.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  ) : (
                    <Image src={content.image} alt="video" />
                  )}
                </div>
                <p>{content.hashTags}</p>
                <h3>{content.title}</h3>
              </div>
            </Link>
          ) : (
            ""
          );
        })}
        <div className={GamesStyles.gamesCardExtra}>&nbsp;</div>
        <div className={GamesStyles.gamesCardExtra}>&nbsp;</div>
      </div>
    </>
  );
};

export default Suggestion;
