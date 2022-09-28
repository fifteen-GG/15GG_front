export interface GameType {
  status: 'live' | 'complete' | 'incomplete';
  result: 'win' | 'lose';
  mode: 'solo' | 'free';
  month: string;
  date: string;
  kill: number;
  death: number;
  assist: number;
  kda: number;
  cs: number;
  rate: number;
  ward: number;
  champion: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;
}
export interface SummonerType {
  icon: string;
  userID: string;
  userLevel: number;
  solorank: string;
  solorankinfo: string;
  solorankLP: number;
  freerank: string;
  freerankinfo: string;
  freerankLP: number;
  solowinrate: number;
  freewinrate: number;
  solowin: number;
  sololose: number;
  freewin: number;
  freelose: number;
  avgkda: number;
  avgkill: number;
  avgdeath: number;
  avgassist: number;
  avgposition: string;
  positionrate: number;
}

export type GameInfoProps = {
  gameInfo: GameType;
};
export type SumInfoProps = {
  summonerInfo: SummonerType;
};
