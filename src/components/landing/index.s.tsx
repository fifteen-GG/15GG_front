import styled from 'styled-components';
import Bg from '../../assets/background.png';
import logo from '../../assets/logo.png';

export const LandingWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-position: center;
  background-image: url(${Bg});
`;

export const TitleWrapper = styled.div`
  width: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  margin-top: 180px;
  width: 150px;
  height: 33px;
  background-position: center;
  background-image: url(${logo});
`;

export const SearchBox = styled.div`
  margin-top: 32px;
  width: 314px;
  height: 42px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(255, 255, 255, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

export const SearchRegion = styled.div`
  width: 42px;
  height: 42px;
  background-color: #726f6f;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GamesWrapper = styled.div`
  width: 314px;
  margin-top: 64px;
`;

export const GamesTitleWrapper = styled.div`
  width: 314px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GamesTitle = styled.div`
  color: #fff;
  font-size: 16;
  font-weight: 500;
`;

export const CodeButton = styled.div`
  width: 67px;
  height: 25px;
  background-color: #4d4ae2;
  border-radius: 8px;
  display: flex;
  color: #fff;
  font-size: 10pt;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
