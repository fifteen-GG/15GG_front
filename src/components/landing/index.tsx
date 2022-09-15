import React from 'react';
import * as S from './index.s';
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
          {/* todo margintop 12, bottom 64 */}
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame />
          <LiveGame />
        </S.GamesWrapper>
      </S.TitleWrapper>
    </S.LandingWrapper>
  );
};
