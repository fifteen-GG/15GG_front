import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

export const EmptyCoverContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  flex-direction: column;
  height: 180px;
  width: 100%;
  align-items: center;
  background-color: rgba(30, 32, 37, 0.75);
  margin-top: 54px;
`;
export const ErrorImg = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 54px;
  margin-bottom: 14px;
`;
export const InformationMsg = styled.div`
  font-size: 14px;
  color: ${Palette.GG_WHITE_100};
`;
