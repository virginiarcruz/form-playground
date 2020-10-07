import React from 'react';

import { Container } from './styled';

const InfoBanner: React.FC = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <section>
        Build <strong>your Form</strong> here
      </section>
      {children}
    </Container>
  );
};

export default InfoBanner;
