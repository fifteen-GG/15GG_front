import GameInfo from './components/GameInfo';
import TeamStats from './components/TeamStats';
import TeamInfoContainer from './components/TeamInfoContainer';
import TimelineGraph from './components/TimelineGraph';
import TimelineBarGraph from './components/TimelineBarGraph';
import GameSlider from './components/GameSlider';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useSocket, SocketStatus } from './useSocket';

const GameAnalysisWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const TimeInfo = styled.div`
  display: flex;
  font-size: 12px;
  color: #ffffff;
  font-weight: 300;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const GameAnalysis = () => {
  const [gameData, setGameData] = useState(Object);
  const [time, setTime] = useState(0);
  const [parse, setParse] = useState(0);
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
    if (parse) {
      let data = JSON.parse(responseMessage);
      setGameData(data);
    }
  }, [parse, responseMessage]);

  useEffect(() => {
    if (parse) setTime(gameData.timestamp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameData]);

  return (
    <GameAnalysisWrapper>
      <GameInfo />
      <TimeInfo>
        경과시간 {Math.trunc(time / 60)}:
        {Math.trunc(time % 60) < 10
          ? '0' + Math.trunc(time % 60)
          : Math.trunc(time % 60)}
      </TimeInfo>
      <TimelineBarGraph />
      <TimelineGraph />
      <GameSlider />
      <TeamStats />
      <TeamInfoContainer />
    </GameAnalysisWrapper>
  );
};
