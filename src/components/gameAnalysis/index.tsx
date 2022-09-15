import { GameAnalysisWrapper, TimeInfo, Graph } from './index.s';
import GameInfo from './components/GameInfo';
import TeamStats from './components/TeamStats';
import TeamInfoContainer from './components/TeamInfoContainer';
import Timeline from './components/Timeline';
import TimelineBarGraph from './components/TimelineBarGraph';

export const GameAnalysis = () => {
  return (
    <GameAnalysisWrapper>
      <GameInfo />
      <TimeInfo>경과시간 22:31</TimeInfo>
      <TimelineBarGraph />
      <Timeline />
      <TeamStats />
      <TeamInfoContainer />
    </GameAnalysisWrapper>
  );
};
