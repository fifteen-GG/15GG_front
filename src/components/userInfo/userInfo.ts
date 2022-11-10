import { SummonerInitialType, SummonerInfoType } from '../types/summonerInfo';

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

export const totalFormat = (data: SummonerInitialType) => {
  let formattedData: SummonerInfoType = {
    ...data,
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
    prefer_position: {
      '-': 0,
    },
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
  if (data.solo) {
    formattedData.soloRank = {
      ...data.solo,
      name:
        tierFormat(data.solo.tier) + rankFormat(data.solo.rank, data.solo.tier),
    };
  }
  if (data.kda_avg) {
    formattedData.kda_avg = data.kda_avg;
    formattedData.kills_avg = data.kills_avg;
    formattedData.deaths_avg = data.deaths_avg;
    formattedData.assists_avg = data.assists_avg;
  }
  if (data.flex) {
    formattedData.flexRank = {
      ...data.flex,
      name:
        tierFormat(data.flex.tier) + rankFormat(data.flex.rank, data.flex.tier),
    };
  }
  if (data.prefer_position) {
    formattedData.prefer_position = data.prefer_position;
    // formattedData.position_rate = Object.values(data.prefer_position);
  }
  if (data.champions) {
    formattedData.champions.map((champion, index: number) => {
      if (data.champions[index]) {
        formattedData.champions[index].championName =
          process.env.REACT_APP_DDRAGON_API_ROOT +
          `/champion/${data.champions[index].championName}.png`;
        formattedData.champions[index].counts = data.champions[index].counts;
        formattedData.champions[index].win_rate =
          Math.round(
            (data.champions[index].wins / data.champions[index].counts) * 100,
          ) + '%';
        formattedData.champions[index].kda =
          Math.round(
            ((data.champions[index].kills + data.champions[index].assists) /
              data.champions[index].deaths) *
              100,
          ) / 100;
      }
    });
  }
  return formattedData;
};
