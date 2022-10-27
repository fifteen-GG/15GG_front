import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

//UserGraph 스타일
export const PreferChampionContainer = styled.div`
  width: 100%;
  height: 88px;
`;

export const PreferChampionWrapper = styled.div`
  height: 68px;
  box-sizing: border-box;
  margin-top: 8px;
  padding-top: 8px;
  background-color: ${Palette.GG_BLACK_70};
  border-radius: 6px;
`;

export const PreferChampionText = styled.div`
  font-size: 10px;
  color: ${Palette.GG_GREY_70};
  margin: 0px 0px 6px 13px;
`;
export const ChampionAltInfo = styled.div`
  text-align: center;
  font-size: 14px;
  color: ${Palette.GG_GREY_70};
`;
export const ChampionInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ChampionInfoWrapper = styled.div`
  width: 94px;
  height: 36px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ChampionInfoText = styled.div`
  width: 56px;
  height: 38px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
`;
export const ChampionImg = styled.img`
  display: flex;
  margin-right: 6px;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 18px;
`;
export const ChampionInfoTitle = styled.div`
  font-size: 10px;
  color: ${Palette.GG_GREY_70};
`;
export const ChampionInfoContent = styled.div`
  font-size: 14px;
  color: ${(props: { counts: number }) =>
    props.counts === 0 ? Palette.GG_GREY_70 : Palette.GG_WHITE_100};
  font-weight: bold;
`;
export const ChampionInfoSubTitle = styled.div`
  font-size: 10px;
  color: ${(props: { counts: number }) =>
    props.counts === 0 ? Palette.GG_GREY_70 : Palette.GG_WHITE_100};
`;
export const PreferChampionMsg = styled.div`
  font-size: 8px;
  text-align: center;
  margin-top: 4px;
  color: ${Palette.GG_GREY_70};
`;
