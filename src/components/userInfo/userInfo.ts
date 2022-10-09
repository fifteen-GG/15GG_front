import { SumInfoProps } from '../../type';

export const rankInfo = (s: SumInfoProps, ranktype: string) => {
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
    if (!s.summonerInfo.solo) {
      info.lp = 0;
      info.win_rate = 0;
      info.win = 0;
      info.losses = 0;
      return info;
    }
    info.lp = s.summonerInfo.solo.lp;
    info.win_rate = s.summonerInfo.solo.win_rate;
    info.win = s.summonerInfo.solo.win;
    info.losses = s.summonerInfo.solo.losses;
    return info;
  } else {
    if (!s.summonerInfo.flex) {
      info.lp = 0;
      info.win_rate = 0;
      info.win = 0;
      info.losses = 0;
      return info;
    }
    info.lp = s.summonerInfo.flex.lp;
    info.win_rate = s.summonerInfo.flex.win_rate;
    info.win = s.summonerInfo.flex.win;
    info.losses = s.summonerInfo.flex.losses;
    return info;
  }
};

export const rankName = (s: SumInfoProps, ranktype: string) => {
  let tier: string;
  let rank: string;
  if (ranktype === 'solo') {
    if (!s.summonerInfo.solo) {
      tier = 'Unranked';
      return tier;
    }
    tier =
      s.summonerInfo.solo.tier.charAt(0) +
      s.summonerInfo.solo.tier.slice(1).toLowerCase();
    rank = s.summonerInfo.solo.rank;
  } else {
    if (!s.summonerInfo.flex) {
      tier = 'Unranked';
      return tier;
    }
    tier =
      s.summonerInfo.flex.tier.charAt(0) +
      s.summonerInfo.flex.tier.slice(1).toLowerCase();
    rank = s.summonerInfo.flex.rank;
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

export const statInfo = (s: SumInfoProps) => {
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
  if (!s.summonerInfo.kda_avg) {
  } else {
    info.win_rate = s.summonerInfo.solo.win_rate;
    info.win = s.summonerInfo.solo.win;
    info.losses = s.summonerInfo.solo.losses;
    info.kda_avg = s.summonerInfo.kda_avg;
    info.kills_avg = s.summonerInfo.kills_avg;
    info.deaths_avg = s.summonerInfo.deaths_avg;
    info.assists_avg = s.summonerInfo.assists_avg;
  }
  if (!s.summonerInfo.prefer_position) {
  } else {
    info.prefer_position = Object.keys(s.summonerInfo.prefer_position);
    info.position_rate = Object.values(s.summonerInfo.prefer_position);
  }
  return info;
};
