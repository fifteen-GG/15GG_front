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
  solorank: string;
  freerank: string;
}
export type GameInfoProps = {
  gameInfo: GameType;
};
export type SumInfoProps = {
  summonerInfo: SummonerType;
};
