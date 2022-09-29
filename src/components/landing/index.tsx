import { useNavigate } from 'react-router-dom';
import { SearchBox } from './components/SearchBox';
import { LiveGame } from './components/LiveGame';
import styled from 'styled-components';
import Bg from '../../assets/background.png';
import logo from '../../assets/logo.png';

const LandingWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-position: center;
  background-image: url(${Bg});
`;

const TitleWrapper = styled.div`
  width: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  margin-top: 180px;
  width: 150px;
  height: 33px;
  background-position: center;
  background-image: url(${logo});
`;

const GamesWrapper = styled.div`
  width: 314px;
  margin-top: 64px;
`;

const GamesTitleWrapper = styled.div`
  width: 314px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const GamesTitle = styled.div`
  color: #fff;
  font-size: 16;
  font-weight: 500;
`;

const CodeButton = styled.div`
  width: 60px;
  height: 22px;
  background-color: #4d4ae2;
  border-radius: 8px;
  display: flex;
  color: #fff;
  font-size: 8pt;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Landing = () => {
  const navigate = useNavigate();
  const routeNewCode = () => {
    navigate('/code');
  };

  return (
    <LandingWrapper>
      <TitleWrapper>
        <Logo />
        <SearchBox />
        <GamesWrapper>
          <GamesTitleWrapper>
            <GamesTitle>실시간 분석 중</GamesTitle>
            <CodeButton onClick={routeNewCode}>코드 생성</CodeButton>
          </GamesTitleWrapper>
          {/* todo margintop 12, bottom 64 */}
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame />
        </GamesWrapper>
      </TitleWrapper>
    </LandingWrapper>
  );
};
