import { gql } from '@apollo/client';

export const GET_COMMENTS = gql`
  query {
    comments {
      id
      name
      content
    }
  }
`;

export const SAVE_COMMENT = gql`
  mutation save($input: CommentInput) {
    saveComment(input: $input) {
      id
      name
      content
      createdAt
      updatedAt
    }
  }
`;
