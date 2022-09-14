import { GameAnalysisWrapper, TimeInfo, Graph } from './index.s';
import GameInfo from './components/GameInfo';
import TeamStats from './components/TeamStats';
import TeamInfoContainer from './components/TeamInfoContainer';
import Timeline from './components/Timeline';

export const GameAnalysis = () => {
  return (
    <GameAnalysisWrapper>
      <GameInfo />
      <TimeInfo>경과시간 22:31</TimeInfo>
      <Graph />
      <Timeline />
      <TeamStats />
      <TeamInfoContainer />
    </GameAnalysisWrapper>
  );
};
