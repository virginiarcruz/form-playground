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
    }
  }
`;

const Home: React.FC<CommentsProps> = () => {
  const { loading, error, data } = useQuery(GET_COMMENTS);

  if (error) return <>errou</>;

  /* eslint-disable */

  console.log('data', data);
  console.log('getcomments', GET_COMMENTS);

  return (
    <>
      <Title> Form Playground </Title>
      <Container>
        <InfoBanner>
          {loading ? (
            'Loading...'
          ) : (
            <section>
              {data.comments.map(({ name, content }: CommentsProps) => {
                <>
                  <span>Comments aqui</span>
                  <p>
                    {name} {content}
                  </p>
                </>;
              })}
            </section>
            /* eslint-enable */
          )}
        </InfoBanner>
        <Form />
      </Container>
    </>
  );
};

export default Home;
