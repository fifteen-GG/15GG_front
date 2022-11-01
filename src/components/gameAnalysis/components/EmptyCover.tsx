import gg_error_img from '.././../../assets/gg_error_bg.png';
import { Container, ErrorImg, InformationMsg } from '../styles/emptyCover.s';

const EmptyCover = () => {
  return (
    <Container>
      <ErrorImg src={gg_error_img} />
      <InformationMsg>
        실시간 승률 분석은 랭크게임을 이용해주세요.
      </InformationMsg>
    </Container>
  );
};

export default EmptyCover;
