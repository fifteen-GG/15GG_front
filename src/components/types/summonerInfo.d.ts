export interface SummonerInfoType {
  name: string;
  level: number;
  profileIconId: string;
  solo: RankData;
  flex: RankData;
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
    '-': number;
  };
  champions: preferChampion;
}

export interface SummonerInfoCopy {
  name: string;
  level: number;
  profileIconId: string;
  soloRank: userRank;
  flexRank: userRank;
  kda_avg: number;
  kills_avg: number;
  deaths_avg: number;
  assists_avg: number;
  // prefer_position: prefer_position;
  prefer_position: string[];
  position_rate: number[];
  champions: userChampion;
}

export interface playData {
  championName: string;
  counts: number;
  kills: number;
  deaths: number;
  assists: number;
  wins: number;
}
export interface RankData {
  tier: string;
  rank: any;
  lp: number;
  win_rate: number;
  win: number;
  losses: number;
}
export interface userRank {
  name: string;
  tier: string;
  lp: number;
  win_rate: number;
  win: number;
  losses: number;
}
export type userChampion = [
  {
    championName: string;
    counts: number;
    win_rate: string | number;
    kda: string | number;
  },
  {
    championName: string;
    counts: number;
    win_rate: string | number;
    kda: string | number;
  },
  {
    championName: string;
    counts: number;
    win_rate: string | number;
    kda: string | number;
  },
];
export type preferChampion = [
  {
    championName: string;
    counts: number;
    kills: number;
    deaths: number;
    assists: number;
    wins: number;
  },
  {
    championName: string;
    counts: number;
    kills: number;
    deaths: number;
    assists: number;
    wins: number;
  },
  {
    championName: string;
    counts: number;
    kills: number;
    deaths: number;
    assists: number;
    wins: number;
  },
];
