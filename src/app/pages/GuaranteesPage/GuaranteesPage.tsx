import React, { FC } from 'react';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Content';
import { Container } from '../../components/ui-components/Container';

export const GuaranteesPage: FC = () => {
  return (
    <Layout>
      <Content>
        <Container>
          <div>Гарантии</div>
        </Container>
      </Content>
    </Layout>
  );
}
