import * as React from "react";
import { useNewsItemQueryQuery} from "../../generated/graphql";
import NewsProfile from "./NewsProfile";
import { useEffect } from "react";

interface Props {
  NewsListRow: string;
  singleItem: boolean;
}

const NewsProfileContainer = ({ NewsListRow, singleItem }: Props) => {
    const { data, error, loading, refetch } = useNewsItemQueryQuery({
      variables: { id: NewsListRow },
    });

    if (loading) {
      return null;
    }
    if (error) {
      return <div>ERROR</div>;
    }
    if (!data) {
      return <div>Select a flight from the panel</div>;
    }

    return <NewsProfile data={data} singleItem={singleItem}/>;
};

export default NewsProfileContainer;
