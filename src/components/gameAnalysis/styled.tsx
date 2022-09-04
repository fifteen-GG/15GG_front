import styled from "styled-components";

const GameAnalysisWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
  background-color: ${(props) => (props.isLive ? "#e84057" : "#4d4ae2")};
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
    props.team === TeamNameEnum.RED ? "#e84057" : "#4d4ae2"};
`;

const TeamLevel = styled.div<TeamStatProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  color: ${(props) =>
    props.team === TeamNameEnum.RED ? "#e84057" : "#4d4ae2"};
`;

const TeamKills = styled.div<TeamStatProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  color: ${(props) =>
    props.team === TeamNameEnum.RED ? "#e84057" : "#4d4ae2"};
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
  height: 454px;
  width: 100%;
`;
const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 234px;
  margin-left: 8px;
  margin-right: 8px;
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
    props.team === TeamNameEnum.RED ? "#e84057" : "#5383e8"};
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
`;
const Player = styled.div`
  display: flex;
  height: 20px;
  padding: 8px;
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
  Player,
  TeamNameEnum as Team,
};
