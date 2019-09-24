import * as React from "react";
import "./styles.css";
import Comment from "../Comments/comments";

interface Props {
    data: any;
    singleItem: boolean;
    NewsID: string,
}

const className = "NewsProfile";

const NewsProfile: React.FC<Props> = ({ data, singleItem, NewsID }) => {
  if (!data.newsItem.url) {
      return <div>Not found</div>;
    }

  if (singleItem) {

    const className = "NewsContent";
    return (
      <div className={className}>
        
        <div className={`${className}__image-list`}>
          {<img src={data.newsItem.img} className={`${className}__image`} key={data.newsItem.img}/>}
        </div>
        <h1 className={`${className}__title`}>
            {data.newsItem.title}
        </h1>
        <p className={`${className}__description`}>{data.newsItem.content}</p> 
        <p onClick={() => window.open(data.newsItem.url, '_blank')}>Read More Here</p>
        <Comment newsId={NewsID}/>
    </div>
    )
  }

  return (
      <div className={className}>
        
        <div className={`${className}__image-list`}>
          {<img src={data.newsItem.img} className={`${className}__image`} key={data.newsItem.img}/>}
        </div>
        <h1 className={`${className}__title`}>
            {data.newsItem.title}
        </h1>
       
    </div>
    );
  };

export default NewsProfile;
