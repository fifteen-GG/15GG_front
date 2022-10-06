export interface MatchInfoList {
  status: 'live' | 'complete' | 'incomplete';
  // result: 'win' | 'lose';
  win: boolean;
  // queue_mode: 'solo' | 'flex';
  created_at: string;
  queue_mode:
    | '5v5 Ranked Solo games'
    | '5v5 Blind Pick games'
    | '5v5 ARAM games'
    | '5v5 Ranked Flex games';
  champion_name: string;
  // month: string;
  // date: string;
  kills: number;
  deaths: number;
  assists: number;
  kda: number;
  cs: number;
  cs_per_min: number;
  vision_wards_bought_in_game: number;
  items: string[];
}
export interface SummonerInfo {
  name: string;
  level: number;
  profileIconId: string;
  solo: {
    tier: string;
    rank: string;
    lp: number;
    win_rate: number;
    win: number;
    losses: number;
  };
  flex: {
    tier: string;
    rank: string;
    lp: number;
    win_rate: number;
    win: number;
    losses: number;
  };
  kda_avg: number;
  kills_avg: number;
  deaths_avg: number;
  assists_avg: number;
  // prefer_position: prefer_position;
  prefer_position: {
    TOP?: number;
    JG?: number;
    MID?: number;
    ADC?: number;
    SUP?: number;
  };
}
// type position = 'TOP' | 'ADC' | 'JG' | 'MID' | 'SUP';
// enum position {
//   TOP = 'TOP',
//   JG = 'JG',
//   MID = 'MID',
//   SUP = 'SUP',
//   ADC = 'ADC',
// }
// type prefer_position = {
//   [position: string]: number;
// };

export type MatchInfoProps = {
  matchInfo: MatchInfoList;
};
export type SumInfoProps = {
  summonerInfo: SummonerInfo;
};
