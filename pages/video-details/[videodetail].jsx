import { useRouter } from "next/router";
import React from "react";

import Suggestion, { contentData } from "components/suggestion/index";
import PreviousPage from "components/previousPage";

import Styles from "pages/media/content.module.scss";
import VideoStyles from "pages/video-details/video.module.scss";

const VideoDetails = () => {
  const route = useRouter();
  const filteredVideo = contentData.filter((item) => {
    return item.title === route.query?.videodetail;
  });

  return (
    <>
      <PreviousPage previouspage="/media" title="Wiki" />
      <section className={[Styles.featured, VideoStyles.videoSection].join(" ")}>
        <div className="container">
          {filteredVideo.map((video) => {
            return (
              <div
                className={[Styles.featuredVideo, Styles.featuredVideoDetail].join(
                  " "
                )}
              >
                <div className={Styles.videoWrapper}>
                  <iframe
                    width="100%"
                    height="200px"
                    src={video.video + `?controls=1`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <p>{video.hashTags}</p>
                <h3>{video.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className={[Styles.featured, Styles.featuredContent].join(" ")}>
        <div className="container">
          <Suggestion title="Suggested" />
        </div>
      </section>
    </>
  );
};

export default VideoDetails;
