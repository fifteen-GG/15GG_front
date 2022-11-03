import {
  TeamStatsContainer,
  TeamStatWrapper,
  Stat as TeamGold,
  Stat as TeamLevel,
  Stat as TeamKills,
  StatValue,
  Icon,
} from '../styles/teamStats.s';

const TeamStats = () => {
  const TeamStatData = [
    {
      team: 'Red',
      gold: 50.9,
      level: 17.7,
      kill: 18,
    },
    {
      team: 'Blue',
      gold: 40.3,
      level: 16.5,
      kill: 14,
    },
  ];
  return (
    <TeamStatsContainer>
      {TeamStatData.map(data => {
        return (
          <TeamStatWrapper key={data.team}>
            <TeamGold team={data.team}>
              <Icon team={'gold' + data.team} />
              <StatValue>{data.gold}K</StatValue>
            </TeamGold>
            <TeamLevel team={data.team}>
              <Icon team={'level' + data.team} style={{ width: '25px' }} />
              <StatValue>{data.level}</StatValue>
            </TeamLevel>
            <TeamKills team={data.team}>
              <Icon team={'kill' + data.team} />
              <StatValue>{data.kill}</StatValue>
            </TeamKills>
          </TeamStatWrapper>
        );
      })}
    </TeamStatsContainer>
  );
};

export default TeamStats;
