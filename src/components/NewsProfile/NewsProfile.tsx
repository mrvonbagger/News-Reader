import * as React from "react";
import "./styles.css";

interface Props {
    data: any;
}

const className = "NewsProfile";

const NewsProfile: React.FC<Props> = ({ data }) => {
  if (!data.newsItem.url) {
      return <div>Not found</div>;
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
