import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./styles.css";

interface Props {
    data: any;
}

const NewsProfile: React.FC<Props> = ({ data }) => {

  const className = "NewsProfile";

  function Index() {

    const className = "NewsProfile";

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
  }

  function About() {

    const className = "NewsDescription";

    return (
      <div className={className}>
        <div className={`${className}__image-list`}>
          {<img src={data.newsItem.img} className={`${className}__image`} key={data.newsItem.img}/>}
        </div>
        <h1 className={`${className}__title`}>
            {data.newsItem.title}
        </h1>
        <p className={`${className}__description`}>{data.newsItem.content}</p>
    </div>
    );
  }

  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={"/" + data.newsItem.title.split(" ").join("_") + "/"}>Content</Link>
            </li>
          </ul>
        </nav>
      </div>

        <Route path="/" component={Index} />
        <Route path={"/" + data.newsItem.title.split(" ").join("_") + "/"} component={About} />

    </Router>
  );
};

export default NewsProfile;
