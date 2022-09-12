import {
  UserStatInfoWrapper,
  GraphImg,
  UserInfoText,
  UserInfoTitle,
  UserInfoContent,
  UserInfoSubTitle,
} from './styles/userStatInfo.s';

export const UserStatInfo = () => {
  return (
    <UserStatInfoWrapper>
      <GraphImg></GraphImg>
      <UserInfoText>
        <UserInfoTitle>승률</UserInfoTitle>
        <UserInfoContent>52%</UserInfoContent>
        <UserInfoSubTitle>164승 154패</UserInfoSubTitle>
      </UserInfoText>
      <UserInfoText>
        <UserInfoTitle>KDA</UserInfoTitle>
        <UserInfoContent>2.15</UserInfoContent>
        <UserInfoSubTitle>8.5/7.2/11.4</UserInfoSubTitle>
      </UserInfoText>
      <UserInfoText>
        <UserInfoTitle>선호 포지션</UserInfoTitle>
        <UserInfoContent>ADC</UserInfoContent>
        <UserInfoSubTitle>87%</UserInfoSubTitle>
      </UserInfoText>
    </UserStatInfoWrapper>
  );
};
