import * as React from "react";
import { NewsListqueryQuery } from "../../generated/graphql";
import "./styles.css";
import NewsProfileindex from "../NewsProfile/index";

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
    {console.log(data.newsList.rows)}
    <ol className={`${className}__list`}>
    {!!data.newsList.rows &&
        data.newsList.rows.map(
        (row, i) =>
            !!row && (
<<<<<<< HEAD
                <li
                key={i}
                className={`${className}__item`}
                onClick={() => handleIdChange(row.id!)}
              >
                {row.id}
              </li>
=======
            <li key={i} className={`${className}__item`}>
                <NewsProfileindex NewsItemId={row.id}/>
            </li>
>>>>>>> master
            ),
        )}
    </ol>
</div>
);

export default NewsList;
