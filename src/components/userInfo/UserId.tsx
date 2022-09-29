import { SumInfoProps } from './type';
import React from 'react';
import {
  UserIdWrapper,
  UserImg,
  NameWrapper,
  UserName,
  SubName,
} from './styles/userId.s';

import { urlProfileIcons } from '../utility/Url';

export const UserId = ({ summonerInfo }: SumInfoProps) => {
  const { icon, summoner_id, level } = summonerInfo;
  return (
    <UserIdWrapper>
      <UserImg src={urlProfileIcons(icon)} />
      <NameWrapper>
        <UserName>{summoner_id}</UserName>
        <SubName>LV {level}</SubName>
      </NameWrapper>
    </UserIdWrapper>
  );
};
