import React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import InfoBanner from '../../components/InfoBanner';
import Form from '../../components/Form';
import { GET_COMMENTS } from '../../graphql';

import { Container, Title } from './styled';

interface CommentsProps {
  id?: number;
  name?: string;
  content?: string;
}

const Home: React.FC<CommentsProps> = () => {
  const { loading, error, data, refetch } = useQuery(GET_COMMENTS);

  if (error) return <>Algo deu errado aqui!</>;

  /* eslint-disable */

  console.log('data & loading', data, loading);
  console.log('getcomments', GET_COMMENTS);

  const handleAddComment = () => {
    refetch();
  };

  return (
    <>
      <Title> Form Playground </Title>
      <Container>
        <InfoBanner>
          {
            loading
              ? 'Loading...'
              : data &&
                data.comments.map(({ id, name, content }: CommentsProps) => {
                  return (
                    <ul>
                      <li key={id}>
                        {name}
                        {content}
                      </li>
                    </ul>
                  );
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
