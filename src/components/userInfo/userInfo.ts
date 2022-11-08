import { SummonerInfoType, SummonerInfoCopy } from '../types/summonerInfo';

export const tierFormat = (tier: string) => {
  return tier?.charAt(0) + tier?.slice(1).toLowerCase() + '';
};
export const rankFormat = (rank: string, tier: string) => {
  let Verification = 'MASTERGRANDMASTERCHALLENGERUnranked';
  const romeNum = ['I', 'II', 'III', 'IV'];
  if (Verification.includes(tier)) return '';
  let Rank = 1;
  romeNum.map((data, index) => {
    if (data === rank) Rank = index + 1;
  });
  return Rank;
};

export const totalFormat = (summonerInfo: SummonerInfoType) => {
  let state: SummonerInfoCopy = {
    name: summonerInfo.name,
    level: summonerInfo.level,
    profileIconId: summonerInfo.profileIconId,
    soloRank: {
      name: 'Unranked',
      tier: '0',
      lp: 0,
      win_rate: 0,
      win: 0,
      losses: 0,
    },
    flexRank: {
      name: 'Unranked',
      tier: '0',
      lp: 0,
      win_rate: 0,
      win: 0,
      losses: 0,
    },
    kda_avg: 0,
    kills_avg: 0,
    deaths_avg: 0,
    assists_avg: 0,
    // prefer_position: prefer_position;
    prefer_position: ['-'],
    position_rate: [0],
    champions: [
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
    ],
  };
  if (!summonerInfo.solo) {
  } else {
    state.soloRank.losses = summonerInfo.solo.losses;
    state.soloRank.lp = summonerInfo.solo.lp;
    state.soloRank.win = summonerInfo.solo.win;
    state.soloRank.win_rate = summonerInfo.solo.win_rate;
    state.soloRank.tier = summonerInfo.solo.tier;
    state.soloRank.name =
      tierFormat(summonerInfo.solo.tier) +
      rankFormat(summonerInfo.solo.rank, summonerInfo.solo.tier);
  }
  if (!summonerInfo.kda_avg) {
  } else {
    state.soloRank.win_rate = summonerInfo.solo.win_rate;
    state.soloRank.win = summonerInfo.solo.win;
    state.soloRank.losses = summonerInfo.solo.losses;
    state.kda_avg = summonerInfo.kda_avg;
    state.kills_avg = summonerInfo.kills_avg;
    state.deaths_avg = summonerInfo.deaths_avg;
    state.assists_avg = summonerInfo.assists_avg;
  }
  if (!summonerInfo.flex) {
  } else {
    state.flexRank.losses = summonerInfo.flex.losses;
    state.flexRank.lp = summonerInfo.flex.lp;
    state.flexRank.win = summonerInfo.flex.win;
    state.flexRank.win_rate = summonerInfo.flex.win_rate;
    state.flexRank.tier = summonerInfo.flex.tier;
    state.flexRank.name =
      tierFormat(summonerInfo.flex.tier) +
      rankFormat(summonerInfo.flex.rank, summonerInfo.flex.tier);
  }
  if (!summonerInfo.prefer_position) {
  } else {
    state.prefer_position = Object.keys(summonerInfo.prefer_position);
    state.position_rate = Object.values(summonerInfo.prefer_position);
  }
  if (!summonerInfo.champions) {
    return state;
  }
  state.champions.map((champion, index: number) => {
    if (!summonerInfo.champions[index]) {
      return state;
    } else {
      state.champions[index].championName =
        process.env.REACT_APP_DDRAGON_API_ROOT +
        `/champion/${summonerInfo.champions[index].championName}.png`;
      state.champions[index].counts = summonerInfo.champions[index].counts;
      state.champions[index].win_rate =
        Math.round(
          (summonerInfo.champions[index].wins /
            summonerInfo.champions[index].counts) *
            100,
        ) + '%';
      state.champions[index].kda =
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
