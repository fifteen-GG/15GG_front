import styled from "styled-components";
import * as S from "./styled";

const UserId = () => {
  return (
    <S.UserIdWrapper>
      <S.UserImg>이미지</S.UserImg>
      <S.NameWrapper>
        <S.UserName>정잭영</S.UserName>
        <S.SubName>142views</S.SubName>
      </S.NameWrapper>
    </S.UserIdWrapper>
  );
};

// interface RankProps{
//사이드 마진이 조금 남는 현상 수정필요
// }

const UserRank = () => {
  return (
    <S.UserRankWrapper>
      <S.RankWrapper className="Solo">
        <S.RankText>
          <S.RankSubTitle>솔로랭크</S.RankSubTitle>
          <S.RankName>Gold 2</S.RankName>
          <S.RankContent>
            <S.RankLp>89LP</S.RankLp>
            <S.RankWinrate>52% (164승 154패)</S.RankWinrate>
          </S.RankContent>
        </S.RankText>
        <S.RankImg></S.RankImg>
      </S.RankWrapper>
      <S.RankWrapper className="Free">
        <S.RankText>
          <S.RankSubTitle>자유랭크</S.RankSubTitle>
          <S.RankName>Platinum 4</S.RankName>
          <S.RankContent>
            <S.RankLp>0LP</S.RankLp>
            <S.RankWinrate>49% (156승 165패)</S.RankWinrate>
          </S.RankContent>
        </S.RankText>
        <S.RankImg></S.RankImg>
      </S.RankWrapper>
    </S.UserRankWrapper>
  );
};

const UserStatInfo = () => {
  return (
    <S.UserStatInfoWrapper>
      <S.GraphImg></S.GraphImg>
      <S.UserInfoText>
        <S.UserInfoTitle>승률</S.UserInfoTitle>
        <S.UserInfoContent>52%</S.UserInfoContent>
        <S.UserInfoSubTitle>164승 154패</S.UserInfoSubTitle>
      </S.UserInfoText>
      <S.UserInfoText>
        <S.UserInfoTitle>KDA</S.UserInfoTitle>
        <S.UserInfoContent>2.15</S.UserInfoContent>
        <S.UserInfoSubTitle>8.5/7.2/11.4</S.UserInfoSubTitle>
      </S.UserInfoText>
      <S.UserInfoText>
        <S.UserInfoTitle>선호 포지션</S.UserInfoTitle>
        <S.UserInfoContent>ADC</S.UserInfoContent>
        <S.UserInfoSubTitle>87%</S.UserInfoSubTitle>
      </S.UserInfoText>
    </S.UserStatInfoWrapper>
  );
};

const UserGraph = () => {
  return <S.UserGraphWrapper></S.UserGraphWrapper>;
};

export const UserInfo = () => {
  return (
    <S.UserInfoWrapper>
      <S.UserStatWrapper>
        <UserId />
        <UserRank />
        <UserStatInfo />
        <UserGraph />
      </S.UserStatWrapper>
      <S.UserGameListWrapper>{/*정빈쓰*/}</S.UserGameListWrapper>
    </S.UserInfoWrapper>
  );
};
