import { SummonerInfo } from '../../types/summonerInfo';
import React from 'react';
import {
  UserIdContainer,
  UserImg,
  NameWrapper,
  UserName,
  SubName,
} from '../styles/userId.s';

const UserId = (props: { summonerInfo: SummonerInfo }) => {
  return (
    <UserIdContainer>
      <UserImg
        src={
          process.env.REACT_APP_DDRAGON_API_ROOT +
          `/profileicon/${props.summonerInfo.profileIconId}.png`
        }
      />
      <NameWrapper>
        <UserName>{props.summonerInfo.name}</UserName>
        <SubName>LV {props.summonerInfo.level}</SubName>
      </NameWrapper>
    </UserIdContainer>
  );
};
export default UserId;
