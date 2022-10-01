import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';

//UserId 부분 스타일
export const UserIdWrapper = styled.div`
  width: 100%;
  background: ${Palette.GG_BLACK_100};
  display: flex;
`;
export const UserImg = styled.img`
  width: 52px;
  height: 52px;
  background: ${Palette.GG_BLACK_100};
  margin: 2px 6px 6px 2px;
  border-radius: 10px;
  display: flex;
`;
export const NameWrapper = styled.div`
  flex-direction: column;
`;
export const UserName = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: ${Palette.GG_WHITE_100};
`;
export const SubName = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin: 0 0 11px 0;
  color: ${Palette.GG_GREY_70};
`;
