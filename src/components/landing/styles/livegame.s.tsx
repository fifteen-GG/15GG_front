import styled from 'styled-components';
import BackgroundImage from '../../../assets/gg_bg_314.svg';
import LiveGameLabelImage from '../../../assets/gg_label_live.svg';

export const LiveGameWrapper = styled.div`
  width: 314px;
  height: 84px;
  border-radius: 8px;
  background-image: url(${BackgroundImage});
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-image: url(${LiveGameLabelImage});
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
  /* justify-items: space-around; */
  /* justify-self: center; */
  justify-content: space-between;
`;

export const LiveGameSingleTeamWrapper = styled.div`
  /* width: 122px; */
  height: 44px;
  display: flex;
`;

export const LiveGameTeamsRow = styled.div`
  width: 65px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
