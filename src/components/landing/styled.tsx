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

export const LiveGameWrapper = styled.div`
  width: 314px;
  height: 84px;
  border-radius: 8px;
  background-color: #2f3037;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

export const LiveGameTitleWrapper = styled.div`
  width: 314px;
  height: 14px;
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LiveGameLabel = styled.div`
  width: 50px;
  height: 14px;
  margin-left: 8px;
  border-radius: 4px;
  background-color: #61d125;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4pt;
  color: #fff;
  font-weight: 500;
`;

export const LiveGameTitle = styled.div`
  margin-left: 8px;
  font-size: 10px;
  color: #fff;
  font-weight: 400;
`;

export const LiveGameTeamsWrapper = styled.div`
  width: 298px;
  height: 44px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
`;

export const LiveGameSingleTeamWrapper = styled.div`
  width: 122px;
  height: 44px;
  display: flex;
`;

export const LiveGameVersusWrapper = styled.div`
  width: 74px;
  background-color: #2f3037;
  margin-left: 8px;
  margin-right: 32px;
  margin-top: 10px;
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  font-style: italic;
`;

export const LiveGameTeamsRow = styled.div`
  width: 60px;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LiveGameSingleUser = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  width: 60px;
  height: 12px;
  display: flex;
  flex-direction: row;
`;

export const LiveGameUserChampion = styled.div`
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 2px;
`;

export const LiveGameUserName = styled.div`
  color: #fff;
  font-size: 10px;
  font-weight: 300;
  margin-left: 4px;
`;
