import * as React from "react";
import { NewsListqueryQuery } from "../../generated/graphql";
import "./styles.css";
import Comments from "../Comments/comments";
import NewsProfileindex from "../NewsProfile/index"; 

interface Props {
    data: NewsListqueryQuery;
}

const className = "NewsList";

const NewsList: React.FC<Props> = ({ data }) => (
<div className="Content">
    <h3>News</h3>
    <ol className={`${className}__list`}>
    {!!data.newsList.rows &&
        data.newsList.rows.map(
        (row, i) =>
            !!row && (
                <li
                key={i}
                className={`${className}__item`}
                >
                    <NewsProfileindex NewsListRow={row.id}/>
                    <Comments newsId={row.id} />
              </li>
            ),
        )}
    </ol>
</div>
);

export default NewsList;
