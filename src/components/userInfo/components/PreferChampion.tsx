import { MatchInfoProps } from '../../../type';
import {
  PreferChampionWrapper,
  PreferChampionBox,
  PreferChampionText,
  ChampionInfoWrapper,
  ChampionInfo,
  ChampionInfoText,
  ChampionImg,
  ChampionInfoContent,
  ChampionInfoSubTitle,
  ChampionInfoTitle,
  PreferChampionMsg,
} from '../styles/preferChampion.s';
import { urlChampion } from '../../utils/Url';

const PreferChampion = () => {
  return (
    <PreferChampionWrapper>
      <PreferChampionBox>
        <PreferChampionText>선호 챔피언 TOP3</PreferChampionText>
        <ChampionInfo>
          <ChampionInfoWrapper>
            <ChampionImg src={urlChampion('Jinx')} />
            <ChampionInfoText>
              <ChampionInfoTitle>7게임</ChampionInfoTitle>
              <ChampionInfoContent>29%</ChampionInfoContent>
              <ChampionInfoSubTitle>KDA 2.36:1</ChampionInfoSubTitle>
            </ChampionInfoText>
          </ChampionInfoWrapper>
          <ChampionInfoWrapper>
            <ChampionImg src={urlChampion('Ezreal')} />
            <ChampionInfoText>
              <ChampionInfoTitle>5게임</ChampionInfoTitle>
              <ChampionInfoContent>60%</ChampionInfoContent>
              <ChampionInfoSubTitle>KDA 2.93:1</ChampionInfoSubTitle>
            </ChampionInfoText>
          </ChampionInfoWrapper>
          <ChampionInfoWrapper>
            <ChampionImg src={urlChampion('Kalista')} />
            <ChampionInfoText>
              <ChampionInfoTitle>4게임</ChampionInfoTitle>
              <ChampionInfoContent>0%</ChampionInfoContent>
              <ChampionInfoSubTitle>KDA 1.38:1</ChampionInfoSubTitle>
            </ChampionInfoText>
          </ChampionInfoWrapper>
        </ChampionInfo>
      </PreferChampionBox>
      <PreferChampionMsg>
        최근 20게임을 바탕으로 분석한 결과이며, 데이터 평균에 따라 달라질 수
        있습니다.
      </PreferChampionMsg>
    </PreferChampionWrapper>
  );
};

export default PreferChampion;
