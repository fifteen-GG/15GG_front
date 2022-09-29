import {
  LiveGameSingleUser,
  LiveGameUserChampion,
  LiveGameUserName,
} from '../styles/liveuser.s';
import { urlChampion } from '../../utility/Url';

export const LiveUser = (data: { champion: string }) => {
  return (
    <>
      <LiveGameSingleUser>
        <LiveGameUserChampion src={urlChampion(data.champion)} />
        <LiveGameUserName>정잭영</LiveGameUserName>
      </LiveGameSingleUser>
    </>
  );
};
