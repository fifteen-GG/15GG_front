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
  height: 120vh;
  object-fit: cover;
  z-index: -1;
`;
//안에 여러 요소들이 자리잡고 있는만큼 전체 뷰포트 크기가 형성되어 모바일같은 전체 영역보다 작은 화면에서는 비디오가 짤림
//따라서 화면 비에 따라 위에 마진을 줄여주고 동영상 높이를 100%가 아닌 vh로 바꿔줌
const TitleWrapper = styled.div`
  position: absolute;
  width: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

const Logo = styled.img`
  @media screen and (max-width: 400px) {
    margin-top: 100px;
  }
  transition: 0.5s;
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
  return (
    <LandingContainer>
      <BackgroundVideoWrapper src={Bg_Video} muted autoPlay loop />
      <TitleWrapper>
        <Logo src={logo} onClick={() => navigate('/')} />
        <SearchBox />
        <GamesWrapper>
          <GamesTitleWrapper>
            <GamesTitle>실시간 분석 중</GamesTitle>
            <CodeButton onClick={() => navigate('/code')}>코드 생성</CodeButton>
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
