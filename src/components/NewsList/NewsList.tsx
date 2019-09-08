import * as React from "react";
import { NewsListqueryQuery } from "../../generated/graphql";
import "./styles.css";

interface Props {
    data: NewsListqueryQuery;
}

const className = "NewsList";

const NewsList: React.FC<Props> = ({ data }) => (
<div className={className}>
    <h3>News</h3>
    <ol className={`${className}__list`}>
    {!!data.newsList.rows &&
        data.newsList.rows.map(
        (row, i) =>
            !!row && (
            <li key={i} className={`${className}__item`}>
                {row.id}
            </li>
            ),
        )}
    </ol>
</div>
);

export default NewsList;
