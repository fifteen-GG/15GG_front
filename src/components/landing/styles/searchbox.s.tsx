import styled from 'styled-components';
import * as Palette from '../../../assets/colorPalette';
import searchBox from '../../../assets/gg_searchbox_bg.svg';
import serarchButton from '../../../assets/gg_searchbox_button.svg';

export const SearchBoxWrapper = styled.div`
  margin-top: 32px;
  width: 314px;
  height: 38px;
  background-image: url(${searchBox});
  border-radius: 18px;
  box-shadow: 0 2px 4px 0 rgba(54, 54, 59, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const SearchField = styled.input`
  width: 200px;
  height: 24px;
  margin-left: 48px;
  border: none;
  outline-style: none;
  font-size: 12px;
  font-weight: 400;
  color: ${Palette.GG_WHITE_100};
  background-color: transparent;
`;

export const SearchButton = styled.div`
  width: 28px;
  height: 38px;
  margin-left: 22px;
  cursor: pointer;
  background-image: url(${serarchButton});
`;
