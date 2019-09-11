import * as React from "react";
import { NewsItemQueryQuery } from "../../generated/graphql";
import "./styles.css";

interface Props {
    data: NewsItemQueryQuery;
}

const className = "NewsProfile";

const NewsProfile: React.FC<Props> = ({ data }) => {
    if (!data.newsItem) {
      return <div>No news available</div>;
    }

    return (
      <div className={className}>
        <h1 className={`${className}__title`}>
          {data.newsItem.title}
        </h1>
        <p className={`${className}__description`}>{data.newsItem.content}</p>
        {!!data.newsItem.url && !!data.newsItem.img && (
        <div className={`${className}__image-list`}>
          {<img src={data.newsItem.img} className={`${className}__image`} key={data.newsItem.img} />}
        </div>
      )}
    </div>
    );
  };

export default NewsProfile;
