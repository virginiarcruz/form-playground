import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client"

import InfoBanner from '../../components/InfoBanner';
import Form from '../../components/Form';

import { Container, Title } from './styled';


export interface CommentsList {
  error?: string,
  loading?: string,
}

const GET_COMMENTS = gql`
  query {
    comments {
      id
      name
    }
  }
`;

const Home: React.FC<CommentsList> = () => {
  const { loading, error, data, refetch } = useQuery<CommentsList>(GET_COMMENTS);

  // if (error) return frase
  if (loading) return 'Loading...';
  if (error) return `Errooooooooor!`;

  console.log('getcomments', GET_COMMENTS)
  console.log('data', data)

  return (
    <>
      <Title> Form Playground </Title>
      <Container>
        <InfoBanner />
        <Form />
      </Container>
    </>
  );
};

export default Home;
