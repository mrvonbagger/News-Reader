import * as React from "react";
import "./styles.css";

interface Props {
    data: any;
    comment?: string;
}

const className = "NewsProfile";

const NewsProfile: React.FC<Props> = ({ data }) => {
  console.log(data);
  if (!data.newsItem.url) {
      return <div>Not found</div>;
    }

  return (
      <div className={className}>
        <a href={data.newsItem.url}>
        <div className={`${className}__image-list`}>
          {<img src={data.newsItem.img} className={`${className}__image`} key={data.newsItem.img}/>}
        </div>
        <h1 className={`${className}__title`}>
            {data.newsItem.title}
        </h1>
        </a>
    </div>
    );
  };

export default NewsProfile;
