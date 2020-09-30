import React from 'react';

import InfoBanner from '../../components/InfoBanner';
import Form from '../../components/Form';

import { Container, Title } from './styled';

const Home: React.FC = () => {
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
