import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

export const DataCodeContainer = styled.div``;

export const DataCodeWrapper = styled.div`
  justify-self: center;
  width: 328px;
  height: 56px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const SingleDataCodeWrapper = styled.div`
  width: 50px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${Palette.GG_BLACK_70};
  display: flex;
`;

export const SingleDataCode = styled.div`
  font-size: 24px;
  font-weight: normal;
  color: ${Palette.GG_WHITE_100};
`;

export const Footer = styled.div`
  margin-top: 10px;
  width: 328px;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const FooterContent = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${Palette.GG_WHITE_100};
`;

export const RefreshButton = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${Palette.GG_WHITE_100};
  padding: 0;
  margin-left: 2px;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;
