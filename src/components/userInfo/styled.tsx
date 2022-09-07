import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  min-height: 100%;
`;

export const UserStatWrapper = styled.div`
  height: 399px;
`;

export const UserGameListWrapper = styled.div``;

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
`;

export const Profile = styled.div`
  width: 32px;
  height: 100%;
  border-radius: 10px;
  background: black;
`;

export const KDABox = styled.div`
  width: 78px;
  height: 100%;
  margin-left: 12px;
  color: white;
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
  width: 100px;
  height: 100%;
  font-size: 8px;
  font-weight: 500;
  color: white;
`;

export const CSInfo = styled.div`
  height: 8px;
`;

export const Ward = styled.div`
  height: 8px;
  margin-top: 7px;
`;

export const ItemBox = styled.div`
  width: 66px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ItemRow = styled.div`
  height: 15px;
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background: black;
`;
