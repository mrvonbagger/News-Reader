import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, HashRouter, Link, Route } from "react-router-dom";
import { NewsListqueryQuery } from "../../generated/graphql";
import NewsProfileindex from "../NewsProfile/index";
import "./styles.css";

interface Props {
    data: NewsListqueryQuery;
}

const className = "NewsList";

const NewsList: React.FC<Props> = ({ data }) => {

    const [newsID, setID] = useState(window.location.pathname.split(":")[1]);

    function Index() {

        return (
            <div className={`${className}__list`}>

                {!!data.newsList.rows &&
                    data.newsList.rows.map(
                        (row, i) =>
                            !!row && (

                                <Link to={`/content/:${row.id}`}
                                onClick={() => setID(row.id)}>

                                    <li key={i}
                                        className={`${className}__item`}>
                                        <NewsProfileindex NewsListRow={row.id} singleItem={false}/>
                                    </li>

                                </Link>
                            )
                        )
                    }
            </div>
        );
    }
      
    function Content() {

        return (
            <NewsProfileindex NewsListRow={newsID} singleItem={true}/>
        );
    }


    return (
        <Router>

            <div className="navbar">
                <div className="icon">
                    <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
                </div>
                <div className="header">News Reader</div>
            </div>

            <Route exact path="/" component={Index} />
            <Route path={`/content/:newsID`} component={Content} />

        </Router>
    );
};

export default NewsList;
