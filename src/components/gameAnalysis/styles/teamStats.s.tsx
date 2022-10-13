import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

export const TeamStatsWrapper = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  border-top: 2px solid ${Palette.GG_STATS_BORDER};
`;

enum TeamNameEnum {
  RED,
  BLUE,
}

interface TeamStatProps {
  team: TeamNameEnum;
}

export const TeamStat = styled.div`
  display: flex;
  width: calc(50% - 1px);
  height: 48px;
  justify-content: space-evenly;
  align-items: flex-end;
  :nth-child(1) {
    border-right: 2px solid ${Palette.GG_STATS_BORDER};
  }
`;

export const Stat = styled.div<TeamStatProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 40px;
  color: ${props =>
    props.team === TeamNameEnum.RED ? Palette.GG_RED : Palette.GG_PURPLE};
`;

export const StatValue = styled.div`
  display: flex;
  color: ${Palette.GG_WHITE_100};
  font-size: 12px;
  font-weight: bold;
`;

export { TeamNameEnum as Team };
