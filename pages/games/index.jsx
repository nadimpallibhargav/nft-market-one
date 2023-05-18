import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "assets/images/arrowDown.svg";
import Live from "assets/images/games/live.svg";
import Upcoming from "assets/images/games/upcoming.svg";
import Mute from "assets/images/games/mute.svg";
import Unmute from "assets/images/games/unmute.svg";

import BtnArrow from "assets/images/forwardDoubleArrow.svg";

import Styles from "pages/games/games.module.scss";
import { videoGamesData } from "data/games/games";



const index = () => {
  const [videoGames, setVideoGames] = useState(videoGamesData);
  const [openFilter, setOpenFilter] = useState(false);
  const [filteredText, setFilteredText] = useState("All Games");
  const filterData = videoGamesData;

  const changeMuteHandler = (e, i) => {
    const result = videoGames.map((item, index) => {
      if (index === i) {
        return {
          ...item,
          mute: !item.mute
        };
      } else {
        return item;
      }
    });
    setVideoGames(result);
  };
  const handleFilterChange = (game) => {
    setFilteredText(game);
    if (game === "All games") {
      setVideoGames(videoGamesData);
    } else {
      const result = filterData.filter((item) => item.type === game);
      setVideoGames(result);
    }
    setOpenFilter(false);
  };

  return (
    <>
      <section className={Styles.games}>
        <div className="container">
          <div className={Styles.gamesHeading}>
            <div className={Styles.dropDown}>
              <p onClick={() => setOpenFilter(!openFilter)}>
                {filteredText} <Image src={Arrow} alt="filter" />
              </p>
              {openFilter ? (
                <ul className={Styles.gamesFilter}>
                  <li onClick={() => handleFilterChange("All games")}>All Games</li>
                  <li onClick={() => handleFilterChange("live")}>Live</li>
                  <li onClick={() => handleFilterChange("upcoming")}>Upcoming</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <h2>Discover Featured Games</h2>
          </div>
          <div className={Styles.gamesContent}>
            {videoGames.map((game, i) => {
              return (
                <div key={i} className={[Styles.gamesCard, Styles.gamesCardGrow].join(" ")}>
                  <div className={Styles.videoWrapper}>
                    <iframe
                      loading="lazy"
                      className={Styles.videoPlayer}
                      src={
                        game.video +
                        `&rel=0&mute=${game.mute ? 1 : 0}`
                      }
                      title="YouTube video player"
                      frameBorder="0"
                      height="200px"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div
                      className={Styles.muteIcon}
                      onClick={() => changeMuteHandler(game, i)}
                    >
                      {game.mute === true ? (
                        <Image src={Unmute} alt="sound" />
                      ) : (
                        <Image src={Mute} alt="sound" />
                      )}
                    </div>
                    <div className={Styles.mode}>
                      {game.type === "live" ? (
                        <p className={Styles.live}>
                          <Image src={Live} alt="mode" /> Live{" "}
                        </p>
                      ) : (
                        <p className={Styles.upcoming}>
                          <Image src={Upcoming} alt="mode" /> Upcoming{" "}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={[Styles.gamesDetails, Styles.gamesDetailsTab].join(" ")}>
                    <div className={Styles.gamesTitle}>
                      <div className={Styles.gamesLogo}>
                        <Image src={game.gameImage} alt="Debeats" />
                      </div>
                      <div>
                        <h4>{game.title}</h4>
                        <p>{game.description}</p>
                      </div>
                    </div>
                    <Link href={game.website}>
                      <p>
                        Play now
                        <Image src={BtnArrow} alt="next" />{" "}
                      </p>
                    </Link>
                  </div>
                  <div className={Styles.gamesTags}>
                    {game.hashTags.map((tag, ind) => {
                      return <p key={ind}>{tag}</p>;
                    })}
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
