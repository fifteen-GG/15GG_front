import * as S from './styled';
import { useNavigate } from 'react-router-dom';
import { LiveGame } from './components/LiveGame';

export const Landing = () => {
  const navigate = useNavigate();
  const routeNewCode = () => {
    navigate('/code');
  };

  return (
    <S.LandingWrapper>
      <S.TitleWrapper>
        <S.Logo />
        <S.SearchBox>
          <S.SearchRegion>KR</S.SearchRegion>
        </S.SearchBox>
        <S.GamesWrapper>
          <S.GamesTitleWrapper>
            <S.GamesTitle>분석중인 경기</S.GamesTitle>
            <S.CodeButton onClick={routeNewCode}>코드 생성</S.CodeButton>
          </S.GamesTitleWrapper>
          <LiveGame style={{ marginTop: 12 }} />
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame style={{ marginBottom: 64 }} />
        </S.GamesWrapper>
      </S.TitleWrapper>
    </S.LandingWrapper>
  );
};
