import * as React from "react";
import { NewsListqueryQuery } from "../../generated/graphql";
import Comments from "../Comments/comments";
import NewsProfileindex from "../NewsProfile/index";
import "./styles.css";

interface Props {
    data: NewsListqueryQuery;
}

const className = "NewsList";

const handleClick = () => {
    console.log("clicked");
};

const NewsList: React.FC<Props> = ({ data }) => (
<div className="Content">
    <div className="navbar">
        <div className="header">News Reader</div>
    </div>
    <ol className={`${className}__list`}>
    {!!data.newsList.rows &&
        data.newsList.rows.map(
        (row, i) =>
            !!row && (
                <li key={i}
                className={`${className}__item`}
                onClick={() => handleClick()}>
                    <NewsProfileindex NewsListRow={row.id}/>
              </li>
            ),
        )}
    </ol>
</div>
);

export default NewsList;