const DDRAGON_API_ROOT = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img';
//가변으로 버전 바꾸기 dd
// const API_VERSION = '/api/v3';
const OPGG_API_ROOT = 'https://opgg-static.akamaized.net/images';

// export const DDRAGON_API_ROOT = SERVER;
export const urlItem = (item: string) => {
  return DDRAGON_API_ROOT + `/item/${item}.png`;
};
export const urlProfileIcons = (icon: string) => {
  return DDRAGON_API_ROOT + `/profileicon/${icon}.png`;
};
export const urlChampion = (champion: string) => {
  return DDRAGON_API_ROOT + `/champion/${champion}.png`;
};
export const urlSpell = (spell: string) => {
  return DDRAGON_API_ROOT + `/spell/${spell}.png`;
};

// export const Rank = DDRAGON_API_ROOT + '/champion/';

export const formatRank = (summonerRank: string) => {
  return OPGG_API_ROOT + `/medals_new/${summonerRank}.png`;
};

export const formatPerks = (perk: string) => {
  return OPGG_API_ROOT + `/lol/perk/${perk}.png`; //8008
};

export const formatPerkStyles = (perkStyle: string) => {
  return OPGG_API_ROOT + `/lol/perkStyle/${perkStyle}.png`; //8100
};
