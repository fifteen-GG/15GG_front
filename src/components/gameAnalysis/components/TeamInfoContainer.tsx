import {
  TeamInfoWrapper,
  TeamInfo,
  TeamInfoHeader,
  TeamName,
  Team,
  UserInfoColumnWrapper,
  UserInfoColumn,
  PlayerList,
} from '../styled';
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
          <Summoner />
          <Summoner />
          <Summoner />
          <Summoner />
          <Summoner />
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
          <Summoner />
          <Summoner />
          <Summoner />
          <Summoner />
          <Summoner />
        </PlayerList>
      </TeamInfo>
    </TeamInfoWrapper>
  );
};

export default TeamInfoContainer;
