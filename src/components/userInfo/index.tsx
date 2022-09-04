import styled from "styled-components";

const UserInfoWrapper = styled.div`
  height: 100%;
  background: red;
`;

const UserStatWrapper = styled.div`
  height: 415px;
  background: yellow;
`;

export const UserInfo = () => {
  return (
    <UserInfoWrapper>
      <UserStatWrapper></UserStatWrapper>
    </UserInfoWrapper>
  );
};
