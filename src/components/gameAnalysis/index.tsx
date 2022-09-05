import {
  GameAnalysisWrapper,
  TypeInfoWrapper,
  GameInfoWrapper,
  GameTypeInfo,
  AnalysisTypeInfo,
  DateInfo,
  TimeInfo,
  Graph,
  TimeLine,
  TeamStatsWrapper,
  TeamStat,
  TeamGold,
  TeamLevel,
  TeamKills,
  TeamInfoWrapper,
  TeamInfo,
  TeamInfoHeader,
  TeamName,
  UserInfoColumnWrapper,
  UserInfoColumn,
  PlayerList,
  PlayerContainer,
  Team,
  StatValue,
  UserInterface,
  ItemInterface,
  ChampionImg,
  ChampionLevel,
  SpellWrapper,
  Spell,
  UserInfoContaioner,
  NamenTierWrapper,
  UserName,
  Tear,
  KDAContainer,
  KDADetails,
  Space,
  KDA,
  ItemWrapper,
  ItemImg,
} from "./styled";
import { ReactComponent as RedGoldIcon } from "./gold_red.svg";
import { ReactComponent as RedKillIcon } from "./kills_red.svg";
import { ReactComponent as RedLevelIcon } from "./level_red.svg";
import { ReactComponent as BlueGoldIcon } from "./gold_blue.svg";
import { ReactComponent as BlueKillIcon } from "./kills_blue.svg";
import { ReactComponent as BlueLevelIcon } from "./level_blue.svg";
const GameInfo = () => {
  //홍성철 짱 / 고마웡... 도움이 됐다 ^__^
  return (
    <GameInfoWrapper>
      <TypeInfoWrapper>
        <GameTypeInfo>자유랭크</GameTypeInfo>
        <AnalysisTypeInfo isLive={true}>분석완료</AnalysisTypeInfo>
      </TypeInfoWrapper>
      <DateInfo>2022년 7월 19일</DateInfo>
    </GameInfoWrapper>
  );
};

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

const Player = () => {
  return (
    <PlayerContainer>
      <UserInterface>
        <ChampionImg />
        <ChampionLevel>16</ChampionLevel>
        <SpellWrapper>
          <Spell />
          <Spell />
        </SpellWrapper>
        <UserInfoContaioner>
          <NamenTierWrapper>
            <UserName>정잭영</UserName>
            <Tear>P4</Tear>
          </NamenTierWrapper>
          <KDAContainer>
            <KDADetails>
              15
              <Space />
              /
              <Space />
              6
              <Space />
              /
              <Space />
              5
              <Space />
            </KDADetails>
            <KDA>KDA 3.3</KDA>
          </KDAContainer>
        </UserInfoContaioner>
      </UserInterface>
      <ItemInterface>
        <ItemWrapper>
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
          <ItemImg />
        </ItemWrapper>
        40,480 · 20K
      </ItemInterface>
    </PlayerContainer>
  );
};

const TeamInfoContainer = () => {
  return (
    <TeamInfoWrapper>
      <TeamInfo>
        <TeamInfoHeader>
          <TeamName team={Team.RED}>RED TEAM</TeamName>
          <UserInfoColumnWrapper>
            <UserInfoColumn>SUMMONER</UserInfoColumn>
            <UserInfoColumn>ITEMS</UserInfoColumn>
          </UserInfoColumnWrapper>
        </TeamInfoHeader>
        <PlayerList>
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
        </PlayerList>
      </TeamInfo>
      <TeamInfo>
        <TeamInfoHeader>
          <TeamName team={Team.BLUE}>BLUE TEAM</TeamName>
          <UserInfoColumnWrapper>
            <UserInfoColumn>SUMMONER</UserInfoColumn>
            <UserInfoColumn>ITEMS</UserInfoColumn>
          </UserInfoColumnWrapper>
        </TeamInfoHeader>
        <PlayerList>
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
        </PlayerList>
      </TeamInfo>
    </TeamInfoWrapper>
  );
};

export const GameAnalysis = () => {
  return (
    <GameAnalysisWrapper>
      <GameInfo />
      <TimeInfo>경과시간 22:31</TimeInfo>
      <Graph />
      <TimeLine />
      <TeamStats />
      <TeamInfoContainer />
    </GameAnalysisWrapper>
  );
};
