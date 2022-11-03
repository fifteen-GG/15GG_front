import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

export const GameInfoContainer = styled.div`
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
  margin-bottom: 6px;
`;

export const GameTypeInfo = styled.div`
  display: flex;
  font-size: 18px;
  margin-right: 6px;
  font-weight: 500;
`;
// interface RealTimeInfoProps {
//   isLive: boolean;
// }
export const AnalysisTypeInfo = styled.div`
  width: auto;
  height: 16px;
  display: flex;
  padding: 0 4px 0 4px;
  color: ${Palette.GG_WHITE_100};
  font-size: 10px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: ${(props: { status: 'live' | 'complete' | 'incomplete' }) =>
    props.status === 'live'
      ? Palette.GG_RED
      : props.status === 'complete'
      ? Palette.GG_PURPLE
      : Palette.GG_BLACK_50_UNSELECTED};
`;
export const DateInfo = styled.div`
  display: flex;
  height: 13px;
  align-items: center;
  color: ${Palette.GG_GREY_70};
  font-size: 13px;
  margin-bottom: 16px;
`;
