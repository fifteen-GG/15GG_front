import {
  LiveGameWrapper,
  LiveGameTitleWrapper,
  LiveGameTitle,
  LiveGameLabel,
  LiveGameTeamsWrapper,
  LiveGameSingleTeamWrapper,
  LiveGameTeamsRow,
  LiveGameVersusWrapper,
} from '../styles/livegame.s';
import { LiveUser } from './LiveUser';

export const LiveGame = () => {
  return (
    <LiveGameWrapper>
      <LiveGameTitleWrapper>
        <LiveGameLabel>실시간 분석</LiveGameLabel>
        <LiveGameTitle>07/08 · 솔로랭크</LiveGameTitle>
      </LiveGameTitleWrapper>
      <LiveGameTeamsWrapper>
        <LiveGameSingleTeamWrapper>
          <LiveGameTeamsRow>
            <LiveUser champion="Ahri" />
            <LiveUser champion="Jax" />
            <LiveUser champion="Khazix" />
          </LiveGameTeamsRow>
          <LiveGameTeamsRow>
            <LiveUser champion="Ezreal" />
            <LiveUser champion="Yuumi" />
          </LiveGameTeamsRow>
        </LiveGameSingleTeamWrapper>
        <LiveGameVersusWrapper>VS</LiveGameVersusWrapper>
        <LiveGameSingleTeamWrapper>
          <LiveGameTeamsRow>
            <LiveUser champion="Ahri" />
            <LiveUser champion="Ahri" />
          </LiveGameTeamsRow>
          <LiveGameTeamsRow>
            <LiveUser champion="Ahri" />
            <LiveUser champion="Ahri" />
            <LiveUser champion="Ahri" />
          </LiveGameTeamsRow>
        </LiveGameSingleTeamWrapper>
        <LiveGameSingleTeamWrapper></LiveGameSingleTeamWrapper>
      </LiveGameTeamsWrapper>
    </LiveGameWrapper>
  );
};
