import React from 'react';
import { Layout } from '../../components/Layout';
import { Content } from '../../components/Content';
import { Container } from '../../components/ui-components/Container';
import { LeftMainContent } from '../../components/Content/LeftMainContent';
import { RightMainContent } from '../../components/Content/RightMainContent';

const containerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'space-between',
}

export function MainPage() {
  return (
    <Layout>
        <Content>
          <Container stylesObj={containerStyles as React.CSSProperties}>
            <LeftMainContent />
            <RightMainContent />
          </Container>
        </Content>
    </Layout>
  );
}
