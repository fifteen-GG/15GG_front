import * as S from './styled';
import { useNavigate } from 'react-router-dom';

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
          <S.LiveGameWrapper style={{ marginTop: 12 }}>
            <S.LiveGameTitleWrapper>
              <S.LiveGameLabel>실시간 분석</S.LiveGameLabel>
              <S.LiveGameTitle>07/08 · 솔로랭크</S.LiveGameTitle>
            </S.LiveGameTitleWrapper>
            <S.LiveGameTeamsWrapper>
              <S.LiveGameSingleTeamWrapper>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
              </S.LiveGameSingleTeamWrapper>
              <S.LiveGameVersusWrapper>VS</S.LiveGameVersusWrapper>
              <S.LiveGameSingleTeamWrapper>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
              </S.LiveGameSingleTeamWrapper>
              <S.LiveGameSingleTeamWrapper></S.LiveGameSingleTeamWrapper>
            </S.LiveGameTeamsWrapper>
          </S.LiveGameWrapper>
          <S.LiveGameWrapper>
            <S.LiveGameTitleWrapper>
              <S.LiveGameLabel>실시간 분석</S.LiveGameLabel>
              <S.LiveGameTitle>07/08 · 솔로랭크</S.LiveGameTitle>
            </S.LiveGameTitleWrapper>
            <S.LiveGameTeamsWrapper>
              <S.LiveGameSingleTeamWrapper>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
              </S.LiveGameSingleTeamWrapper>
              <S.LiveGameVersusWrapper>VS</S.LiveGameVersusWrapper>
              <S.LiveGameSingleTeamWrapper>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
              </S.LiveGameSingleTeamWrapper>
              <S.LiveGameSingleTeamWrapper></S.LiveGameSingleTeamWrapper>
            </S.LiveGameTeamsWrapper>
          </S.LiveGameWrapper>
          <S.LiveGameWrapper>
            <S.LiveGameTitleWrapper>
              <S.LiveGameLabel>실시간 분석</S.LiveGameLabel>
              <S.LiveGameTitle>07/08 · 솔로랭크</S.LiveGameTitle>
            </S.LiveGameTitleWrapper>
            <S.LiveGameTeamsWrapper>
              <S.LiveGameSingleTeamWrapper>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
              </S.LiveGameSingleTeamWrapper>
              <S.LiveGameVersusWrapper>VS</S.LiveGameVersusWrapper>
              <S.LiveGameSingleTeamWrapper>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
              </S.LiveGameSingleTeamWrapper>
              <S.LiveGameSingleTeamWrapper></S.LiveGameSingleTeamWrapper>
            </S.LiveGameTeamsWrapper>
          </S.LiveGameWrapper>
          <S.LiveGameWrapper>
            <S.LiveGameTitleWrapper>
              <S.LiveGameLabel>실시간 분석</S.LiveGameLabel>
              <S.LiveGameTitle>07/08 · 솔로랭크</S.LiveGameTitle>
            </S.LiveGameTitleWrapper>
            <S.LiveGameTeamsWrapper>
              <S.LiveGameSingleTeamWrapper>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
              </S.LiveGameSingleTeamWrapper>
              <S.LiveGameVersusWrapper>VS</S.LiveGameVersusWrapper>
              <S.LiveGameSingleTeamWrapper>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
              </S.LiveGameSingleTeamWrapper>
              <S.LiveGameSingleTeamWrapper></S.LiveGameSingleTeamWrapper>
            </S.LiveGameTeamsWrapper>
          </S.LiveGameWrapper>
          <S.LiveGameWrapper style={{ marginBottom: 64 }}>
            <S.LiveGameTitleWrapper>
              <S.LiveGameLabel>실시간 분석</S.LiveGameLabel>
              <S.LiveGameTitle>07/08 · 솔로랭크</S.LiveGameTitle>
            </S.LiveGameTitleWrapper>
            <S.LiveGameTeamsWrapper>
              <S.LiveGameSingleTeamWrapper>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
              </S.LiveGameSingleTeamWrapper>
              <S.LiveGameVersusWrapper>VS</S.LiveGameVersusWrapper>
              <S.LiveGameSingleTeamWrapper>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
                <S.LiveGameTeamsRow>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                  <S.LiveGameSingleUser>
                    <S.LiveGameUserChampion />
                    <S.LiveGameUserName>정잭영</S.LiveGameUserName>
                  </S.LiveGameSingleUser>
                </S.LiveGameTeamsRow>
              </S.LiveGameSingleTeamWrapper>
              <S.LiveGameSingleTeamWrapper></S.LiveGameSingleTeamWrapper>
            </S.LiveGameTeamsWrapper>
          </S.LiveGameWrapper>
        </S.GamesWrapper>
      </S.TitleWrapper>
    </S.LandingWrapper>
  );
};
