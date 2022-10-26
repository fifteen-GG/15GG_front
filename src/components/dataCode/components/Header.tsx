import React from 'react';
import { HeadeContainer, Title, SubTitle } from '../styles/header.s';

export const Header = () => {
  return (
    <HeadeContainer>
      <Title>데이터코드 생성</Title>
      <SubTitle>데이터내셔에서 여섯자리 코드를 입력해주세요.</SubTitle>
    </HeadeContainer>
  );
};
