import { SumInfoProps } from '../../type';
import React from 'react';
import {
  UserIdWrapper,
  UserImg,
  NameWrapper,
  UserName,
  SubName,
} from '../styles/userId.s';

import { urlProfileIcons } from '../../utility/Url';

const UserId = ({ summonerInfo }: SumInfoProps) => {
  const { profileIconId, name, level } = summonerInfo;
  return (
    <UserIdWrapper>
      <UserImg src={urlProfileIcons(profileIconId)} />
      <NameWrapper>
        <UserName>{name}</UserName>
        <SubName>LV {level}</SubName>
      </NameWrapper>
    </UserIdWrapper>
  );
};
export default UserId;
