import { SummonerInfo } from '../../types/summonerInfo';
import React from 'react';
import {
  UserIdContainer,
  UserIcon,
  UserNameWrapper,
  UserName,
  SubName,
} from '../styles/userId.s';
interface propsType {
  summonerInfo: SummonerInfo;
}
const UserId = (props: propsType) => {
  return (
    <UserIdContainer>
      <UserIcon
        src={
          process.env.REACT_APP_DDRAGON_API_ROOT +
          `/profileicon/${props.summonerInfo.profileIconId}.png`
        }
      />
      <UserNameWrapper>
        <UserName>{props.summonerInfo.name}</UserName>
        <SubName>LV {props.summonerInfo.level}</SubName>
      </UserNameWrapper>
    </UserIdContainer>
  );
};
export default UserId;
