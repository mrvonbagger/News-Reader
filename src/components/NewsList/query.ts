import gql from "graphql-tag";

export const QUERY_NEWS_LIST = gql`
query NewsListquery{
    newsList(skip: 0, limit: 20) {
      rows{id}
    }
  }
`;
