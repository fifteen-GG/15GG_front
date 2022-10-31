import {
  ErrorContainer,
  SummonerWrapper,
  SummonerIcon,
  SummonerLevel,
  SummonerNameWrapper,
  SummonerName,
  ErrorTextWrapper,
  ErrorText,
  ErrorImg,
} from '../styles/errorPage.s';
import gg_error_bg from '../../../assets/gg_error_bg.png';

const ErrorPage = () => {
  const params = new URLSearchParams(window.location.search);
  let id = params.get('ID');
  return (
    <ErrorContainer>
      <SummonerWrapper>
        <SummonerIcon></SummonerIcon>
        <SummonerNameWrapper>
          <SummonerName>{id}</SummonerName>
          <SummonerLevel>LV 0</SummonerLevel>
        </SummonerNameWrapper>
      </SummonerWrapper>
      <ErrorTextWrapper>
        <ErrorImg src={gg_error_bg} />
        <ErrorText>존재하지 않는 소환사입니다 다시 검색해주세요:(</ErrorText>
      </ErrorTextWrapper>
    </ErrorContainer>
  );
};

export default ErrorPage;
