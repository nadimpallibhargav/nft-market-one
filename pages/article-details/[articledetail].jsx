import React from "react";
import Image from "next/image";

import Suggestion, { contentData } from "components/suggestion/index";
import PreviousPage from "components/previousPage";

import ArticleOne from "assets/images/article/articleOne.png";
import ArticleTwo from "assets/images/article/articleTwo.png";

import Styles from "pages/article-details/article.module.scss";
import contentStyles from "pages/media/content.module.scss";
import { useRouter } from "next/router";

const Article = () => {
  const route = useRouter();
  const filteredArticle = contentData.filter((item) => {
    return item.title === route.query?.articledetail;
  });

  return (
    <>
      <PreviousPage previouspage="/media" title="Media" />
      <section className={Styles.article}>
        <div className="container">
          <div className={Styles.articleWrapper}>
            {filteredArticle.map((val) => {
              return (
                <>
                  <div className={Styles.articleHeading}>
                    <div className={Styles.articleThumbnail}>
                      <Image src={val.image} alt="article" />
                    </div>
                    <p>{val.hashTags}</p>
                    <h3>{val.title}</h3>
                  </div>
                  {val.article?.map((para) => {
                    return (
                      <>
                        <h4>{para.heading}</h4>
                        {para.description.map((des) => {
                          return <p>{des}</p>;
                        })}
                        <Image src={para.detailImage} alt="article" />
                      </>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      </section>

      <section className={contentStyles.featured}>
        <div className="container">
          <Suggestion title="Suggested" />
        </div>
      </section>
    </>
  );
};

export default Article;
