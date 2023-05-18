import React from "react";
import PreviousPage from "components/previousPage/index";
import Image from "next/image";
import Link from "next/link";

import Gameplay1 from 'assets/images/quests/colexion/gameplay1.png';
import Gameplay2 from 'assets/images/quests/colexion/gameplay2.png';
import Gameplay3 from 'assets/images/quests/colexion/gameplay3.png';
import Gameplay4 from 'assets/images/quests/colexion/gameplay4.png';
import Gameplay5 from 'assets/images/quests/colexion/gameplay5.png';
import Gameplay6 from 'assets/images/quests/colexion/gameplay6.png';
import Gameplay7 from 'assets/images/quests/colexion/gameplay7.jpeg';
import Gameplay8 from 'assets/images/quests/colexion/gameplay8.jpeg';
import Styles from "pages/article-details/article.module.scss";

const Colexion = () => {
  return (
    <section className={Styles.article}>
      <PreviousPage previouspage="/quests" title="Colexion" />
      <div className="container">
        <div className={Styles.articleWrapper}>
          <div className={Styles.articleHeading}>
            <h3>Colexion Quests (Micro-Site)</h3>
          </div>
          <p>Cricket Fantasy Game.</p>
          <h4>Signing UP</h4>
          <p>If you already have a Colexion account, no need to create a new one</p>
          <ol>
            <li>Click on this IndiGG Colexion official link - <p className={Styles.linkText}><Link href="https://signup-indigg.colexion.io/">https://signup-indigg.colexion.io/</Link></p></li>
            <li>After entering the website ➡ Fill in your details asked ➡ Click on “Signup and Play”
                <div className={Styles.imgArtcl}>
                    <Image src={Gameplay6} alt="gameplay" />
                </div>
            </li>
            <li>Then you need to create your account by entering your email ID
                <div className={Styles.imgArtcl}>
                    <Image src={Gameplay7} alt="gameplay" />
                </div>
            </li>
            <li>After you put your email id then you have to verify it with the OTP received in your provided email id , then you set your password and Submit .
            <div className={Styles.imgArtcl}>
                    <Image src={Gameplay8} alt="gameplay" />
                </div>
            </li>
            <li>If you are on mobile, it will automatically ask to download the TopRun app, it is an APK file </li>
            <li>If you are on your laptop or PC, you can play it online without downloading on <Link href="https://colexion.io/">colexion.io</Link></li>
            <li>After installing the game, sign in using your registered email address there and Click on Next ➡ Enter the 6-digit otp you received in your mail ➡ Enter a password and confirm the password and then click on submit. You will receive 10$ and 5 FREE NFTs by signing up through IndiGG.</li>
            
            {/* <p>You will receive 10$ and 5 FREE NFTs by signing up through IndiGG.</p>
            <h4>Claiming process?</h4>
            <p>Every participant needs to create a team for two separate matches. Each of the match needs to be done on a separate day. Once the participant has finished two matches before the 30th of January, to be eligible for the rewards, they <b>MUST FILL THIS FORM WITH CORRECT DETAILS.</b></p>
            <p className={Styles.linkText}><Link href="https://forms.gle/kbmmJuRbB7CY4u4a9">https://forms.gle/kbmmJuRbB7CY4u4a9</Link></p> */}


          </ol>
          <h4>Gameplay</h4>
          <ol>
            <li><b>Select the appropriate match:</b> From the list of forthcoming games, pick the game you want to play. Select the contest with a $0 entry fee.
                <div className={Styles.imgArtcl}>
                    <Image src={Gameplay1} alt="gameplay" />
                </div>
            </li>
            <li>
                <b>Create Team: </b> Create your fantasy team by choosing players from the 100 credits offered.
                <div className={Styles.imgArtcl}>
                    <Image src={Gameplay2} alt="gameplay" />
                </div>
            </li>
            <li>
                <b>Attach Cards:</b> To continue, attach 2 cards. The NFT cards you get during sign-up can be attached here. Your NFT cards are shown in the My Cards section.
                <div className={Styles.imgArtcl}>
                    <Image src={Gameplay3} alt="gameplay" />
                </div>
            </li>
            <li>
                <b>Join the Contest:</b> Click on the Join button. Pick the teams you've formed, then click "Join."
                <div className={Styles.imgArtcl}>
                    <Image src={Gameplay4} alt="gameplay" />
                </div>
            </li>
            {/* <li>
                <b>Claim your Winnings:</b> After the game is over, check the scorecard to see your rankings. You have the option of cashing out your wins or acquiring XP points and using those to buy Cards.
                <div className={Styles.imgArtcl}>
                    <Image src={Gameplay5} alt="gameplay" />
                </div>
            </li> */}
            {/* <li>Participate in the 0$ contest of all matches available to maximize your earnings. On average, a player can earn $0.75 to $1 per match they participate. Players with good knowledge of cricket fantasy games can earn more.</li> */}
          </ol>
          <h4>REWARDS</h4>
            <div style={{fontSize: '2.4rem'}}>Each player will get Rs 50 from IndiGG on completion of this quest. Average time it takes to do this is 5 minutes. Alongside this, you can keep earning $$ through Colexion’s in-game leaderboard. </div>
          <h4 style={{marginTop:10}}>{`Claiming Rewards <> Most Important`}</h4>
            <div style={{fontSize: '2.4rem'}}>Every participant needs to create a team for two separate matches. Each of the match needs to be done on a separate day. Once the participant has finished two matches before the 30th of January, to be eligible for the rewards, they MUST FILL THIS FORM WITH CORRECT DETAILS. </div>
            <p className={Styles.linkText}><Link href="https://docs.google.com/forms/d/e/1FAIpQLSdkXitFxpL07klNB4LBEJYd4CQiUodSoVeC5vSm0MuUCJCamA/viewform">https://docs.google.com/forms/d/e/1FAIpQLSdkXitFxpL07klNB4LBEJYd4CQiUodSoVeC5vSm0MuUCJCamA/viewform</Link></p>
        </div>
      </div>
    </section>
  );
};

export default Colexion;
