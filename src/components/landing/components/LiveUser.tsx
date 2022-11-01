import {
  UserContainer,
  UserWrapper,
  GameUserImageWrapper,
  GameUserPosition,
  GameUserChampion,
  GameUserName,
} from '../styles/liveuser.s';

interface propsType {
  champion: string;
  name: string;
  row: string;
  pos: string;
}

export const LiveUser = (props: propsType) => {
  return (
    <UserContainer>
      {props.row === 'left' ? (
        <UserWrapper>
          <GameUserPosition position={`${props.pos}`} />
          <GameUserImageWrapper>
            <GameUserChampion
              src={
                process.env.REACT_APP_DDRAGON_API_ROOT +
                `/champion/${props.champion}.png`
              }
            />
          </GameUserImageWrapper>
          <GameUserName style={{ marginLeft: '2px' }}>
            {props.name}
          </GameUserName>
        </UserWrapper>
      ) : (
        <UserWrapper style={{ justifyContent: 'flex-end' }}>
          <GameUserName style={{ marginRight: '2px' }}>
            {props.name}
          </GameUserName>
          <GameUserImageWrapper>
            <GameUserChampion
              src={
                process.env.REACT_APP_DDRAGON_API_ROOT +
                `/champion/${props.champion}.png`
              }
            />
          </GameUserImageWrapper>
          <GameUserPosition position={`${props.pos}`} />
        </UserWrapper>
      )}
    </UserContainer>
  );
};
