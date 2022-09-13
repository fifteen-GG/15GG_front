import styled from "styled-components";
enum TeamNameEnum {
    RED,
    BLUE,
  }
  
  interface TeamStatProps {
    team: TeamNameEnum;
  }
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
export {
  TeamInfoWrapper,
  TeamInfo,
  TeamInfoHeader,
  TeamName,
  TeamNameEnum as Team,
  UserInfoColumnWrapper,
  UserInfoColumn,
  PlayerList,
};