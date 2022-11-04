import { SummonerInfoType, RankData } from '../types/summonerInfo';
import { userStat } from './components/UserStatInfo';
import { userRank } from './components/UserRank';
import { userChampion } from './components/PreferChampion';
// export const tierFormat = (tier: string) => {
//   return tier?.charAt(0) + tier?.slice(1).toLowerCase() + '';
// };
// export const rankFormat = (rank: string, tier: string) => {
//   let Verification = 'MASTERGRANDMASTERCHALLENGERUnranked';
//   const romeNum = ['I', 'II', 'III', 'IV'];
//   if (Verification.includes(tier)) return '';
//   let Rank = 1;
//   romeNum.map((data, index) => {
//     if (data === rank) Rank = index + 1;
//   });
//   return Rank;
// };
// export const lpFormat = (lp: number) => {
//   if (lp) return lp;
//   else return 0;
// };
// export const winRateFormat = (rankData: RankData) => {
//   if (rankData)
//     return `${rankData.win_rate}% (${rankData.win}승 ${rankData.losses}패)`;
//   else return '0% (0승 0패)';
// };
const romanToNum = (str: string) => {
  const romeNum = {
    I: 1,
    V: 5,
  };
  let number = 0;
  const romeArray = str.split('');
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

export const formatRankInfo = (
  summonerInfo: SummonerInfoType,
  ranktype: string,
) => {
  let tier: string;
  let rank: string;
  let state: userRank = {
    name: '',
    lp: 0,
    win_rate: 0,
    win: 0,
    losses: 0,
  };
  if (ranktype === 'solo') {
    if (!summonerInfo.solo) {
      state.name = 'Unranked';
      state.lp = 0;
      state.win_rate = 0;
      state.win = 0;
      state.losses = 0;
      return state;
    }
    tier =
      summonerInfo.solo.tier.charAt(0) +
      summonerInfo.solo.tier.slice(1).toLowerCase();
    rank = summonerInfo.solo.rank;
    state.lp = summonerInfo.solo.lp;
    state.win_rate = summonerInfo.solo.win_rate;
    state.win = summonerInfo.solo.win;
    state.losses = summonerInfo.solo.losses;
  } else {
    if (!summonerInfo.flex) {
      state.name = 'Unranked';
      state.lp = 0;
      state.win_rate = 0;
      state.win = 0;
      state.losses = 0;
      return state;
    }
    tier =
      summonerInfo.flex.tier.charAt(0) +
      summonerInfo.flex.tier.slice(1).toLowerCase();
    rank = summonerInfo.flex.rank;
    state.lp = summonerInfo.flex.lp;
    state.win_rate = summonerInfo.flex.win_rate;
    state.win = summonerInfo.flex.win;
    state.losses = summonerInfo.flex.losses;
  }
  if (tier === 'Master' || tier === 'Grandmaster' || tier === 'Challenger')
    state.name = tier;
  else state.name = tier + ' ' + romanToNum(rank);
  return state;
};

export const formatStatInfo = (summonerInfo: SummonerInfoType) => {
  let state: userStat = {
    userName: summonerInfo.name,
    win_rate: 0,
    win: 0,
    losses: 0,
    kda_avg: 0,
    kills_avg: 0,
    deaths_avg: 0,
    assists_avg: 0,
    prefer_position: ['-'],
    position_rate: [0],
  };
  if (!summonerInfo.kda_avg) {
  } else {
    state.win_rate = summonerInfo.solo.win_rate;
    state.win = summonerInfo.solo.win;
    state.losses = summonerInfo.solo.losses;
    state.kda_avg = summonerInfo.kda_avg;
    state.kills_avg = summonerInfo.kills_avg;
    state.deaths_avg = summonerInfo.deaths_avg;
    state.assists_avg = summonerInfo.assists_avg;
  }
  if (!summonerInfo.prefer_position) {
  } else {
    state.prefer_position = Object.keys(summonerInfo.prefer_position);
    state.position_rate = Object.values(summonerInfo.prefer_position);
  }
  return state;
};

export const formatChampionsInfo = (summonerInfo: SummonerInfoType) => {
  let state: userChampion = [
    {
      championName: '0',
      counts: 0,
      win_rate: '결과없음',
      kda: '0.00',
    },
    {
      championName: '0',
      counts: 0,
      win_rate: '결과없음',
      kda: '0.00',
    },
    {
      championName: '0',
      counts: 0,
      win_rate: '결과없음',
      kda: '0.00',
    },
  ];
  if (!summonerInfo.champions) {
    return state;
  }
  state.map((champion, index: number) => {
    if (!summonerInfo.champions[index]) return state;
    else {
      state[index].championName =
        process.env.REACT_APP_DDRAGON_API_ROOT +
        `/champion/${summonerInfo.champions[index].championName}.png`;
      state[index].counts = summonerInfo.champions[index].counts;
      state[index].win_rate =
        Math.round(
          (summonerInfo.champions[index].wins /
            summonerInfo.champions[index].counts) *
            100,
        ) + '%';
      state[index].kda =
        Math.round(
          ((summonerInfo.champions[index].kills +
            summonerInfo.champions[index].assists) /
            summonerInfo.champions[index].deaths) *
            100,
        ) / 100;
    }
  });
  return state;
};
