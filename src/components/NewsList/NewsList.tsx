import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { NewsListqueryQuery } from "../../generated/graphql";
import Comments from "../Comments/comments";
import NewsProfileindex from "../NewsProfile/index";
import NewsProfile from "../NewsProfile/NewsProfile";
import "./styles.css";

interface Props {
    data: NewsListqueryQuery;
}

const className = "NewsList";

const NewsList: React.FC<Props> = ({ data }) => {

    const [newsID, setID] = useState("");

    function Index() {
        return (
            <div className={`${className}__list`}>
                {!!data.newsList.rows &&
                    data.newsList.rows.map(
                        (row, i) =>
                            !!row && (
                                <Link to={"/content/"}
                                onClick={() => setID(row.id)}>
                                    <li key={i}
                                        className={`${className}__item`}>
                                        <NewsProfileindex NewsListRow={row.id}/>
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
            <NewsProfileindex NewsListRow={newsID}/>
        );
    }


    return (
        <div className={`${className}__list`}>
                {!!data.newsList.rows &&
                    data.newsList.rows.map(
                        (row, i) =>
                            !!row && (
                                <Link to={"/content/"}
                                onClick={() => setID(row.id)}>
                                    <li key={i}
                                        className={`${className}__item`}>
                                        <NewsProfileindex NewsListRow={row.id}/>
                                    </li>
                                </Link>
                            )
                        )
                    }
            </div>
    );
};

export default NewsList;
