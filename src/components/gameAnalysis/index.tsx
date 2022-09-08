import { GameAnalysisWrapper, TimeInfo, Graph, TimeLine } from './styled';
import GameInfo from './components/GameInfo';
import TeamStats from './components/TeamStats';
import TeamInfoContainer from './components/TeamInfoContainer';

export const GameAnalysis = () => {
  return (
    <GameAnalysisWrapper>
      <GameInfo />
      <TimeInfo>경과시간 22:31</TimeInfo>
      <Graph />
      <TimeLine />
      <TeamStats />
      <TeamInfoContainer />
    </GameAnalysisWrapper>
  );
};
