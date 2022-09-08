import styled from 'styled-components';

const GameAnalysisWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const GameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 38px;
`;

const TypeInfoWrapper = styled.div`
  display: flex;
  height: 18px;
  align-items: center;
  flex-direction: row;
  color: #ffffff;
`;

const GameTypeInfo = styled.div`
  display: flex;
  font-size: 18px;
`;

interface RealTimeInfoProps {
  isLive?: boolean;
}

const AnalysisTypeInfo = styled.div<RealTimeInfoProps>`
  display: flex;
  height: 16px;
  width: auto;
  padding: 0 4px 0 4px;
  color: #ffffff;
  margin-left: 6px;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: ${(props) => (props.isLive ? '#e84057' : '#4d4ae2')};
`;

const DateInfo = styled.div`
  display: flex;
  height: 13px;
  margin-top: 6px;
  align-items: center;
  color: #88898d;
  font-size: 13px;
`;

const TimeInfo = styled.div`
  display: flex;
  font-size: 12px;
  color: #ffffff;
  font-weight: 300;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 213px;
  padding: 0 16px 16px 16px;

  color: #ffffff;
  font-size: 12px;
  align-items: center;
`;
const Graph = styled.div`
  display: flex;
  flex-direction: column;
  height: 29px;
  width: 100%;
  margin: 12px 0 12px 0;
`;
const TimeLine = styled.div`
  display: flex;
  flex-direction: column;
  height: 86px;
  width: 100%;
  margin-bottom: 12px;
`;
const TeamStatsWrapper = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  border-top: 2px solid #2b2f2e;
`;

enum TeamNameEnum {
  RED,
  BLUE,
}

interface TeamStatProps {
  team: TeamNameEnum;
}

const TeamStat = styled.div`
  display: flex;
  width: calc(50% - 1px);
  height: 48px;
  justify-content: space-evenly;
  align-items: flex-end;
  :nth-child(1) {
    border-right: 2px solid #2b2f2e;
  }
`;

const TeamGold = styled.div<TeamStatProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 40px;
  color: ${(props) =>
    props.team === TeamNameEnum.RED ? '#e84057' : '#4d4ae2'};
`;

const TeamLevel = styled.div<TeamStatProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  color: ${(props) =>
    props.team === TeamNameEnum.RED ? '#e84057' : '#4d4ae2'};
`;

const TeamKills = styled.div<TeamStatProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  color: ${(props) =>
    props.team === TeamNameEnum.RED ? '#e84057' : '#4d4ae2'};
`;

const StatValue = styled.div`
  display: flex;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

///여기부터 입니다~
const TeamInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 234px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 12px;
`;
const TeamInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 44px;
  margin-bottom: 2px;
`;
const TeamName = styled.div<TeamStatProps>`
  display: flex;
  background-color: #27282d;
  height: 28px;
  border-radius: 4px 4px 0 0;
  padding: 0 8px 0 8px;
  color: ${(props) =>
    props.team === TeamNameEnum.RED ? '#e84057' : '#5383e8'};
  font-size: 12px;
  font-weight: 500;
  align-items: center;
`;
const UserInfoColumnWrapper = styled.div`
  display: flex;
  padding: 0 8px 0 8px;
  height: 16px;
  align-items: center;
  justify-content: space-between;
`;
const UserInfoColumn = styled.div`
  font-size: 9px;
  color: #fafafa;
  font-size: 9px;
  font-weight: bold;
`;
const PlayerList = styled.div`
  display: flex;
  flex-direction: column;
  height: 196px;
  margin-bottom: 8px;
  background-color: #27282d;
  border-radius: 0px 0px 4px 4px;
`;
const PlayerWrapper = styled.div`
  display: flex;
  height: 38px;
  padding 0px 4px 0px 8px;
  justify-content: space-between;
`;
const UserInterface = styled.div`
  display: flex;
  height: 22px;
  margin-top: 7px;
`;
const ItemInterface = styled.div`
  display: flex;
  flex-direction: column;
  width: 117px;
  height: 26px;
  margin-top: 6px;
  align-items: flex-end;
  font-size: 10px;
  font-weight: bold;
  color: #fafafa;
`;
const ChampionImg = styled.div`
  height: 22px;
  width: 22px;
  position: absolute;
  background-color: white;
  border-radius: 2px;
`;
const ChampionLevel = styled.div`
  display: flex;
  height: 10px;
  width: 10px;
  background-color: rgba(30, 32, 37, 0.8);
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 12px;
  margin-top: 12px;
  font-size: 6px;
  color: #ffffff;
  border-radius: 2px;
`;
const SpellWrapper = styled.div`
  display: flex;
  height: 22px;
  width: 10px;
  margin-left: 24px;
  margin-right: 3px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;
`;
const Spell = styled.div`
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 2px;
`;
const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 22px;
  justify-content: space-between;
`;
const SummonerInfo = styled.div`
  display: flex;
  height: 11px;
  align-items: center;
`;
const SummonerName = styled.div`
  font-size: 11px;
  color: #fafafa;
  font-weight: bold;
  margin-right: 2px;
`;
const SummonerTier = styled.div`
  display: flex;
  background-color: #00bba3;
  height: 10px;
  width: 15px;
  color: #ffffff;
  font-size: 6px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const KDAWrapper = styled.div`
  display: flex;
  height: 10px;
`;
const KDADetails = styled.div`
  display: flex;
  height: 10px;
  font-size: 10px;
  color: #fafafa;
  font-weight: bold;
  white-space: pre;
`;
const KDA = styled.div`
  display: flex;
  font-size: 8px;
  font-weight: bold;
  color: #3595a1;
  line-height: 1.8;
`;
const ItemWrapper = styled.div`
  display: flex;
`;
const ItemImg = styled.div`
  height: 15px;
  width: 15px;
  background-color: white;
  margin-right: 2px;
  border-radius: 2px;
`;

export {
  GameAnalysisWrapper,
  GameInfoWrapper,
  TypeInfoWrapper,
  GameTypeInfo,
  AnalysisTypeInfo,
  DateInfo,
  TimeInfo,
  InfoArea,
  Graph,
  TimeLine,
  TeamStatsWrapper,
  TeamStat,
  TeamGold,
  TeamLevel,
  TeamKills,
  StatValue,
  TeamInfoWrapper,
  TeamInfo,
  TeamInfoHeader,
  TeamName,
  UserInfoColumnWrapper,
  UserInfoColumn,
  PlayerList,
  PlayerWrapper,
  UserInterface,
  ItemInterface,
  ChampionImg,
  ChampionLevel,
  SpellWrapper,
  Spell,
  UserInfoWrapper,
  SummonerInfo,
  SummonerName,
  SummonerTier,
  KDAWrapper,
  KDADetails,
  KDA,
  ItemWrapper,
  ItemImg,
  TeamNameEnum as Team,
};
