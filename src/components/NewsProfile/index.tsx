import * as React from "react";
import { useNewsItemQueryQuery} from "../../generated/graphql";
import NewsProfile from "./NewsProfile";

/* [
  {
    "id": "9c7dc0d4-a5b8-4d6e-b1b4-ca1bad5fb573",
    "__typename": "NewsItem"
  },
  {
    "id": "d3867ad5-1ef6-4cbd-ac17-606bf4796ab7",
    "__typename": "NewsItem"
  },
]
 */

interface Props {
  NewsListRow: string;
}

let NewsItemMap = new Map();

const NewsProfileContainer: React.FC<Props> = ({ NewsListRow }) => {
    const { data, error, loading } = useNewsItemQueryQuery({
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
    NewsItemMap.set(NewsListRow, data.newsItem);
    return <NewsProfile data={data} />;
};

export default NewsProfileContainer;
