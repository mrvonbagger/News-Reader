import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Javascript Date object */
  Date: any,
};

export type Comment = {
   __typename?: 'Comment',
  id: Scalars['ID'],
  email: Scalars['String'],
  content: Scalars['String'],
  createdDate: Scalars['Date'],
};

export type CreateCommentInput = {
  newsId: Scalars['ID'],
  email: Scalars['String'],
  content: Scalars['String'],
};


export type Mutation = {
   __typename?: 'Mutation',
  createComment: Comment,
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput
};

export type NewsItem = {
   __typename?: 'NewsItem',
  id: Scalars['ID'],
  title: Scalars['String'],
  content: Scalars['String'],
  url: Scalars['String'],
  img?: Maybe<Scalars['String']>,
  comments: Array<Comment>,
};

export type NewsListResult = {
   __typename?: 'NewsListResult',
  totalRows: Scalars['Int'],
  rows: Array<NewsItem>,
};

export type Query = {
   __typename?: 'Query',
  newsItem?: Maybe<NewsItem>,
  newsList: NewsListResult,
};


export type QueryNewsItemArgs = {
  id: Scalars['ID']
};


export type QueryNewsListArgs = {
  skip: Scalars['Int'],
  limit: Scalars['Int']
};
export type NewsListqueryQueryVariables = {};


export type NewsListqueryQuery = (
  { __typename?: 'Query' }
  & { newsList: (
    { __typename?: 'NewsListResult' }
    & { rows: Array<(
      { __typename?: 'NewsItem' }
      & Pick<NewsItem, 'id'>
    )> }
  ) }
);

export type NewsItemQueryQueryVariables = {
  id: Scalars['ID']
};


export type NewsItemQueryQuery = (
  { __typename?: 'Query' }
  & { newsItem: Maybe<(
    { __typename?: 'NewsItem' }
    & Pick<NewsItem, 'title' | 'content' | 'url' | 'img'>
  )> }
);

export const NewsListqueryDocument = gql`
    query NewsListquery {
  newsList(skip: 0, limit: 20) {
    rows {
      id
    }
  }
}
    `;
export type NewsListqueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<NewsListqueryQuery, NewsListqueryQueryVariables>, 'query'>;

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
      alias: 'newsListquery',
      ...operationOptions
    });
};

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
export type NewsItemQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<NewsItemQueryQuery, NewsItemQueryQueryVariables>, 'query'> & ({ variables: NewsItemQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

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
      alias: 'newsItemQuery',
      ...operationOptions
    });
};

    export function useNewsItemQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NewsItemQueryQuery, NewsItemQueryQueryVariables>) {
      return ApolloReactHooks.useQuery<NewsItemQueryQuery, NewsItemQueryQueryVariables>(NewsItemQueryDocument, baseOptions);
    }
      export function useNewsItemQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NewsItemQueryQuery, NewsItemQueryQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<NewsItemQueryQuery, NewsItemQueryQueryVariables>(NewsItemQueryDocument, baseOptions);
      }
      
export type NewsItemQueryQueryHookResult = ReturnType<typeof useNewsItemQueryQuery>;
export type NewsItemQueryQueryResult = ApolloReactCommon.QueryResult<NewsItemQueryQuery, NewsItemQueryQueryVariables>;