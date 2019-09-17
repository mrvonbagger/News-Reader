import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { useState } from "react";
import NewsProfile from "../NewsProfile/NewsProfile";

const SAVE_COMMENT = gql`
mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    email
    content
  }
}
`;

interface NewComment {
  newsId: string;
  email?: string;
  content?: string;
}

const AddComment = ({newsId}: NewComment) => {

  const [] = useState(newsId);
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const [saveComment, { error, data }] = useMutation<
  { saveComment: NewComment }
  >(SAVE_COMMENT, {
    variables: { saveComment: {email, content } },
  });

  return (
    <div>
      <h3>Add a Comment</h3>
      {error ? <p>Oh no! {error.message}</p> : null}
      {data && data.saveComment ? <p>Saved!</p> : null}
      <form>
        <p>
          <label>Email</label>
          <input
            type="email"
            name="NewsId"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Comment</label>
          <input
            type="content"
            name="comment"
            onChange={(e) => setContent(e.target.value)}
          />
        </p>
        <button onClick={() => email && content && saveComment()}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddComment;
