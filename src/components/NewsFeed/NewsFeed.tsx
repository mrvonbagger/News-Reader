import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NewsList from "../NewsList";
import NewsProfile from "../NewsProfile";

const NewsFeed = () => {

    function Index() {
        return <NewsList />
    }

    function Content() {
        return <NewsProfile NewsListRow=""/>
    }

    return (
        <Router>
            <div className="navbar">
                <div className="home"><Link to="/">Home</Link></div>
                <div className="header">News Reader</div>
            </div>
    
            <Route path="/" exact component={Index} />
            <Route path="/content/" component={Content} />
        </Router>
    );
};

export default NewsFeed;
