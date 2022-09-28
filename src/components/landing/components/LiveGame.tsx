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
            <LiveUser champion="Ahri" row="left" />
            <LiveUser champion="Jax" row="left" />
            <LiveUser champion="Khazix" row="left" />
          </LiveGameTeamsRow>
          <LiveGameTeamsRow>
            <LiveUser champion="Ezreal" row="left" />
            <LiveUser champion="Yuumi" row="left" />
          </LiveGameTeamsRow>
        </LiveGameSingleTeamWrapper>
        <LiveGameSingleTeamWrapper>
          <LiveGameTeamsRow>
            <LiveUser champion="Ahri" row="right" />
            <LiveUser champion="Ahri" row="right" />
          </LiveGameTeamsRow>
          <LiveGameTeamsRow>
            <LiveUser champion="Ahri" row="right" />
            <LiveUser champion="Ahri" row="right" />
            <LiveUser champion="Ahri" row="right" />
          </LiveGameTeamsRow>
        </LiveGameSingleTeamWrapper>
      </LiveGameTeamsWrapper>
    </LiveGameWrapper>
  );
};
