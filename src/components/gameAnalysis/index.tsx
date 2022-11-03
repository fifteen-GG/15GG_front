import GameInfo from './components/GameInfo';
import TeamStats from './components/TeamStats';
import TeamInfo from './components/TeamInfo';
import TimelineGraph from './components/TimelineGraph';
import TimelineBarGraph from './components/TimelineBarGraph';
import GameSlider from './components/GameSlider';
import EmptyCover from './components/EmptyCover';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useSocket, SocketStatus } from './useSocket';
import { useLocation } from 'react-router-dom';

const GameAnalysisContainer = styled.div`
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
  margin-bottom: 12px;
`;
// enum gameState {
//   running,
//   end,
//   none,
// }
// interface propsType {
//   state: gameState;
//   matchID: string;
// }
enum gameState {
  live = 'live',
  end = 'complete',
  none = 'incomplete',
}

export const GameAnalysis = () => {
  const [gameData, setGameData] = useState(Object);
  const [time, setTime] = useState<number>(0);
  const [parse, setParse] = useState<number>(0);
  const { state } = useLocation();
  console.log(state);
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
    if (parse === 0 && state.status === gameState.live) {
      let data = JSON.parse(responseMessage);
      setGameData(data);
    }
  }, [parse, responseMessage]);

  useEffect(() => {
    if (parse === 0 && state.status === gameState.live)
      setTime(gameData.timestamp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(gameData, state.status);
  }, [gameData]);

  return (
    <GameAnalysisContainer>
      <GameInfo status={state.status} mode={state.mode} date={state.date} />
      <>
        {state.status === gameState.none ? <EmptyCover /> : null}
        <TimeInfo>
          경과시간 {Math.trunc(time / 60)}:
          {Math.trunc(time % 60) < 10
            ? '0' + Math.trunc(time % 60)
            : Math.trunc(time % 60)}
        </TimeInfo>
        <TimelineBarGraph />
        <TimelineGraph />
        {state.status === gameState.live ? <GameSlider /> : null}
      </>
      <TeamStats />
      <TeamInfo />
    </GameAnalysisContainer>
  );
};
