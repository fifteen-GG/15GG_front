import { SummonerInfo } from '../types/summonerInfo';

export const rankInfo = (s: SummonerInfo, ranktype: string) => {
  type result = {
    lp: number;
    win_rate: number;
    win: number;
    losses: number;
  };
  let info: result = {
    lp: 0,
    win_rate: 0,
    win: 0,
    losses: 0,
  };
  if (ranktype === 'solo') {
    if (!s.solo) {
      info.lp = 0;
      info.win_rate = 0;
      info.win = 0;
      info.losses = 0;
      return info;
    }
    info.lp = s.solo.lp;
    info.win_rate = s.solo.win_rate;
    info.win = s.solo.win;
    info.losses = s.solo.losses;
    return info;
  } else {
    if (!s.flex) {
      info.lp = 0;
      info.win_rate = 0;
      info.win = 0;
      info.losses = 0;
      return info;
    }
    info.lp = s.flex.lp;
    info.win_rate = s.flex.win_rate;
    info.win = s.flex.win;
    info.losses = s.flex.losses;
    return info;
  }
};

export const rankName = (s: SummonerInfo, ranktype: string) => {
  let tier: string;
  let rank: string;
  if (ranktype === 'solo') {
    if (!s.solo) {
      tier = 'Unranked';
      return tier;
    }
    tier = s.solo.tier.charAt(0) + s.solo.tier.slice(1).toLowerCase();
    rank = s.solo.rank;
  } else {
    if (!s.flex) {
      tier = 'Unranked';
      return tier;
    }
    tier = s.flex.tier.charAt(0) + s.flex.tier.slice(1).toLowerCase();
    rank = s.flex.rank;
  }
  const romanToNum = (s: string) => {
    const romeNum = {
      I: 1,
      V: 5,
    };
    let number = 0;
    const romeArray = s.split('');
    const numArray = romeArray.map((rome: string) => rome in romeNum);
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] < numArray[i + 1]) {
        number -= numArray[i] as unknown as number;
      } else {
        number += numArray[i] as unknown as number;
      }
    }
    return number;
  };
  let result = '';
  if (tier === 'Master' || tier === 'Grandmaster' || tier === 'Challenger')
    result = tier;
  else result = tier + ' ' + romanToNum(rank);
  console.log(result);
  return result;
};

export const statInfo = (s: SummonerInfo) => {
  type result = {
    win_rate: number;
    win: number;
    losses: number;
    kda_avg: number;
    kills_avg: number;
    deaths_avg: number;
    assists_avg: number;
    prefer_position: string[];
    position_rate: number[];
  };
  let info: result = {
    win_rate: 0,
    win: 0,
    losses: 0,
    kda_avg: 0,
    kills_avg: 0,
    deaths_avg: 0,
    assists_avg: 0,
    prefer_position: ['없음'],
    position_rate: [0],
  };
  if (!s.kda_avg) {
  } else {
    info.win_rate = s.solo.win_rate;
    info.win = s.solo.win;
    info.losses = s.solo.losses;
    info.kda_avg = s.kda_avg;
    info.kills_avg = s.kills_avg;
    info.deaths_avg = s.deaths_avg;
    info.assists_avg = s.assists_avg;
  }
  if (!s.prefer_position) {
  } else {
    info.prefer_position = Object.keys(s.prefer_position);
    info.position_rate = Object.values(s.prefer_position);
  }
  return info;
};
