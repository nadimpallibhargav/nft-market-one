import React from "react";
import Image from "next/image";
import Link from "next/link";

import Discord from "assets/images/footer/discord.svg";
import Twitter from "assets/images/footer/twitter.svg";
import Youtube from "assets/images/footer/youtube.svg";
import Insta from "assets/images/footer/instagram.svg";
import Substack from "assets/images/footer/substack.svg";

import Styles from "components/footer/footer.module.scss";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className="container">
        <div className={Styles.footerContent}>
          <h2 className={Styles.footer_community}>
            Join Our Community and Earn Rewards
          </h2>
          <div className={Styles.socialShareIcons}>
            <Link href="https://discord.com/invite/igg" className="linkTag">
              <a>
                <Image src={Discord} alt="discord" />
              </a>
            </Link>
            <Link href="https://twitter.com/IndiGG_DAO">
              <a>
                <Image src={Twitter} alt="Twitter" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCyg5IXOnX8NGtMhju3UbnnA">
              <a>
                <Image src={Youtube} alt="Facebook" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/indigg_dao/">
              <a>
                <Image src={Insta} alt="Instagram" />
              </a>
            </Link>
            <Link href="https://substack.com/profile/73231811-indigg?r=17lm0z&utm_campaign=profile&utm_medium=web">
              <a>
                <Image src={Substack} alt="Substack" />
              </a>
            </Link>
          </div>
          <div className={Styles.footerLinks}>
            <Link href="terms-and-conditions">
              <a>T & C</a>
            </Link>
            <label>|</label>
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
            <label>|</label>
            <Link href="/risk-disclosure-policy">
              <a>Risk disclosure policy</a>
            </Link>
            <label>|</label>
            <Link href="/aml-kyc-policy">
              <a>AML & KYC policy</a>
            </Link>
            <label>|</label>
            <Link href="mailto:contact@indi.gg">
              <a>Contact Us</a>
            </Link>
            <label>|</label>
            <Link href="https://www.linkedin.com/company/indigg-dao/jobs/">
              <a>Careers</a>
            </Link>
          </div>
          <div className={Styles.copyRights}>
            <p>
              <b>© Indi Guild Pvt. Ltd</b> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
