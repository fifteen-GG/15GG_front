import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  height: 100%;
`;

export const UserStatWrapper = styled.div`
  height: 399px;
`;

export const UserGameListWrapper = styled.div`
  height: 100%;
`;

//UserId 부분 스타일
export const UserIdWrapper = styled.div`
  width: 100%;
  background: #1e2025;
  display: flex;
`;
export const UserImg = styled.div`
  width: 52px;
  height: 52px;
  background: black;
  margin: 2px 6px 6px 2px;
  border-radius: 10px;
  display: flex;
`;
export const NameWrapper = styled.div`
  flex-direction: column;
`;
export const UserName = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: #fff;
`;
export const SubName = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin: 0 0 11px 0;
  color: #88898d;
`;

//UserRank부분 스타일
export const UserRankWrapper = styled.div`
  width: 100%;
  background: #1e2025;
  margin-top: 4px;
  display: flex;
  padding: 0px 2px 0 2px;
  box-sizing: border-box;
  justify-content: space-between;
`;
//클래스로 지정해도 되는지 width와 배치에 대한 포맷을 맞춰야 할듯
export const RankWrapper = styled.div`
  @media screen and (max-width: 360px) {
    width: 152px;
  }
  @media screen and (min-width: 361px) {
    width: calc(50% - 1px);
  }
  display: flex;
  justify-content: space-around;
  &:nth-child(1) {
    border-right: 2px solid #2b2f2e;
    padding-right: 9px;
  }
  &.Free {
    margin-left: 12px;
  }
  padding-top: 14px;
  margin-bottom: 8px;
`;

export const RankText = styled.div`
  margin-right: 9px;
`;
export const RankSubTitle = styled.div`
  font-size: 12px;
  color: #88898d;
`;
export const RankName = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;
export const RankContent = styled.div`
  font-size: 12px;
  margin: 10px 0px 8px 0;
  box-sizing: border-box;
  color: #fff;
`;
export const RankLp = styled.div``;
export const RankWinrate = styled.div``;
export const RankImg = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: #fff;
`;

//UserStatInfo부분 스타일
export const UserStatInfoWrapper = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 4px;
  background-color: #27282d;
  border-radius: 6px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const GraphImg = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-left: 20px;
  background-color: #fff;
`;
export const UserInfoText = styled.div`
  width: 65px;
  margin: 0 10px 0 12px;
`;
export const UserInfoTitle = styled.div`
  font-size: 10px;
  color: #88898d;
`;
export const UserInfoContent = styled.div`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
`;
export const UserInfoSubTitle = styled.div`
  font-size: 10px;
  color: #fff;
`;

//UserGraph 스타일
export const UserGraphWrapper = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 8px;
  background-color: #27282d;
  border-radius: 6px;
  display: flex;
`;
//보류중이다
export const UserStatGraphContainer = styled.div``;
export const UserStatGraphTitle = styled.div``;
export const AvgStatGraphContainer = styled.div``;
export const AvgStatGraphTitle = styled.div``;
export const WholeGraphWrapper = styled.div``;
export const UserStatGraphWrapper = styled.div``;
export const AvgStatGraphWrapper = styled.div``;
