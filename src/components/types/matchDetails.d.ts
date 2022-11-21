export interface summonerDetail {
  summonerName: string;
  championName: string;
  rank: string;
  champLevel: number;
  spells: {
    spell1: string;
    spell2: string;
  };
  perks: {
    perk: number;
    perkStyle: number;
  };
  items: number[];
  goldEarned: number;
  kills: number;
  deaths: number;
  assists: number;
  totalDamageDealtToChampions: number;
  totalDamageTake: number;
  win: Boolean;
}

export interface teamDetail {
  team: string;
  teamAvgData: teamAvgData;
  participants: [
    summonerDetail,
    summonerDetail,
    summonerDetail,
    summonerDetail,
    summonerDetail,
  ];
}

export interface teamAvgData {
  golds: number;
  kills: number;
  level: numbers;
}
