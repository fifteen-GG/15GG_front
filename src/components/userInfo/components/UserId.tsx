import {
  UserIdContainer,
  UserIcon,
  UserNameWrapper,
  UserName,
  SubName,
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
      <UserNameWrapper>
        <UserName>{props.userName}</UserName>
        <SubName>{'LV ' + props.level}</SubName>
      </UserNameWrapper>
    </UserIdContainer>
  );
};
export default UserId;
