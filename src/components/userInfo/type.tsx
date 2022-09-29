export interface match_info_list {
  status: 'live' | 'complete' | 'incomplete';
  result: 'win' | 'lose';
  queue_mode: 'solo' | 'flex';
  month: string;
  date: string;
  kills: number;
  deaths: number;
  assists: number;
  kda: number;
  cs: number;
  cs_per_min: number;
  ward: number;
  champion_name: string;
  items: string[];
}
export interface summoner_info {
  icon: string;
  summoner_id: string;
  level: number;
  solo: string;
  solotier: string;
  sololp: number;
  flex: string;
  flextier: string;
  flexlp: number;
  solowin_rate: number;
  flexwin_rate: number;
  solowin: number;
  sololosses: number;
  flexwin: number;
  flexlosses: number;
  kda_avg: number;
  kills_avg: number;
  deaths_avg: number;
  assists_avg: number;
  prefer_position: string;
  positionrate: number;
}

export type MatchInfoProps = {
  matchInfo: match_info_list;
};
export type SumInfoProps = {
  summonerInfo: summoner_info;
};
