import * as React from "react";
import { useNewsListqueryQuery } from "../../generated/graphql";
import NewsList, { OwnProps } from "./NewsList";

const NewsListContainer = (props: OwnProps) => {
    const {data, error, loading } = useNewsListqueryQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>Error</div>;
    }

    return <NewsList data={data} {...props} />;
};

export default NewsListContainer;
