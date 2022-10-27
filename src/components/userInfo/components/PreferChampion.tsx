import { useState } from 'react';
import { SummonerInfo } from '../../types/summonerInfo';
import {
  PreferChampionContainer,
  PreferChampionWrapper,
  PreferChampionText,
  ChampionInfoWrapper,
  ChampionInfo,
  ChampionAltInfo,
  ChampionInfoText,
  ChampionImg,
  ChampionInfoContent,
  ChampionInfoSubTitle,
  ChampionInfoTitle,
  PreferChampionMsg,
} from '../styles/preferChampion.s';

import { championsInfo } from '../userInfo';

const PreferChampion = (props: { summonerInfo: SummonerInfo }) => {
  // const [champions, setChampions] = useState<SummonerInfo[]>([]);
  // setChampions(...props.summonerInfo.champions);
  return (
    <PreferChampionContainer>
      <PreferChampionWrapper>
        <PreferChampionText>선호 챔피언 TOP3</PreferChampionText>
        {!props.summonerInfo.champions ? (
          <ChampionAltInfo>플레이 결과가 없어요 :(</ChampionAltInfo>
        ) : (
          <ChampionInfo>
            {[...Array(3)].map((champion, index: number) => {
              return (
                <ChampionInfoWrapper key={index}>
                  <ChampionImg
                    src={championsInfo(props.summonerInfo, index).championName}
                  />
                  <ChampionInfoText>
                    <ChampionInfoTitle>
                      {championsInfo(props.summonerInfo, index).counts}게임
                    </ChampionInfoTitle>
                    <ChampionInfoContent
                      counts={championsInfo(props.summonerInfo, index).counts}
                    >
                      {championsInfo(props.summonerInfo, index).win_rate}
                    </ChampionInfoContent>
                    <ChampionInfoSubTitle
                      counts={championsInfo(props.summonerInfo, index).counts}
                    >
                      KDA {championsInfo(props.summonerInfo, index).kda}:1
                    </ChampionInfoSubTitle>
                  </ChampionInfoText>
                </ChampionInfoWrapper>
              );
            })}
          </ChampionInfo>
        )}
      </PreferChampionWrapper>
      <PreferChampionMsg>
        최근 20게임을 바탕으로 분석한 결과이며, 데이터 평균에 따라 달라질 수
        있습니다.
      </PreferChampionMsg>
    </PreferChampionContainer>
  );
};

export default PreferChampion;
