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

export const DataCode = () => {
  return (
    <Page15Wrapper>
      <DataCodeResponsive>
        <Header />
        <Datacode />
      </DataCodeResponsive>
    </Page15Wrapper>
  );
};
