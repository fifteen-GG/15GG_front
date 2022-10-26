import { useNavigate } from 'react-router-dom';
import { SearchBox } from './components/SearchBox';
import { LiveGame } from './components/LiveGame';
import styled from 'styled-components';
import logo from '../../assets/gg_logo_temp.svg';
import Bg_Video from '../../assets/gg_bg_worlds_22.mp4';
import * as Palette from '../../assets/colorPalette';

const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-position: center;
  background-size: cover;
`;

const BackgroundVideoWrapper = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

const Logo = styled.img`
  margin-top: 180px;
  width: 150px;
  height: 45px;
  background-position: center;
  object-fit: contain;
`;
//로고는 임시

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
  color: ${Palette.GG_WHITE_100};
  font-size: 16;
  font-weight: 500;
`;

const CodeButton = styled.div`
  width: 60px;
  height: 22px;
  background-color: ${Palette.GG_PURPLE};
  border-radius: 8px;
  display: flex;
  color: ${Palette.GG_WHITE_100};
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
  const routeLanding = () => {
    navigate('/');
  };
  return (
    <LandingContainer>
      <BackgroundVideoWrapper src={Bg_Video} loop autoPlay muted />
      <TitleWrapper>
        <Logo src={logo} onClick={routeLanding} />
        <SearchBox />
        <GamesWrapper>
          <GamesTitleWrapper>
            <GamesTitle>실시간 분석 중</GamesTitle>
            <CodeButton onClick={routeNewCode}>코드 생성</CodeButton>
          </GamesTitleWrapper>
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame />
        </GamesWrapper>
      </TitleWrapper>
    </LandingContainer>
  );
};
