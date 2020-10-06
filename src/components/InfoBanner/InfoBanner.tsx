import React from 'react';

import { Container } from './styled';

const InfoBanner: React.FC = ({ children }) => {
  return (
    <Container>
      <section>
        Build <strong>your Form</strong> here
      </section>
      {children}
    </Container>
  );
};

export default InfoBanner;
