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
  return (
    <GameListBox>
      {matchInfo.status === 'live' ? (
        <AnalysisStatus status={matchInfo.status}>실시간 분석</AnalysisStatus>
      ) : matchInfo.status === 'complete' ? (
        <AnalysisStatus status={matchInfo.status}>분석완료</AnalysisStatus>
      ) : (
        <AnalysisStatus status={matchInfo.status}>미분석</AnalysisStatus>
      )}
      <GameInfoBox result={matchInfo.result}>
        <GameMainInfo>
          <Result>{matchInfo.result === 'win' ? '승리' : '패배'}</Result>
          <Date>
            {matchInfo.month}/{matchInfo.date}
          </Date>
          <GameMode>
            {matchInfo.queue_mode === 'solo' ? '솔로랭크' : '자유랭크'}
          </GameMode>
        </GameMainInfo>
        <GameDetailInfo>
          <GameCardContent>
            <Profile src={urlChampion(matchInfo.champion_name)} />
            <KDABox>
              <KDAInfo>
                {matchInfo.kills} / {matchInfo.deaths} / {matchInfo.assists}
              </KDAInfo>
              <KDARate>KDA {matchInfo.kda}</KDARate>
            </KDABox>
            <CSNWard>
              <CSInfo>
                CS {matchInfo.cs} ({matchInfo.cs_per_min})
              </CSInfo>
              <Ward>제어 와드 {matchInfo.ward}</Ward>
            </CSNWard>
          </GameCardContent>
          <ItemBox>
            {matchInfo.items.map((item, index) => {
              return index !== 3 ? (
                <ItemImg src={urlItem(item)} key={index} />
              ) : (
                <ItemImg
                  className="item3"
                  src={urlItem(matchInfo.items[3])}
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
