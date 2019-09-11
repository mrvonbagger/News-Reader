import * as React from "react";
import { NewsListqueryQuery } from "../../generated/graphql";
import "./styles.css";

export interface OwnProps {
    handleIdChange: (newId: string) => void
}

interface Props extends OwnProps {
    data: NewsListqueryQuery;
}

const className = "NewsList";

const NewsList: React.FC<Props> = ({ data, handleIdChange }) => (
<div className={className}>
    <h3>News</h3>
    <ol className={`${className}__list`}>
    {!!data.newsList.rows &&
        data.newsList.rows.map(
        (row, i) =>
            !!row && (
                <li
                key={i}
                className={`${className}__item`}
                onClick={() => handleIdChange(row.id!)}
              >
                {row.id}
              </li>
            ),
        )}
    </ol>
</div>
);

export default NewsList;
