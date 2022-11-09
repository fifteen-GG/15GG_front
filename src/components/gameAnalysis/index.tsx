import GameInfo from './components/GameInfo';
import TeamStats from './components/TeamStats';
import TeamInfo from './components/TeamInfo';
import TimelineGraph from './components/TimelineGraph';
import TimelineBarGraph from './components/TimelineBarGraph';
import GameSlider from './components/GameSlider';
import EmptyCover from './components/EmptyCover';
import styled from 'styled-components';
import * as Palette from '../../assets/colorPalette';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSocket, SocketStatus } from './useSocket';
import { gameState } from '../types/enum';
import axios from 'axios';
import type { teamDetail } from '../types/matchDetails';
import LoadingPage from '../userInfo/components/LoadingPage';

const GameAnalysisContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 360px) {
    width: 328px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TimeInfo = styled.div`
  width: 100%;
  display: flex;
  font-size: 12px;
  color: ${Palette.GG_WHITE_100};
  font-weight: 300;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;
export const GameAnalysis = () => {
  const [liveData, setLiveData] = useState(Object);
  const [gameData, setGameData] = useState([
    {} as teamDetail,
    {} as teamDetail,
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState<number>(0);
  const [parse, setParse] = useState<number>(0);
  const { state } = useLocation();
  //for incomplete game data
  const getGameData = async () => {
    setIsLoading(true);
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_GG_API_ROOT}/riot/match/detail/${state.matchID}`,
      );
      if (data.status === 200) {
        setGameData(data.data);
        console.log(gameData);
      }
      if (data.data) setIsLoading(false);
    } catch (e: any) {
      console.log(e);
    }
  };
  useEffect(() => {
    getGameData();
  }, []);

  const { responseMessage } = useSocket(state => {
    if (state === SocketStatus.onNewChatReceived) {
      setParse(data => data + 1);
    } else if (state === SocketStatus.onConnectionFailed) {
      console.error('onConnectionFailed');
    } else if (state === SocketStatus.onConnectionOpened) {
      console.log('onConnectionOpened');
    }
  });

  useEffect(() => {
    if (state.statue === gameState.live) {
      if (parse) {
        let data = JSON.parse(responseMessage);
        setLiveData(data);
      }
    }
  }, [parse, responseMessage]);

  useEffect(() => {
    if (state.status === gameState.live) {
      if (parse) setTime(liveData.timestamp);
    }
    console.log(liveData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [liveData]);
  return (
    <GameAnalysisContainer>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <GameInfo status={state.status} mode={state.mode} date={state.date} />
          {state.status === gameState.none ? <EmptyCover /> : null}
          <TimeInfo>
            경과시간 {Math.trunc(time / 60)}:
            {Math.trunc(time % 60) < 10
              ? '0' + Math.trunc(time % 60)
              : Math.trunc(time % 60)}
          </TimeInfo>
          <TimelineBarGraph />
          <TimelineGraph />
          {state.status === gameState.end ? <GameSlider /> : null}
          <TeamStats
            redTeam={gameData[0].teamAvgData}
            blueTeam={gameData[1].teamAvgData}
          />
          <TeamInfo
            redParticipants={gameData[0].participants}
            blueParticipants={gameData[1].participants}
          />
        </>
      )}
    </GameAnalysisContainer>
  );
};
