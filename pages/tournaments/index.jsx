import React, { useState } from "react";
import Image from "next/image";


import Mute from "assets/images/games/mute.svg";
import Unmute from "assets/images/games/unmute.svg";

import Styles from "pages/games/games.module.scss";
import QuestStyles from "pages/quests/quests.module.scss";
import TournamentsStyles from "pages/tournaments/tournaments.module.scss";
import { questsData } from "data/tournament/tournament";



const index = () => {
  const [quests, setquests] = useState(questsData);

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

  return (
    <>
      <section className={Styles.games}>
        <div className="container">
          <div
            className={[Styles.gamesContent, QuestStyles.questsContent, TournamentsStyles.tournamentsContent].join(" ")}
          >
            {quests.map((quest, i) => {
              return (
                <div
                  key={i}
                  className={[
                    Styles.gamesCard,
                    QuestStyles.quests,
                    TournamentsStyles.tournaments
                  ].join(" ")}
                >
                  <div
                    className={[
                      Styles.videoWrapper,
                      TournamentsStyles.tournamentsVideoWrapper
                    ].join(" ")}
                  >
                    {quest.thumbnailImage ? (
                      <div
                        className={TournamentsStyles.tournamentsCardImg}
                        style={{
                          height: "200px",
                          overflow: "hidden",
                          borderRadius: "16px"
                        }}
                      >
                        <Image src={quest.thumbnailImage} />
                      </div>
                    ) : (
                      <>
                        <iframe
                          className={Styles.videoPlayer}
                          src={quest.video + `&mute=${quest.mute ? 1 : 0}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                        <div
                          className={Styles.muteIcon}
                          onClick={() => changeMuteHandler(game, i)}
                        >
                          {quest.mute === true ? (
                            <Image src={Unmute} alt="sound" />
                          ) : (
                            <Image src={Mute} alt="sound" />
                          )}
                        </div>
                      </>
                    )}

                    {/* <div className={QuestStyles.questsDate}>
                      Bangalore Web3 Championship
                    </div> */}
                  </div>
                  <div
                    className={[Styles.gamesDetails, QuestStyles.questsDetails].join(
                      " "
                    )}
                  >
                    <div
                      className={[Styles.gamesTitle, QuestStyles.questsTitle, TournamentsStyles.tournamentsTitle].join(
                        " "
                      )}
                      style={{ alignItems: "flex-start" }}
                    >
                      {/* <Image src={quest.questImage} alt="tournaments" /> */}
                      <div>
                        <h4>{quest.title}</h4>
                        <p>{quest.description}</p>
                      </div>
                    </div>
                    <div
                      className={[
                        QuestStyles.questsKnowText,
                        TournamentsStyles.tournamentsMoney
                      ].join(" ")}
                    >
                      <p>Prize pool </p>
                      <h3 className="gradientText">₹{quest.price}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={Styles.gamesCardExtra}>&nbsp;</div>
            <div className={Styles.gamesCardExtra}>&nbsp;</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
