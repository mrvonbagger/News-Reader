import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactComponents from "@apollo/react-components";
import * as ApolloReactHoc from "@apollo/react-hoc";
import * as ApolloReactHooks from "@apollo/react-hooks";
import gql from "graphql-tag";
import * as React from "react";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Javascript Date object */
  Date: any;
}

export interface Comment {
   __typename?: "Comment";
  id: Scalars["ID"];
  email: Scalars["String"];
  content: Scalars["String"];
  createdDate: Scalars["Date"];
}

export interface CreateCommentInput {
  newsId: Scalars["ID"];
  email: Scalars["String"];
  content: Scalars["String"];
}

export interface Mutation {
   __typename?: "Mutation";
  createComment: Comment;
}

export interface MutationCreateCommentArgs {
  input: CreateCommentInput;
}

export interface NewsItem {
   __typename?: "NewsItem";
  id: Scalars["ID"];
  title: Scalars["String"];
  content: Scalars["String"];
  url: Scalars["String"];
  img?: Maybe<Scalars["String"]>;
  comments: Array<Comment>;
}

export interface NewsListResult {
   __typename?: "NewsListResult";
  totalRows: Scalars["Int"];
  rows: Array<NewsItem>;
}

export interface Query {
   __typename?: "Query";
  newsItem?: Maybe<NewsItem>;
  newsList: NewsListResult;
}

export interface QueryNewsItemArgs {
  id: Scalars["ID"];
}

export interface QueryNewsListArgs {
  skip: Scalars["Int"];
  limit: Scalars["Int"];
}
export interface CreateCommentMutationVariables {
  input: CreateCommentInput;
}

export type CreateCommentMutation = (
  { __typename?: "Mutation" }
  & { createComment: (
    { __typename?: "Comment" }
    & Pick<Comment, "id" | "email" | "content" | "createdDate">
  ) }
);

export interface NewsListqueryQueryVariables {}

export type NewsListqueryQuery = (
  { __typename?: "Query" }
  & { newsList: (
    { __typename?: "NewsListResult" }
    & { rows: Array<(
      { __typename?: "NewsItem" }
      & Pick<NewsItem, "id">
    )> }
  ) }
);

export interface NewsItemQueryQueryVariables {
  id: Scalars["ID"];
}

export type NewsItemQueryQuery = (
  { __typename?: "Query" }
  & { newsItem: Maybe<(
    { __typename?: "NewsItem" }
    & Pick<NewsItem, "title" | "content" | "url" | "img">
  )> }
);

export const CreateCommentDocument = gql`
    mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    email
    content
    createdDate
  }
}
    `;
export type CreateCommentMutationFn = ApolloReactCommon.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;
export type CreateCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCommentMutation, CreateCommentMutationVariables>, "mutation">;

export const CreateCommentComponent = (props: CreateCommentComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCommentMutation, CreateCommentMutationVariables> mutation={CreateCommentDocument} {...props} />
    );

export type CreateCommentProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateCommentMutation, CreateCommentMutationVariables> & TChildProps;
export function withCreateComment<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCommentMutation,
  CreateCommentMutationVariables,
  CreateCommentProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCommentMutation, CreateCommentMutationVariables, CreateCommentProps<TChildProps>>(CreateCommentDocument, {
      alias: "createComment",
      ...operationOptions,
    });
}

export function useCreateCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
      return ApolloReactHooks.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, baseOptions);
    }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = ApolloReactCommon.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const NewsListqueryDocument = gql`
    query NewsListquery {
  newsList(skip: 0, limit: 20) {
    rows {
      id
    }
  }
}
    `;
export type NewsListqueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<NewsListqueryQuery, NewsListqueryQueryVariables>, "query">;

export const NewsListqueryComponent = (props: NewsListqueryComponentProps) => (
      <ApolloReactComponents.Query<NewsListqueryQuery, NewsListqueryQueryVariables> query={NewsListqueryDocument} {...props} />
    );

export type NewsListqueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<NewsListqueryQuery, NewsListqueryQueryVariables> & TChildProps;
export function withNewsListquery<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  NewsListqueryQuery,
  NewsListqueryQueryVariables,
  NewsListqueryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, NewsListqueryQuery, NewsListqueryQueryVariables, NewsListqueryProps<TChildProps>>(NewsListqueryDocument, {
      alias: "newsListquery",
      ...operationOptions,
    });
}

export function useNewsListqueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NewsListqueryQuery, NewsListqueryQueryVariables>) {
      return ApolloReactHooks.useQuery<NewsListqueryQuery, NewsListqueryQueryVariables>(NewsListqueryDocument, baseOptions);
    }
export function useNewsListqueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NewsListqueryQuery, NewsListqueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<NewsListqueryQuery, NewsListqueryQueryVariables>(NewsListqueryDocument, baseOptions);
      }

export type NewsListqueryQueryHookResult = ReturnType<typeof useNewsListqueryQuery>;
export type NewsListqueryQueryResult = ApolloReactCommon.QueryResult<NewsListqueryQuery, NewsListqueryQueryVariables>;
export const NewsItemQueryDocument = gql`
    query NewsItemQuery($id: ID!) {
  newsItem(id: $id) {
    title
    content
    url
    img
  }
}
    `;
export type NewsItemQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<NewsItemQueryQuery, NewsItemQueryQueryVariables>, "query"> & ({ variables: NewsItemQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

export const NewsItemQueryComponent = (props: NewsItemQueryComponentProps) => (
      <ApolloReactComponents.Query<NewsItemQueryQuery, NewsItemQueryQueryVariables> query={NewsItemQueryDocument} {...props} />
    );

export type NewsItemQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<NewsItemQueryQuery, NewsItemQueryQueryVariables> & TChildProps;
export function withNewsItemQuery<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  NewsItemQueryQuery,
  NewsItemQueryQueryVariables,
  NewsItemQueryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, NewsItemQueryQuery, NewsItemQueryQueryVariables, NewsItemQueryProps<TChildProps>>(NewsItemQueryDocument, {
      alias: "newsItemQuery",
      ...operationOptions,
    });
}

export function useNewsItemQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NewsItemQueryQuery, NewsItemQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<NewsItemQueryQuery, NewsItemQueryQueryVariables>(NewsItemQueryDocument, baseOptions);
    }
export function useNewsItemQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NewsItemQueryQuery, NewsItemQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<NewsItemQueryQuery, NewsItemQueryQueryVariables>(NewsItemQueryDocument, baseOptions);
      }

export type NewsItemQueryQueryHookResult = ReturnType<typeof useNewsItemQueryQuery>;
export type NewsItemQueryQueryResult = ApolloReactCommon.QueryResult<NewsItemQueryQuery, NewsItemQueryQueryVariables>;
