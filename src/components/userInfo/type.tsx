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
}

export type GameInfoProps = {
  gameInfo: GameType;
};
