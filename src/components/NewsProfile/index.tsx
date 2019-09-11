import * as React from "react";
import { useNewsItemQueryQuery } from "../../generated/graphql";
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

interface OwnProps {
  id: string;
}

const NewsProfileContainer = ({ id }: OwnProps) => {
    const { data, error, loading, refetch } = useNewsItemQueryQuery({
      variables: { id: String(id) },
    });
    React.useEffect(() => {
      refetch();
    }, [id]);

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
