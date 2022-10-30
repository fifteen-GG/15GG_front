import styled from 'styled-components';
import gg_top from '../../../assets/gg_pos_top.svg';
import gg_mid from '../../../assets/gg_pos_mid.svg';
import gg_jgl from '../../../assets/gg_pos_jgl.svg';
import gg_adc from '../../../assets/gg_pos_adc.svg';
import gg_utl from '../../../assets/gg_pos_utl.svg';

const gg_svg: {
  [key: string]: string;
} = {
  top: gg_top,
  mid: gg_mid,
  jgl: gg_jgl,
  adc: gg_adc,
  sup: gg_utl,
};
export const UserWrapper = styled.div`
  width: 100%;
  margin-top: 2px;
  margin-bottom: 2px;
  width: 65px;
  height: 12px;
  display: flex;
  align-items: center;
`;

export const GameUserPosition = styled.div<{ position: string }>`
  background-image: ${props => `url(${gg_svg[props.position]})`};
  margin-left: 1px;
  margin-right: 1px;
  height: 12px;
  width: 12px;
  border-radius: 2px;
`;

export const GameUserImageWrapper = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const GameUserChampion = styled.img`
  height: 14px;
  width: 14px;
  border-radius: 2px;
`;

export const GameUserName = styled.div`
  color: #fff;
  font-size: 10px;
  font-weight: 300;
`;
