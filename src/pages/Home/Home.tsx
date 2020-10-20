import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';

import PageContainer from '../../containers/PageContainer';
import { Title } from './styled';
import { GET_FORMDATA } from '../../graphql';
import AppContext from '../../context/AppContext';
import { AppContextInterface } from '../../interfaces/PublicForm';

const Home: React.FC = () => {
  const context = useContext(AppContext);
  const { loading, data } = context;

  // if (error) return <>Algo deu errado aqui!</>;

  return (
    <>
      <Title> Form Playground </Title>
      {loading ? 'Loading...' : <PageContainer publicForm={data?.publicForm} />}
    </>
  );
};

export default Home;
