import styled from 'styled-components';

export const LiveGameWrapper = styled.div`
  width: 314px;
  height: 84px;
  border-radius: 8px;
  background-color: #2f3037;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

export const LiveGameTitleWrapper = styled.div`
  width: 314px;
  height: 14px;
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LiveGameLabel = styled.div`
  width: 50px;
  height: 14px;
  margin-left: 8px;
  border-radius: 4px;
  background-color: #61d125;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4pt;
  color: #fff;
  font-weight: 500;
`;

export const LiveGameTitle = styled.div`
  margin-left: 8px;
  font-size: 10px;
  color: #fff;
  font-weight: 400;
`;

export const LiveGameTeamsWrapper = styled.div`
  width: 298px;
  height: 44px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
`;

export const LiveGameSingleTeamWrapper = styled.div`
  width: 122px;
  height: 44px;
  display: flex;
`;

export const LiveGameVersusWrapper = styled.div`
  width: 74px;
  background-color: #2f3037;
  margin-left: 8px;
  margin-right: 32px;
  margin-top: 10px;
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  font-style: italic;
`;

export const LiveGameTeamsRow = styled.div`
  width: 60px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LiveGameSingleUser = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  width: 60px;
  height: 12px;
  display: flex;
  flex-direction: row;
`;

export const LiveGameUserChampion = styled.div`
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 2px;
`;

export const LiveGameUserName = styled.div`
  color: #fff;
  font-size: 10px;
  font-weight: 300;
  margin-left: 4px;
`;
