import React from 'react';
import { SumInfoProps } from '../../../type';
import rankimg from '../../../assets/gg_tier_unranked_4x.png';
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

import { formatRank } from '../../utility/Url';

const UserRank = (props: SumInfoProps) => {
  const soloRankName = (s: SumInfoProps) => {
    const rankName = (s: SumInfoProps) => {
      const name =
        s.summonerInfo.solo.tier.charAt(0) +
        s.summonerInfo.solo.tier.slice(1).toLowerCase();
      return name;
    };
    const romanToNum = (s: SumInfoProps) => {
      const romeNum = {
        I: 1,
        V: 5,
      };
      let number = 0;
      const romeArray = s.summonerInfo.solo.rank.split('');
      const numArray = romeArray.map((rome: string) => rome in romeNum);
      for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < numArray[i + 1]) {
          number -= numArray[i] as unknown as number;
        } else {
          number += numArray[i] as unknown as number;
        }
      }
      return number;
    };
    let result = '';
    if (
      s.summonerInfo.solo.tier === 'MASTER' ||
      s.summonerInfo.solo.tier === 'GRANDMASTER' ||
      s.summonerInfo.solo.tier === 'CHALLENGER'
    )
      result = rankName(s);
    else result = rankName(s) + ' ' + romanToNum(s);
    console.log(result);
    return result;
  };
  const flexRankName = (s: SumInfoProps) => {
    const rankName = (s: SumInfoProps) => {
      const name =
        s.summonerInfo.flex.tier.charAt(0) +
        s.summonerInfo.flex.tier.slice(1).toLowerCase();
      return name;
    };

    const romanToNum = (s: SumInfoProps) => {
      const romeNum = {
        I: 1,
        V: 5,
      };
      let number = 0;
      const romeArray = s.summonerInfo.flex.rank.split('');
      const numArray = romeArray.map((rome: string) => rome in romeNum);
      for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < numArray[i + 1]) {
          number -= numArray[i] as unknown as number;
        } else {
          number += numArray[i] as unknown as number;
        }
      }
      return number;
    };
    let result = '';
    if (
      s.summonerInfo.flex.tier === 'MASTER' ||
      s.summonerInfo.flex.tier === 'GRANDMASTER' ||
      s.summonerInfo.flex.tier === 'CHALLENGER'
    )
      result = rankName(s);
    else result = rankName(s) + ' ' + romanToNum(s);
    console.log(result);
    return result;
  };
  return (
    <UserRankWrapper>
      <RankWrapper className="Solo">
        {!props.summonerInfo.solo ? (
          <>
            <RankText>
              <RankSubTitle>솔로랭크</RankSubTitle>
              <RankName>Unranked</RankName>
              <RankContent>
                <RankLp>0LP</RankLp>
                <RankWinrate>전적없음</RankWinrate>
              </RankContent>
            </RankText>
            <RankImg src={rankimg} />
          </>
        ) : (
          <>
            <RankText>
              <RankSubTitle>솔로랭크</RankSubTitle>
              <RankName>{soloRankName(props)}</RankName>
              <RankContent>
                <RankLp>{props.summonerInfo.solo.lp}LP</RankLp>
                <RankWinrate>
                  {props.summonerInfo.solo.win_rate}% (
                  {props.summonerInfo.solo.win}승{' '}
                  {props.summonerInfo.solo.losses}패)
                </RankWinrate>
              </RankContent>
            </RankText>
            <RankImg
              src={formatRank(props.summonerInfo.solo.tier.toLowerCase())}
            />
          </>
        )}
      </RankWrapper>
      <RankWrapper className="Flex">
        {!props.summonerInfo.flex ? (
          <>
            <RankText>
              <RankSubTitle>자유랭크</RankSubTitle>
              <RankName>Unranked</RankName>
              <RankContent>
                <RankLp>0LP</RankLp>
                <RankWinrate>전적없음</RankWinrate>
              </RankContent>
            </RankText>
            <RankImg src={rankimg} />
          </>
        ) : (
          <>
            <RankText>
              <RankSubTitle>자유랭크</RankSubTitle>
              <RankName>{flexRankName(props)}</RankName>
              <RankContent>
                <RankLp>{props.summonerInfo.flex.lp}LP</RankLp>
                <RankWinrate>
                  {props.summonerInfo.flex.win_rate}% (
                  {props.summonerInfo.flex.win}승{' '}
                  {props.summonerInfo.flex.losses}패)
                </RankWinrate>
              </RankContent>
            </RankText>
            <RankImg
              src={formatRank(props.summonerInfo.flex.tier.toLowerCase())}
            />
          </>
        )}
      </RankWrapper>
    </UserRankWrapper>
  );
};
export default UserRank;
