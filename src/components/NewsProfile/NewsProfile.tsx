import * as React from "react";
import "./styles.css";

interface Props {
    data: any;
    singleItem: boolean;
}

const className = "NewsProfile";

const NewsProfile: React.FC<Props> = ({ data, singleItem }) => {
  if (!data.newsItem.url) {
      return <div>Not found</div>;
    }

  function openInNewTab(url: string) {
    var win = window.open(url, '_blank');
  }

  if (singleItem) {
    return (
      <div className={className}>
        
        <div className={`${className}__image-list`}>
          {<img src={data.newsItem.img} alt="Image for news story" className={`${className}__image`} key={data.newsItem.img}/>}
        </div>
        <h1 className={`${className}__title`}>
            {data.newsItem.title}
        </h1>
        <p className={`${className}__description`}>{data.newsItem.content}</p> 
        <p onClick={() => window.open(data.newsItem.url, '_blank')}>Read More Here</p>
    </div>
    )
  }

  return (
      <div className={className}>
        
        <div className={`${className}__image-list`}>
          {<img src={data.newsItem.img} alt="Image for news story" className={`${className}__image`} key={data.newsItem.img}/>}
        </div>
        <h1 className={`${className}__title`}>
            {data.newsItem.title}
        </h1>
       
    </div>
    );
  };

export default NewsProfile;
