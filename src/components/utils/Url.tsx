// export const DDRAGON_API_ROOT = SERVER;
export const urlItem = (item: string) => {
  return process.env.REACT_APP_DDRAGON_API_ROOT + `/item/${item}.png`;
};
export const urlProfileIcons = (icon: string) => {
  return process.env.REACT_APP_DDRAGON_API_ROOT + `/profileicon/${icon}.png`;
};
export const urlChampion = (champion: string) => {
  return process.env.REACT_APP_DDRAGON_API_ROOT + `/champion/${champion}.png`;
};
export const urlSpell = (spell: string) => {
  return process.env.REACT_APP_DDRAGON_API_ROOT + `/spell/${spell}.png`;
};

// export const Rank = DDRAGON_API_ROOT + '/champion/';

export const formatRank = (summonerRank: string) => {
  return (
    process.env.REACT_APP_OPGG_API_ROOT + `/medals_new/${summonerRank}.png`
  );
};

export const formatPerks = (perk: number) => {
  return process.env.REACT_APP_OPGG_API_ROOT + `/lol/perk/${perk}.png`; //8008
};

export const formatPerkStyles = (perkStyle: number) => {
  return (
    process.env.REACT_APP_OPGG_API_ROOT + `/lol/perkStyle/${perkStyle}.png`
  ); //8100
};
