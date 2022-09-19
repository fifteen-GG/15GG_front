import { GameAnalysisWrapper, TimeInfo, Graph } from './styles/index.s';
import GameInfo from './components/GameInfo';
import TeamStats from './components/TeamStats';
import TeamInfoContainer from './components/TeamInfoContainer';
import TimelineGraph from './components/TimelineGraph';
import TimelineBarGraph from './components/TimelineBarGraph';

export const GameAnalysis = () => {
  return (
    <GameAnalysisWrapper>
      <GameInfo />
      <TimeInfo>경과시간 22:31</TimeInfo>
      <TimelineBarGraph />
      <TimelineGraph />
      <TeamStats />
      <TeamInfoContainer />
    </GameAnalysisWrapper>
  );
};
