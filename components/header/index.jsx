import React, { useLayoutEffect, useReducer, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BrandLogo from "assets/images/header/indiggLogoNew.svg";
import Home from "assets/images/header/homeIcon.svg";
import Content from "assets/images/header/contentIcon.svg";
import Games from "assets/images/header/gamesIcon.svg";
import Quest from "assets/images/header/questsicon.svg";
import Tournment from "assets/images/header/tournmentIcon.svg";
import BtnArrow from "assets/images/forwardDoubleArrow.svg";
import styles from "components/header/header.module.scss";
import { useRouter } from "next/router";

const Header = () => {
  const route = useRouter();
  console.log(route);

  // useLayoutEffect(() => {
  //   !path && setPath(window.location?.href.split("/")[3]);
  // }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logoWrapper}>
          <Link href="/">
            <a>
              <Image src={BrandLogo} width={60} height={60} alt="Brand Logo" />
            </a>
          </Link>
          <Link href="/college-titan">
            <div className={styles.registerTitan}>
              <p>Clan Chief Program</p>
              <a className={styles.registerTitanBtnAnimation}>
                <div className={styles.headerCta}>
                  <span className={styles.headerCtaText}>Join</span>
                  <Image src={BtnArrow} alt="next" />
                </div>
              </a>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.tabScroller}>
        <Link href="/">
          <a>
            <div className={`${route.asPath === "/" ? styles.active : ""}`}>
              <div className={styles.tabLink}>
                {route.asPath === "/" && (
                  <div>
                    <Image src={Home} alt="home" />
                  </div>
                )}
                <span>Home</span>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/quests">
          <a>
            <div className={`${route.asPath === "/quests/" ? styles.active : ""}`}>
              <div className={styles.tabLink}>
                {route.asPath === "/quests/" && (
                  <div>
                    <Image src={Quest} alt="home" />
                  </div>
                )}
                <span>Quests</span>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/tournaments">
          <a>
            <div
              className={`${route.asPath === "/tournaments/" ? styles.active : ""}`}
            >
              <div className={styles.tabLink}>
                {route.asPath === "/tournaments/" && (
                  <div>
                    <Image src={Tournment} alt="home" />
                  </div>
                )}
                <span>Tournaments</span>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/games">
          <a href="#game">
            <div
              className={`${route.asPath === "/games/" ? styles.active : ""}`}
              id="game"
            >
              <div className={styles.tabLink}>
                {route.asPath === "/games/" && (
                  <div>
                    <Image src={Games} alt="Games" />
                  </div>
                )}
                <span>Games</span>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/media">
          <a href="#media">
            <div
              className={`${route.asPath === "/media/" ? styles.active : ""}`}
              id="media"
            >
              <div className={styles.tabLink}>
                {route.asPath === "/media/" && (
                  <div>
                    <Image src={Content} alt="content" />
                  </div>
                )}
                <span>Wiki</span>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
