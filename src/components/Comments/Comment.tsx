import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import * as React from 'react';

const ADD_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      email
      content
    }
  }
`;

interface Props {
  newsId: string;
}

const AddComment = ({ newsId }: Props) => {
  let input: any;
  let email: any;
  let content: any;

  const [addComment, { data }] = useMutation(ADD_COMMENT);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addComment({ variables: { input: {newsId, email: email.value, content: content.value} } });
          email.value = '';
          content.value = '';
        }}
      >
        <p>Email</p>
        <input
          ref={node => {
            email = node;
          }}
        />
        <p>Comment</p>
        <input
          ref={node => {
            content = node;
          }}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default AddComment;
