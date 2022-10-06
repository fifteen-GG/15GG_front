import React from 'react';
import { SumInfoProps } from './type';

import {
  UserRankWrapper,
  RankWrapper,
  RankText,
  RankSubTitle,
  RankName,
  RankContent,
  RankLp,
  RankWinrate,
  RankImg,
} from '../styles/userRank.s';

// const formatRank = (data: { summonerRank: string }) => {
//   return `https://opgg-static.akamaized.net/images/medals_new/${data.summonerRank}.png`;
// };

import { formatRank } from '../../utility/Url';

export const UserRank = ({ summonerInfo }: SumInfoProps) => {
  function romanToNum(s: any) {
    const romeNum = {
      I: 1,
      V: 5,
    };
    let result = 0;
    const romeArray = s.split('');
    const numArray = romeArray.map((rome: any) => rome in romeNum);
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] < numArray[i + 1]) {
        result -= numArray[i];
      } else {
        result += numArray[i];
      }
    }

    return result;
  }
  // const rank = ['MASTER', 'GRANDMASTER', 'CHALLENGER'];
  // {ranks.map((index:any)=>{
  //   {ranks[index] === summonerInfo.flex.tier ? return setValidation(true) : setValidation(false)}
  // })};
  //인라인으로 표현하기
  return (
    <UserRankWrapper>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          {summonerInfo.solo.tier === 'MASTER' ||
          summonerInfo.solo.tier === 'GRANDMASTER' ||
          summonerInfo.solo.tier === 'CHALLENGER' ? (
            <RankName>
              {summonerInfo.solo.tier.charAt(0) +
                summonerInfo.solo.tier.slice(1).toLowerCase()}
            </RankName>
          ) : (
            <RankName>
              {summonerInfo.solo.tier.charAt(0) +
                summonerInfo.solo.tier.slice(1).toLowerCase() +
                ' ' +
                romanToNum(summonerInfo.solo.rank)}
            </RankName>
          )}
          <RankContent>
            <RankLp>{summonerInfo.solo.lp}LP</RankLp>
            <RankWinrate>
              {summonerInfo.solo.win_rate}% ({summonerInfo.solo.win}승{' '}
              {summonerInfo.solo.losses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank(summonerInfo.solo.tier.toLowerCase())} />
      </RankWrapper>
      <RankWrapper className="Flex">
        <RankText>
          <RankSubTitle>자유랭크</RankSubTitle>
          {summonerInfo.flex.tier === 'MASTER' ||
          summonerInfo.flex.tier === 'GRANDMASTER' ||
          summonerInfo.flex.tier === 'CHALLENGER' ? (
            <RankName>
              {summonerInfo.flex.tier.charAt(0) +
                summonerInfo.flex.tier.slice(1).toLowerCase()}
            </RankName>
          ) : (
            <RankName>
              {summonerInfo.flex.tier.charAt(0) +
                summonerInfo.flex.tier.slice(1).toLowerCase() +
                ' ' +
                romanToNum(summonerInfo.flex.rank)}
            </RankName>
          )}
          <RankContent>
            <RankLp>{summonerInfo.flex.lp}LP</RankLp>
            <RankWinrate>
              {summonerInfo.flex.win_rate}% ({summonerInfo.flex.win}승{' '}
              {summonerInfo.flex.losses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        <RankImg src={formatRank(summonerInfo.flex.tier.toLowerCase())} />
      </RankWrapper>
    </UserRankWrapper>
  );
};
// {matchInfo.items.map((item, index) => {
//   return index !== 3 ? (
//     <ItemImg src={urlItem(item)} key={index} />
//   ) : (
//     <ItemImg
//       className="item3"
//       src={urlItem(matchInfo.items[3])}
//       key={index}
//     />
