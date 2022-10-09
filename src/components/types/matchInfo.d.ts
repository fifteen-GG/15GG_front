export interface MatchInfo {
  status: 'live' | 'complete' | 'incomplete';
  win: boolean;
  created_at: string;
  queue_mode:
    | '5v5 Ranked Solo games'
    | '5v5 Blind Pick games'
    | '5v5 ARAM games'
    | '5v5 Ranked Flex games';
  champion_name: string;
  kills: number;
  deaths: number;
  assists: number;
  kda: number;
  cs: number;
  cs_per_min: number;
  vision_wards_bought_in_game: number;
  items: string[];
  spells: {
    spell1: string;
    spell2: string;
  };
  perks: {
    perk: number;
    perkStyle: number;
  };
}
