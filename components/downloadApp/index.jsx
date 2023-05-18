import React from "react";
import Link from "next/link";
import Image from "next/image";

import Download from "assets/images/Discord_indiGG.svg";

import Styles from "components/downloadApp/download.module.scss";

const DownloadApp = () => {
  return (
    <div className={Styles.download}>
      <Link href="https://discord.com/invite/igg">
        <a>
          <div className={Styles.downloadWrapper}>
            <div className={Styles.downloadBtn}>
              <Image src={Download} alt="google play" />
            </div>
            <p>Join Us</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default DownloadApp;
