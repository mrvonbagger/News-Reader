import * as React from "react";
import { useNewsItemQueryQuery } from "../../generated/graphql";
import NewsProfile from "./NewsProfile";

const NewsProfileContainer = () => {
    const { data, error, loading } = useNewsItemQueryQuery({ variables: { id: "9c7dc0d4-a5b8-4d6e-b1b4-ca1bad5fb573" } });

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
