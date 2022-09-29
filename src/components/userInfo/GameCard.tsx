import { MatchInfoProps } from './type';
// import { url } from 'inspector';
import React from 'react';
import {
  GameListBox,
  GameInfoBox,
  AnalysisStatus,
  GameMainInfo,
  Result,
  Date,
  GameMode,
  GameDetailInfo,
  GameCardContent,
  Profile,
  KDABox,
  KDAInfo,
  KDARate,
  CSNWard,
  CSInfo,
  Ward,
  ItemBox,
  // ItemRow,
  ItemImg,
} from './styles/gameCard.s';
// const formatChampion = (data: { championName: string }) => {
//   return `https://opgg-static.akamaized.net/images/lol/champion/${data.championName}.png`;
// };
// const formatItem = (data: { championItem: string }) => {
//   return `https://opgg-static.akamaized.net/images/lol/item/${data.championItem}.png`;
// };
import { urlChampion, urlItem } from '../utility/Url';

export const GameCard = ({ matchInfo }: MatchInfoProps) => {
  const {
    status,
    result,
    month,
    date,
    queue_mode,
    kills,
    deaths,
    assists,
    kda,
    cs,
    cs_per_min,
    ward,
    champion_name,
    items,
  } = matchInfo;

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
          <GameMode>{queue_mode === 'solo' ? '솔로랭크' : '자유랭크'}</GameMode>
        </GameMainInfo>
        <GameDetailInfo>
          <GameCardContent>
            <Profile src={urlChampion(champion_name)} />
            <KDABox>
              <KDAInfo>
                {kills} / {deaths} / {assists}
              </KDAInfo>
              <KDARate>KDA {kda}</KDARate>
            </KDABox>
            <CSNWard>
              <CSInfo>
                CS {cs} ({cs_per_min})
              </CSInfo>
              <Ward>제어 와드 {ward}</Ward>
            </CSNWard>
          </GameCardContent>
          <ItemBox>
            {items.map((item, index) => {
              return index !== 3 ? (
                <ItemImg src={urlItem(item)} key={index} />
              ) : (
                <ItemImg
                  className="item3"
                  src={urlItem(items[3])}
                  key={index}
                />
              );
            })}
          </ItemBox>
        </GameDetailInfo>
      </GameInfoBox>
    </GameListBox>
  );
};
