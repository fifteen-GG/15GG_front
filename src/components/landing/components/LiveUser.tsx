import {
  LiveGameSingleUser,
  LiveGameUserChampion,
  LiveGameUserName,
} from '../styles/liveuser.s';
import { formatChampion } from '../../gameAnalysis/components/Summoner';

export const LiveUser = (data: { champion: string }) => {
  return (
    <>
      <LiveGameSingleUser>
        <LiveGameUserChampion
          src={formatChampion({ championName: `${data.champion}` })}
        />
        <LiveGameUserName>정잭영</LiveGameUserName>
      </LiveGameSingleUser>
    </>
  );
};
