import styled from 'styled-components';

const PlayerWrapper = styled.div`
  display: flex;
  height: 38px;
  padding: 0px 4px 0px 8px;
  justify-content: space-between;
`;
const UserInterface = styled.div`
  display: flex;
  height: 22px;
  margin-top: 7px;
`;
const ChampionImg = styled.img`
  height: 22px;
  width: 22px;
  position: absolute;
  background-color: white;
  border-radius: 2px;
`;
const ChampionLevel = styled.div`
  display: flex;
  height: 10px;
  width: 10px;
  background-color: rgba(30, 32, 37, 0.8);
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 12px;
  margin-top: 12px;
  font-size: 6px;
  color: #ffffff;
  border-radius: 2px;
`;
const SpellWrapper = styled.div`
  display: flex;
  height: 22px;
  width: 10px;
  margin-left: 24px;
  margin-right: 3px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;
`;
const Spell = styled.div`
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 2px;
`;
const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 22px;
  justify-content: space-between;
`;
const SummonerInfo = styled.div`
  display: flex;
  height: 11px;
  align-items: center;
`;
const SummonerName = styled.div`
  font-size: 11px;
  color: #fafafa;
  font-weight: bold;
  margin-right: 2px;
`;
const SummonerTier = styled.div`
  display: flex;
  background-color: #00bba3;
  height: 10px;
  width: 15px;
  color: #ffffff;
  font-size: 6px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const KDAWrapper = styled.div`
  display: flex;
  height: 10px;
`;
const KDADetails = styled.div`
  display: flex;
  height: 10px;
  font-size: 10px;
  color: #fafafa;
  font-weight: bold;
  white-space: pre;
`;
const KDA = styled.div`
  display: flex;
  font-size: 8px;
  font-weight: bold;
  color: #3595a1;
  line-height: 1.8;
`;
const ItemInterface = styled.div`
  display: flex;
  flex-direction: column;
  width: 117px;
  height: 26px;
  margin-top: 6px;
  align-items: flex-end;
  font-size: 10px;
  font-weight: bold;
  color: #fafafa;
`;
const ItemWrapper = styled.div`
  display: flex;
`;
const ItemImg = styled.div`
  height: 15px;
  width: 15px;
  background-color: white;
  margin-right: 2px;
  border-radius: 2px;
`;
export {
  PlayerWrapper,
  UserInterface,
  ChampionImg,
  ChampionLevel,
  SpellWrapper,
  Spell,
  UserInfoWrapper,
  SummonerInfo,
  SummonerName,
  SummonerTier,
  KDAWrapper,
  KDADetails,
  KDA,
  ItemInterface,
  ItemImg,
  ItemWrapper,
};
