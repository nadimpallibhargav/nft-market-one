import React from "react";
import Styles from "pages/article-details/article.module.scss";
import PreviousPage from "components/previousPage/index";
import Link from "next/link";
import Image from "next/image";
import connectWallet from "assets/images/quests/bullieverse/bulliesConnect.png";
import connectWalletButton from "assets/images/quests/bullieverse/bulliesConnectWalletButton.png";
import connectWalletNext from "assets/images/quests/bullieverse/bulliesnextButton.png";
import createAccount from "assets/images/quests/bullieverse/bulliesCreateAccount.png";
import verifyAccount from "assets/images/quests/bullieverse/bulliesverify.png";
import homePage from "assets/images/quests/bullieverse/bullieshomepage.png";
import gamePlay from "assets/images/quests/bullieverse/bulliesgameplay.png";
import Necrodemic from "assets/images/quests/bullieverse/bulliesNecrodemic.png";
import downloadOptions from "assets/images/quests/bullieverse/bulliesDownloadOptions.png";
import downloadBegins from "assets/images/quests/bullieverse/bulliesDownloadbegins.png";
import questTable from "assets/images/quests/bullieverse/questTable.png";
import questTableRanking from "assets/images/quests/bullieverse/questranking.png";

const index = () => {
  return (
    <section className={Styles.article}>
      <PreviousPage previouspage="/quests" title="Bullieverse" />
      <div className="container">
        <div className={Styles.articleWrapper}>
          <div className={Styles.articleHeading}>
            <h3>Necrodemic</h3>
            <p className={Styles.para_article}>
              Necrodemic is a Free to Play survival based thriller. Defeat zombie
              bears to earn essence. Essence can be used to purchase more powerful
              weapons, ammo and perks that increases your chances of survival. Based
              on the position on the leaderboard by 30th Jan you will be eligible for
              rewards! You are guaranteed to earn upto 240 rupees by just playing for
              10 minutes!
            </p>
          </div>
          <div>
            <h4>Gameplay</h4>
            <div className={Styles.videoWrapper}>
              <iframe
                width="100%"
                height="200px"
                src="https://www.youtube.com/embed/ICDw67bZ5a4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div>
            <h4>Quest reward Structure :</h4>
            <ul>
              <li>The levels mentioned below are the “Zombie Wave” level.</li>
              <li>
                You have to survive 10 zombie waves to qualify for “Level 10” quest
                reward.
              </li>
            </ul>
            <div className={Styles.imgArtcl}>
              <Image src={questTable} alt="questTable" />
            </div>
          </div>
          <div>
            <h4>Guess what? There’s more! </h4>
            <p>
              Additionally you can also earn from the In-game point driven
              leaderboard contest IndiGG is hosting!
            </p>
            <p>The higher you rank the more you earn! </p>
            <div className={Styles.imgArtcl}>
              <Image src={questTableRanking} alt="questTableRanking" />
            </div>
          </div>
          <div>
            <h4>How to get started?</h4>
            <p>Get started by following the steps mentioned below.</p>
            <ol>
              <li>
                Visit the site
                <div>
                  <p className={Styles.linkText}>
                    <Link href="https://bullieverse.com/games/necrodemic/competitions">
                      https://bullieverse.com/games/necrodemic/competitions
                    </Link>
                  </p>
                  <div className={Styles.videoWrapper}>
                    <iframe
                      width="100%"
                      height="500px"
                      src="https://bullieverse.com/games/necrodemic/competitions"
                      frameborder="0"
                    ></iframe>
                  </div>
                  <div className={Styles.videoWrapper}>
                    <iframe
                      width="100%"
                      height="500px"
                      src="https://app.bullieverse.com/auth/signup?utm_source=INDIOGRNT"
                      frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </li>
              <li>
                <h4>
                  Open the website and you will be come across a prompt “Connect
                  Wallet”.
                </h4>
                <div className={Styles.imgArtcl}>
                  <Image src={connectWallet} alt="ConnectWallet" />
                </div>
              </li>
              <li>
                <h4>
                  Press on “Connect Wallet” button, select metamask and you will get
                  a pop up in metamask. Press on sign button.
                </h4>
                <div className={Styles.imgArtcl}>
                  <Image src={connectWalletButton} alt="ConnectWalletButton" />
                </div>
              </li>
              <li>
                <h3>After connecting the wallet press on the “Next” button.</h3>
                <div className={Styles.imgArtcl}>
                  <Image src={connectWalletNext} alt="ConnectWalletNext" />
                </div>
              </li>
              <li>
                <h3>You have to fill out the details and create an account.</h3>
                <div className={Styles.imgArtcl}>
                  <Image src={createAccount} alt="CreateAccount" />
                </div>
              </li>
              <li>
                <h3>
                  You will receive a verification code on your registered email ID.{" "}
                </h3>
                <p>Enter the code and you account is ready.</p>
                <div className={Styles.imgArtcl}>
                  <Image src={verifyAccount} alt="verifyAccount" />
                </div>
              </li>
              <li>
                <h3>You will see Home page.</h3>
                <div className={Styles.imgArtcl}>
                  <Image src={homePage} alt="homePage" />
                </div>
              </li>
              <li>
                <h3>Press on game button</h3>
                <div className={Styles.imgArtcl}>
                  <Image src={gamePlay} alt="gamePlay" />
                </div>
              </li>
              <li>
                <h3>
                  After that you will see this web interface. Here you have to click
                  on “Necrodemic”
                </h3>
                <div className={Styles.imgArtcl}>
                  <Image src={Necrodemic} alt="Necrodemic" />
                </div>
              </li>
              <li>
                <h3>
                  You will see the “Download option” on the launcher. You are ready
                  to go now.
                </h3>
                <div className={Styles.imgArtcl}>
                  <Image src={downloadOptions} alt="downloadOptions" />
                </div>
              </li>
              <li>
                <h3>
                  Once the download begins, navigate to this contest below and enter
                  the contest.
                </h3>
                <div className={Styles.imgArtcl}>
                  <Image src={downloadBegins} alt="downloadBegins" />
                </div>
              </li>
            </ol>
            <h4>NOTE : Code to enter the IndiGG Competition is “ IndiCen ”</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
