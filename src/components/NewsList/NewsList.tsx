import * as React from "react";
import { MdDragHandle } from "react-icons/md";
import { NewsListqueryQuery } from "../../generated/graphql";
import Comments from "../Comments/comments";
import NewsProfileindex from "../NewsProfile/index";
import "./styles.css";

interface Props {
    data: NewsListqueryQuery;
}

const className = "NewsList";

const NewsList: React.FC<Props> = ({ data }) => (
<div className="Content">
    <div className="header">News Reader </div>
    <ol className={`${className}__list`}>
    {!!data.newsList.rows &&
        data.newsList.rows.map(
        (row, i) =>
            !!row && (
                <li key={i}
                className={`${className}__item`}>
                    <NewsProfileindex NewsListRow={row.id}/>
              </li>
            ),
        )}
    </ol>
</div>
);

export default NewsList;
