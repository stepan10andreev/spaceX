import React from 'react';
import styles from './mainpage.css';
import { MainPageContainer } from '../../components/MainPageContainer';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';

export function MainPage() {
  return (
    <MainPageContainer>
        <Layout>
          <Header />
        </Layout>
    </MainPageContainer>
  );
}
