import { SumInfoProps } from './type';
import React from 'react';
import {
  UserIdWrapper,
  UserImg,
  NameWrapper,
  UserName,
  SubName,
} from './styles/userId.s';

const formatIcon = (data: { profileIcon: string }) => {
  return `https://opgg-static.akamaized.net/images/profile_icons/profileIcon${data.profileIcon}.jpg`;
};
export const UserId = ({ summonerInfo }: SumInfoProps) => {
  const { icon } = summonerInfo;
  return (
    <UserIdWrapper>
      <UserImg src={formatIcon({ profileIcon: `${icon}` })} />
      <NameWrapper>
        <UserName>정잭영</UserName>
        <SubName>142views</SubName>
      </NameWrapper>
    </UserIdWrapper>
  );
};
