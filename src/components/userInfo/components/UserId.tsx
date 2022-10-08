import { SumInfoProps } from '../../../type';
import React from 'react';
import {
  UserIdWrapper,
  UserImg,
  NameWrapper,
  UserName,
  SubName,
} from '../styles/userId.s';

import { urlProfileIcons } from '../../utility/Url';

const UserId = (props: SumInfoProps) => {
  return (
    <UserIdWrapper>
      <UserImg src={urlProfileIcons(props.summonerInfo.profileIconId)} />
      <NameWrapper>
        <UserName>{props.summonerInfo.name}</UserName>
        <SubName>LV {props.summonerInfo.level}</SubName>
      </NameWrapper>
    </UserIdWrapper>
  );
};
export default UserId;
