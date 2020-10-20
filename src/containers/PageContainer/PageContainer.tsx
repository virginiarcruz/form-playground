import React from 'react';
import InfoBanner from '../../components/InfoBanner';
import Form from '../../components/Form';
import { AppContextInterface } from '../../interfaces/PublicForm';

import { Container } from './styled';

interface PageProps {
  publicForm:
    | {
        publicFormSettings: object | any;
        formFields: Array<object>;
      }
    | any;
}

const PageContainer: React.FC<PageProps> = ({
  publicForm: { publicFormSettings, formFields },
}) => {
  return (
    <Container>
      <InfoBanner publicFormSettings={publicFormSettings} />
      <Form formFields={formFields} />
    </Container>
  );
};

export default PageContainer;
