import { useState } from 'react';
import { playData, RankData } from '../../types/summonerInfo';
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
interface propsType {
  preferChampion: playData[];
}
const PreferChampion = (props: propsType) => {
  return (
    <PreferChampionContainer>
      <PreferChampionWrapper>
        <PreferChampionText>선호 챔피언 TOP3</PreferChampionText>
        {!props.preferChampion ? (
          <ChampionAltInfo>플레이 결과가 없어요 :(</ChampionAltInfo>
        ) : (
          <ChampionInfo>
            {props.preferChampion.map((data, index) => {
              if (index < 3) {
                return (
                  <ChampionInfoWrapper key={index}>
                    <ChampionImg
                      src={
                        process.env.REACT_APP_DDRAGON_API_ROOT +
                        `/champion/${data.championName}.png`
                      }
                    />
                    <ChampionInfoText>
                      <ChampionInfoTitle>{data.counts}게임</ChampionInfoTitle>
                      <ChampionInfoContent counts={data.counts}>
                        {Math.round((data.wins / data.counts) * 100) + '%'}
                      </ChampionInfoContent>
                      <ChampionInfoSubTitle counts={data.counts}>
                        {'KDA ' +
                          Math.round(
                            ((data.kills + data.assists) / data.deaths) * 100,
                          ) /
                            100}
                      </ChampionInfoSubTitle>
                    </ChampionInfoText>
                  </ChampionInfoWrapper>
                );
              }
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
