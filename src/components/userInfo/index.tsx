import styled from 'styled-components';
import * as S from './styled';
type GameProps = {
  status: 'live' | 'complete' | 'incomplete';
  result: 'win' | 'lose';
  mode: 'solo' | 'free';
  month: string;
  date: string;
  kill: number;
  death: number;
  assist: number;
  kda: number;
  cs: number;
  rate: number;
  ward: number;
};
const games: GameProps[] = [
  {
    status: 'live',
    result: 'win',
    mode: 'solo',
    month: '09',
    date: '06',
    kill: 7,
    death: 3,
    assist: 21,
    kda: 9.33,
    cs: 177,
    rate: 8.33,
    ward: 0,
  },
  {
    status: 'complete',
    result: 'lose',
    mode: 'free',
    month: '09',
    date: '05',
    kill: 7,
    death: 3,
    assist: 21,
    kda: 9.33,
    cs: 177,
    rate: 7.29,
    ward: 0,
  },
  {
    status: 'incomplete',
    result: 'win',
    mode: 'solo',
    month: '09',
    date: '04',
    kill: 7,
    death: 3,
    assist: 21,
    kda: 9.33,
    cs: 177,
    rate: 9.17,
    ward: 0,
  },
];

const GameListBox = styled.div`
  width: 100%;
  margin-top: 6px;
`;

const GameInfoBox = styled.div`
  height: 46px;
  background: ${(props: { result: string }) =>
    props.result === 'win' ? '#4b5f71' : '#634749'};
  border-radius: 10px;
  padding: 10px 10px 8px 14px;
`;

const AnalysisStatus = styled.div`
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

const GameMainInfo = styled.div`
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

const Result = styled.div`
  width: 18px;
  height: 100%;
`;

const Date = styled.div`
  width: 28px;
  height: 100%;
  margin-left: 8px;
`;

const GameMode = styled.div`
  width: 35px;
  height: 100%;
  margin-left: 6px;
`;

const GameDetailInfo = styled.div`
  width: 100%;
  height: 32px;
  margin-top: 6px;
  display: flex;
`;

const Profile = styled.div`
  width: 32px;
  height: 100%;
  border-radius: 10px;
  background: black;
`;

const KDABox = styled.div`
  width: 78px;
  height: 100%;
  margin-left: 12px;
  color: white;
`;

const KDAInfo = styled.div`
  height: 14px;
  font-size: 14px;
  font-weight: bold;
`;

const KDARate = styled.div`
  height: 10px;
  font-size: 10px;
  font-weight: 500;
  margin-top: 2px;
`;

const CSNWard = styled.div`
  width: 100px;
  height: 100%;
  font-size: 8px;
  font-weight: 500;
  color: white;
`;

const CSInfo = styled.div`
  height: 8px;
`;

const Ward = styled.div`
  height: 8px;
  margin-top: 7px;
`;

const ItemBox = styled.div`
  width: 66px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ItemRow = styled.div`
  height: 15px;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background: black;
`;
const GameCard = (props: { gameInfo: GameProps }) => {
  const {
    status,
    result,
    month,
    date,
    mode,
    kill,
    death,
    assist,
    kda,
    cs,
    rate,
    ward,
  } = props.gameInfo;
  return (
    <GameListBox>
      {status === 'live' ? (
        <AnalysisStatus status={status}>실시간 분석</AnalysisStatus>
      ) : status === 'complete' ? (
        <AnalysisStatus status={status}>분석완료</AnalysisStatus>
      ) : (
        <AnalysisStatus status={status}>미분석</AnalysisStatus>
      )}
      <GameInfoBox result={props.gameInfo.result}>
        <GameMainInfo>
          <Result>{result === 'win' ? '승리' : '패배'}</Result>
          <Date>
            {month}/{date}
          </Date>
          <GameMode>{mode === 'solo' ? '솔로랭크' : '자유랭크'}</GameMode>
        </GameMainInfo>
        <GameDetailInfo>
          <Profile></Profile>
          <KDABox>
            <KDAInfo>
              {kill} / {death} / {assist}
            </KDAInfo>
            <KDARate>KDA {kda}</KDARate>
          </KDABox>
          <CSNWard>
            <CSInfo>
              CS {cs} ({rate})
            </CSInfo>
            <Ward>제어 와드 {ward}</Ward>
          </CSNWard>
          <ItemBox>
            <ItemRow>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </ItemRow>
            <ItemRow>
              <Item></Item>
              <Item></Item>
              <Item></Item>
              <Item></Item>
            </ItemRow>
          </ItemBox>
        </GameDetailInfo>
      </GameInfoBox>
    </GameListBox>
  );
};
export const UserInfo = () => {
  return (
    <S.UserInfoWrapper>
      <S.UserStatWrapper>{/*동욱쓰*/}</S.UserStatWrapper>
      <S.UserGameListWrapper>
        {games.map((game: GameProps, index) => {
          return <GameCard gameInfo={game} key={index}></GameCard>;
        })}
      </S.UserGameListWrapper>
    </S.UserInfoWrapper>
  );
};
