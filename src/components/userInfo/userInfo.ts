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

export const totalFormat = (data: SummonerInfoType) => {
  let state: SummonerInfoCopy = {
    name: data.name,
    level: data.level,
    profileIconId: data.profileIconId,
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
  if (!data.solo) {
  } else {
    state.soloRank.losses = data.solo.losses;
    state.soloRank.lp = data.solo.lp;
    state.soloRank.win = data.solo.win;
    state.soloRank.win_rate = data.solo.win_rate;
    state.soloRank.tier = data.solo.tier;
    state.soloRank.name =
      tierFormat(data.solo.tier) + rankFormat(data.solo.rank, data.solo.tier);
  }
  if (!data.kda_avg) {
  } else {
    state.soloRank.win_rate = data.solo.win_rate;
    state.soloRank.win = data.solo.win;
    state.soloRank.losses = data.solo.losses;
    state.kda_avg = data.kda_avg;
    state.kills_avg = data.kills_avg;
    state.deaths_avg = data.deaths_avg;
    state.assists_avg = data.assists_avg;
  }
  if (!data.flex) {
  } else {
    state.flexRank.losses = data.flex.losses;
    state.flexRank.lp = data.flex.lp;
    state.flexRank.win = data.flex.win;
    state.flexRank.win_rate = data.flex.win_rate;
    state.flexRank.tier = data.flex.tier;
    state.flexRank.name =
      tierFormat(data.flex.tier) + rankFormat(data.flex.rank, data.flex.tier);
  }
  if (!data.prefer_position) {
  } else {
    state.prefer_position = Object.keys(data.prefer_position);
    state.position_rate = Object.values(data.prefer_position);
  }
  if (!data.champions) {
    return state;
  }
  state.champions.map((champion, index: number) => {
    if (!data.champions[index]) {
      return state;
    } else {
      state.champions[index].championName =
        process.env.REACT_APP_DDRAGON_API_ROOT +
        `/champion/${data.champions[index].championName}.png`;
      state.champions[index].counts = data.champions[index].counts;
      state.champions[index].win_rate =
        Math.round(
          (data.champions[index].wins / data.champions[index].counts) * 100,
        ) + '%';
      state.champions[index].kda =
        Math.round(
          ((data.champions[index].kills + data.champions[index].assists) /
            data.champions[index].deaths) *
            100,
        ) / 100;
    }
  });
  return state;
};
