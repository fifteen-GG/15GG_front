import {
  TeamStatsWrapper,
  TeamStat,
  TeamGold,
  StatValue,
  TeamLevel,
  TeamKills,
  Team,
} from '../styles/teamStats.s';
import { ReactComponent as RedGoldIcon } from '../svg/gold_red.svg';
import { ReactComponent as RedKillIcon } from '../svg/kills_red.svg';
import { ReactComponent as RedLevelIcon } from '../svg/level_red.svg';
import { ReactComponent as BlueGoldIcon } from '../svg/gold_blue.svg';
import { ReactComponent as BlueKillIcon } from '../svg/kills_blue.svg';
import { ReactComponent as BlueLevelIcon } from '../svg/level_blue.svg';

const TeamStats = () => {
  return (
    <TeamStatsWrapper>
      <TeamStat>
        <TeamGold team={Team.RED}>
          <RedGoldIcon />
          <StatValue>50.9K</StatValue>
        </TeamGold>
        <TeamLevel team={Team.RED}>
          <RedLevelIcon />
          <StatValue>17.7</StatValue>
        </TeamLevel>
        <TeamKills team={Team.RED}>
          <RedKillIcon />
          <StatValue>18</StatValue>
        </TeamKills>
      </TeamStat>
      <TeamStat>
        <TeamKills team={Team.BLUE}>
          <BlueKillIcon />
          <StatValue>15</StatValue>
        </TeamKills>
        <TeamLevel team={Team.BLUE}>
          <BlueLevelIcon />
          <StatValue>17.1</StatValue>
        </TeamLevel>
        <TeamGold team={Team.BLUE}>
          <BlueGoldIcon />
          <StatValue>44.1K</StatValue>
        </TeamGold>
      </TeamStat>
    </TeamStatsWrapper>
  );
};

export default TeamStats;
