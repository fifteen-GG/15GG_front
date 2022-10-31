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

import { formatChampionsInfo } from '../userInfo';

export type userChampion = [
  {
    championName: string;
    counts: number;
    win_rate: string | number;
    kda: string | number;
  },
  {
    championName: string;
    counts: number;
    win_rate: string | number;
    kda: string | number;
  },
  {
    championName: string;
    counts: number;
    win_rate: string | number;
    kda: string | number;
  },
];
interface propsType {
  summonerInfo: SummonerInfo;
}
const PreferChampion = (props: propsType) => {
  const [userChampion, setUserChampion] = useState<userChampion>(
    formatChampionsInfo(props.summonerInfo),
  );
  console.log(userChampion);
  return (
    <PreferChampionContainer>
      <PreferChampionWrapper>
        <PreferChampionText>선호 챔피언 TOP3</PreferChampionText>
        {!props.summonerInfo.champions ? (
          <ChampionAltInfo>플레이 결과가 없어요 :(</ChampionAltInfo>
        ) : (
          <ChampionInfo>
            {userChampion.map((champion, index: number) => {
              return (
                <ChampionInfoWrapper key={index}>
                  <ChampionImg src={userChampion[index].championName} />
                  <ChampionInfoText>
                    <ChampionInfoTitle>
                      {userChampion[index].counts}
                      게임
                    </ChampionInfoTitle>
                    <ChampionInfoContent counts={userChampion[index].counts}>
                      {userChampion[index].win_rate}
                    </ChampionInfoContent>
                    <ChampionInfoSubTitle counts={userChampion[index].counts}>
                      KDA {userChampion[index].kda}:1
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
