import {
  UserIdContainer,
  UserIcon,
  UserInfoWrapper,
  UserName,
  Level,
} from '../styles/userId.s';
interface propsType {
  profileIcon: string;
  userName: string;
  level: Number;
}
const UserId = (props: propsType) => {
  return (
    <UserIdContainer>
      <UserIcon
        src={
          process.env.REACT_APP_DDRAGON_API_ROOT +
          `/profileicon/${props.profileIcon}.png`
        }
      />
      <UserInfoWrapper>
        <UserName>{props.userName}</UserName>
        <Level>{'LV ' + props.level}</Level>
      </UserInfoWrapper>
    </UserIdContainer>
  );
};
export default UserId;
