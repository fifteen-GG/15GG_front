import {
  LiveGameSingleUser,
  LiveGameUserImageWrapper,
  LiveGameUserPosition,
  LiveGameUserChampion,
  LiveGameUserName,
} from '../styles/liveuser.s';

import { formatChampion } from '../../gameAnalysis/components/Summoner';

export const LiveUser = (data: { champion: string; row: string }) => {
  return (
    <>
      {data.row === 'left' ? (
        <LiveGameSingleUser>
          <LiveGameUserPosition />
          <LiveGameUserImageWrapper>
            <LiveGameUserChampion
              src={formatChampion({ championName: `${data.champion}` })}
            />
          </LiveGameUserImageWrapper>
          <LiveGameUserName style={{ marginLeft: '2px' }}>
            정잭영
          </LiveGameUserName>
        </LiveGameSingleUser>
      ) : (
        <LiveGameSingleUser style={{ justifyContent: 'flex-end' }}>
          <LiveGameUserName style={{ marginRight: '2px' }}>
            드레이...
          </LiveGameUserName>
          <LiveGameUserImageWrapper>
            <LiveGameUserChampion
              src={formatChampion({ championName: `${data.champion}` })}
            />
          </LiveGameUserImageWrapper>
          <LiveGameUserPosition />
        </LiveGameSingleUser>
      )}
    </>
  );
};
