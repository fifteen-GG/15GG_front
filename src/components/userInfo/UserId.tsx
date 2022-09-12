import {
  UserIdWrapper,
  UserImg,
  NameWrapper,
  UserName,
  SubName,
} from './styles/userId.s';
export const UserId = () => {
  return (
    <UserIdWrapper>
      <UserImg>이미지</UserImg>
      <NameWrapper>
        <UserName>정잭영</UserName>
        <SubName>142views</SubName>
      </NameWrapper>
    </UserIdWrapper>
  );
};
