import { GameInfoProps } from './type';
import {
  GameListBox,
  GameInfoBox,
  AnalysisStatus,
  GameMainInfo,
  Result,
  Date,
  GameMode,
  GameDetailInfo,
  Profile,
  KDABox,
  KDAInfo,
  KDARate,
  CSNWard,
  CSInfo,
  Ward,
  ItemBox,
  ItemRow,
  Item,
} from './styles/gameCard';
export const GameCard = ({ gameInfo }: GameInfoProps) => {
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
  } = gameInfo;
  return (
    <GameListBox>
      {status === 'live' ? (
        <AnalysisStatus status={status}>실시간 분석</AnalysisStatus>
      ) : status === 'complete' ? (
        <AnalysisStatus status={status}>분석완료</AnalysisStatus>
      ) : (
        <AnalysisStatus status={status}>미분석</AnalysisStatus>
      )}
      <GameInfoBox result={result}>
        <GameMainInfo>
          <Result>{result === 'win' ? '승리' : '패배'}</Result>
          <Date>
            {month}/{date}
          </Date>
          <GameMode>{mode === 'solo' ? '솔로랭크' : '자유랭크'}</GameMode>
        </GameMainInfo>
        <GameDetailInfo>
          <div style={{ display: 'flex' }}>
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
          </div>
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
