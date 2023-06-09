import React, { FC } from 'react';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Content';
import { Container } from '../../components/ui-components/Container';

export const AboutPage: FC = () => {
  return (
    <Layout>
      <Content>
        <Container>
          <div>О компании</div>
        </Container>
      </Content>
    </Layout>
  );
}
