import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


import Live from "assets/images/games/live.svg";
import BtnArrow from "assets/images/forwardDoubleArrow.svg";

import Styles from "pages/games/games.module.scss";
import QuestStyles from "pages/quests/quests.module.scss";
import { questsData } from "data/quest/quest";



const index = () => {
  const [quests, setquests] = useState(questsData);
  const [openFilter, setOpenFilter] = useState(false);
  const [filteredText, setFilteredText] = useState("All quests");
  const filterData = questsData;

  const changeMuteHandler = (e, i) => {
    const result = quests.map((item, index) => {
      if (index === i) {
        return {
          ...item,
          mute: !item.mute
        };
      } else {
        return item;
      }
    });
    setquests(result);
  };
  const handleFilterChange = (game) => {
    setFilteredText(game);
    if (game === "All quests") {
      setquests(questsData);
    } else {
      const result = filterData.filter((item) => item.type === game);
      setquests(result);
    }
    setOpenFilter(false);
  };

  return (
    <>
      <section className={Styles.games}>
        <div className="container">
          <div
            className={[Styles.gamesContent, QuestStyles.questsContent].join(" ")}
          >
            {quests.map((quest, i) => {
              return (
                <div
                  key={i}
                  className={[Styles.gamesCard, QuestStyles.quests].join(" ")}
                >
                  {quest.type === "upcoming"
                    ? // <div className="badge">
                      //   <i className="left"></i>
                      //   <i className="right"></i>
                      //   coming soon
                      // </div>
                      ""
                    : ""}
                  <div className={Styles.videoWrapper}>
                    <iframe
                      className={Styles.videoPlayer}
                      src={quest.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className={Styles.mode}>
                      {quest.type === "live" ? (
                        <p className={Styles.live}>
                          <Image src={Live} alt="mode" /> Live{" "}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* <div className={QuestStyles.questsDate}>
                      Starts on {quest.date}
                    </div> */}
                  </div>
                  <div
                    className={[Styles.gamesDetails, QuestStyles.questsDetails].join(
                      " "
                    )}
                  >
                    <div
                      className={[Styles.gamesTitle, QuestStyles.questsTitle].join(
                        " "
                      )}
                    >
                      {/* <div className={QuestStyles.questsLogo}>
                        <Image src={quest.questImage} alt="Debeats" />
                      </div> */}
                      <div>
                        <h4>{quest.title}</h4>
                        <p>{quest.description}</p>
                      </div>
                    </div>
                    <div className={QuestStyles.questsKnow}>
                      <div className={QuestStyles.questsKnowText}>
                        <p>Win</p>
                        <h3 className="gradientText">₹ {quest.price}</h3>
                      </div>
                      <Link href={quest.more}>
                        <a>
                          <div
                            className={[QuestStyles.questsKnowBtn, "commonBtn"].join(
                              " "
                            )}
                          >
                            Start Now
                            <Image src={BtnArrow} />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
