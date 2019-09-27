import gql from "graphql-tag";

export const QUERY_NEWS_ITEMS = gql`
    query NewsItemQuery($id: ID!) {
        newsItem(id: $id) {
        title
        content
        url
        img
        comments{id, email, content}
        }
    }
`;
