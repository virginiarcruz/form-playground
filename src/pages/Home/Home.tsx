import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import InfoBanner from '../../components/InfoBanner';
import Form from '../../components/Form';

import { Container, Title } from './styled';

interface CommentsProps {
  id?: number;
  name?: string;
  content?: string;
}

const GET_COMMENTS = gql`
  query {
    comments {
      id
      name
      content
    }
  }
`;

const Home: React.FC<CommentsProps> = () => {
  const { loading, error, data } = useQuery(GET_COMMENTS);

  if (error) return <>Algo deu errado aqui!</>;



  /* eslint-disable */

  // const allComments = data.comments.map((comment: Object) => {
  //   return comment
  // })

  console.log('data & loading', data, loading);
  console.log('getcomments', GET_COMMENTS);

  return (
    <>
      <Title> Form Playground </Title>
      <Container>
        <InfoBanner>
          { loading
            ? 'Loading...'
            : data && data.comments.map(({ id, name, content }: CommentsProps) => {
                return (
                  <ul>
                    <li key={id}>
                    {name}
                    {content}
                    </li>
                  </ul>
                )
              })
/* eslint-enable */
          }
        </InfoBanner>
        <Form />
      </Container>
    </>
  );
};

export default Home;
