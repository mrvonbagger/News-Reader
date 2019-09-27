import gql from "graphql-tag";

export const QUERY_NEWS_ITEMS = gql`
    mutation CreateComment($input: CreateCommentInput!) {
        createComment(input: $input) {
        id
        email
        content
        }
    }
`;
