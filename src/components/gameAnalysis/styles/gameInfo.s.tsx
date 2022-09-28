import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

export const GameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 54px;
`;

export const TypeInfoWrapper = styled.div`
  display: flex;
  height: 18px;
  align-items: center;
  flex-direction: row;
  color: ${Palette.GG_WHITE_100};
`;

export const GameTypeInfo = styled.div`
  display: flex;
  font-size: 18px;
`;
interface RealTimeInfoProps {
  isLive?: boolean;
}
export const AnalysisTypeInfo = styled.div<RealTimeInfoProps>`
  display: flex;
  height: 16px;
  width: auto;
  padding: 0 4px 0 4px;
  color: ${Palette.GG_WHITE_100};
  margin-left: 6px;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: ${props =>
    props.isLive ? Palette.GG_RED : Palette.GG_PURPLE};
`;
export const DateInfo = styled.div`
  display: flex;
  height: 13px;
  margin-top: 6px;
  align-items: center;
  color: ${Palette.GG_GREY_70};
  font-size: 13px;
  margin-bottom: 16px;
`;
