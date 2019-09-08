import * as React from "react";
import { useNewsListqueryQuery } from "../../generated/graphql";
import NewsList from "./NewsList";

const NewsListContainer = () => {
    const {data, error, loading } = useNewsListqueryQuery();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !data) {
        return <div>Error</div>;
    }

    return <NewsList data={data}/>;
};

export default NewsListContainer;
