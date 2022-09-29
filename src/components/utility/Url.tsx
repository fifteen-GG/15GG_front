const FULLURL = 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img';
// const API_VERSION = '/api/v3';
const OPGG = 'https://opgg-static.akamaized.net/images/medals_new/';

// export const FULLURL = SERVER;
export const urlItem = (item: string) => {
  return FULLURL + `/item/${item}.png`;
};
export const urlProfileIcons = (icon: string) => {
  return FULLURL + `/profileicon/${icon}.png`;
};
export const urlChampion = (champion: string) => {
  return FULLURL + `/champion/${champion}.png`;
};
export const urlSpell = (spell: string) => {
  return FULLURL + `/spell/${spell}.png`;
};

// export const Rank = FULLURL + '/champion/';

export const formatRank = (summonerRank: string) => {
  return OPGG + `${summonerRank}.png`;
};

// const formatRank = (data: { summonerRank: string }) => {
//   return `https://opgg-static.akamaized.net/images/medals_new/${data.summonerRank}.png`;
// };
