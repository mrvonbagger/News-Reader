import * as React from "react";
import "./styles.css";

interface Props {
    data: any;
}

const className = "NewsProfile";

const NewsProfile: React.FC<Props> = ({ data }) => {
  console.log(data)
  if (!data.newsItem.url) {
      return <div>Not found</div>;
    }

  return (
    <a href={data.newsItem.url}>
      <div className={className}>
        <h1 className={`${className}__title`}>
          {data.newsItem.title}
        </h1>
        <p className={`${className}__description`}>{data.newsItem.content}</p>
        {!!data.newsItem.url && !!data.newsItem.img && (
        <div className={`${className}__image-list`}>
          {<img src={data.newsItem.img} className={`${className}__image`} key={data.newsItem.img}/>}
        </div>
      )}
    </div>
    </a>
    );
  };

export default NewsProfile;
