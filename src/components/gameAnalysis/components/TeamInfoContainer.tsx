import {
  TeamInfoWrapper,
  TeamInfo,
  TeamInfoHeader,
  TeamName,
  Team,
  UserInfoColumnWrapper,
  UserInfoColumn,
  PlayerList,
} from '../styles/teamInfoContainer.s';
import Summoner from './Summoner';

const TeamInfoContainer = () => {
  return (
    <TeamInfoWrapper>
      <TeamInfo>
        <TeamInfoHeader>
          <TeamName team={Team.RED}>RED TEAM</TeamName>
          <UserInfoColumnWrapper>
            <UserInfoColumn>SUMMONER</UserInfoColumn>
            <UserInfoColumn>ITEMS</UserInfoColumn>
          </UserInfoColumnWrapper>
        </TeamInfoHeader>
        <PlayerList>
          <Summoner champion={'Sona'} />
          <Summoner champion={'Jax'} />
          <Summoner champion={`Katarina`} />
          <Summoner champion={'Blitzcrank'} />
          <Summoner champion={'Brand'} />
        </PlayerList>
      </TeamInfo>
      <TeamInfo>
        <TeamInfoHeader>
          <TeamName team={Team.BLUE}>BLUE TEAM</TeamName>
          <UserInfoColumnWrapper>
            <UserInfoColumn>SUMMONER</UserInfoColumn>
            <UserInfoColumn>ITEMS</UserInfoColumn>
          </UserInfoColumnWrapper>
        </TeamInfoHeader>
        <PlayerList>
          <Summoner champion={'Aphelios'} />
          <Summoner champion={'Rumble'} />
          <Summoner champion={'Lux'} />
          <Summoner champion={'Draven'} />
          <Summoner champion={'Nasus'} />
        </PlayerList>
      </TeamInfo>
    </TeamInfoWrapper>
  );
};

export default TeamInfoContainer;
