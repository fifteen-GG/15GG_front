import { Header } from './components/Header';
import { Datacode } from './components/Datacode';
import styled from 'styled-components';

const Page15Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const DataCodeResponsive = styled.div`
  width: 328px;
`;

const Footer = styled.div`
  margin-top: 10px;
  width: 328px;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

const FooterContent = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
`;

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
