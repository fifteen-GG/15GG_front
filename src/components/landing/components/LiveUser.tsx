import {
  LiveGameSingleUser,
  LiveGameUserImageWrapper,
  LiveGameUserPosition,
  LiveGameUserChampion,
  LiveGameUserName,
} from '../styles/liveuser.s';
import { urlChampion } from '../../utility/Url';

export const LiveUser = (props: {
  champion: string;
  name: string;
  row: string;
  pos: string;
}) => {
  return (
    <>
      {props.row === 'left' ? (
        <LiveGameSingleUser>
          <LiveGameUserPosition position={`${props.pos}`} />
          <LiveGameUserImageWrapper>
            <LiveGameUserChampion
              src={urlChampion(data.champion)}
            />
          </LiveGameUserImageWrapper>
          <LiveGameUserName style={{ marginLeft: '2px' }}>
            {props.name}
          </LiveGameUserName>
        </LiveGameSingleUser>
      ) : (
        <LiveGameSingleUser style={{ justifyContent: 'flex-end' }}>
          <LiveGameUserName style={{ marginRight: '2px' }}>
            {props.name}
          </LiveGameUserName>
          <LiveGameUserImageWrapper>
            <LiveGameUserChampion
              src={urlChampion(data.champion)}
            />
          </LiveGameUserImageWrapper>
          <LiveGameUserPosition position={`${props.pos}`} />
        </LiveGameSingleUser>
      )}
    </>
  );
};
