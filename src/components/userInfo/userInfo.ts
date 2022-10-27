import { SummonerInfo } from '../types/summonerInfo';
import { MatchInfo } from '../types/matchInfo';

export const rankInfo = (summonerInfo: SummonerInfo, ranktype: string) => {
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
    if (!summonerInfo.solo) {
      info.lp = 0;
      info.win_rate = 0;
      info.win = 0;
      info.losses = 0;
      return info;
    }
    info.lp = summonerInfo.solo.lp;
    info.win_rate = summonerInfo.solo.win_rate;
    info.win = summonerInfo.solo.win;
    info.losses = summonerInfo.solo.losses;
    return info;
  } else {
    if (!summonerInfo.flex) {
      info.lp = 0;
      info.win_rate = 0;
      info.win = 0;
      info.losses = 0;
      return info;
    }
    info.lp = summonerInfo.flex.lp;
    info.win_rate = summonerInfo.flex.win_rate;
    info.win = summonerInfo.flex.win;
    info.losses = summonerInfo.flex.losses;
    return info;
  }
};

export const rankName = (summonerInfo: SummonerInfo, ranktype: string) => {
  let tier: string;
  let rank: string;
  if (ranktype === 'solo') {
    if (!summonerInfo.solo) {
      tier = 'Unranked';
      return tier;
    }
    tier =
      summonerInfo.solo.tier.charAt(0) +
      summonerInfo.solo.tier.slice(1).toLowerCase();
    rank = summonerInfo.solo.rank;
  } else {
    if (!summonerInfo.flex) {
      tier = 'Unranked';
      return tier;
    }
    tier =
      summonerInfo.flex.tier.charAt(0) +
      summonerInfo.flex.tier.slice(1).toLowerCase();
    rank = summonerInfo.flex.rank;
  }
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
  let result = '';
  if (tier === 'Master' || tier === 'Grandmaster' || tier === 'Challenger')
    result = tier;
  else result = tier + ' ' + romanToNum(rank);
  console.log(result);
  return result;
};

export const statInfo = (summonerInfo: SummonerInfo) => {
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
  if (!summonerInfo.kda_avg) {
  } else {
    info.win_rate = summonerInfo.solo.win_rate;
    info.win = summonerInfo.solo.win;
    info.losses = summonerInfo.solo.losses;
    info.kda_avg = summonerInfo.kda_avg;
    info.kills_avg = summonerInfo.kills_avg;
    info.deaths_avg = summonerInfo.deaths_avg;
    info.assists_avg = summonerInfo.assists_avg;
  }
  if (!summonerInfo.prefer_position) {
  } else {
    info.prefer_position = Object.keys(summonerInfo.prefer_position);
    info.position_rate = Object.values(summonerInfo.prefer_position);
  }
  return info;
};

export const championsInfo = (summonerInfo: SummonerInfo, index: number) => {
  type result = {
    championName: string;
    counts: number;
    win_rate: string | number;
    kda: string | number;
  };
  let info: result = {
    championName: '0',
    counts: 0,
    win_rate: '결과없음',
    kda: '0.00',
  };
  if (!summonerInfo.champions[index]) return info;
  else {
    info.championName =
      process.env.REACT_APP_DDRAGON_API_ROOT +
      `/champion/${summonerInfo.champions[index].championName}.png`;
    info.counts = summonerInfo.champions[index].counts;
    info.win_rate =
      Math.round(
        (summonerInfo.champions[index].wins /
          summonerInfo.champions[index].counts) *
          100,
      ) + '%';
    info.kda =
      Math.round(
        ((summonerInfo.champions[index].kills +
          summonerInfo.champions[index].assists) /
          summonerInfo.champions[index].deaths) *
          100,
      ) / 100;
  }
  return info;
};
export const gameInfo = (matchInfo: MatchInfo) => {
  let mode = '';
  if (matchInfo.queue_mode === '5v5 Ranked Solo games') {
    mode = '솔로랭크';
  } else if (matchInfo.queue_mode === '5v5 Ranked Flex games') {
    mode = '자유랭크';
  } else if (matchInfo.queue_mode === '5v5 Blind Pick games') {
    mode = '일반게임';
  } else if (matchInfo.queue_mode === '5v5 ARAM games') {
    mode = '칼바람나락';
  } else {
    mode = '사용자설정';
  }
  return mode;
};
// export const itemInfo = (item: string) => {
//   if (!item) return alt2; //이건 우리 색깔 가지고 있는 이미지
//   // if (!item) return alt; 이건 빈 이미지
//   return urlItem(item);
// };
export const analysisStatus = (status: string) => {
  let result = '';
  if (status === 'live') result = '실시간 분석';
  else if (status === 'complete') result = '분석완료';
  else result = '미분석';
  return result;
};
