import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./styles.css";

interface Props {
    data: any;
}

const className = "NewsProfile";

const NewsProfile: React.FC<Props> = ({ data }) => {

  // const UsersPage = () => {
  //   return (
  //     <>
  //       <h3>News Description</h3>
  //       {users.map((user, index) => (
  //         <h5 key={index}>
  //           <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
  //         </h5>
  //       ))}
  //     </>
  //   );
  // };

  function Index() {
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
              <Link to="/content/">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route exact path="/content/" component={About} />
      </div>
    </Router>
  );
};

export default NewsProfile;
