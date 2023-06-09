import React, { FC } from 'react';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Content';
import { Container } from '../../components/ui-components/Container';

export const FlightPage: FC = () => {
  return (
    <Layout>
      <Content>
        <Container>
          <div>График полетов</div>
        </Container>
      </Content>
    </Layout>
  );
}
