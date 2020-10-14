import React from 'react';
import InfoBanner from '../../components/InfoBanner';
import Form from '../../components/Form';

import { Container } from './styled';

interface PageProps {
  data: {
    publicFormSettings: {
      organizationName: string;
      title: string;
    };
    formFields: Array<object>;
  };
}

const PageContainer: React.FC<PageProps> = ({
  data: { publicFormSettings, formFields },
}) => {
  return (
    <Container>
      <InfoBanner publicFormSettings={publicFormSettings} />
      <Form formFields={formFields} />
    </Container>
  );
};

export default PageContainer;
