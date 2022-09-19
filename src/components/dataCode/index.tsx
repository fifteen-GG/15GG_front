import React from 'react';
import {
  Page15Wrapper,
  DataCodeResponsive,
  Footer,
  FooterContent,
} from './index.s';
import { Header } from './components/Header';
import { Datacode } from './components/Datacode';

export const DataCode = () => {
  return (
    <Page15Wrapper>
      <DataCodeResponsive>
        <Header />
        <Datacode />
        <Footer>
          <FooterContent>남은시간 2:21 · 재생성</FooterContent>
        </Footer>
      </DataCodeResponsive>
    </Page15Wrapper>
  );
};
