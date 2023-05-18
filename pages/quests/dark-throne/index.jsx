import React from "react";
import Image from "next/image";
import PreviousPage from "components/previousPage/index";

import Earn from 'assets/images/quests/earn.png';
import Leader from 'assets/images/quests/Leaderboard.png';
import Quest1 from 'assets/images/quests/quest1.png';
import Styles from "pages/article-details/article.module.scss";
import Link from "next/link";

const DarkThrone = () => {
  return (
    <section className={Styles.article}>
      <PreviousPage previouspage="/quests" title="Dark Throne" />
      <div className="container">
        <div className={Styles.articleWrapper}>
          <div className={Styles.articleHeading}>
            <h3>Dark Throne Quests (IndiGG)</h3>
          </div>
          <p>
          Dark Throne is an RPG game in which you will have to fight monsters and level up. Dates for first phase of Dark Throne Quests is 11th Jan - 25th Jan. You are guaranteed to earn Rs 125 if you play till stage 7, which takes 30 minutes.
          </p>
          <p>Gameplay Video - </p>
          <div className={Styles.videoWrapper}>
            <iframe
              width="100%"
              height="200px"
              src="https://www.youtube.com/embed/W47JgccB86E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p>What you can earn</p>
          <div className={Styles.imgArtcl}>
            <Image src={Earn} alt="earn" />
          </div>
          <p>All IndiGG players are automatically eligible to take part in a private leaderboard. The higher you finish in the leaderboard, the more you earn. </p>
          <div className={Styles.imgArtcl}>
            <Image src={Leader} alt="Leaderboard" />
          </div>
          <h4>Steps</h4>
          <ol>
            <li>Install the game via either Google Play Store or Apple App Store
                <p className={Styles.linkText}>Play Store: <Link href="https://play.google.com/store/apps/details?id=io.epicleague.darkthrone">https://play.google.com/store/apps/details?id=io.epicleague.darkthrone</Link></p>
                <p className={Styles.linkText}>App Store: <Link href="https://apps.apple.com/us/app/dark-throne-the-queen-rises/id6443415710">https://apps.apple.com/us/app/dark-throne-the-queen-rises/id6443415710 </Link></p>
            </li>
            <li>Register via email or google/apple login - USE REFERAL CODE “IndiGG”</li>
            <li>Take the screenshot of your maximum level/stage achieved and upload it in the form below (See Image)</li>
          </ol>
          <div className={Styles.imgArtcl}>
            <Image src={Quest1} alt="Leaderboard" />
          </div>
          <h4>Claiming Rewards For Players/Participants</h4>
          <p>Once you have completed the quests, please fill the following:</p>
          <p className={Styles.linkText}><Link href="https://docs.google.com/forms/d/e/1FAIpQLSeMBJoOn_Vdz9OaoDX7QHF9Puht3Qb0BTAlR0MqK8XacxXGDA/viewform">https://docs.google.com/forms/d/e/1FAIpQLSeMBJoOn_Vdz9OaoDX7QHF9Puht3Qb0BTAlR0MqK8XacxXGDA/viewform</Link></p>
        </div>
      </div>
    </section>
  );
};

export default DarkThrone;
