import styled from 'styled-components';
import gg_pos_mid from '../../../assets/gg_pos_utl.svg';

export const LiveGameSingleUser = styled.div`
  margin-top: 2px;
  margin-bottom: 2px;
  width: 65px;
  height: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LiveGameUserPosition = styled.div`
  background-image: url(${gg_pos_mid});
  margin-left: 1px;
  margin-right: 1px;
  height: 12px;
  width: 12px;
  border-radius: 2px;
`;

export const LiveGameUserImageWrapper = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const LiveGameUserChampion = styled.img`
  height: 14px;
  width: 14px;
  border-radius: 2px;
`;

export const LiveGameUserName = styled.div`
  color: #fff;
  font-size: 10px;
  font-weight: 300;
`;
