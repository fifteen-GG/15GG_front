import { SummonerInfo } from '../../types/summonerInfo';
import React from 'react';
import {
  UserIdContainer,
  UserImg,
  NameWrapper,
  UserName,
  SubName,
} from '../styles/userId.s';

import { urlProfileIcons } from '../../utils/Url';

const UserId = (props: { summonerInfo: SummonerInfo }) => {
  return (
    <UserIdContainer>
      <UserImg src={urlProfileIcons(props.summonerInfo.profileIconId)} />
      <NameWrapper>
        <UserName>{props.summonerInfo.name}</UserName>
        <SubName>LV {props.summonerInfo.level}</SubName>
      </NameWrapper>
    </UserIdContainer>
  );
};
export default UserId;
