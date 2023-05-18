import React from "react";
import Link from "next/link";
import Image from "next/image";

import Backword from "assets/images/backward.svg";

import Styles from "components/previousPage/previousPage.module.scss";

const PreviousPage = ({ previouspage, title = "content" }) => {
  return (
    <>
      <div className={Styles.previous}>
        <div className={Styles.previousLinkWrapper}>
          <div className={Styles.previousLink}>
            <Link href={previouspage}>
              <Image src={Backword} alt="back" />
            </Link>
          </div>
          <span>{title}</span>
        </div>
      </div>
    </>
  );
};

export default PreviousPage;
