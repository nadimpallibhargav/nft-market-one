import Slider from "react-slick";
import Image from "next/image";

import Discover from "assets/images/home/discover.png";
import Grow from "assets/images/home/grow.png";
import Inspire from "assets/images/home/inspire.png";

import Styles from "styles/home-screen.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import BtnArrow from "assets/images/forwardDoubleArrow.svg";
import { carouselData, settings } from "data/home/home";

const Home = () => {
  return (
    <>
      {/* Section Carousel */}
      <section className={Styles.carousel}>
        <div className={Styles.carouselContainer}>
          <Slider {...settings}>
            {carouselData.map((carousel, i) => {
              return (
                <div key={i}>
                  <div className={Styles.games}>
                    <div className={[Styles.gamesImageWrapper,Styles.game_wrapper_Lap].join(" ")}>
                      <Image src={carousel.image} alt="Aurory" />
                    </div>
                    <div className={Styles.gamesContent}>
                      <div className={Styles.gamesHeading}>
                        <div className={Styles.gamesLogo}>
                          <h3 className={Styles.home_title_left}>
                            {carousel.title}
                          </h3>
                        </div>
                        <p>{carousel.description}</p>
                      </div>
                      <div className={Styles.gamesButton}>
                        <Link href={carousel.link}>
                          <a className="commonBtn">
                            <div>
                              {carousel.linkText} <Image src={BtnArrow} alt="next" />
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* Community Section */}
      <section className={Styles.community}>
        <div className="container">
          <div className={Styles.communityContent}>
            <div className={Styles.heading}>
              <h2>
                India's Largest <br /> Web3 Gaming Community
              </h2>
            </div>
            <div className={Styles.communityCardContainer}>
              <div className={Styles.communityCard}>
                <div style={{ maxWidth: "48px", margin: "auto" }}>
                  <Image src={Discover} alt="discover" />
                </div>
                <h3 className={Styles.title_playContent}>Discover</h3>
                <p>Play Top Web3 Games</p>
              </div>
              <div className={Styles.communityCard}>
                <div style={{ maxWidth: "48px", margin: "auto" }}>
                  <Image src={Grow} alt="grow" />
                </div>
                <h3 className={Styles.title_playContent}>Grow</h3>
                <p>Learn & Earn</p>
              </div>
              <div className={Styles.communityCard}>
                <div style={{ maxWidth: "48px", margin: "auto" }}>
                  <Image src={Inspire} alt="Inspire" />
                </div>
                <h3 className={Styles.title_playContent}>Inspire</h3>
                <p>Achieve Glory</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
