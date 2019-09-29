import * as React from "react";
import Comment from "../Comments/Comment";
import "./styles.css";

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

        <div>
          <h1 className={`${className}__title`}>
              {data.newsItem.title}
          </h1>
          
          <div className={`${className}__image-list`}>
            {<img src={data.newsItem.img} alt="Image not found" className={`${className}__image`} key={data.newsItem.img}/>}
          </div>
        </div>

        <div className="Content_description">

          <a href={data.newsItem.url}>
            <div className={`${className}__description`}>{data.newsItem.content}</div> 
          </a>

        </div>

        <div className="CommentContainer">

          <div className="CommentHeader">Add a Comment</div>

          <Comment newsId={NewsID}/>

          {data.newsItem.comments.map( 
            (comment: any, i:any) => 
                ( 
                <div className="Comment">
                  <div className="CommentEmail">
                    {comment.email} 
                  </div>
                  <div className="CommentContent">
                    {comment.content} 
                  </div>
                </div>
          
                ), 
            )} 

        </div>

    </div>
    )
  }

  return (

      <div className={className}>
        
        <div className={`${className}__image-list`}>
          {<img src={data.newsItem.img} alt="Image not found" className={`${className}__image`} key={data.newsItem.img}/>}
        </div>
        <h1 className={`${className}__title`}>
            {data.newsItem.title}
        </h1>
       
    </div>
    );
  };

export default NewsProfile;
