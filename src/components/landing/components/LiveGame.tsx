import {
  LiveGameWrapper,
  LiveGameTitleWrapper,
  LiveGameTitle,
  LiveGameLabel,
  LiveGameTeamsWrapper,
  LiveGameSingleTeamWrapper,
  LiveGameTeamsRow,
  LiveGameSingleUser,
  LiveGameUserChampion,
  LiveGameUserName,
  LiveGameVersusWrapper,
} from '../styles/livegame.s';

export const LiveGame = location => {
  return (
    // location === 'top' ? <LiveGameWrapper style={{marginTop=12}}> : {location === 'bottom' ? <LiveGameWrapper style={{marginBottom=64}}> : <LiveGameWrapper></LiveGameWrapper>}
    <LiveGameWrapper>
      <LiveGameTitleWrapper>
        <LiveGameLabel>실시간 분석</LiveGameLabel>
        <LiveGameTitle>07/08 · 솔로랭크</LiveGameTitle>
      </LiveGameTitleWrapper>
      <LiveGameTeamsWrapper>
        <LiveGameSingleTeamWrapper>
          <LiveGameTeamsRow>
            <LiveGameSingleUser>
              <LiveGameUserChampion />
              <LiveGameUserName>정잭영</LiveGameUserName>
            </LiveGameSingleUser>
            <LiveGameSingleUser>
              <LiveGameUserChampion />
              <LiveGameUserName>정잭영</LiveGameUserName>
            </LiveGameSingleUser>
            <LiveGameSingleUser>
              <LiveGameUserChampion />
              <LiveGameUserName>정잭영</LiveGameUserName>
            </LiveGameSingleUser>
          </LiveGameTeamsRow>
          <LiveGameTeamsRow>
            <LiveGameSingleUser>
              <LiveGameUserChampion />
              <LiveGameUserName>정잭영</LiveGameUserName>
            </LiveGameSingleUser>
            <LiveGameSingleUser>
              <LiveGameUserChampion />
              <LiveGameUserName>정잭영</LiveGameUserName>
            </LiveGameSingleUser>
          </LiveGameTeamsRow>
        </LiveGameSingleTeamWrapper>
        <LiveGameVersusWrapper>VS</LiveGameVersusWrapper>
        <LiveGameSingleTeamWrapper>
          <LiveGameTeamsRow>
            <LiveGameSingleUser>
              <LiveGameUserChampion />
              <LiveGameUserName>정잭영</LiveGameUserName>
            </LiveGameSingleUser>
            <LiveGameSingleUser>
              <LiveGameUserChampion />
              <LiveGameUserName>정잭영</LiveGameUserName>
            </LiveGameSingleUser>
          </LiveGameTeamsRow>
          <LiveGameTeamsRow>
            <LiveGameSingleUser>
              <LiveGameUserChampion />
              <LiveGameUserName>정잭영</LiveGameUserName>
            </LiveGameSingleUser>
            <LiveGameSingleUser>
              <LiveGameUserChampion />
              <LiveGameUserName>정잭영</LiveGameUserName>
            </LiveGameSingleUser>
            <LiveGameSingleUser>
              <LiveGameUserChampion />
              <LiveGameUserName>정잭영</LiveGameUserName>
            </LiveGameSingleUser>
          </LiveGameTeamsRow>
        </LiveGameSingleTeamWrapper>
        <LiveGameSingleTeamWrapper></LiveGameSingleTeamWrapper>
      </LiveGameTeamsWrapper>
    </LiveGameWrapper>
  );
};
