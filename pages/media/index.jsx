import React from "react";
import Image from "next/image";
import Link from "next/link";

import Suggestion from "components/suggestion/index";

import Featured from "assets/images/content/featured.png";

import Styles from "pages/media/content.module.scss";

const Content = () => {
  return (
    <>
      <section className={Styles.featured}>
        <div className="container">
          <h2 className={Styles.featuredHeading}>Featured</h2>
          <Link href="/video-details/Revoland Game Play | Featuring RDA & Orangutan">
            <div className={[Styles.featuredVideo, Styles.featuredVideoParent].join(" ")}>
              <div className={Styles.featuredVideoImage}>
                {/* <Image src={Featured} alt="video" /> */}
                <iframe
                  width="100%"
                  height="300px"
                  src={
                    "https://www.youtube.com/embed/965EFohY0fM" +
                    `?controls=1`
                  }
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <p>#Gameplay</p>
              <h3>Revoland Game Play | Featuring RDA & Orangutan</h3>
            </div>
          </Link>
        </div>
      </section>
      <section className={[Styles.featured, Styles.featuredContent].join(" ")}>
        <div className="container">
          <Suggestion title="Wiki" />
        </div>
      </section>
    </>
  );
};

export default Content;
