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
  const { icon, userID, userLevel } = summonerInfo;
  return (
    <UserIdWrapper>
      <UserImg src={urlProfileIcons(icon)} />
      <NameWrapper>
        <UserName>{userID}</UserName>
        <SubName>LV {userLevel}</SubName>
      </NameWrapper>
    </UserIdWrapper>
  );
};
