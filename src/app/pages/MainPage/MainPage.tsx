import React from 'react';
import styles from './mainpage.css';
import { MainPageContainer } from '../../components/MainPageContainer';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Container } from '../../components/ui-components/Container';
import { LeftMainContent } from '../../components/Content/LeftMainContent';
import { RightMainContent } from '../../components/Content/RightMainContent';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'space-between',
  padding: '40px 0'
}

export function MainPage() {
  return (
    <Layout>
        <Content>
          <Container stylesObj={containerStyles}>
            <LeftMainContent />
            <RightMainContent />
          </Container>
        </Content>
    </Layout>
  );
}
