import React from 'react';

import { Container } from './styled';

interface InfoBannerProps {
  publicFormSettings: {
    organizationName: string;
    title: string;
  };
}

const InfoBanner: React.FC<InfoBannerProps> = ({
  publicFormSettings: { organizationName, title },
}) => {
  return (
    <Container>
      <h1> {organizationName} </h1>
      <h2> {title} </h2>
    </Container>
  );
};

export default InfoBanner;
