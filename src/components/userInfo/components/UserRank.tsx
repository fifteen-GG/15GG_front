import { useState } from 'react';
import { SummonerInfo } from '../../types/summonerInfo';
import gg_tier_unranked from '../../../assets/gg_tier_unranked_4x.png';
import {
  UserRankContainer,
  RankWrapper,
  RankText,
  RankSubTitle,
  RankName,
  RankContent,
  RankLp,
  RankWinrate,
  RankImg,
} from '../styles/userRank.s';
import { formatRankInfo } from '../userInfo';

export interface userRank {
  name: string;
  lp: number;
  win_rate: number;
  win: number;
  losses: number;
}
interface propsType {
  summonerInfo: SummonerInfo;
}
const UserRank = (props: propsType) => {
  const [userSoloRank, setSoloUserRank] = useState<userRank>(
    formatRankInfo(props.summonerInfo, 'solo'),
  );
  const [userFlexRank, setFlexUserRank] = useState<userRank>(
    formatRankInfo(props.summonerInfo, 'flex'),
  );
  return (
    <UserRankContainer>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          <RankName>{userSoloRank.name}</RankName>
          <RankContent>
            <RankLp>{userSoloRank.lp}LP</RankLp>
            <RankWinrate>
              {userSoloRank.win_rate}% ({userSoloRank.win}승{' '}
              {userSoloRank.losses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        {!props.summonerInfo.solo ? (
          <RankImg src={gg_tier_unranked} />
        ) : (
          <RankImg
            src={
              process.env.REACT_APP_OPGG_API_ROOT +
              `/medals_new/${props.summonerInfo.solo.tier.toLowerCase()}.png`
            }
          />
        )}
      </RankWrapper>
      <RankWrapper className="Flex">
        <RankText>
          <RankSubTitle>자유랭크</RankSubTitle>
          <RankName>{userFlexRank.name}</RankName>
          <RankContent>
            <RankLp>{userSoloRank.lp}LP</RankLp>
            <RankWinrate>
              {userSoloRank.win_rate}% ({userSoloRank.win}승{' '}
              {userSoloRank.losses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        {!props.summonerInfo.flex ? (
          <RankImg src={gg_tier_unranked} />
        ) : (
          <RankImg
            src={
              process.env.REACT_APP_OPGG_API_ROOT +
              `/medals_new/${props.summonerInfo.flex.tier.toLowerCase()}.png`
            }
          />
        )}
      </RankWrapper>
    </UserRankContainer>
  );
};
export default UserRank;
