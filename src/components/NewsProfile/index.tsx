import * as React from "react";
import { useNewsItemQueryQuery } from "../../generated/graphql";
import NewsProfile from "./NewsProfile";

interface Props {
  NewsItemId: string;
}

const NewsProfileContainer: React.FC<Props> = ({ NewsItemId }) => {
    const { data, error, loading } = useNewsItemQueryQuery({
      variables: { id: NewsItemId } });

    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>ERROR</div>;
    }
    if (!data) {
      return <div>Select a flight from the panel</div>;
    }
    return <NewsProfile data={data} />;
  };

export default NewsProfileContainer;
