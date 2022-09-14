import styled from 'styled-components';

export const GameListBox = styled.div`
  width: 100%;
  margin-top: 6px;
`;

export const GameInfoBox = styled.div`
  height: 46px;
  background: ${(props: { result: string }) =>
    props.result === 'win' ? '#4b5f71' : '#634749'};
  border-radius: 10px;
  padding: 10px 10px 8px 14px;
`;

export const AnalysisStatus = styled.div`
  width: ${(props: { status: 'live' | 'complete' | 'incomplete' }) =>
    props.status === 'live' ? '50px' : '40px'};
  height: 14px;
  padding: 3px 5px;
  border-radius: 3px;
  background-color: ${(props: { status: 'live' | 'complete' | 'incomplete' }) =>
    props.status === 'live'
      ? '#61d125'
      : props.status === 'complete'
      ? '#4d4ae2'
      : '#4c4c4c'};
  font-size: 8px;
  display: flex;
  position: relative;
  top: 8px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
`;

export const GameMainInfo = styled.div`
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  display: flex;
`;

export const Result = styled.div`
  width: 18px;
  height: 100%;
`;

export const Date = styled.div`
  width: 28px;
  height: 100%;
  margin-left: 8px;
`;

export const GameMode = styled.div`
  width: 35px;
  height: 100%;
  margin-left: 6px;
`;

export const GameDetailInfo = styled.div`
  width: 100%;
  height: 32px;
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div`
  width: 32px;
  height: 100%;
  border-radius: 10px;
  background: black;
`;

export const KDABox = styled.div`
  height: 100%;
  color: white;
  margin-left: 12px;
`;

export const KDAInfo = styled.div`
  height: 14px;
  font-size: 14px;
  font-weight: bold;
`;

export const KDARate = styled.div`
  height: 10px;
  font-size: 10px;
  font-weight: 500;
  margin-top: 2px;
`;

export const CSNWard = styled.div`
  height: 100%;
  font-size: 8px;
  font-weight: 500;
  color: white;
  margin-left: 22px;
`;

export const CSInfo = styled.div`
  height: 8px;
`;

export const Ward = styled.div`
  height: 8px;
  margin-top: 7px;
`;

export const ItemBox = styled.div`
  display: flex;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (min-width: 651px) {
    flex-direction: row;
  }
`;
export const ItemRow = styled.div`
  display: flex;
  @media screen and (min-width: 651px) {
    align-items: center;
  }
`;
export const Item = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background: black;
  margin-left: 2px;
  @media screen and (min-width: 651px) {
    width: 24px;
    height: 24px;
    border-radius: 5px;
  }
`;

export const UserInfoWrapper = styled.div``;

export const UserStatWrapper = styled.div``;

export const UserGameListWrapper = styled.div``;

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
