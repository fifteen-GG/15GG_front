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
  champions: [
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
}
