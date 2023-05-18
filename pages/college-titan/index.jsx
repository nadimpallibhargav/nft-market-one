import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import PreviousPage from "components/previousPage/index";
import Link from "next/link";
import Registered from "assets/images/clan/registered.svg";
import Earn from "assets/images/clan/earn.svg";
import Meet from "assets/images/clan/meet.svg";
import Influencer from "assets/images/clan/influencer.svg";
import Application from "assets/images/clan/application.svg";
import Call from "assets/images/clan/call.svg";
import Hand from "assets/images/clan/hand.svg";
import Game from "assets/images/clan/game.svg";
import Trophy from "assets/images/clan/trophy.svg";
import DownArrowGradient from "assets/images/clan/downArrowGradient.svg";
import CarouselBg from "assets/images/clan/estimonialsBg.svg";
import JoinBg from "assets/images/clan/joinBg.svg";
import BtnArrow from "assets/images/forwardDoubleArrow.svg";
import Styles from "styles/home-screen.module.scss";
import VideoStyles from "pages/media/content.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClanStyles from "pages/college-titan/clan.module.scss";
import { carouselData, settings } from "data/clanCheif/clanCheif";

const ClanCheif = ({ previouspage, title }) => {


  const [count, setCount] = useState(0);
  const [initialCount, setInitialCount] = useState(0);

  // useLayoutEffect(() => {
  //   const getItemCount = parseInt(localStorage.getItem("count"));
  //   setCount(getItemCount);
  // }, []);

  useEffect(() => {
    const firstCount = setInterval(() => {
      setInitialCount((initialCount) => initialCount + 50);
    }, 10);

    if (initialCount === 3000) {
      clearInterval(firstCount);
    }

    return () => clearInterval(firstCount);
  }, []);

  useEffect(() => {
    if (initialCount === 3000) {
      const getItemCount = parseInt(localStorage.getItem("count"));
      if (getItemCount) {
        localStorage.setItem("count", getItemCount + 1);
        setCount(getItemCount);
      } else {
        localStorage.setItem("count", 3000);
        setCount(3000);
      }
    }
  }, [initialCount]);

  useEffect(() => {
    const registeredNumbers = setInterval(() => {
      let getCount = parseInt(localStorage.getItem("count"));
      localStorage.setItem("count", getCount + 1);
      setCount(getCount);
    }, 60000);
    if (count === 300000) {
      clearInterval(registeredNumbers);
    }
    return () => clearInterval(registeredNumbers);
  }, [count]);

 

  return (
    <>
      {/* Section Carousel */}
      <section className={ClanStyles.storiesSection}>
        <div className="container">
          {/* <Link href="/video-details/Call of Hustle, Ft.Godlike"> */}
          <div className={ClanStyles.clanHeading}>
            <h1>Meet The Clan Chiefs</h1>
          </div>
          <div className={[VideoStyles.featuredVideo, ClanStyles.video].join(" ")}>
            <div className={ClanStyles.img}>
              {/* <Image src={TitanStories} alt="video" /> */}

              <iframe
                style={{ borderRadius: "24px" }}
                width="100%"
                height="200px"
                src="https://www.youtube.com/embed/ZlLM68aWS6k"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <p>#Titan's stories</p>
            <h3>Call of Hustle, Ft.Godlike</h3>
          </div>
          {/* </Link> */}
        </div>
      </section>

      <section className={ClanStyles.registered}>
        <div className="container">
          <div className={ClanStyles.registeredWrapper}>
            <Image src={Registered} alt="unmute-button" />
            <span className={ClanStyles.counter}>
              {initialCount <= 3000 ? initialCount : count > 0 ? count : 3000} +
            </span>
            <p>registrations done!</p>
          </div>
        </div>
      </section>

      <section className={ClanStyles.joinSection}>
        <div className="container">
          <div className={ClanStyles.join}>
            <div className={ClanStyles.joinBgImage}>
              <Image src={JoinBg} alt="join us" />
            </div>
            <h2>Why should you join?</h2>
            <div className={ClanStyles.joinWrapper}>
              <div className={ClanStyles.joinCard}>
                <Image src={Earn} alt="unmute-button" />
                <p>
                  Earn <br /> From Hosting
                </p>
              </div>
              <div className={ClanStyles.joinCard}>
                <Image src={Meet} alt="unmute-button" />
                <p>
                  Meet <br /> Other Gamers
                </p>
              </div>
              <div className={ClanStyles.joinCard}>
                <Image src={Influencer} alt="unmute-button" />
                <p>
                  Become <br /> An Influencer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={[Styles.carousel, ClanStyles.clan].join(" ")}>
        <div className="container">
          <PreviousPage previouspage="/" title="Clan Chief Program" />
          <div className={ClanStyles.clanCarouselBg}>
            <Image src={CarouselBg} alt="carousel image" />
          </div>
          <div className={[ClanStyles.clanCarousel, "clanCaraousel"].join(" ")}>
            {/* <div className={ClanStyles.clanHeading}>
              <h1>Meet The Clan Chiefs</h1>
            </div> */}
            <Slider {...settings}>
              {carouselData.map((carousel, i) => {
                return (
                  <div key={i}>
                    <div className={[Styles.games, ClanStyles.games].join(" ")}>
                      <div
                        className={[
                          Styles.gamesImageWrapper,
                          ClanStyles.sliderDesktop,
                          ClanStyles.clanSliderMob
                        ].join(" ")}
                      >
                        <Image
                          src={carousel.image}
                          alt="Aurory"
                          className={ClanStyles.titanImage}
                        />
                      </div>
                      <div
                        className={[
                          Styles.gamesContent,
                          ClanStyles.gamesHeading
                        ].join(" ")}
                      >
                        <div className={Styles.gamesHeading}>
                          <h3 className={ClanStyles.title_name}>{carousel.title}</h3>
                          <h4 className={ClanStyles.description}>
                            "{carousel.description}"
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

      <section className={[ClanStyles.stepsSection,ClanStyles.topGapTestimonial].join(" ")}>
        <div className="container">
          <div className={ClanStyles.steps}>
            <h2 className="gradientText">How does it work?</h2>
            <div className={ClanStyles.stepsWrapper}>
              <div className={ClanStyles.stepsText}>
                <Image
                  className={ClanStyles.stepsArrow}
                  src={DownArrowGradient}
                  alt="Application"
                />
                <Image
                  width="34"
                  height="34"
                  className={ClanStyles.stepsIcon}
                  src={Application}
                  alt="Application"
                />
                <p>Online Application</p>
              </div>
              <div className={ClanStyles.stepsText}>
                <Image
                  className={ClanStyles.stepsArrow}
                  src={DownArrowGradient}
                  alt="Application"
                />
                <Image
                  width="34"
                  height="34"
                  className={ClanStyles.stepsIcon}
                  src={Call}
                  alt="Call"
                />
                <p> In Person Call </p>
              </div>
              <div className={ClanStyles.stepsText}>
                <Image
                  className={ClanStyles.stepsArrow}
                  src={DownArrowGradient}
                  alt="Application"
                />
                <Image
                  width="34"
                  height="34"
                  className={ClanStyles.stepsIcon}
                  src={Hand}
                  alt="Onboarding"
                />
                <p>Physical Onboarding</p>
              </div>
              <div className={ClanStyles.stepsText}>
                <Image
                  className={ClanStyles.stepsArrow}
                  src={DownArrowGradient}
                  alt="Application"
                />
                <Image
                  width="34"
                  height="34"
                  className={ClanStyles.stepsIcon}
                  src={Game}
                  alt="Game"
                />
                <p>Web 3 Game Training</p>
              </div>
              <div className={ClanStyles.stepsText}>
                <Image
                  className={ClanStyles.stepsArrow}
                  src={DownArrowGradient}
                  alt="Application"
                />
                <Image
                  width="34"
                  height="34"
                  className={ClanStyles.stepsIcon}
                  src={Trophy}
                  alt="Trophy"
                />
                <p>Conduct Tournaments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={ClanStyles.registerTitanSection}>
        <div className={ClanStyles.registerTitan}>
          <h3>
            Earn upto <span>₹15,000</span> a month!
          </h3>
          <Link href="/register">
            <div className={[ClanStyles.registerTitanBtn, "commonBtn"].join(" ")}>
              <span>Join as Clan Chief</span>
              <Image src={BtnArrow} alt="next" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ClanCheif;
