import { RankData } from '../../types/summonerInfo';
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
interface propsType {
  userName: string;
  soloRank: RankData;
  flexRank: RankData;
}
const UserRank = (props: propsType) => {
  let tier: string;
  const tierFormatting = (tier: string, Case: Number) => {
    tier = tier;
    if (Case === 1) return tier?.charAt(0) + tier?.slice(1).toLowerCase();
    else if (Case === 2) return tier?.toLowerCase();
  };
  const rankFormatting = (rank: string) => {
    const romeNum = ['I', 'II', 'III', 'IV', 'V'];
    let Rank = 1;
    romeNum.map((data, index) => {
      if (data === rank) Rank = index + 1;
    });
    return Rank;
  };
  return (
    <UserRankContainer>
      <RankWrapper className="Solo">
        <RankText>
          <RankSubTitle>솔로랭크</RankSubTitle>
          <RankName>
            {`${tierFormatting(props.soloRank?.tier, 1)} ${rankFormatting(
              props.soloRank?.rank,
            )}`}
          </RankName>
          <RankContent>
            <RankLp>{props.soloRank?.lp}LP</RankLp>
            <RankWinrate>
              {props.soloRank?.win_rate}% ({props.soloRank?.win}승{' '}
              {props.soloRank?.losses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        {!props.soloRank ? (
          <RankImg src={gg_tier_unranked} />
        ) : (
          <RankImg
            src={
              process.env.REACT_APP_OPGG_API_ROOT +
              `/medals_new/${tierFormatting(props.soloRank?.tier, 2)}.png`
            }
          />
        )}
      </RankWrapper>
      <RankWrapper className="Flex">
        <RankText>
          <RankSubTitle>자유랭크</RankSubTitle>
          <RankName>{`${tierFormatting(
            props.flexRank?.tier,
            1,
          )} ${rankFormatting(props.flexRank?.rank)}`}</RankName>
          <RankContent>
            <RankLp>{props.flexRank?.lp}LP</RankLp>
            <RankWinrate>
              {props.flexRank?.win_rate}% ({props.flexRank?.win}승{' '}
              {props.flexRank?.losses}패)
            </RankWinrate>
          </RankContent>
        </RankText>
        {!props.flexRank ? (
          <RankImg src={gg_tier_unranked} />
        ) : (
          <RankImg
            src={
              process.env.REACT_APP_OPGG_API_ROOT +
              `/medals_new/${tierFormatting(props.flexRank?.tier, 2)}.png`
            }
          />
        )}
      </RankWrapper>
    </UserRankContainer>
  );
};
export default UserRank;
